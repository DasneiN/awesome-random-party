import React, { Component } from 'react';
import i18n from 'i18next';
import Main from './pages/Main';
import Architects from './pages/Architects';
import Architect from './pages/Architect';
import Header from './blocks/Header';
import Loader from './blocks/Loader';
import Footer from './blocks/Footer';
import team from '../config/team';

import '../styles/base.css';
import '../styles/media.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.selectLangHandler = this.selectLangHandler.bind(this);
    this.selectPageHandler = this.selectPageHandler.bind(this);
    this.getPersonToShow = this.getPersonToShow.bind(this);

    const lang = localStorage.getItem('lang');

    this.state = {
      data: [],
      lang,
      currentPage: 'Main',
      isLoading: true,
      indexPersonToShow: null,
    };
  }

  async componentDidMount() {
    const { lang } = this.state;

    this.loadData(lang);
  }

  getPersonToShow(indexPersonToShow) {
    this.setState({
      indexPersonToShow,
    });

    this.selectPageHandler('Architect');
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
      lang, data, isLoading, currentPage, indexPersonToShow,
    } = this.state;

    let page;
    if (isLoading) {
      page = <Loader />;
    } else {
      switch (currentPage) {
        case 'Architects': {
          page = (
            <Architects
              data={data}
              getPersonToShow={this.getPersonToShow}
              selectPageHandler={this.selectPageHandler}
            />
          );
          break;
        }
        case 'Architect': {
          page = <Architect data={data} indexPersonToShow={indexPersonToShow} />;
          break;
        }
        default:
          page = (
            <Main
              team={team}
              lang={lang}
              data={data}
              getPersonToShow={this.getPersonToShow}
              selectPageHandler={this.selectPageHandler}
            />
          );
      }
    }

    return (
      <>
        <Header
          currentPage={currentPage}
          selectLangHandler={this.selectLangHandler}
          selectPageHandler={this.selectPageHandler}
        />
        <div className="container">
          {page}
        </div>
        <Footer />
      </>
    );
  }
}
export default App;
