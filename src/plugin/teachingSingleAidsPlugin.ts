/* eslint-disable @typescript-eslint/no-explicit-any */
import { InvisiblePlugin, isRoom, isPlayer, ApplianceNames } from "./external";
import type { Camera, Cursor, CursorAdapter, ImageInformation, RenderEngine, Room, RoomState, 
    TeachingAidsPluginAttributes, TeachingAidsPluginOptions, DisplayerForPlugin, Logger, MemberState, 
    TeachingAidsAdaptor, canBindMethodType, Displayer } from "./types";
import { computRectangle } from "../core/utils";
import { ECanvasContextType } from "../core/enum";
import { TeachingAidsSingleManager } from "./single/teachingAidsSingleManager";

export class TeachingSingleAidsPlugin extends InvisiblePlugin<TeachingAidsPluginAttributes, any> {
    // 组件类型，该组件的唯一识别符。应该取一个独特的名字，以和其他组件区分。
    static readonly kind: string = "teaching-single-aids-plugin";
    static cursorAdapter?: CursorAdapter;
    static currentManager?: TeachingAidsSingleManager;
    public static logger: Logger = {
        info: console.log,
        warn: console.warn,
        error: console.error,
    };
    public static options: TeachingAidsPluginOptions = {
        syncOpt: {
            interval: 300,
        },
        canvasOpt: {
            contextType: ECanvasContextType.Canvas2d
        }
    }
    public static async getInstance(remake: Displayer, adaptor?: TeachingAidsAdaptor): Promise<DisplayerForPlugin> {
        if (adaptor?.logger) {
            TeachingSingleAidsPlugin.logger = adaptor.logger;
        }
        if (adaptor?.options) {
            TeachingSingleAidsPlugin.options = adaptor.options;
        }
        if (adaptor?.cursorAdapter) {
            TeachingSingleAidsPlugin.cursorAdapter = adaptor.cursorAdapter;
            TeachingSingleAidsPlugin.effectInstance();
        }
        let teachingAidsPlugin = remake.getInvisiblePlugin(TeachingSingleAidsPlugin.kind) as TeachingSingleAidsPlugin | undefined;
        // console.log('teachingAidsPlugin', teachingAidsPlugin, _d, TeachingAidsPlugin.windowManager)
        if (remake && teachingAidsPlugin) {
            TeachingSingleAidsPlugin.createCurrentManager(remake, TeachingSingleAidsPlugin.options, 
                teachingAidsPlugin);
        }
        if (!teachingAidsPlugin && isRoom(remake)) {
            teachingAidsPlugin = await TeachingSingleAidsPlugin.createTeachingAidsPlugin(remake as Room, TeachingSingleAidsPlugin.kind);
        }
        if (teachingAidsPlugin && TeachingSingleAidsPlugin.currentManager) {
            // console.log('teachingAidsPlugin--1', teachingAidsPlugin, _d, TeachingAidsPlugin.windowManager)
            TeachingSingleAidsPlugin.currentManager.bindPlugin(teachingAidsPlugin);
            teachingAidsPlugin.init(remake);
        }
        const originCallBacksOn = remake.callbacks.on;
        const originCallBacksOff = remake.callbacks.off;
        const originCallBacksOnce = remake.callbacks.once;
        const originCleanCurrentScene = (remake as Room).cleanCurrentScene;
        const origin = {
            plugin: teachingAidsPlugin,
            displayer: remake,
            getBoundingRectAsync: async function (scenePath: string) {
                TeachingSingleAidsPlugin.logger.info(`[TeachingAidsSinglePlugin plugin] getBoundingRect`);
                const originRect = this.displayer.getBoundingRect(scenePath);
                const pluginRect = await TeachingSingleAidsPlugin.currentManager?.getBoundingRect(scenePath);
                if (!originRect.width || !originRect.height) {
                    return pluginRect;
                }
                return computRectangle(originRect, pluginRect)
            },
            screenshotToCanvasAsync: async function (context: CanvasRenderingContext2D, scenePath: string, width: number, height: number, camera: Camera, ratio?: number) {
                TeachingSingleAidsPlugin.logger.info(`[TeachingAidsSinglePlugin plugin] screenshotToCanvasAsync`);
                const canvas = document.createElement("canvas");
                const limitContext = canvas.getContext("2d");
                canvas.width = width * (ratio || 1);
                canvas.height = height * (ratio || 1);
                if (limitContext) {
                    this.displayer.screenshotToCanvas(limitContext, scenePath, width, height, camera, ratio);
                    context.drawImage(canvas, 0, 0, width * (ratio || 1), height * (ratio || 1), 0, 0, width, height);
                    canvas.remove();
                }
                if (TeachingSingleAidsPlugin.currentManager) {
                    await TeachingSingleAidsPlugin.currentManager?.screenshotToCanvas(context, scenePath, width, height, camera);
                }
            },
            scenePreviewAsync: async function (scenePath: string, div: HTMLElement, width?: number, height?: number, engine?: RenderEngine) {
                TeachingSingleAidsPlugin.logger.info(`[TeachingAidsSinglePlugin plugin] scenePreview`);
                this.displayer.scenePreview(scenePath, div, width, height, engine);
                const img = document.createElement("img");
                img.style.position = "absolute";
                img.style.top = "0px";
                img.style.left = "0px";
                img.style.width = "100%";
                img.style.height = "100%";
                img.style.pointerEvents = "none";
                div.append(img);
                if (!getComputedStyle(div).position) {
                    div.style.position = "relative";
                }
                if (TeachingSingleAidsPlugin.currentManager) {
                    await TeachingSingleAidsPlugin.currentManager.scenePreview(scenePath, img);
                }
            },
            callbacksOn: function (name: string, listener: any) {
                TeachingSingleAidsPlugin.logger.info(`[TeachingAidsSinglePlugin plugin] callbacks ${name}`);
                if ((name === 'onCanUndoStepsUpdate' || name === 'onCanRedoStepsUpdate') && isRoom(this.displayer) && (this.displayer as Room).isWritable) {
                    TeachingAidsSingleManager.InternalMsgEmitter.on(name, listener);
                } else {
                    originCallBacksOn.call(remake.callbacks, name, listener);
                }
            },
            callbacksOnce: function (name: string, listener: any) {
                TeachingSingleAidsPlugin.logger.info(`[TeachingAidsSinglePlugin plugin] callbacks ${name}`);
                if ((name === 'onCanUndoStepsUpdate' || name === 'onCanRedoStepsUpdate') && isRoom(this.displayer) && (this.displayer as Room).isWritable) {
                    TeachingAidsSingleManager.InternalMsgEmitter.on(name, listener);
                } else {
                    originCallBacksOnce.call(remake.callbacks, name, listener);
                }
            },
            callbacksOff: function (name?: string, listener?: any) {
                TeachingSingleAidsPlugin.logger.info(`[TeachingAidsSinglePlugin plugin] callbacks ${name}`);
                if ((name === 'onCanUndoStepsUpdate' || name === 'onCanRedoStepsUpdate') && isRoom(this.displayer) && (this.displayer as Room).isWritable) {
                    TeachingAidsSingleManager.InternalMsgEmitter.off(name, listener);
                } else {
                    originCallBacksOff.call(remake.callbacks, name, listener);
                }
            },
            undo: function () {
                TeachingSingleAidsPlugin.logger.info(`[TeachingAidsSinglePlugin plugin] undo`);
                if (TeachingSingleAidsPlugin.currentManager && isRoom(this.displayer) && !(this.displayer as Room).disableSerialization) {
                    return TeachingSingleAidsPlugin.currentManager.viewContainerManager.undo();
                }
                return 0;
            },
            redo: function () {
                TeachingSingleAidsPlugin.logger.info(`[TeachingAidsSinglePlugin plugin] redo`);
                if (TeachingSingleAidsPlugin.currentManager && isRoom(this.displayer) && !(this.displayer as Room).disableSerialization) {
                    return TeachingSingleAidsPlugin.currentManager.viewContainerManager.redo();
                }
                return 0;
            },
            cleanCurrentScene: function (retainPpt?: boolean) {
                TeachingSingleAidsPlugin.logger.info(`[TeachingAidsSinglePlugin plugin] cleanCurrentScene`);
                if (TeachingSingleAidsPlugin.currentManager && isRoom(this.displayer) && (this.displayer as Room).isWritable) {
                    TeachingSingleAidsPlugin.currentManager.cleanCurrentScene();
                    originCleanCurrentScene.call(remake, retainPpt);
                }
            },
            insertImage:function(imageInfo: ImageInformation){
                TeachingSingleAidsPlugin.logger.info(`[TeachingAidsSinglePlugin plugin] insertImage`);
                if (TeachingSingleAidsPlugin.currentManager && isRoom(this.displayer) && (this.displayer as Room).isWritable) {
                    TeachingSingleAidsPlugin.currentManager.worker.insertImage(imageInfo);
                }
            },
            lockImage:function(uuid: string, locked: boolean){
                TeachingSingleAidsPlugin.logger.info(`[TeachingAidsSinglePlugin plugin] lockImage`);
                if (TeachingSingleAidsPlugin.currentManager && isRoom(this.displayer) && (this.displayer as Room).isWritable) {
                    TeachingSingleAidsPlugin.currentManager.worker.lockImage(uuid, locked);
                }
            },
            completeImageUpload:function(uuid: string, src: string){
                TeachingSingleAidsPlugin.logger.info(`[TeachingAidsSinglePlugin plugin] completeImageUpload`);
                if (TeachingSingleAidsPlugin.currentManager && isRoom(this.displayer) && (this.displayer as Room).isWritable) {
                    TeachingSingleAidsPlugin.currentManager.worker.completeImageUpload(uuid, src);
                }
            },
            getImagesInformation:function(scenePath: string){
                TeachingSingleAidsPlugin.logger.info(`[TeachingAidsSinglePlugin plugin] completeImageUpload`);
                if (TeachingSingleAidsPlugin.currentManager && isRoom(this.displayer) && (this.displayer as Room).isWritable) {
                    return TeachingSingleAidsPlugin.currentManager.worker.getImagesInformation(scenePath);
                }
                return []
            },
            callbacks:() => {
                return {
                    ...remake.callbacks,
                    on: origin.callbacksOn.bind(origin),
                    once: origin.callbacksOnce.bind(origin),
                    off: origin.callbacksOff.bind(origin),
                }
            },
        }
        return {
            ...origin,
            callbacks:origin.callbacks(),
            injectMethodToObject:function(object:any, methodName:canBindMethodType){
                TeachingSingleAidsPlugin.logger.info(`[TeachingAidsSinglePlugin plugin] bindMethodToObject ${methodName}`);
                if (typeof object[methodName] === 'function' || typeof object[methodName] === 'undefined') {
                    object[methodName] = origin[methodName].bind(origin);
                    return;
                }
                if (methodName === 'callbacks') {
                    object.callbacks.on = origin.callbacksOn.bind(origin);
                    object.callbacks.off = origin.callbacksOff.bind(origin);
                    object.callbacks.once = origin.callbacksOnce.bind(origin);
                }
            }
        };
    }
    static onCreate(plugin: InvisiblePlugin<TeachingAidsPluginAttributes, any> ) {
        // console.log('onCreate', plugin, TeachingAidsPlugin.options, TeachingAidsPlugin.windowManager);
        if (plugin && TeachingSingleAidsPlugin.currentManager) {
            // console.log('teachingAidsPlugin--2', plugin, plugin.displayer, TeachingAidsPlugin.windowManager)
            TeachingSingleAidsPlugin.currentManager.bindPlugin(plugin as TeachingSingleAidsPlugin);
            (plugin as TeachingSingleAidsPlugin).init(plugin.displayer);
        }
    }
    static async createTeachingAidsPlugin(d:Room, kind:string):Promise<TeachingSingleAidsPlugin> {
        await (d as Room).createInvisiblePlugin(
            TeachingSingleAidsPlugin,
            {}
        );
        // console.log('createTeachingAidsPlugin--1')
        let teachingAidsPlugin = d.getInvisiblePlugin(kind) as TeachingSingleAidsPlugin | undefined;
        if (!teachingAidsPlugin) {
            // console.log('createTeachingAidsPlugin')
            teachingAidsPlugin = await TeachingSingleAidsPlugin.createTeachingAidsPlugin(d,kind);
        }
        return teachingAidsPlugin;
    }
    static createCurrentManager = (displayer:Displayer, options:TeachingAidsPluginOptions, plugin?:TeachingSingleAidsPlugin) => {
        if (TeachingSingleAidsPlugin.currentManager) {
            TeachingSingleAidsPlugin.currentManager.destroy();
        }
        const param = {
            plugin,
            displayer,
            options
        }
        const bezierManager = new TeachingAidsSingleManager(param);
        bezierManager.init();
        TeachingSingleAidsPlugin.logger.info(`[TeachingAidsPlugin plugin] refresh TeachingAidsSingleManager object`);
        TeachingSingleAidsPlugin.currentManager = bezierManager;
    }
    // static onDestroy(plugin: TeachingAidsPlugin) {}
    /**
     * 房间实例化时，将当前实例对displayer外部API的添加内部处理逻辑;
     * @param displayer
     */
    static effectInstance() {
        if (TeachingSingleAidsPlugin.cursorAdapter) {
            const _onAddedCursor = TeachingSingleAidsPlugin.cursorAdapter.onAddedCursor as any;
            (TeachingSingleAidsPlugin.cursorAdapter as any).onAddedCursor = function (cursor: Cursor) {
                cursor.onCursorMemberChanged = (c: any)=>{
                    try {
                        if (
                            c.appliance === ApplianceNames.pencil ||
                            c.appliance === ApplianceNames.shape ||
                            c.appliance === ApplianceNames.text ||
                            c.appliance === ApplianceNames.arrow ||
                            c.appliance === ApplianceNames.straight ||
                            c.appliance === ApplianceNames.rectangle ||
                            c.appliance === ApplianceNames.ellipse
                        ) {
                            if (cursor?.divElement) {
                                cursor.divElement.style.display='none';
                            }
                        } else if (cursor?.divElement) {
                            cursor.divElement.style.display='block';
                        }
                    } catch (error) { /* empty */ }
                }
                _onAddedCursor.call(TeachingSingleAidsPlugin.cursorAdapter,cursor);
            }
        }
    }
    private get isReplay(): boolean {
        return isPlayer(this.displayer);
    }
    private get callbackName(): string {
        return this.isReplay ? "onPlayerStateChanged" : "onRoomStateChanged";
    }
    init(displayer: Displayer){
        if (isRoom(displayer)) {
            const state = (displayer as Room).state;
            if (state?.memberState) {
                TeachingSingleAidsPlugin.currentManager?.onMemberChange(state.memberState as MemberState);
            }
        }
        this.displayer.callbacks.on(this.callbackName, this.roomStateChangeListener);
        this.displayer.callbacks.on("onEnableWriteNowChanged", this.updateRoomWritable);
    }
    private updateRoomWritable = () => {
        TeachingSingleAidsPlugin.currentManager?.onWritableChange((this.displayer as Room).isWritable);
    }
    private roomStateChangeListener = async (state: RoomState) => {
        if (TeachingSingleAidsPlugin.currentManager instanceof TeachingAidsSingleManager) {
            if (state.cameraState) {
                (TeachingSingleAidsPlugin.currentManager as TeachingAidsSingleManager).onCameraChange(state.cameraState);
            }
            if (state.sceneState) {
                TeachingSingleAidsPlugin.currentManager.onSceneChange(state.sceneState.scenePath, 'mainView');
            }
        }
        if (isRoom(this.displayer) && !(this.displayer as Room).isWritable) {
            return;
        }
        if (state.memberState) {
            TeachingSingleAidsPlugin.currentManager?.onMemberChange(state.memberState as MemberState);
        }
        if (state?.roomMembers) {
            TeachingSingleAidsPlugin.currentManager?.onRoomMembersChange(state.roomMembers);
        }
    }
    override destroy(): void {
        // console.log('currentManager--destroy -- 1')
        TeachingSingleAidsPlugin.currentManager?.destroy();
        TeachingSingleAidsPlugin.currentManager = undefined;
        TeachingSingleAidsPlugin.cursorAdapter = undefined;
    }
}