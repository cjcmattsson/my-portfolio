import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App/App';
import NotFound from './NotFound';
import Projects from './Projects/Projects';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/projects" component={Projects}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
)

export default Router;
