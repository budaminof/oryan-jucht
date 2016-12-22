import React, { Component } from 'react';
import { translate } from 'react-translate';

class About extends Component {

  render () {
    let language = this.props.language.locale;
    console.log('in ABOUT', language);
    const { t } = this.props;

    return (
      <div>
        <h2>{t('header')}</h2>
        <p>{t('text')}</p>
      </div>
    )
  }
}

export default translate('About')(About);
