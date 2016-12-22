import React, { Component } from 'react';
import { Link } from 'react-router';
import { translate } from 'react-translate';

class Nav extends Component {

  onLanguageChange(lang){
    let currentLanguage = lang.nativeEvent.target.innerHTML;
    this.props.changeLanguage(currentLanguage);
    return 
  }

  render() {
    const { t } = this.props;

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
            <Link to="/" className="navbar-brand">{t('name')}</Link>
          </div>

          <div className="collapse navbar-collapse" id="oryan-navbar">
            <ul className="nav navbar-nav">
              <li><Link to="/about">{t('about')}</Link></li>
              <li><Link to="/puna">{t('puna')}</Link></li>
              <li><Link to="/classes">{t('classes')}</Link></li>
              <li>
                <button onClick={event => this.onLanguageChange(event) }>
                  HE
                </button>
              </li>
              <li>
                <button onClick={event => this.onLanguageChange(event) }>
                  EN
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
}

export default translate("Nav")(Nav);
