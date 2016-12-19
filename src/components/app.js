import React, { Component } from 'react';
import Footer from '../components/footer';
import Nav from '../containers/nav';
import About from '../containers/about';

export default class App extends Component {
  render() {
    return (
      <main>
        <Nav />
          <div>
            { this.props.children }
          </div>
        <Footer />
      </main>
    );
  }
}
