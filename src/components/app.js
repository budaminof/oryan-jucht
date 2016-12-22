import React, { Component } from 'react';
import { TranslatorProvider } from "react-translate";

import EN from '../i18n/en';
import HE from '../i18n/he';
import Footer from '../components/footer';
import Nav from '../components/nav';
import About from '../components/about';

export default class App extends Component {

  render() {
    return (
      <TranslatorProvider translations={EN}>
        <main>
          <Nav />
            <div className="container-fluid">
              { this.props.children }
            </div>
          <Footer />
        </main>
      </TranslatorProvider>
    );
  }
}
