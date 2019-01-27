import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class NavbarButton extends Component {
  constructor(props) {
    super(props);

    this.selectPageHandler = this.selectPageHandler.bind(this);
  }

  selectPageHandler() {
    const { onClick, page } = this.props;

    onClick(page);
  }

  render() {
    const { page, currentPage } = this.props;
    const isActive = page === currentPage;

    return (
      <button className={`button nav__button ${isActive && 'nav__button_active'}`} type="button" onClick={this.selectPageHandler}>
        <Trans>{page}</Trans>
      </button>
    );
  }
}

export default NavbarButton;
