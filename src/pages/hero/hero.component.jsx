import React from 'react';
import { v4 } from 'uuid';
import classes from './hero.module.scss';

/* eslint-disable global-require */
const HeroPage = ({ history }) => (
  <div className={classes.app}>
    <h1 className={classes.head}>Blackboard</h1>
    <p className={classes.lead}>The board you always needed.</p>
    <button
      onClick={() => history.push(`/draw/${v4()}`)}
      className={classes.btn}
      type="button"
    >
      Start Drawing
      <img src={require('../../assets/pencil.svg')} alt="pencil logo" />
    </button>
  </div>
);

export default HeroPage;
