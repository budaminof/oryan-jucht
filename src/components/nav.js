import React, { Component } from 'react';
import { Link } from 'react-router';
import { translate } from 'react-translate';

class Nav extends Component {
  constructor (props) {
    super(props);

    this.state = {
      showNav: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    console.log(this.window);
    if ($(this).scrollTop() > 200) $('nav').addClass("sticky");
    else $('nav').removeClass("sticky");
  }

  onLanguageChange(lang) {
    let currentLanguage = lang.nativeEvent.target.innerHTML;
    this.props.changeLanguage(currentLanguage);
    return
  }

  navCollapse() {
    if (this.state.showNav) this.setState({ showNav: false });
    else this.setState({ showNav: true })
    return
  }

  render() {
    const { t } = this.props;

    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="full-nav">
            <p onClick={ event => this.onLanguageChange(event) } >
              HE
            </p>
            <p onClick={ event => this.onLanguageChange(event) } >
              EN
            </p>
            <h4><Link to="/about">
              { t('about') }
            </Link></h4>
            <h4><Link to="/classes">
              { t('classes') }
            </Link></h4>
          </div>

          <div className="nav-burger" onClick={ event => this.navCollapse(event) }>
            <div></div>
            <div></div>
            <div></div>
          </div>
      </nav>
      <div className={ this.state.showNav ? 'overlay' : 'hidden' } >
        <div className="close-nav" onClick={ event => this.navCollapse(event) }>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="nav-links">
          <h3><Link to="/about" onClick={ event => this.navCollapse(event) }>
            { t('about') }
          </Link></h3>
          <h3><Link to="/classes" onClick={ event => this.navCollapse(event) }>
            { t('classes') }
          </Link></h3>
          <div className="languages">
            <h4 onClick={ event => {
                this.onLanguageChange(event);
                this.navCollapse(event);
              } } >
              HE
            </h4>
            <h4 onClick={ event => {
                this.onLanguageChange(event);
                this.navCollapse(event);
              } } >
              EN
            </h4>
          </div>
        </div>
      </div>
      </div>
    );
  };
}

export default translate("Nav")(Nav);
