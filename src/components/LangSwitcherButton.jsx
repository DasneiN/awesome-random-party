import React, { Component } from 'react';

class LangSwitcherButton extends Component {
  constructor(props) {
    super(props);

    this.selectLangHandler = this.selectLangHandler.bind(this);
  }

  selectLangHandler() {
    const { onClick, lang } = this.props;

    onClick(lang);
  }

  render() {
    const { lang, image } = this.props;

    return (
      <button className="button button_language" type="button" onClick={this.selectLangHandler} lang={lang}>
        <img src={image} alt={lang} />
        <span>{lang}</span>
      </button>
    );
  }
}
export default LangSwitcherButton;
