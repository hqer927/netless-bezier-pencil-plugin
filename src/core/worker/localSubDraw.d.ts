import { Group } from "spritejs";
import { SubLocalWork } from "../base";
import { BaseShapeTool } from "../tools";
import { IWorkerMessage, IMainMessage, IworkId, IBatchMainMessage } from "../types";
export declare class SubLocalDrawWorkForWorker extends SubLocalWork {
    _post: (msg: IBatchMainMessage) => void;
    protected workShapes: Map<IworkId, BaseShapeTool>;
    protected combineDrawTimer?: number;
    private drawCount;
    private animationWorkRects?;
    private animationId?;
    private closeAnimationTime;
    constructor(layer: Group, postFun: (msg: IBatchMainMessage) => void);
    blurSelector(): void;
    private runLaserPenAnimation;
    private drawPencil;
    consumeDraw(data: IWorkerMessage): IMainMessage | undefined;
    consumeDrawAll(data: IWorkerMessage): undefined;
}
