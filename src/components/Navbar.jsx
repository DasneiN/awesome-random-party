import React, { Component } from 'react';
import uniqid from 'uniqid';
import NavbarButton from './NavbarButton';

class Navbar extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <div className="navbar">
        {['Main', 'Architects'].map(page => (
          <NavbarButton key={uniqid()} page={page} onClick={onClick} />
        ))}
      </div>
    );
  }
}

export default Navbar;
