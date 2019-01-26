import React, { Component } from 'react';
import i18n from 'i18next';
import Main from '../pages/Main';
import LangSwitcher from './LangSwitcher';
import Loader from './Loader';
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
      isLoading: true,
    };
  }


  async componentDidMount() {
    const { lang } = this.state;

    this.loadData(lang);
  }

  async loadData(lang) {
    this.setState({
      isLoading: true,
    });

    const data = await fetch(`./data/data-${lang}.json`);

    this.setState({
      data: await data.json(),
      isLoading: false,
    });
  }

  selectLangHandler(lang) {
    i18n.changeLanguage(lang);

    this.setState({
      lang,
    });

    localStorage.setItem('lang', lang);
    this.loadData(lang);
  }

  render() {
    const { lang, data, isLoading } = this.state;

    return (
      <>
        <LangSwitcher onClick={this.selectLangHandler} />
        {
          isLoading
            ? <Loader />
            : <Main team={team} lang={lang} data={data} />
        }
        <Footer />
      </>
    );
  }
}
export default App;
