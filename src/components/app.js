import React, { Component } from 'react';
import Footer from '../components/footer';
import Nav from '../containers/nav';

export default class App extends Component {
  render() {
    return (
      <main>
        <Nav />
        <Footer />
      </main>
    );
  }
}
