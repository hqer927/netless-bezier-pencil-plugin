import { EmitEventType, InternalMsgEmitterType } from "../../plugin/types";
import { MainEngineForWorker } from "../worker/main";
import { BaseCollector } from "../../collector";
import { IWorkerMessage } from "../types";
import { BaseCollectorReducerAction } from "../../collector/types";
export declare abstract class BaseMsgMethod {
    static dispatch(emtType: InternalMsgEmitterType, emitEventType: EmitEventType, value: unknown): void;
    abstract readonly emitEventType: EmitEventType;
    emtType: InternalMsgEmitterType | undefined;
    mainEngine: MainEngineForWorker | undefined;
    serviceColloctor: BaseCollector | undefined;
    registerForMainEngine(emtType: InternalMsgEmitterType, main: MainEngineForWorker, serviceColloctor: BaseCollector): this;
    destroy(): void;
    collectForLocalWorker(data: IWorkerMessage[]): void;
    collectForServiceWorker(actions: BaseCollectorReducerAction[]): void;
    abstract collect(data: unknown): void;
}
