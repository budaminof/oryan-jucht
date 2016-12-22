import React, { Component } from 'react';
import { TranslatorProvider } from "react-translate";

import EN from '../i18n/en';
import HE from '../i18n/he';
import Nav from '../components/nav';
import About from '../components/about';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      LANG: EN
    }
  }

  currentLanguage(lang) {
    if (lang == 'EN') this.setState({ LANG: EN});
    else this.setState({ LANG: HE });
    return
  }

  render() {
    return (
      <TranslatorProvider translations={ this.state.LANG }>
        <main>
          <Nav changeLanguage={ this.currentLanguage.bind(this) }/>
            <div className="container-fluid">
              { this.props.children }
            </div>
        </main>
      </TranslatorProvider>
    );
  }
}
