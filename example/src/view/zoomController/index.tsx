/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './index.module.less';
import { useState, useEffect } from 'react';
import { AimOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import RedoUndo from "@netless/redo-undo";
import type { Room, RoomState } from 'white-web-sdk';
import { WindowManager } from '@netless/window-manager';

export const ZoomController = () => {
    const [camera, setCamera] = useState<{centerX?:number,centerY?:number,scale:number}>();
    useEffect(()=>{
        if (window.manager) {
            (window.manager as WindowManager).setCameraBound({
                maxContentMode: ()=>{
                    return 5
                },
                minContentMode: ()=>{
                    return 0.2
                }
            });
            (window.manager as WindowManager).mainView.callbacks.on('onCameraUpdated',listenerMainViewCamera)
        } else {
            (window.room as Room).callbacks.on('onRoomStateChanged',listenerRoomStateCamera)
        }
        return ()=>{
            if (window.manager) {
                (window.manager as WindowManager).mainView.callbacks.off('onCameraUpdated', listenerMainViewCamera)
            } else {
                (window.room as Room).callbacks.off('onRoomStateChanged',listenerRoomStateCamera)
            }
        }
    },[])
    const setGlobalCamera = (camera:{centerX?:number,centerY?:number,scale:number}) => {
        if (camera) {
            if(window.manager && (camera.centerX !== window.manager.mainView.camera.centerX || 
                camera.centerY !== window.manager.mainView.camera.centerY || 
                camera.scale !== window.manager.mainView.camera.scale)
            ){
                window.manager.moveCamera(camera);
            } else if (
                camera.centerX !== window.room.state.cameraState.centerX || 
                camera.centerY !== window.room.state.cameraState.centerY || 
                camera.scale !== window.room.state.cameraState.scale
            ) {
                window.room?.moveCamera(camera);
            }
        }
    }
    const listenerMainViewCamera = () => {
        Promise.resolve().then(()=>{
            const camera = (window.manager as WindowManager).mainView.camera;
            setCamera(camera)
        })
    }
    const listenerRoomStateCamera = (state: RoomState) => {
        if (state.cameraState) {
            Promise.resolve().then(()=>{
                setCamera({...state.cameraState})
            })
        }
    }
    const moveTo100 = () => {
        setGlobalCamera({
            centerX:0,
            centerY:0,
            scale:1
        })
    }
    const cutNum = () => {
        const scale = (camera?.scale || 1) * 100;
        setGlobalCamera({scale: Math.max(scale - 20, 20) / 100})
    }
    const addNum = () => {
        const scale = (camera?.scale || 1) * 100;
        setGlobalCamera({scale: Math.min((scale + 20), 500) / 100})
    }
    return (
        <div className={styles['ZoomController']}>
            <RedoUndo room={window.room as Room} />
            <Button.Group>
                <Button icon={<AimOutlined />} onClick={moveTo100}/>
                <Button icon={<PlusOutlined />} onClick={addNum}/>
                <Button>{Math.floor((camera?.scale || 1) * 100)}</Button>
                <Button icon={<MinusOutlined />} onClick={cutNum}/>
            </Button.Group>
        </div>
    )
}