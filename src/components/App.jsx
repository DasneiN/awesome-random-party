import React, { Component } from 'react';
import i18n from 'i18next';
import Main from '../pages/Main';
import LangSwitcher from './LangSwitcher';
import Footer from './Footer';
import team from '../config/team';

import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.selectLangHandler = this.selectLangHandler.bind(this);

    const lang = localStorage.getItem('lang');

    this.state = {
      lang,
    };
  }

  selectLangHandler(lang) {
    i18n.changeLanguage(lang);

    this.setState({
      lang,
    });

    localStorage.setItem('lang', lang);
  }

  render() {
    const { lang } = this.state;

    return (
      <>
        <LangSwitcher onClick={this.selectLangHandler} />
        <Main team={team} lang={lang} />
        <Footer />
      </>
    );
  }
}
export default App;
