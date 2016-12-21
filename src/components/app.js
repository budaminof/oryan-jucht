import React, { Component } from 'react';
import Footer from '../components/footer';
import Nav from '../components/nav';
import About from '../components/about';

export default class App extends Component {
  render() {
    return (
      <main>
        <Nav />
          <div className="container-fluid">
            { this.props.children }
          </div>
        <Footer />
      </main>
    );
  }
}
