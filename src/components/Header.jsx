import React from 'react';
import { Trans } from 'react-i18next';
import LangSwitcher from './LangSwitcher';
import Navbar from './Navbar';

const Header = (props) => {
  const { selectLangHandler, selectPageHandler } = props;
  return (
    <>
      <h1><Trans>SiteName</Trans></h1>
      <LangSwitcher onClick={selectLangHandler} />
      <Navbar onClick={selectPageHandler} />
    </>
  );
};

export default Header;
