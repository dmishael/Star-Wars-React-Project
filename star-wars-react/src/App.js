import React, { Component } from 'react';
import Home from './components/Home';
import {Provider} from "react-redux";
import store from './components/Store'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <header>
            <Home />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
