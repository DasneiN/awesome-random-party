import React, { Component } from 'react';
import uniqid from 'uniqid';
import LangSwitcherButton from './LangSwitcherButton';

class LangSwitcher extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <div className="lang-switcher">
        {['by', 'ru', 'en'].map(lang => (
          <LangSwitcherButton key={uniqid()} lang={lang} onClick={onClick} />
        ))}
      </div>
    );
  }
}
export default LangSwitcher;
