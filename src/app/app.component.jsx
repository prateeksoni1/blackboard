import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import io from 'socket.io-client';
import HeroPage from '../pages/hero';
import DrawPage from '../pages/draw/draw.component';

const socket = io('https://blackboard-backend.herokuapp.com/');

socket.on('connect', () => {
  // eslint-disable-next-line no-console
  console.log('connected');
});

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/draw/:id"
        render={(props) => <DrawPage {...props} socket={socket} />}
      />
      <Route path="/" component={HeroPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
