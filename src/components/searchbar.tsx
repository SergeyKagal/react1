import { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar z-depth-4">
        <div className="row">
          <div className="col s12">
            <div className="input-field col s12">
              <input
                id="search"
                type="text"
                className="validate"
                placeholder="Enter a search query"
              />
              <label htmlFor="search"></label>
              <button className="btn purple darken-2 hoverable">Search</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
