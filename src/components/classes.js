import React, { Component } from 'react';
import { translate } from 'react-translate';


class Classes extends Component {

  render () {
    let language = this.props.language.locale;
    const { t } = this.props;

    return (
      <article className={ (language == 'en') ? 'text-left container-fluid' : 'text-right container-fluid' }>
        <h2>{t('header')}</h2>
        <p>{t('contact')}</p>
        <p>{t('email')}</p>
        <div className="responsive-cal">
          <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=o8iohn9r5ugq5fd47e0c005v2g%40group.calendar.google.com&amp;color=%232F6309&amp;ctz=Asia%2FJerusalem" frameBorder="0" scrolling="no"
          ></iframe>
        </div>
      </article>
    )
  }
}

export default translate('Classes')(Classes);
