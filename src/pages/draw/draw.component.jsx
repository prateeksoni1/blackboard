import React, { useRef, useState } from 'react';
import Canvas from 'react-canvas-draw';
import classes from './draw.module.scss';
import Toolbar from './toolbar/toolbar.component';

const DrawPage = () => {
  const canvasRef = useRef();

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
      />
    </div>
  );
};

export default DrawPage;
