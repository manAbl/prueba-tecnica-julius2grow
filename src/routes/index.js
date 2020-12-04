import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Employee from '../containers/Employee';
import NotFound from '../containers/NotFound';
import Home from '../containers/Home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/create-employee" component={Employee} />
      <Route exact path="/employee/:id" component={Employee} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
