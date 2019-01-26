import React, { Component } from 'react';
import i18n from 'i18next';
import Main from '../pages/Main';
import team from '../config/team';

import '../styles/App.css';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.selectLangHandler = this.selectLangHandler.bind(this);
    this.selectPageHandler = this.selectPageHandler.bind(this);

    const lang = localStorage.getItem('lang');

    this.state = {
      lang,
      currentPage: 'Main',
    };
  }

  selectLangHandler(lang) {
    i18n.changeLanguage(lang);

    this.setState({
      lang,
    });

    localStorage.setItem('lang', lang);
  }

  selectPageHandler(currentPage) {
    this.setState({
      currentPage,
    });
  }

  render() {
    const { lang, currentPage } = this.state;

    let page;
    switch (currentPage) {
      case 'Architects': {
        page = <div>Here must be Architects page</div>;
        break;
      }
      default:
        page = <Main team={team} lang={lang} />;
    }

    return (
      <>
        <Header
          selectLangHandler={this.selectLangHandler}
          selectPageHandler={this.selectPageHandler}
        />
        {page}
      </>
    );
  }
}
export default App;
