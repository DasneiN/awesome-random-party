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
    const { lang } = this.props;

    return (
      <button type="button" onClick={this.selectLangHandler} lang={lang}>{lang}</button>
    );
  }
}
export default LangSwitcherButton;
