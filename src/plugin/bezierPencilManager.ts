import { BezierPencilPlugin, BezierPencilPluginOptions } from "./bezierPencilPlugin";
import { BezierPencilDisplayer } from "./bezierPencilDisplayer";
import { Collector } from "../collector";
import { DisplayStateEnum, EStrokeType, MemberState } from "./types";
import type {ValDisposer} from 'value-enhancer';
import { Room, isRoom, CameraState, toJS, SceneState, ApplianceNames } from "white-web-sdk";
import { EDataType, EToolsKey } from "../core/enum";
import { BaseShapeOptions, EraserOptions, PencilOptions } from "../core/tools";
import throttle from "lodash/throttle";
import { rgbToHex } from "../collector/utils/color";
import { MainEngineForWorker} from "../core";
import { LaserPenOptions } from "../core/tools/laserPen";

export class BezierPencilManager {
    private plugin: BezierPencilPlugin;
    private pluginOptions?: BezierPencilPluginOptions;
    private collector?: Collector;
    private worker?: MainEngineForWorker;
    private room?:Room;
    private disposeDisplayerSubscribe: ValDisposer = ()=>{}; 
    
    constructor(plugin: BezierPencilPlugin, options?: BezierPencilPluginOptions) {
        this.plugin = plugin;
        this.room = isRoom(plugin.displayer) ? plugin.displayer as Room : undefined;
        this.pluginOptions = options;
    }
    public init() {
        this.disposeDisplayerSubscribe = BezierPencilDisplayer.displayState$.subscribe(displayState => {
            // console.log(`subscribe: ${displayState}`);
            if (displayState === DisplayStateEnum.mounted) {
                this.onMountDisplayer();
            }
            if (displayState === DisplayStateEnum.unmounted) {
                this.onUnMountDisplayer();
            }
        });
    }
    public cleanCurrentScene() {
        this.worker?.clearAll();
    }
    public destroy() {
        this.disposeDisplayerSubscribe();
    }
    public onCameraChange(cameraState: CameraState){
        this.worker?.setCameraOpt(toJS(cameraState))
    }
    public onSceneChange(sceneState: SceneState){
        this.collector?.setNamespace(sceneState.sceneName);
        this.worker?.clearAll(true);
        this.worker?.initSyncData(()=>{});
    }
    public onMemberChange(memberState: MemberState){
        if(!this.room){
            return ;
        }
        const currentApplianceName = memberState.currentApplianceName as ApplianceNames;
        const toolsKey = currentApplianceName === ApplianceNames.pencil && memberState.useLaserPen ? EToolsKey.LaserPen : 
            currentApplianceName === ApplianceNames.eraser ? EToolsKey.Eraser : 
            currentApplianceName === ApplianceNames.pencil ? EToolsKey.Pencil : EToolsKey.Clicker;
        const opt:BaseShapeOptions = {
            color: rgbToHex(memberState.strokeColor[0], memberState.strokeColor[1], memberState.strokeColor[2]),
            opacity: memberState?.strokeOpacity || 1,
        };
        if (toolsKey === EToolsKey.Pencil) {
            (opt as PencilOptions).thickness = memberState.strokeWidth;
            (opt as PencilOptions).strokeType = memberState?.strokeType || EStrokeType.Stroke;
        } else if(toolsKey === EToolsKey.Eraser) {
            (opt as EraserOptions).thickness = memberState.strokeWidth;
            (opt as EraserOptions).isLine = memberState?.isLine || false;
        } else if(toolsKey === EToolsKey.LaserPen) {
            (opt as LaserPenOptions).thickness = memberState.strokeWidth;
            (opt as LaserPenOptions).duration = memberState?.duration || 1;
            (opt as PencilOptions).strokeType = memberState?.strokeType || EStrokeType.Normal;
        }
        this.worker?.setCurrentToolsData({
            toolsType: toolsKey,
            toolsOpt: opt,
        });
        if (currentApplianceName === ApplianceNames.eraser || currentApplianceName === ApplianceNames.pencil) {
            if (currentApplianceName === ApplianceNames.pencil) {
                this.room.disableDeviceInputs = true;
            }
            this.worker?.abled()
        } else {
            this.room.disableDeviceInputs = false;
            this.worker?.unabled()
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
            floatCanvas.width = div.offsetWidth;
            floatCanvas.height = div.offsetHeight;
            bgCanvas.width = div.offsetWidth;
            bgCanvas.height = div.offsetHeight;
            this.collector = new Collector(this.plugin);
            this.worker = new MainEngineForWorker(bgCanvas, floatCanvas, this.collector, this.pluginOptions);
            this.collector.addStorageStateListener((key,diffOne)=>{
                // console.log('STATE',key,diffOne)
                if (key === 'screen' && diffOne.newValue) {
                    const {w,h} = diffOne.newValue;
                    if (w && h) {
                        if (bgCanvas && floatCanvas) {
                            bgCanvas.width = w
                            bgCanvas.height = h
                            floatCanvas.width = w
                            floatCanvas.height = h
                        }
                        // todo 等比例缩放
                        this.worker?.updateCanvas({
                            width: w,
                            height: h
                        }, EDataType.Service);
                    } 
                } else {
                    this.worker?.onServiceDerive(key, diffOne);
                }
            })
            this.worker.initSyncData((key,value)=>{
                if (key === 'screen' && value) {
                    const {w,h} = value;
                    if (w && h) {
                        if (bgCanvas && floatCanvas) {
                            bgCanvas.width = w
                            bgCanvas.height = h
                            floatCanvas.width = w
                            floatCanvas.height = h
                        }
                    } 
                }
            })
            this.bindDisplayerEvent(div);
            this.resizeChange();
        }
    }
    private onUnMountDisplayer(){
        const div = BezierPencilDisplayer.instance?.containerRef;
        if (div) {
            this.removeDisplayerEvent(div);
        }
        this.collector?.destroy();
        this.worker?.destroy();
        this.collector = undefined;
        this.worker = undefined;
    }
    private resizeChange = () => {
        const div = BezierPencilDisplayer.instance?.containerRef;
        if (div) {
            const width = div.offsetWidth;
            const height = div.offsetHeight;
            this.worker?.updateCanvas({
                width, 
                height
            }, EDataType.Local);
            const bgCanvas = BezierPencilDisplayer.instance?.canvasBgRef;
            const floatCanvas = BezierPencilDisplayer.instance?.canvasFloatRef;
            if (bgCanvas && floatCanvas) {
                floatCanvas.style.width = `${width}px`;
                floatCanvas.style.height = `${height}px`;
                bgCanvas.style.width = `${width}px`;
                bgCanvas.style.height = `${height}px`;
            }
        }
    }
    private _throttled = throttle(this.resizeChange, 500, {'leading':false})
    private mousedown = (e:MouseEvent) =>{
        if (e.button === 0) {
            this.worker?.onLocalEventStart([e.offsetX, e.offsetY])
        }
    }
    private mousemove = (e:MouseEvent) =>{
        this.worker?.onLocalEventDoing([e.offsetX, e.offsetY])
    }
    private mouseup = (e:MouseEvent) =>{
        if (e.button === 0) {
            this.worker?.onLocalEventEnd([e.offsetX, e.offsetY])
        }
    }
    private touchstart = (e:TouchEvent) =>{
        this.worker?.onLocalEventStart([e.targetTouches[0].pageX, e.targetTouches[0].pageY])
    }
    private touchmove = (e:TouchEvent) =>{
        this.worker?.onLocalEventDoing([e.targetTouches[0].pageX, e.targetTouches[0].pageY])
    }
    private touchend = (e:TouchEvent) =>{
        this.worker?.onLocalEventEnd([e.changedTouches[0].pageX, e.changedTouches[0].pageY])
    }
    private bindDisplayerEvent(div:HTMLDivElement){
        div.addEventListener('mousedown',this.mousedown, true);
        div.addEventListener('mousemove',this.mousemove, true);
        div.addEventListener('mouseup',this.mouseup, true);
        div.addEventListener('mouseleave',this.mouseup, true);
        div.addEventListener('touchstart',this.touchstart, true);
        div.addEventListener('touchmove',this.touchmove, true);
        div.addEventListener('touchend',this.touchend, true);
        window.addEventListener('resize', this._throttled);
    }
    private removeDisplayerEvent(div:HTMLDivElement){
        div.removeEventListener('mousedown',this.mousedown);
        div.removeEventListener('mousemove',this.mousemove);
        div.removeEventListener('mouseup',this.mouseup);
        div.removeEventListener('mouseleave',this.mouseup);
        div.removeEventListener('touchstart',this.touchstart);
        div.removeEventListener('touchmove',this.touchmove);
        div.removeEventListener('touchend',this.touchend);
        window.removeEventListener('resize', this._throttled);
    }

}