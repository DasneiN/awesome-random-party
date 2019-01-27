import React, { Component } from 'react';
import uniqid from 'uniqid';
import LangSwitcherButton from './LangSwitcherButton';

import by from '../images/lang/by.png';
import en from '../images/lang/en.png';
import ru from '../images/lang/ru.png';

const langImages = { by, en, ru };

class LangSwitcher extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <div className="header__language">
        {['by', 'ru', 'en'].map(lang => (
          <LangSwitcherButton
            key={uniqid()}
            lang={lang}
            image={langImages[lang]}
            onClick={onClick}
          />
        ))}
      </div>
    );
  }
}
export default LangSwitcher;
