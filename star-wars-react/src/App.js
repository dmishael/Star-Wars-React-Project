import React, { Component } from 'react';
import Home from './components/Home';
import Item from './components/Item'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from "react-redux";
import store from './components/Store'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={Item} />
          </Switch>
        </Router>
        <div>
          <header>
            {/* <Home />
            <Item /> */}
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
