import React, {Component} from 'react';
import './App.css';
import MenuLinks from './Components/MenuLinks.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import year1990 from './Components/1990.js';
import year1980 from './Components/1980.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              <Link to="/">
                Backpedal
              </Link>
            </h1>
            <MenuLinks />
          </header>
          <Route exact path="/" render={() => (
            <p className="App-intro">
              Welcome
            </p>
          )}/>
          <Route path="/1990" component={year1990}/>
          <Route path="/1980" component={year1980}/>
        </div>
      </Router>
    );
  }
}
