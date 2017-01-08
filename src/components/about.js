import React, { Component } from 'react';
import { translate } from 'react-translate';

class About extends Component {

  render () {
    let language = this.props.language.locale;
    const { t } = this.props;
    
    return (
      <article className={ (language == 'en') ? 'text-left container-fluid' : 'text-right container-fluid' }>
        <h2>{t('header')}</h2>
        <p>{t('text')}</p>
      </article>
    )
  }
}

export default translate('About')(About);
