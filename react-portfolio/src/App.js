import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomeContainer from './HomeContainer';
import AboutContainer from './AboutContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/" render={() => (
        <HomeContainer />
      )}/>
      <Route exact path="/about-me" render={() => (
        <AboutContainer />
      )}/>
      </div>
    );
  }
}

export default App;
