import React, { useRef, useState, useEffect } from 'react';
import Canvas from 'react-canvas-draw';
import { isEqual } from 'lodash';
import classes from './draw.module.scss';
import Toolbar from './toolbar/toolbar.component';
import ChatWindow from './chatWindow';

const DrawPage = ({ socket, match }) => {
  const canvasRef = useRef();

  useEffect(() => {
    socket.emit('join-room', match.params.id);
  }, [socket, match.params.id]);

  const [canvasData, setCanvasData] = useState('');
  const [isReceiving, setIsReceiving] = useState(false);

  let timeout;

  const handleChange = (canvas) => {
    if (isReceiving) return;
    if (canvas && canvas.getSaveData) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        socket.emit('canvas', canvas.getSaveData(), match.params.id);
      }, 100);
    }
  };

  useEffect(() => {
    socket.on('receive-canvas', (data) => {
      setIsReceiving(true);
      setTimeout(() => {
        if (!isEqual(canvasData, data)) {
          setCanvasData(data);
        }
        setIsReceiving(false);
      }, 100);
    });
  }, [canvasData]);

  const [canvasConfig, setCanvasConfig] = useState({
    canvasHeight: '100vh',
    canvasWidth: '100vw',
    backgroundColor: '#2b2d42',
    brushColor: '#fff',
    brushRadius: 2,
    hideInterface: false,
  });

  return (
    <div className={classes.screen}>
      <Toolbar canvasRef={canvasRef} setCanvasConfig={setCanvasConfig} />
      <Canvas
        ref={canvasRef}
        hideGrid
        {...canvasConfig}
        lazyRadius={1}
        immediateLoading
        catenaryColor={canvasConfig.brushColor}
        onChange={handleChange}
        saveData={canvasData.toString()}
      />
      <ChatWindow socket={socket} id={match.params.id} />
    </div>
  );
};

export default DrawPage;
