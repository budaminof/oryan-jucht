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
    return (lang == 'EN') ? this.setState({ LANG: EN }) : this.setState({ LANG: HE });
  }

  render() {
    const clonedElement = React.cloneElement(this.props.children, { language: this.state.LANG });

    return (
      <TranslatorProvider translations={ this.state.LANG }>
        <main>
          <Nav changeLanguage={ this.currentLanguage.bind(this) } location={ this.props.location.pathname } />
            <div>
              { clonedElement }
            </div>
        </main>
      </TranslatorProvider>
    );
  }
}
