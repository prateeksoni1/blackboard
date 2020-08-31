import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeroPage from '../pages/hero';
import DrawPage from '../pages/draw/draw.component';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/draw" component={DrawPage} />
      <Route path="/" component={HeroPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
