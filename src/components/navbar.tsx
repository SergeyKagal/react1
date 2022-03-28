import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper pad1 purple darken-2 z-depth-3">
          <Link className="brand-logo pad1 left " to="/">
            React. Components
          </Link>
          <ul id="nav" className="right">
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
