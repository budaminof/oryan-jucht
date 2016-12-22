import React, { Component } from 'react';
import { translate } from 'react-translate';


class Puna extends Component {

  render () {
    const { t } = this.props;
    return (
      <div>
        <h2>{t('header')}</h2>
        <p>{t('text')}</p>
      </div>
    )
  }
}

export default translate('Puna')(Puna);
