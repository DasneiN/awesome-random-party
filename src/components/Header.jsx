import React from 'react';
import { Trans } from 'react-i18next';
import LangSwitcher from './LangSwitcher';
import Navbar from './Navbar';

import '../styles/header.css';

const Header = (props) => {
  const { selectLangHandler, selectPageHandler, currentPage } = props;
  return (
    <header className="header">
      <div className="container header-container">
        <h1 className="h1"><Trans>SiteName</Trans></h1>
        <div className="header__content">
          <LangSwitcher onClick={selectLangHandler} />
          <Navbar onClick={selectPageHandler} currentPage={currentPage} />
        </div>
      </div>
    </header>
  );
};

export default Header;
