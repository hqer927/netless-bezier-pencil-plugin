import { BaseCollector, BaseCollectorReducerAction, Diff, DiffOne } from "../../collector";
import { MainEngine, WorkThreadEngine } from "../base";
import { IOffscreenCanvasOptionType, ICameraOpt, IActiveToolsDataType, IActiveWorkDataType, IWorkerMessage, ILayerOptionType, IworkId, IUpdateNodeOpt } from "../types";
import { ECanvasContextType, EPostMessageType } from "../enum";
import { BezierPencilDisplayer, BezierPencilPluginOptions } from "../../plugin";
import EventEmitter2 from "eventemitter2";
export declare class MainEngineForWorker extends MainEngine {
    protected dpr: number;
    private InternalMsgEmitter?;
    protected threadEngine?: WorkThreadEngine;
    private pluginOptions?;
    static defaultScreenCanvasOpt: {
        autoRender: boolean;
        contextType: ECanvasContextType;
    };
    static defauleLayerOpt: {
        offscreen: boolean;
        handleEvent: boolean;
        depth: boolean;
    };
    static maxLastSyncTime: number;
    protected layerOpt: ILayerOptionType;
    protected msgEmitter: Worker;
    offscreenCanvasOpt: IOffscreenCanvasOptionType;
    originalPoint: [number, number];
    protected cameraOpt: ICameraOpt;
    protected localPointsBatchData: number[];
    taskBatchData: Map<unknown, IWorkerMessage>;
    protected currentToolsData: IActiveToolsDataType;
    protected currentLocalWorkData: IActiveWorkDataType;
    private animationId;
    private workerLockId;
    private subWorker;
    private maxDrawCount;
    private wokerDrawCount;
    private cacheDrawCount;
    private reRenders;
    private bgCanvas;
    private floatCanvas;
    maxLayerIndex: number;
    private methodBuilder?;
    constructor(displayer: BezierPencilDisplayer, collector: BaseCollector, options?: BezierPencilPluginOptions, InternalMsgEmitter?: EventEmitter2);
    private internalMsgEmitterListener;
    private showFloatBar;
    private removeSelectorFromStore;
    private internalMsgEmitterRemoveListener;
    private createSceneLintener;
    private originalEventLintener;
    private createOptimizationWorker;
    private destroySubWorker;
    private createThreadEngine;
    private render;
    runAnimation(): void;
    private setLayerOpt;
    updateCanvas(opt: IOffscreenCanvasOptionType): void;
    private pushPoint;
    transformToScenePoint(p: [number, number]): [number, number];
    initSyncData(callBack?: (key: string, value: BaseCollectorReducerAction | undefined) => void): void;
    getRelevantWork(diff: Diff<any>): string | undefined;
    onServiceDerive(key: string, data: DiffOne<BaseCollectorReducerAction | undefined>, relevantId?: string): void;
    private onLocalEventEnd;
    private onLocalEventDoing;
    private onLocalEventStart;
    consume(): void;
    clearAll(justLocal?: boolean): void;
    unabled(): void;
    abled(): void;
    destroy(): void;
    post(msg: Map<unknown, IWorkerMessage>): void;
    on(): void;
    private collectorSyncData;
    updateNode(workId: IworkId, updateNodeOpt: IUpdateNodeOpt): void;
    setCurrentLocalWorkData(currentLocalWorkData: IActiveWorkDataType, msgType?: EPostMessageType): void;
    setCurrentToolsData(currentToolsData: IActiveToolsDataType): void;
    setCameraOpt(cameraOpt: ICameraOpt): void;
}
