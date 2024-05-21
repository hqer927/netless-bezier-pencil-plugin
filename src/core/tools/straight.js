/* eslint-disable @typescript-eslint/no-explicit-any */
import { Path } from "spritejs";
import { EDataType, EPostMessageType, EScaleType, EToolsKey, EvevtWorkState } from "../enum";
import { Point2d } from "../utils/primitives/Point2d";
import { BaseShapeTool } from "./base";
import { computRect, getRectFromPoints } from "../utils";
import { Vec2d } from "../utils/primitives/Vec2d";
import { transformToSerializableData } from "../../collector/utils";
import { getSvgPathFromPoints } from "../utils/getSvgPathFromPoints";
export class StraightShape extends BaseShapeTool {
    constructor(props) {
        super(props);
        Object.defineProperty(this, "canRotate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "scaleType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: EScaleType.both
        });
        Object.defineProperty(this, "toolsType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: EToolsKey.Straight
        });
        Object.defineProperty(this, "tmpPoints", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "workOptions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "oldRect", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "straightTipWidth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "syncTimestamp", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.workOptions = props.toolsOpt;
        this.straightTipWidth = this.workOptions.thickness / 2;
        this.syncTimestamp = 0;
        this.syncUnitTime = 50;
    }
    consume(props) {
        const { data, isFullWork, isSubWorker } = props;
        const workId = data?.workId?.toString();
        if (!workId) {
            return { type: EPostMessageType.None };
        }
        const { op, workState } = data;
        const opl = op?.length;
        if (!opl || opl < 2) {
            return { type: EPostMessageType.None };
        }
        let bol;
        if (workState === EvevtWorkState.Start) {
            this.tmpPoints = [new Point2d(op[0], op[1])];
            bol = false;
        }
        else {
            bol = this.updateTempPoints(op);
        }
        if (!bol) {
            return { type: EPostMessageType.None };
        }
        if (!isSubWorker) {
            const now = Date.now();
            if (now - this.syncTimestamp > this.syncUnitTime) {
                this.syncTimestamp = now;
                return {
                    type: EPostMessageType.DrawWork,
                    dataType: EDataType.Local,
                    workId,
                    op: this.tmpPoints.map(c => ([...c.XY, 0])).flat(1),
                    isSync: true,
                    index: 0
                };
            }
            return { type: EPostMessageType.None };
        }
        const layer = isFullWork ? this.fullLayer : (this.drawLayer || this.fullLayer);
        const r = this.draw({ workId, layer });
        const rect = computRect(r, this.oldRect);
        this.oldRect = r;
        return {
            rect,
            type: EPostMessageType.DrawWork,
            dataType: EDataType.Local,
            workId,
            // op: this.tmpPoints.map(c=>[...c.XY,0]).flat(1)
        };
    }
    consumeAll(props) {
        const { data } = props;
        const workId = data?.workId?.toString();
        if (!workId) {
            return { type: EPostMessageType.None };
        }
        if (this.tmpPoints.length < 2) {
            return {
                type: EPostMessageType.RemoveNode,
                removeIds: [workId]
            };
        }
        const layer = this.fullLayer;
        const rect = this.draw({ workId, layer });
        this.oldRect = rect;
        const op = this.tmpPoints.map(c => [...c.XY, 0]).flat(1);
        const ops = transformToSerializableData(op);
        this.vNodes.setInfo(workId, {
            rect,
            op,
            opt: this.workOptions,
            toolsType: this.toolsType,
            scaleType: this.scaleType,
            canRotate: this.canRotate,
            centerPos: rect && BaseShapeTool.getCenterPos(rect, layer)
        });
        return {
            rect,
            type: EPostMessageType.FullWork,
            dataType: EDataType.Local,
            workId,
            ops,
            isSync: true,
            opt: this.workOptions
        };
    }
    draw(props) {
        const { workId, layer } = props;
        this.fullLayer.getElementsByName(workId).map(o => o.remove());
        this.drawLayer?.getElementsByName(workId).map(o => o.remove());
        const { strokeColor, thickness, zIndex, scale, rotate, translate } = this.workOptions;
        const worldPosition = layer.worldPosition;
        const worldScaling = layer.worldScaling;
        const { d, rect } = this.computDrawPoints(thickness);
        const centerPos = [
            rect.x + rect.w / 2,
            rect.y + rect.h / 2
        ];
        const attr = {
            pos: centerPos,
            name: workId,
            id: workId,
            d,
            fillColor: strokeColor,
            strokeColor: strokeColor,
            lineWidth: 0,
            className: `${centerPos[0]},${centerPos[1]}`,
            normalize: true,
            zIndex
        };
        if (scale) {
            attr.scale = scale;
        }
        if (rotate) {
            attr.rotate = rotate;
        }
        if (translate) {
            attr.translate = translate;
        }
        const node = new Path(attr);
        layer.append(node);
        if (rotate || scale || translate) {
            const r = node.getBoundingClientRect();
            return {
                x: Math.floor(r.x - BaseShapeTool.SafeBorderPadding),
                y: Math.floor(r.y - BaseShapeTool.SafeBorderPadding),
                w: Math.floor(r.width + BaseShapeTool.SafeBorderPadding * 2),
                h: Math.floor(r.height + BaseShapeTool.SafeBorderPadding * 2)
            };
        }
        const r = {
            x: Math.floor(rect.x * worldScaling[0] + worldPosition[0] - BaseShapeTool.SafeBorderPadding),
            y: Math.floor(rect.y * worldScaling[1] + worldPosition[1] - BaseShapeTool.SafeBorderPadding),
            w: Math.floor(rect.w * worldScaling[0] + 2 * BaseShapeTool.SafeBorderPadding),
            h: Math.floor(rect.h * worldScaling[1] + 2 * BaseShapeTool.SafeBorderPadding)
        };
        return r;
    }
    computDrawPoints(thickness) {
        const distance = this.tmpPoints[1].distance(this.tmpPoints[0]);
        if (distance > this.straightTipWidth) {
            return this.computFullPoints(thickness);
        }
        else {
            return this.computDotPoints(thickness);
        }
    }
    computFullPoints(thickness) {
        const vector = Vec2d.Sub(this.tmpPoints[1], this.tmpPoints[0]).uni();
        const lineSegmentOffset = Vec2d.Per(vector).mul(thickness / 2);
        const lineSegmentStartLeft = Point2d.Sub(this.tmpPoints[0], lineSegmentOffset);
        const lineSegmentStartRight = Point2d.Add(this.tmpPoints[0], lineSegmentOffset);
        const lineSegmentEndLeft = Point2d.Sub(this.tmpPoints[1], lineSegmentOffset);
        const lineSegmentEndRight = Point2d.Add(this.tmpPoints[1], lineSegmentOffset);
        const endCap = Point2d.GetSemicircleStroke(this.tmpPoints[1], lineSegmentEndLeft, -1, 8);
        const startCap = Point2d.GetSemicircleStroke(this.tmpPoints[0], lineSegmentStartRight, -1, 8);
        const ps = [lineSegmentStartLeft, lineSegmentEndLeft, ...endCap, lineSegmentEndRight, lineSegmentStartRight, ...startCap];
        const d = getSvgPathFromPoints(ps, true);
        return {
            d,
            rect: getRectFromPoints(ps),
            isDot: false,
            pos: this.tmpPoints[0].XY
        };
    }
    computDotPoints(thickness) {
        const ps = Point2d.GetDotStroke(this.tmpPoints[0], thickness / 2, 8);
        const d = getSvgPathFromPoints(ps, true);
        return {
            d,
            rect: getRectFromPoints(ps),
            isDot: true,
            pos: this.tmpPoints[0].XY
        };
    }
    updateTempPoints(op) {
        const lPoint = op.slice(-2);
        const lastPoint = new Point2d(lPoint[0], lPoint[1]);
        const firstPoint = this.tmpPoints[0];
        const { thickness } = this.workOptions;
        if (firstPoint.isNear(lastPoint, thickness)) {
            return false;
        }
        if (this.tmpPoints.length === 2) {
            if (lastPoint.isNear(this.tmpPoints[1], 1)) {
                return false;
            }
            this.tmpPoints[1] = lastPoint;
        }
        else {
            this.tmpPoints.push(lastPoint);
        }
        return true;
    }
    consumeService(props) {
        const { op, isFullWork } = props;
        const workId = this.workId?.toString();
        if (!workId) {
            return;
        }
        this.tmpPoints.length = 0;
        for (let i = 0; i < op.length; i += 3) {
            this.tmpPoints.push(new Point2d(op[i], op[i + 1], op[i + 2]));
        }
        const layer = isFullWork ? this.fullLayer : (this.drawLayer || this.fullLayer);
        const rect = this.draw({ workId, layer });
        this.oldRect = rect;
        this.vNodes.setInfo(workId, {
            rect,
            op,
            opt: this.workOptions,
            toolsType: this.toolsType,
            scaleType: this.scaleType,
            canRotate: this.canRotate,
            centerPos: rect && BaseShapeTool.getCenterPos(rect, layer)
        });
        return rect;
    }
    clearTmpPoints() {
        this.tmpPoints.length = 0;
    }
    static updateNodeOpt(param) {
        const { node, opt, vNodes } = param;
        const { strokeColor } = opt;
        const nodeOpt = vNodes.get(node.name);
        if (strokeColor) {
            node.setAttribute('strokeColor', strokeColor);
            node.setAttribute('fillColor', strokeColor);
            if (nodeOpt?.opt?.strokeColor) {
                nodeOpt.opt.strokeColor = strokeColor;
            }
        }
        nodeOpt && vNodes.setInfo(node.name, nodeOpt);
        return BaseShapeTool.updateNodeOpt(param);
    }
}
