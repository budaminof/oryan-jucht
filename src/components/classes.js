import React, { Component } from 'react';
import { translate } from 'react-translate';


class Classes extends Component {

  render () {
    const { t } = this.props;

    const calendarStyle = {
      style: "border: 0",
      width: "800",
      height: "600",
      frameborder: "0",
      scrolling: "no"
    }

    return (
      <div>
        <h2>{t('header')}</h2>
        <p>{t('contact')}</p>
        <p>{t('email')}</p>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=budaminof%40gmail.com&ctz=America/Denver"
          style={ calendarStyle }
          >
        </iframe>
      </div>
    )
  }
}

export default translate('Classes')(Classes);
