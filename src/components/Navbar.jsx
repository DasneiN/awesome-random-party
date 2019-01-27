import React, { Component } from 'react';
import uniqid from 'uniqid';
import NavbarButton from './NavbarButton';

class Navbar extends Component {
  render() {
    const { onClick, currentPage } = this.props;

    return (
      <nav className="header__nav nav">
        {['Main', 'Architects'].map(page => (
          <NavbarButton key={uniqid()} page={page} currentPage={currentPage} onClick={onClick} />
        ))}
      </nav>
    );
  }
}

export default Navbar;
