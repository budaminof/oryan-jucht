import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#oryan-navbar" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Oryan Jucht</a>
          </div>

          <div className="collapse navbar-collapse" id="oryan-navbar">
            <ul className="nav navbar-nav">
              <li><a href="#">About</a></li>
              <li><a href="#">Puna</a></li>
              <li><a href="#">Classes</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
}
