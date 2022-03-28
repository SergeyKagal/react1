import { Component } from 'react';
import { Navbar } from './navbar';

export class ErrorPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="error-wrapper purple darken-2">
          <h2 className="error-text">404 Error...</h2>
        </div>
      </div>
    );
  }
}
