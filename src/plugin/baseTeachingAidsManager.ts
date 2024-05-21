import EventEmitter2 from "eventemitter2";
import { BaseSubWorkModuleProps, EStrokeType, MemberState, ShapeType, TeachingAidsPluginLike, TeachingAidsPluginOptions } from "./types";
import { Collector } from "../collector";
import { RoomMemberManager } from "../members";
import { TextEditorManager, TextEditorManagerImpl, TextOptions } from "../component/textEditor";
import type { Camera, Displayer, DisplayerCallbacks, Player, Rectangle, Room, RoomMember } from "./types";
import { ApplianceNames, isPlayer, isRoom, toJS } from "./external";
import { CursorManager, CursorManagerImpl } from "../cursors";
import { ViewContainerManager } from "./baseViewContainerManager";
import { MasterControlForWorker } from "../core/mainEngine";
import { EToolsKey } from "../core/enum";
import { BaseShapeOptions } from "../core/tools/base";
import { rgbToRgba } from "../collector/utils/color";
import { EraserOptions, LaserPenOptions, PencilOptions, PolygonOptions, StarOptions, SpeechBalloonOptions } from "../core/tools";
import { ICameraOpt } from "../core/types";
import throttle from "lodash/throttle";
import { HotkeyManager, HotkeyManagerImpl } from "../hotkey";

export interface BaseTeachingAidsManagerProps {
    displayer: Displayer<DisplayerCallbacks>
    plugin?: TeachingAidsPluginLike, 
    options?: TeachingAidsPluginOptions
}
/** 插件管理器 */
export abstract class BaseTeachingAidsManager {
    static InternalMsgEmitter: EventEmitter2 = new EventEmitter2();
    plugin?: TeachingAidsPluginLike;
    room?: Room;
    play?: Player;
    collector?: Collector;
    hasSwitchToSelectorEffect?: boolean;
    effectResolve?:(value:boolean) => void;
    readonly hotkeyManager: HotkeyManager;
    readonly pluginOptions?: TeachingAidsPluginOptions;
    readonly roomMember: RoomMemberManager;
    readonly cursor: CursorManager;
    readonly textEditorManager: TextEditorManager;
    readonly worker: MasterControlForWorker;
    abstract readonly viewContainerManager: ViewContainerManager;
    constructor(params:BaseTeachingAidsManagerProps) {
        const {displayer, plugin, options}=params;
        this.plugin = plugin;
        this.room = isRoom(displayer) ? displayer as Room : undefined;
        this.play = isPlayer(displayer) ? displayer as Player : undefined;
        this.pluginOptions = options;
        this.roomMember = new RoomMemberManager();
        const props:BaseSubWorkModuleProps = {
            control: this,
            internalMsgEmitter: BaseTeachingAidsManager.InternalMsgEmitter
        }
        this.cursor = new CursorManagerImpl(props)
        this.textEditorManager = new TextEditorManagerImpl(props);
        this.worker = new MasterControlForWorker(props);
        this.hotkeyManager = new HotkeyManagerImpl(props);
    }
    bindPlugin(plugin:TeachingAidsPluginLike){
        this.plugin = plugin;
        if (this.collector) {
            this.collector.removeStorageStateListener();
        }
        this.collector = new Collector(plugin, this.pluginOptions?.syncOpt?.interval);
        this.cursor.activeCollector();
        this.activePlugin();
    }
    /** 激活 plugin */
    abstract activePlugin():void;
    /** 初始化 */
    abstract init():void;
    /** 激活worker */
    abstract activeWorker():void;
    /** 销毁 */
    destroy(){
        this.roomMember.destroy();
        this.collector?.destroy();
        this.worker?.destroy();
        this.viewContainerManager?.destroy();
        this.cursor?.destroy();
        this.textEditorManager?.destory();
    }
    /** 清空当前获焦路径下的所有内容 */
    cleanCurrentScene() {
        // this.plugin?.updateAttributes(['PluginState'], undefined);
        const undoTickerId = Date.now();
        const viewId = this.viewContainerManager.focuedViewId;
        if (viewId) {
            BaseTeachingAidsManager.InternalMsgEmitter.emit('undoTickerStart', undoTickerId, viewId);
            this.worker.clearViewScenePath(viewId).then(()=>{
                BaseTeachingAidsManager.InternalMsgEmitter.emit('undoTickerEnd', undoTickerId, viewId);
            });
        }
    }
    /** 监听读写状态变更 */
    onWritableChange(isWritable: boolean): void {
        if(!isWritable){
            this.worker?.unabled();
        } else {
            this.worker?.abled();
        }
    }
    /** 监听路径变化 */
    onSceneChange = (scenePath: string, viewId: string) => {
        // console.log('onSceneChange', scenePath, viewId)
        const curViewInfo = this.viewContainerManager.getView(viewId);
        if (curViewInfo?.focusScenePath) {
            if (this.collector?.hasSelector(viewId, curViewInfo.focusScenePath)) {
                this.worker.blurSelector(viewId, curViewInfo.focusScenePath);
            }
        }
        this.textEditorManager.checkEmptyTextBlur();
        const curDisplayer = curViewInfo?.displayer;
        if (curDisplayer) {
            curDisplayer.setActive(false);
            curDisplayer.stopEventHandler();
        }
        const focusScenePath = scenePath;
        if (focusScenePath) {
            this.viewContainerManager.setViewScenePath(viewId, focusScenePath);
        }
        curDisplayer?.setActive(true);
    }
    /** 监听房间成员变化 */
    onRoomMembersChange = (roomMembers: readonly RoomMember[])=>{
        this.roomMember.setRoomMembers(toJS(roomMembers));
    }
    /** 监听房间教具变更 */
    onMemberChange = throttle((memberState: MemberState) => {
        if(!this.room || !this.worker){
            return ;
        }
        const toolsKey = this.getToolsKey(memberState);
        const toolsInfo = this.getToolsOpt(toolsKey, memberState);
        this.worker.setCurrentToolsData(toolsInfo);
        this.effectViewContainer(toolsKey);
        if (this.effectResolve) {
            this.effectResolve(true);
        }
    }, 100, {'leading':false})
    /** 获取当前工具key */
    protected getToolsKey(memberState: MemberState){
        const currentApplianceName = memberState.currentApplianceName as ApplianceNames;
        this.hasSwitchToSelectorEffect = false;
        switch (currentApplianceName) {
            case ApplianceNames.text:
                if (memberState.textCompleteToSelector) {
                    this.hasSwitchToSelectorEffect = true;
                }
                return EToolsKey.Text;
            case ApplianceNames.pencil:
                if (memberState.useNewPencil) {
                    return EToolsKey.Pencil
                }
                if (memberState.useLaserPen) {
                    return EToolsKey.LaserPen
                }
                break;
            case ApplianceNames.eraser:
            case ApplianceNames.pencilEraser:
                return EToolsKey.Eraser;
            case ApplianceNames.selector:
                return EToolsKey.Selector;
            case ApplianceNames.arrow:
                if (memberState.arrowCompleteToSelector) {
                    this.hasSwitchToSelectorEffect = true;
                }
                return EToolsKey.Arrow;
            case ApplianceNames.straight:
                if (memberState.straightCompleteToSelector) {
                    this.hasSwitchToSelectorEffect = true;
                }
                return EToolsKey.Straight;
            case ApplianceNames.ellipse:
                if (memberState.ellipseCompleteToSelector) {
                    this.hasSwitchToSelectorEffect = true;
                }
                return EToolsKey.Ellipse;
            case ApplianceNames.rectangle:
                if (memberState.rectangleCompleteToSelector) {
                    this.hasSwitchToSelectorEffect = true;
                }
                return EToolsKey.Rectangle;
            case ApplianceNames.shape:
                if (memberState.shapeCompleteToSelector) {
                    this.hasSwitchToSelectorEffect = true;
                }
                if (
                    memberState.shapeType === ShapeType.Pentagram ||
                    memberState.shapeType === ShapeType.Star 
                ) {
                    return EToolsKey.Star;
                }
                if (
                    memberState.shapeType === ShapeType.Polygon || 
                    memberState.shapeType === ShapeType.Triangle || 
                    memberState.shapeType === ShapeType.Rhombus
                ) {
                    return EToolsKey.Polygon;
                }
                if (memberState.shapeType === ShapeType.SpeechBalloon) {
                    return EToolsKey.SpeechBalloon;
                }
                break
        }
        return EToolsKey.Clicker;
    }
    /** 获取当前工具默认配置 */
    protected getToolsOpt(toolsKey: EToolsKey, memberState: MemberState){
        const currentApplianceName = memberState.currentApplianceName as ApplianceNames;
        const opt:BaseShapeOptions = {
            strokeColor: rgbToRgba(memberState.strokeColor[0], memberState.strokeColor[1], memberState.strokeColor[2], memberState.strokeOpacity || 1),
            thickness: memberState.strokeWidth,
            isOpacity: (memberState?.strokeOpacity && memberState.strokeOpacity < 1) || 
                (memberState?.fillOpacity && memberState.fillOpacity < 1 ) ||
                (memberState?.textOpacity && memberState.textOpacity < 1 ) ||
                (memberState?.textBgOpacity && memberState.textBgOpacity < 1 ) || false,
        };
        switch (toolsKey) {
            case EToolsKey.Text:
                (opt as TextOptions).fontFamily = window.getComputedStyle(document.documentElement).getPropertyValue('font-family');
                (opt as TextOptions).fontSize = memberState?.textSizeOverride || memberState?.textSize || Number(window.getComputedStyle(document.body).fontSize);
                (opt as TextOptions).textAlign = memberState?.textAlign || 'left';
                (opt as TextOptions).verticalAlign = memberState?.verticalAlign || 'middle';
                (opt as TextOptions).fontColor = memberState?.textColor && rgbToRgba(memberState.textColor[0], memberState.textColor[1], memberState.textColor[2], memberState.textOpacity || 1) || opt.strokeColor  || 'rgba(0,0,0,1)';
                (opt as TextOptions).fontBgColor = Array.isArray(memberState?.textBgColor) && rgbToRgba(memberState.textBgColor[0], memberState.textBgColor[1], memberState.textBgColor[2], memberState.textBgOpacity || 1) || 'transparent';
                (opt as TextOptions).bold = memberState?.bold && 'bold' || undefined;
                (opt as TextOptions).italic = memberState?.italic && 'italic' || undefined;
                (opt as TextOptions).underline = memberState?.underline || undefined;
                (opt as TextOptions).lineThrough = memberState?.lineThrough || undefined;
                (opt as TextOptions).text = "";
                (opt as TextOptions).strokeColor = undefined;
                break;
            case EToolsKey.Pencil:
                (opt as PencilOptions).strokeType = memberState?.strokeType || EStrokeType.Normal;
                break;
            case EToolsKey.Eraser:
                opt.thickness = Math.min(3, Math.max(1, Math.floor(memberState.pencilEraserSize || 1))) - 1; 
                (opt as EraserOptions).isLine = currentApplianceName === ApplianceNames.eraser && true;
                break;
            case EToolsKey.LaserPen:
                (opt as LaserPenOptions).duration = memberState?.duration || 1;
                (opt as PencilOptions).strokeType = memberState?.strokeType || EStrokeType.Normal;
                break;
            case EToolsKey.Ellipse:
            case EToolsKey.Rectangle:
            case EToolsKey.Star:
            case EToolsKey.Polygon:
            case EToolsKey.SpeechBalloon:
                if (toolsKey === EToolsKey.Star) {
                    if (memberState.shapeType === ShapeType.Pentagram) {
                        (opt as StarOptions).vertices = 10;
                        (opt as StarOptions).innerVerticeStep = 2;
                        (opt as StarOptions).innerRatio = 0.4;
                    } else if (memberState?.vertices && memberState?.innerVerticeStep && memberState?.innerRatio) {
                        (opt as StarOptions).vertices = memberState.vertices;
                        (opt as StarOptions).innerVerticeStep = memberState.innerVerticeStep;
                        (opt as StarOptions).innerRatio = memberState.innerRatio;
                    }
                }
                if (toolsKey === EToolsKey.Polygon) {
                    if (memberState.shapeType === ShapeType.Triangle) {
                        (opt as PolygonOptions).vertices = 3;
                    } else if (memberState.shapeType === ShapeType.Rhombus) {
                        (opt as PolygonOptions).vertices = 4;
                    } else if (memberState.vertices) {
                        (opt as PolygonOptions).vertices = memberState.vertices;
                    }  
                }
                (opt as PolygonOptions).fillColor = memberState?.fillColor && rgbToRgba(memberState.fillColor[0], memberState.fillColor[1], memberState.fillColor[2], memberState?.fillOpacity) || 'transparent';
                // if (toolsKey !== EToolsKey.Rectangle) {
                //     (opt as PolygonOptions).textOpt = {
                //         strokeColor: opt.strokeColor,
                //         fontSize: memberState?.textSize || Number(window.getComputedStyle(document.body).fontSize),
                //         textAlign: memberState?.textAlign || 'left',
                //         verticalAlign: memberState?.verticalAlign || 'middle',
                //         fontColor: memberState?.textColor && rgbToRgba(memberState.textColor[0], memberState.textColor[1], memberState.textColor[2], memberState.textOpacity || 1) || 'rgba(0,0,0,1)',
                //         fontBgColor: Array.isArray(memberState?.textBgColor) && rgbToRgba(memberState.textBgColor[0], memberState.textBgColor[1], memberState.textBgColor[2], memberState.textBgOpacity || 1) || 'transparent',
                //         bold: memberState?.bold && 'bold' || undefined,
                //         italic: memberState?.italic && 'italic' || undefined,
                //         underline: memberState?.underline || undefined,
                //         lineThrough: memberState?.lineThrough || undefined,
                //         text: ''
                //     }
                // }
                if (toolsKey === EToolsKey.SpeechBalloon) {
                    (opt as SpeechBalloonOptions).placement = memberState.placement || 'bottomLeft';
                }
                break;
            default:
                break;
        }
        return {
            toolsType: toolsKey,
            toolsOpt: opt,
        }
    }
    /** 激活当前view容器*/
    protected effectViewContainer(toolsKey: EToolsKey): void {
        switch (toolsKey) {
            case EToolsKey.Text:
            case EToolsKey.Pencil:
            case EToolsKey.LaserPen:
            case EToolsKey.Arrow:
            case EToolsKey.Straight:
            case EToolsKey.Rectangle:
            case EToolsKey.Ellipse:
            case EToolsKey.Star:
            case EToolsKey.Polygon:
            case EToolsKey.SpeechBalloon:
            case EToolsKey.Triangle:
            case EToolsKey.Rhombus:               
                (this.room as Room).disableDeviceInputs = true;
                this.worker?.abled()
                break;
            case EToolsKey.Eraser:
            case EToolsKey.Selector:
                (this.room as Room).disableDeviceInputs = false;
                this.cursor?.unabled();
                this.worker?.abled();
                break;
            default:
                (this.room as Room).disableDeviceInputs = false;
                this.worker?.unabled();
                this.cursor?.unabled();
                break;
        }
        setTimeout(() => {
            const views = this.viewContainerManager.getAllViews();
            views.forEach(view => {
                if (view?.displayer) {
                    view.displayer.bindToolsClass();
                }
            });
        }, 0);
    }
    internalSceneChange = (viewId: string, scenePath: string) => {
        this.worker?.clearViewScenePath(viewId, true).then(()=>{
            this.worker?.pullServiceData(viewId, scenePath);
        });
    }
    internalCameraChange = (viewId: string, cameraOpt: ICameraOpt) => {
        this.worker?.updateCamera(viewId, cameraOpt);
    }
    /** 异步获取指定路径下绘制内容的区域大小 */
    async getBoundingRect(scenePath: string): Promise<Rectangle | undefined> {
        const rect = await this.worker?.getBoundingRect(scenePath);
        if(rect) {
            const originPoint = this.viewContainerManager.mainView?.viewData?.convertToPointInWorld({x:rect.x, y:rect.y}) || {x:rect.x, y:rect.y};
            const scale = this.viewContainerManager.mainView?.viewData?.camera.scale || 1;
            return {
                width: Math.floor(rect.w / scale) + 1,
                height: Math.floor(rect.h / scale) + 1,
                originX: originPoint.x,
                originY: originPoint.y,
            }
        }
    }
    /** 异步获取指定路径下的的快照并绘制到指定的画布上 */
    async screenshotToCanvas(context: CanvasRenderingContext2D, scenePath: string, width?: number | undefined, height?: number | undefined, camera?: Camera | undefined): Promise<void> {
        const imageBitmap = await this.worker.getSnapshot(scenePath, width, height, camera);
        if (imageBitmap) {
            context.drawImage(imageBitmap, 0, 0)
            imageBitmap.close();
        }
    }
    /** 异步获取指定路径下的缩略图 */
    async scenePreview(scenePath: string, img: HTMLImageElement): Promise<void> {
        const viewId = this.collector?.getViewIdBySecenPath(scenePath);
        if (!viewId) {
            return;
        }
        const view = this.viewContainerManager.getView(viewId);
        if (!view || !view.cameraOpt?.width || !view.cameraOpt?.height) {
            return;
        }
        const imageBitmap = await this.worker?.getSnapshot(scenePath);
        if (imageBitmap && this.worker) {
            const canvas = document.createElement("canvas");
            const limitContext = canvas.getContext("2d");
            const {width,height} = view.cameraOpt;
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
    /** 切换到选择工具 */
    switchToSelector(){
        this.room?.setMemberState({currentApplianceName: ApplianceNames.selector});
    }
    /** 开始执行副作用 */
    async runEffectWork(callback?:()=>void){
        if (this.hasSwitchToSelectorEffect) {
            const bool = await new Promise<boolean>((resolve) => {
                this.switchToSelector();
                this.effectResolve = resolve;
            });
            this.effectResolve = undefined;
            bool && callback && callback();
        }
    }
}
