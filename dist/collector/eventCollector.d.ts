import { BaseEventCollectorReducerAction, ISerializableEventData } from "./types";
import { BaseCollector } from "./base";
import { BezierPencilPlugin } from "../plugin";
/**
 * 服务端事件/状态同步收集器
 */
export declare class EventCollector extends BaseCollector<ISerializableEventData> {
    static syncInterval: number;
    static namespace: string;
    serviceStorage: ISerializableEventData;
    storage: ISerializableEventData;
    uid: string;
    plugin?: BezierPencilPlugin;
    private stateDisposer;
    private asyncClockTimer?;
    protected namespace: string;
    constructor(plugin: BezierPencilPlugin, syncInterval?: number);
    addStorageStateListener(callBack: (event: Map<string, Array<BaseEventCollectorReducerAction | undefined>>) => void): void;
    private getDiffMap;
    removeStorageStateListener(): void;
    transformKey(workId: number | string): string;
    isOwn(key: string): boolean;
    dispatch(action: BaseEventCollectorReducerAction): void;
    pushValue(uid: string, value: BaseEventCollectorReducerAction | undefined, options?: {
        isSync?: boolean;
    }): void;
    clearValue(uid: string): void;
    private runSyncService;
    private syncSerivice;
    destroy(): void;
}