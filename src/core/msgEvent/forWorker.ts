
import { EmitEventType } from '../../plugin/types';
import { ZIndexActiveMethodForWorker } from './activeZIndex/forWorker';
import { BaseMsgMethodForWorker } from './baseForWorker';
import { CopyNodeMethodForWorker } from './copyNode/forWorker';
import { SetColorNodeMethodForWorker } from './setColor/forWorker';
import { ZIndexNodeMethodForWorker } from './setZIndex/forWorker';
import { TranslateNodeMethodForWorker } from './translateNode/forWorker';
import { SubLocalWorkForWorker } from '../worker/local';
import { SubServiceWorkForWorker } from '../worker/service';
import { DeleteNodeMethodForWorker } from './deleteNode/forWorker';
import { IWorkerMessage } from '../types';
import { ScaleNodeMethodForWorker } from './scaleNode/forWorker';
import { RotateNodeMethodForWorker } from './rotateNode/forWorker';

export type MsgMethodForWorker<T extends BaseMsgMethodForWorker> = T;
export class MethodBuilderWorker {
    builders: Map<EmitEventType,MsgMethodForWorker<BaseMsgMethodForWorker> | undefined> = new Map();
    constructor(emitTypes: EmitEventType[]) {
        this.builders = new Map(emitTypes.map(type => [type, this.build(type)]));
    }
    build(type: EmitEventType): MsgMethodForWorker<BaseMsgMethodForWorker> | undefined {
        switch (type) {
            case EmitEventType.TranslateNode:
                return new TranslateNodeMethodForWorker();
            case EmitEventType.ZIndexNode:
                return new ZIndexNodeMethodForWorker();
            case EmitEventType.ZIndexActive:
                return new ZIndexActiveMethodForWorker();
            case EmitEventType.CopyNode:
                return new CopyNodeMethodForWorker();
            case EmitEventType.SetColorNode:
                return new SetColorNodeMethodForWorker();
            case EmitEventType.DeleteNode:
                return new DeleteNodeMethodForWorker();
            case EmitEventType.ScaleNode:
                return new ScaleNodeMethodForWorker();
            case EmitEventType.RotateNode:
                return new RotateNodeMethodForWorker();        
       }
       return undefined
    }
    registerForWorker(localWork: SubLocalWorkForWorker, serviceWork?: SubServiceWorkForWorker) {
        this.builders.forEach(builder=>{
            if (builder) {
                builder.registerForWorker(localWork, serviceWork)
            }
        })
        return this;
    }
    consumeForWorker(data: IWorkerMessage): boolean {
        for (const value of this.builders.values()) {
            if (value?.consume(data)) {
                return true;
            }
        }
        return false
    }
}