import React, { Component } from 'react';
import i18n from 'i18next';
import Main from '../pages/Main';
import Loader from './Loader';
import Footer from './Footer';
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

  selectPageHandler(currentPage) {
    this.setState({
      currentPage,
    });
  }

  render() {
    const {
      lang, data, isLoading, currentPage,
    } = this.state;

    let page;
    switch (currentPage) {
      case 'Architects': {
        page = <div>Here must be Architects page</div>;
        break;
      }
      default:
        page = <Main team={team} lang={lang} data={data} />;
    }

    return (
      <>
        <Header
          selectLangHandler={this.selectLangHandler}
          selectPageHandler={this.selectPageHandler}
        />
        {
          isLoading
            ? <Loader />
            : page
        }
        <Footer />
      </>
    );
  }
}
export default App;
