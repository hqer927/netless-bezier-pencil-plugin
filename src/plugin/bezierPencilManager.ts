/* eslint-disable @typescript-eslint/no-explicit-any */
import { BezierPencilPlugin, BezierPencilPluginOptions } from "./bezierPencilPlugin";
import { BezierPencilDisplayer } from "./bezierPencilDisplayer";
import { Collector } from "../collector";
import { DisplayStateEnum, EmitEventType, EStrokeType, InternalMsgEmitterType, MemberState } from "./types";
import { Room, isRoom, CameraState, toJS, SceneState, ApplianceNames, isPlayer, Player, Camera } from "white-web-sdk";
import { EToolsKey, EvevtWorkState } from "../core/enum";
import { BaseShapeOptions, EraserOptions, PencilOptions } from "../core/tools";
import { rgbToHex } from "../collector/utils/color";
import { MainEngineForWorker} from "../core";
import { LaserPenOptions } from "../core/tools/laserPen";
import throttle from "lodash/throttle";
import { UndoRedoMethod } from "../undo";

export class BezierPencilManager {
    private plugin: BezierPencilPlugin;
    private pluginOptions?: BezierPencilPluginOptions;
    private collector?: Collector;
    private worker?: MainEngineForWorker;
    private room?: Room;
    private player?: Player;
    commiter?: UndoRedoMethod;
    constructor(plugin: BezierPencilPlugin, options?: BezierPencilPluginOptions) {
        this.plugin = plugin;
        this.room = isRoom(plugin.displayer) ? plugin.displayer as Room : undefined;
        this.player = isPlayer(plugin.displayer)? plugin.displayer as Player : undefined;
        this.pluginOptions = options;
        window.onbeforeunload = () => {
            this.onUnMountDisplayer();
        }
    }
    init() {
        BezierPencilDisplayer.floatBarColors = (this.room as any)?.floatBarOptions?.colors || [];
        BezierPencilDisplayer.InternalMsgEmitter.on(InternalMsgEmitterType.DisplayState, this.displayStateListener.bind(this));
        if (this.player) {
            this.onMountDisplayer();
            BezierPencilDisplayer.InternalMsgEmitter.emit(InternalMsgEmitterType.DisplayContainer, true);
        }
    }
    async screenshotToCanvas(context: CanvasRenderingContext2D, scenePath: string, width?: number, height?: number, camera?: Camera) {
        const imageBitmap = await this.worker?.getSnapshot(scenePath, width, height, camera);
        if (imageBitmap) {
            context.drawImage(imageBitmap, 0, 0)
            imageBitmap.close();
        }
    }
    async scenePreview(scenePath: string, img: HTMLImageElement) {
        const imageBitmap = await this.worker?.getSnapshot(scenePath);
        if (imageBitmap && this.worker) {
            const canvas = document.createElement("canvas");
            const limitContext = canvas.getContext("2d");
            const {width,height} = this.worker.getCameraOpt()
            canvas.width = width;
            canvas.height = height;
            if (limitContext) {
                limitContext.drawImage(imageBitmap, 0, 0);
                img.src = canvas.toDataURL();
                img.onload = () => {
                    canvas.remove();
                }
                img.onerror = () => {
                    canvas.remove();
                    img.remove();
                }
            }
            imageBitmap.close();
        }
    }
    cleanCurrentScene() {
        this.worker?.clearAll();
    }
    destroy() {
        this.onUnMountDisplayer();
    }
    private displayStateListener(value: DisplayStateEnum) {
        if (value === DisplayStateEnum.mounted) {
            this.onMountDisplayer();
            BezierPencilDisplayer.InternalMsgEmitter.emit(InternalMsgEmitterType.DisplayContainer, true);
        }
        if (value === DisplayStateEnum.unmounted) {
            this.onUnMountDisplayer();
        }
    }
    onCameraChange = throttle((cameraState: CameraState) => {
        this.worker?.setCameraOpt(toJS(cameraState))
    }, 20, {'leading':false})
    onSceneChange = throttle((sceneState: SceneState) => {
        this.collector?.setNamespace(sceneState.scenePath);
        this.worker?.clearAll(true).then(()=>{
            this.worker?.initSyncData();
        });
    }, 100, {'leading':false})
    onMemberChange = throttle((memberState: MemberState) => {
        if(!this.room || !this.worker){
            return ;
        }
        const currentApplianceName = memberState.currentApplianceName as ApplianceNames;
        const toolsKey = currentApplianceName === ApplianceNames.pencil && memberState.useLaserPen ? EToolsKey.LaserPen : 
            currentApplianceName === ApplianceNames.eraser || currentApplianceName === ApplianceNames.pencilEraser ? EToolsKey.Eraser : 
            currentApplianceName === ApplianceNames.pencil && memberState.useNewPencil ? EToolsKey.Pencil : 
            currentApplianceName === ApplianceNames.selector ? EToolsKey.Selector : EToolsKey.Clicker ;
        const opt:BaseShapeOptions = {
            color: rgbToHex(memberState.strokeColor[0], memberState.strokeColor[1], memberState.strokeColor[2]),
            opacity: memberState?.strokeOpacity || 1,
        };
        if (toolsKey === EToolsKey.Pencil) {
            (opt as PencilOptions).thickness = memberState.strokeWidth;
            (opt as PencilOptions).strokeType = memberState?.strokeType || EStrokeType.Normal;
        } else if(toolsKey === EToolsKey.Eraser) {
            (opt as EraserOptions).thickness = Math.min(3, Math.max(1, Math.floor(memberState.pencilEraserSize || 1))) - 1; 
            (opt as EraserOptions).isLine = currentApplianceName === ApplianceNames.eraser && true;
        } else if(toolsKey === EToolsKey.LaserPen) {
            (opt as LaserPenOptions).thickness = memberState.strokeWidth;
            (opt as LaserPenOptions).duration = memberState?.duration || 1;
            (opt as PencilOptions).strokeType = memberState?.strokeType || EStrokeType.Normal;
        }
        this.worker?.setCurrentToolsData({
            toolsType: toolsKey,
            toolsOpt: opt,
        });
        if (toolsKey === EToolsKey.Selector) {
            BezierPencilDisplayer.InternalMsgEmitter?.on([InternalMsgEmitterType.MainEngine, EmitEventType.TranslateNode], this.linstenerSelector.bind(this));
            BezierPencilDisplayer.InternalMsgEmitter?.on([InternalMsgEmitterType.MainEngine, EmitEventType.SetColorNode], this.linstenerSelector.bind(this));
            BezierPencilDisplayer.InternalMsgEmitter?.on([InternalMsgEmitterType.MainEngine, EmitEventType.ScaleNode], this.linstenerSelector.bind(this));
            BezierPencilDisplayer.InternalMsgEmitter?.on([InternalMsgEmitterType.MainEngine, EmitEventType.RotateNode], this.linstenerSelector.bind(this));
        } else {
            BezierPencilDisplayer.InternalMsgEmitter?.off([InternalMsgEmitterType.MainEngine, EmitEventType.TranslateNode], this.linstenerSelector.bind(this));
            BezierPencilDisplayer.InternalMsgEmitter?.off([InternalMsgEmitterType.MainEngine, EmitEventType.SetColorNode], this.linstenerSelector.bind(this));
            BezierPencilDisplayer.InternalMsgEmitter?.off([InternalMsgEmitterType.MainEngine, EmitEventType.ScaleNode], this.linstenerSelector.bind(this));
            BezierPencilDisplayer.InternalMsgEmitter?.off([InternalMsgEmitterType.MainEngine, EmitEventType.RotateNode], this.linstenerSelector.bind(this));
        }
        if ( toolsKey === EToolsKey.Eraser || toolsKey === EToolsKey.Pencil || toolsKey === EToolsKey.LaserPen || 
            toolsKey === EToolsKey.Selector ) {
            if (toolsKey === EToolsKey.Pencil || toolsKey === EToolsKey.LaserPen) {
                this.room.disableDeviceInputs = true;
                setTimeout(() => {
                    const eventTraget = BezierPencilDisplayer.instance.containerRef?.parentNode?.children[0] as HTMLDivElement;
                    if (eventTraget) {
                        eventTraget.className = eventTraget.className + ' cursor-pencil';
                    }
                }, 0);
            } 
            // else if (toolsKey === EToolsKey.Eraser && currentApplianceName  === ApplianceNames.pencilEraser  ) {
            //     this.room.disableDeviceInputs = true;
            //     setTimeout(() => {
            //         const eventTraget = BezierPencilDisplayer.instance.containerRef?.parentNode?.children[0] as HTMLDivElement;
            //         if (eventTraget) {
            //             eventTraget.className = eventTraget.className + ' cursor-pencil-eraser-3';
            //         }
            //     }, 0);
            // } 
            else {
                this.room.disableDeviceInputs = false;
            }
            this.worker?.abled()
            return;
        }
        this.room.disableDeviceInputs = false;
        this.worker?.unabled()
    }, 100, {'leading':false})
    private linstenerSelector(data:{workState: EvevtWorkState}) {
        if (this.room && data.workState === EvevtWorkState.Start) {
            this.room.disableDeviceInputs = true;
        }
        else if (this.room && data.workState === EvevtWorkState.Done) {
            this.room.disableDeviceInputs = false;
        }
    }
    public onWritableChange(isWritable:boolean) {
        if(!isWritable){
            this.worker?.unabled();
        } else {
            this.worker?.abled();
        }
    }
    private onMountDisplayer(){
        const div = BezierPencilDisplayer.instance?.containerRef;
        const floatCanvas = BezierPencilDisplayer.instance?.canvasFloatRef;
        const bgCanvas = BezierPencilDisplayer.instance?.canvasBgRef;
        if (floatCanvas && bgCanvas && div) {
            this.collector = new Collector(this.plugin, this.pluginOptions?.syncOpt?.interval);
            this.worker = new MainEngineForWorker(BezierPencilDisplayer.instance, this.collector, this.pluginOptions);
            this.commiter = this.room && new UndoRedoMethod(this.room, this.worker, this.collector);
            this.collector.addStorageStateListener((diff)=>{
                if(diff){
                    if (this.collector?.storage) {
                        const curKeys = Object.keys(this.collector.storage);
                        if (curKeys.length === 0) {
                            this.worker?.clearAll(true);
                            return;
                        }
                        if (this.worker) {
                            let maxLayerIndex = 0;
                            for (const key of curKeys) {
                                const item = this.collector.storage[key];
                                if (item) {
                                    maxLayerIndex = Math.max(maxLayerIndex, (item.opt?.zIndex || 0));
                                }
                            }
                            this.worker.maxLayerIndex = maxLayerIndex;
                        }
                    }
                    if (this.worker) {
                        const relevantId = this.worker.getRelevantWork(diff);
                        Object.keys(diff).forEach((key)=>{
                            const item = diff[key];
                            if (item) {
                                this.worker?.onServiceDerive(key, item, relevantId);
                            }
                        })
                        UndoRedoMethod.emitter.emit("excludeIds", Object.keys(diff));
                    }
                }
            })
            setTimeout(() => {
                this.worker?.initSyncData()
            }, 200);
        }
    }
    private onUnMountDisplayer(){
        this.collector?.destroy();
        this.worker?.destroy();
        this.commiter?.destroy();
        this.collector = undefined;
        this.worker = undefined;
        this.commiter = undefined;
    }
}