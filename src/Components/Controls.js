import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MenuLinks from './MenuLinks.js';

export default class Controls extends Component {
  render() {
    return (
      <header className={"App-header " + this.props.className}>
        <h1 className="App-title">
          <Link to="/">
            Backpedal
          </Link>
        </h1>
        <MenuLinks/>
      </header>
    );
  }
}
