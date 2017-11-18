import React, {Component} from 'react';
import './App.css';
import Controls from './Components/Controls.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import year1990 from './Components/1990.js';
import year1980 from './Components/1980.js';
import year1930 from './Components/1930.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route render={(location) => {
            const className = (location.location.pathname === '/') ? 'focus' : '';
            return (
              <Controls className={className}/>
            );
          }}/>
          <Route path="/1930" component={year1930}/>
          <Route path="/1980" component={year1980}/>
          <Route path="/1990" component={year1990}/>
        </div>
      </Router>
    );
  }
}
