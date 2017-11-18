import React, { Component } from 'react';
import './MenuLinks.css';
import MenuLink from './MenuLink.js';

export default class MenuLinks extends Component {
  render() {
    return (
      <div className="MenuLinks">
        <ul>
          <MenuLink title="1930" link="/1930" />
          <MenuLink title="1980" link="/1980" />
          <MenuLink title="1990" link="/1990" />
        </ul>
      </div>
    );
  }
}
