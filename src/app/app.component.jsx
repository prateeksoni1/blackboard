import React from 'react';
import classes from './app.module.scss';

/* eslint-disable global-require */
const App = () => (
  <div className={classes.app}>
    <h1 className={classes.head}>Blackboard</h1>
    <p className={classes.lead}>The board you always needed.</p>
    <button className={classes.btn} type="button">
      Start Drawing
      <img src={require('../assets/pencil.svg')} alt="pencil logo" />
    </button>
  </div>
);

export default App;
