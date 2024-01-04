
import { WorkThreadEngine } from "../base";
import { IActiveToolsDataType, IActiveWorkDataType, IBatchMainMessage, ICameraOpt, ILayerOptionType, IOffscreenCanvasOptionType, IRectType, IWorkerMessage } from "../types";
import { EDataType, EPostMessageType, EvevtWorkState } from "../enum";
import { Scene, Group, Layer } from "spritejs";
import { SubLocalDrawWorkForWorker } from "./localSubDraw";


export class SubWorkThreadEngineByWorker extends WorkThreadEngine {
    protected cameraOpt?: Pick<ICameraOpt, "scale" | "centerX" | "centerY"> | undefined;
    static _self: Worker = self as unknown as Worker;
    private lockId?: number;
    protected dpr!: number;
    protected scene!: Scene;
    protected drawLayer!: Group;
    protected fullLayer!: Group;
    protected localWork!: SubLocalDrawWorkForWorker;
    constructor() {
        super();
        this.register();
    }
    private init(dpr: number,offscreenCanvasOpt: IOffscreenCanvasOptionType,layerOpt: ILayerOptionType) {
        this.dpr = dpr;
        this.scene = this.createScene(offscreenCanvasOpt);
        this.scene = this.createScene(offscreenCanvasOpt);
        this.drawLayer = this.createLayer({...layerOpt, width:offscreenCanvasOpt.width, height:offscreenCanvasOpt.height})
        this.localWork = new SubLocalDrawWorkForWorker(this.curNodeMap, this.drawLayer, this.post.bind(this));
    }
    getOffscreen(): OffscreenCanvas {
        return (this.drawLayer.parent as Layer)?.canvas as OffscreenCanvas;
    }
    private register(){
        this.on((msg:IterableIterator<IWorkerMessage>) => {
            for (const data of msg) {
                const { workState, dataType, msgType, workId, toolsType, opt } = data;
                switch (msgType) {
                    case EPostMessageType.UpdateTools:
                        if (toolsType && opt) {
                            this.setToolsOpt({
                                toolsType,
                                toolsOpt: opt
                            })
                        }
                        break;
                    case EPostMessageType.CreateWork:
                        if (workId && opt) {
                            if (!this.localWork.getTmpWorkShapeNode() && toolsType) {
                                this.setToolsOpt({
                                    toolsType,
                                    toolsOpt: opt,
                                })
                            }
                            this.setWorkOpt({
                                workId,
                                toolsOpt: opt
                            })
                        }
                        break;
                    case EPostMessageType.DrawWork:
                        if(workState === EvevtWorkState.Done && dataType === EDataType.Local) {
                            this.consumeDrawAll(dataType, data);
                        } else {
                            this.consumeDraw(dataType, data);
                        }
                        break;
                }
            }
        });
    }
    // protected updateScene(offscreenCanvasOpt:IOffscreenCanvasOptionType) {
    //     super.updateScene(offscreenCanvasOpt);
    // }
    setToolsOpt(opt: IActiveToolsDataType) {
        this.localWork.setToolsOpt(opt);
    }
    setWorkOpt(opt:Partial<IActiveWorkDataType>): void {
        const { workId, toolsOpt } = opt;
        if (workId && toolsOpt) {
            this.localWork.setWorkOptions(workId,toolsOpt);
        }
    }
    private clearAll() {
        this.drawLayer.removeAllChildren();
        this.localWork.clearAllWorkShapesCache();
    }
    private setCameraOpt(cameraOpt:ICameraOpt) {
        this.cameraOpt = cameraOpt;
        const {scale,centerX,centerY, width, height} = cameraOpt;
        if (width !== this.scene.width || height!== this.scene.height) {
            this.updateScene({width, height});
        }
        this.drawLayer.setAttribute('scale', [scale, scale]);
        this.drawLayer.setAttribute('translate', [-centerX,-centerY]);
    }
    private getRectImageBitmap(rect:IRectType): Promise<ImageBitmap>{
        const x = rect.x * this.dpr;
        const y = rect.y * this.dpr;
        const w = rect.w * this.dpr;
        const h = rect.h * this.dpr;
        return createImageBitmap(this.getOffscreen(), x, y, w,  h, {
            resizeQuality: 'low'
        })
    }
    post(msg: IBatchMainMessage): void {
        if (this.lockId) {
            msg.lockId = this.lockId;
            this.lockId = undefined;
        }
        const renderData = msg.render;
        if (renderData) {
            // console.log('post2', renderData.rect);
            (this.drawLayer.parent as Layer).render();
            if (renderData.rect) {
                this.getRectImageBitmap(renderData.rect).then(imageBitmap=>{
                    renderData.imageBitmap = imageBitmap;
                    msg.render = renderData;
                    SubWorkThreadEngineByWorker._self.postMessage(msg,[imageBitmap]);
                    imageBitmap.close();
                })
                return ;
            }
        }
        SubWorkThreadEngineByWorker._self.postMessage(msg);
    }
    on(callBack: (msg: IterableIterator<IWorkerMessage>) => void): void {
        onmessage = (e: MessageEvent<Map<unknown,IWorkerMessage>>)=>{
            if (e.data) {
                // 优先级 init=》draw=》fullWork=》serviceWork=》updateScene=》updateCamera=》clearAll
                const initJob = e.data.get('Init');
                if (initJob) {
                    const {dpr, offscreenCanvasOpt, layerOpt} = initJob;
                    if (offscreenCanvasOpt && layerOpt && dpr) {
                        this.init(dpr, offscreenCanvasOpt, layerOpt);
                    }
                }
                callBack(e.data.values());
                const hasClearAll = e.data.has('ClearAll');
                // const updateSceneJob = e.data.get('UpdateScene');
                const updateCameraJob  = e.data.get('UpdateCamera');
                // if (updateSceneJob) {
                //     const {offscreenCanvasOpt} = updateSceneJob;
                //     offscreenCanvasOpt && this.updateScene(offscreenCanvasOpt);
                // }
                if (updateCameraJob) {
                    const {cameraOpt} = updateCameraJob;
                    cameraOpt && this.setCameraOpt(cameraOpt);
                }
                if (hasClearAll) {
                    this.clearAll();
                }
            }
        }
    }
    consumeDraw(type: EDataType, data: IWorkerMessage): undefined {
        if (type === EDataType.Local) {
            this.localWork.consumeDraw(data);
        }
    }
    consumeDrawAll(_type: EDataType, data:IWorkerMessage): undefined {
        this.localWork.consumeDrawAll(data);
        return;
    }
    consumeFull() {
        return;
    }
}
export const worker = new SubWorkThreadEngineByWorker();