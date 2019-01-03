import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { history } from './history';
import { Mainpage, Statistics, PageNotFound } from './modules';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            component={Mainpage}
          />
          <Route
            exact
            path="/statistics"
            component={Statistics}
          />
          <Route
            exact
            component={PageNotFound}
          />
        </Switch>
      </Router>
    );
  }
}
