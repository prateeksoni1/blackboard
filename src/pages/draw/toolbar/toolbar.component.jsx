/* eslint-disable import/no-unresolved */
import React from 'react';
import classes from './toolbar.module.scss';

/* eslint-disable global-require */
const Toolbar = ({ canvasRef, setCanvasConfig }) => {
  const handleUndo = () => {
    canvasRef.current.undo();
  };

  const handleChange = (property, value) => {
    setCanvasConfig((config) => ({ ...config, [property]: value }));
  };

  return (
    <div className={classes.toolbar}>
      <button className={classes.tool} type="button" onClick={handleUndo}>
        <img src={require('../../../assets/undo.svg')} alt="undo" />
      </button>
      <input
        className={classes.tool}
        type="color"
        defaultValue="#2b2d42"
        onChange={(e) => handleChange('backgroundColor', e.target.value)}
      />
      <input
        className={classes.tool}
        type="color"
        defaultValue="#ffffff"
        onChange={(e) => handleChange('brushColor', e.target.value)}
      />
    </div>
  );
};

export default Toolbar;
