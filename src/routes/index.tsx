import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component= {Dashboard} />
    <Route path="/repositories/:repository+" component= {Repository} />
  </Switch>
);

export default Routes;
