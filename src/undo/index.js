/* eslint-disable @typescript-eslint/no-explicit-any */
import EventEmitter2 from "eventemitter2";
import { cloneDeep, debounce, isEqual } from "lodash";
export var EUndoType;
(function (EUndoType) {
    EUndoType[EUndoType["sdk"] = 1] = "sdk";
    EUndoType[EUndoType["plugin"] = 2] = "plugin";
    EUndoType[EUndoType["both"] = 3] = "both";
})(EUndoType || (EUndoType = {}));
export var EUndoDataType;
(function (EUndoDataType) {
    EUndoDataType[EUndoDataType["Draw"] = 1] = "Draw";
    EUndoDataType[EUndoDataType["Delete"] = 2] = "Delete";
    EUndoDataType[EUndoDataType["Update"] = 3] = "Update";
})(EUndoDataType || (EUndoDataType = {}));
export class UndoRedoMethod {
    constructor(room, worker, colloctor) {
        Object.defineProperty(this, "undoStack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "redoStack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "worker", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "colloctor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "room", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isTicking", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "undoTickerId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tickStartStorerCache", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "excludeIds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set()
        });
        Object.defineProperty(this, "undoTickerEnd", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: debounce((id) => {
                if (id === this.undoTickerId && this.tickStartStorerCache) {
                    this.isTicking = false;
                    const diff = this.diffFun(this.tickStartStorerCache, new Map(Object.entries(this.colloctor.storage)));
                    // console.log('undoTickerEnd', id, diff)
                    const f = this.undoStack.find(f => f.id === this.undoTickerId);
                    // 针对的是EUndoType.all这种场景,如果addSdkUndoData先执行,则f能find
                    if (f) {
                        f.data = diff;
                        // console.log('undoTickerEnd1', f)
                    }
                    else if (diff.size) {
                        this.undoStack.push({
                            id,
                            type: EUndoType.plugin,
                            data: diff
                        });
                        if (this.undoStack.length > UndoRedoMethod.MaxStackLength) {
                            this.undoStack.shift();
                        }
                        UndoRedoMethod.emitter.emit("onCanUndoStepsUpdate", this.undoStack.length);
                    }
                    if (this.redoStack.length) {
                        this.redoStack.length = 0;
                        UndoRedoMethod.emitter.emit("onCanRedoStepsUpdate", this.redoStack.length);
                    }
                    this.tickStartStorerCache = undefined;
                    this.undoTickerId = undefined;
                    this.excludeIds.clear();
                }
            }, UndoRedoMethod.waitTime)
        });
        this.undoStack = [];
        this.redoStack = [];
        this.room = room;
        this.worker = worker;
        this.colloctor = colloctor;
        this.isTicking = false;
        UndoRedoMethod.emitter.on('undoTickerStart', this.undoTickerStart.bind(this));
        UndoRedoMethod.emitter.on('undoTickerEnd', this.undoTickerEnd.bind(this));
        UndoRedoMethod.emitter.on('excludeIds', this.addExcludeIds.bind(this));
    }
    addExcludeIds(ids) {
        if (this.isTicking) {
            for (const id of ids) {
                this.excludeIds.add(id);
            }
        }
    }
    addSdkUndoData(step) {
        const i = this.undoStack.findIndex(s => s?.sdkStep && s.sdkStep > step);
        // console.log('addSdkUndoData', step, i)
        if (i > -1) {
            this.undoStack.splice(i);
        }
        else if (step > 0) {
            const i = this.undoStack.findIndex(s => s?.sdkStep && s.sdkStep === step);
            // const j = this.redoStack.findIndex(s=> s?.sdkStep && s.sdkStep === step);
            // console.log('addSdkUndoData1', step, i, j)
            if (i === -1) {
                if (this.isTicking && this.undoTickerId) {
                    const f = this.undoStack.find(f => f.id === this.undoTickerId);
                    // 如果undoTickerEnd先执行,则f能find
                    if (f) {
                        f.type = EUndoType.both;
                        f.sdkStep = step;
                    }
                    else {
                        this.undoStack.push({
                            id: this.undoTickerId,
                            type: EUndoType.both,
                            sdkStep: step,
                        });
                        if (this.undoStack.length > UndoRedoMethod.MaxStackLength) {
                            this.undoStack.shift();
                        }
                        UndoRedoMethod.emitter.emit("onCanUndoStepsUpdate", this.undoStack.length);
                    }
                }
                else {
                    this.undoStack.push({
                        type: EUndoType.sdk,
                        sdkStep: step
                    });
                    if (this.undoStack.length > UndoRedoMethod.MaxStackLength) {
                        this.undoStack.shift();
                    }
                    UndoRedoMethod.emitter.emit("onCanUndoStepsUpdate", this.undoStack.length);
                }
            }
        }
    }
    diffFun(_old, _new) {
        const diff = new Set();
        const oldKeys = _old.keys();
        const newKeys = _new.keys();
        for (const key of oldKeys) {
            if (this.excludeIds.has(key)) {
                continue;
            }
            const _oldV = _old.get(key);
            const _newV = _new.get(key);
            if (_oldV && _newV) {
                if (isEqual(_newV, _oldV)) {
                    continue;
                }
                diff.add({
                    dataType: EUndoDataType.Update,
                    key,
                    data: [_oldV, _newV],
                });
                continue;
            }
            _oldV && diff.add({
                dataType: EUndoDataType.Delete,
                key,
                data: _oldV
            });
        }
        for (const key of newKeys) {
            const _newV = _new.get(key);
            if (_newV && !_old.has(key)) {
                diff.add({
                    dataType: EUndoDataType.Draw,
                    key,
                    data: _newV
                });
            }
        }
        return diff;
    }
    undoTickerStart(id) {
        this.excludeIds.clear();
        this.isTicking = true;
        this.undoTickerId = id;
        this.tickStartStorerCache = new Map(Object.entries(cloneDeep(this.colloctor.storage)));
    }
    isDrawEffectiveScene(value, keys) {
        const { key } = value;
        if (keys.includes(key)) {
            return false;
        }
        return true;
    }
    isDeleteEffectiveScene(value, keys) {
        const { key } = value;
        if (!keys.includes(key)) {
            return false;
        }
        const otherSelectorData = keys.filter(k => this.colloctor.getLocalId(k) === 'selector' && !this.colloctor.isOwn(k)).map(key => this.colloctor.storage[key]);
        for (const data of otherSelectorData) {
            if (data?.selectIds?.includes(key)) {
                return false;
            }
        }
        return true;
    }
    isOldEffectiveScene(value, keys) {
        const { key } = value;
        if (!keys.includes(key)) {
            return false;
        }
        const otherSelectorData = keys.filter(k => this.colloctor.getLocalId(k) === 'selector' && !this.colloctor.isOwn(k)).map(key => this.colloctor.storage[key]);
        for (const data of otherSelectorData) {
            if (data?.selectIds?.includes(key)) {
                return false;
            }
        }
        return true;
    }
    isNewEffectiveScene(value, keys) {
        const { key } = value;
        if (!keys.includes(key)) {
            return false;
        }
        return true;
    }
    refreshPlugin(targetData, isRedo = false) {
        let isOk;
        const keys = Object.keys(this.colloctor.storage);
        for (const value of targetData.values()) {
            switch (value.dataType) {
                case EUndoDataType.Draw:
                    isOk = isRedo ? this.isDrawEffectiveScene(value, keys) : this.isDeleteEffectiveScene(value, keys);
                    if (isOk) {
                        if (isRedo && !Array.isArray(value.data)) {
                            if (value.data.updateNodeOpt?.useAnimation) {
                                value.data.updateNodeOpt.useAnimation = false;
                            }
                            if (this.colloctor.getLocalId(value.key) === 'selector' && this.colloctor.isOwn(value.key)) {
                                const selectIds = value.data.selectIds;
                                if (selectIds) {
                                    const otherSelectorData = keys.filter(k => this.colloctor.getLocalId(k) === 'selector' && !this.colloctor.isOwn(k)).map(key => this.colloctor.storage[key]);
                                    let isfalt = false;
                                    for (const data of otherSelectorData) {
                                        for (let i = 0; i < selectIds.length; i++) {
                                            if (data?.selectIds?.includes(selectIds[i])) {
                                                delete selectIds[i];
                                                isfalt = true;
                                            }
                                        }
                                    }
                                    if (isfalt) {
                                        value.data.selectIds = selectIds.filter(id => !!id);
                                    }
                                }
                            }
                            this.colloctor.updateValue(value.key, value.data, { isAfterUpdate: true });
                        }
                        else if (!isRedo && !Array.isArray(value.data)) {
                            this.colloctor.updateValue(value.key, undefined, { isAfterUpdate: true });
                        }
                    }
                    break;
                case EUndoDataType.Delete:
                    isOk = isRedo ? this.isDeleteEffectiveScene(value, keys) : this.isDrawEffectiveScene(value, keys);
                    if (isOk) {
                        if (isRedo && !Array.isArray(value.data)) {
                            this.colloctor.updateValue(value.key, undefined, { isAfterUpdate: true });
                        }
                        else if (!isRedo && !Array.isArray(value.data)) {
                            if (value.data.updateNodeOpt?.useAnimation) {
                                value.data.updateNodeOpt.useAnimation = false;
                            }
                            if (this.colloctor.getLocalId(value.key) === 'selector' && this.colloctor.isOwn(value.key)) {
                                const selectIds = value.data.selectIds;
                                if (selectIds) {
                                    const otherSelectorData = keys.filter(k => this.colloctor.getLocalId(k) === 'selector' && !this.colloctor.isOwn(k)).map(key => this.colloctor.storage[key]);
                                    let isfalt = false;
                                    for (const data of otherSelectorData) {
                                        for (let i = 0; i < selectIds.length; i++) {
                                            if (data?.selectIds?.includes(selectIds[i])) {
                                                delete selectIds[i];
                                                isfalt = true;
                                            }
                                        }
                                    }
                                    if (isfalt) {
                                        value.data.selectIds = selectIds.filter(id => !!id);
                                    }
                                }
                            }
                            this.colloctor.updateValue(value.key, value.data, { isAfterUpdate: true });
                        }
                    }
                    break;
                case EUndoDataType.Update:
                    isOk = isRedo ? this.isNewEffectiveScene(value, keys) : this.isOldEffectiveScene(value, keys);
                    if (isOk) {
                        if (isRedo && Array.isArray(value.data) && value.data.length === 2) {
                            const newData = value.data[1];
                            if (newData.updateNodeOpt?.useAnimation) {
                                newData.updateNodeOpt.useAnimation = false;
                            }
                            if (this.colloctor.getLocalId(value.key) === 'selector' && this.colloctor.isOwn(value.key)) {
                                const selectIds = newData.selectIds;
                                if (selectIds) {
                                    const otherSelectorData = keys.filter(k => this.colloctor.getLocalId(k) === 'selector' && !this.colloctor.isOwn(k)).map(key => this.colloctor.storage[key]);
                                    let isfalt = false;
                                    for (const data of otherSelectorData) {
                                        for (let i = 0; i < selectIds.length; i++) {
                                            if (data?.selectIds?.includes(selectIds[i])) {
                                                delete selectIds[i];
                                                isfalt = true;
                                            }
                                        }
                                    }
                                    if (isfalt) {
                                        newData.selectIds = selectIds.filter(id => !!id);
                                    }
                                }
                            }
                            this.colloctor.updateValue(value.key, newData, { isAfterUpdate: true });
                        }
                        else if (!isRedo && Array.isArray(value.data) && value.data.length === 2) {
                            const oldData = value.data[0];
                            if (oldData.updateNodeOpt?.useAnimation) {
                                oldData.updateNodeOpt.useAnimation = false;
                            }
                            if (this.colloctor.getLocalId(value.key) === 'selector' && this.colloctor.isOwn(value.key)) {
                                const selectIds = oldData.selectIds;
                                if (selectIds) {
                                    const otherSelectorData = keys.filter(k => this.colloctor.getLocalId(k) === 'selector' && !this.colloctor.isOwn(k)).map(key => this.colloctor.storage[key]);
                                    let isfalt = false;
                                    for (const data of otherSelectorData) {
                                        for (let i = 0; i < selectIds.length; i++) {
                                            if (data?.selectIds?.includes(selectIds[i])) {
                                                delete selectIds[i];
                                                isfalt = true;
                                            }
                                        }
                                    }
                                    if (isfalt) {
                                        oldData.selectIds = selectIds.filter(id => !!id);
                                    }
                                }
                            }
                            this.colloctor.updateValue(value.key, oldData, { isAfterUpdate: true });
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    }
    undo(_undo) {
        const data = this.undoStack.pop();
        if (data) {
            this.redoStack.push(data);
            if ((data.type === EUndoType.sdk || data.type === EUndoType.both) && data.sdkStep) {
                _undo.call(this.room);
            }
            if ((data.type === EUndoType.plugin || data.type === EUndoType.both) && data.data) {
                this.refreshPlugin(data.data);
            }
        }
        UndoRedoMethod.emitter.emit("onCanUndoStepsUpdate", this.undoStack.length);
        UndoRedoMethod.emitter.emit("onCanRedoStepsUpdate", this.redoStack.length);
        return this.undoStack.length;
    }
    redo(_redo) {
        const data = this.redoStack.pop();
        if (data) {
            this.undoStack.push(data);
            if ((data.type === EUndoType.plugin || data.type === EUndoType.both) && data.data) {
                this.refreshPlugin(data.data, true);
            }
            if ((data.type === EUndoType.sdk || data.type === EUndoType.both) && data.sdkStep) {
                _redo.call(this.room);
            }
        }
        UndoRedoMethod.emitter.emit("onCanUndoStepsUpdate", this.undoStack.length);
        UndoRedoMethod.emitter.emit("onCanRedoStepsUpdate", this.redoStack.length);
        return this.redoStack.length;
    }
    clear() {
        this.clearUndo();
        this.clearRedo();
    }
    clearUndo() {
        this.undoStack.length = 0;
        UndoRedoMethod.emitter.emit("onCanUndoStepsUpdate", this.undoStack.length);
    }
    clearRedo() {
        this.redoStack.length = 0;
        UndoRedoMethod.emitter.emit("onCanRedoStepsUpdate", this.redoStack.length);
    }
    canUndo() {
        if (this.undoStack.length) {
            return true;
        }
        return false;
    }
    canRedo() {
        if (this.redoStack.length) {
            return true;
        }
        return false;
    }
    destroy() {
        UndoRedoMethod.emitter.removeAllListeners();
    }
}
Object.defineProperty(UndoRedoMethod, "MaxStackLength", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 20
});
Object.defineProperty(UndoRedoMethod, "emitter", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: new EventEmitter2()
});
Object.defineProperty(UndoRedoMethod, "waitTime", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 100
});
