import React, { Component } from 'react';

class Team extends Component {
  render() {
    const { name, avatar } = this.props;

    return (
      <img src={avatar} alt={`${name}'s avatar`} width="100" height="100" />
    );
  }
}
export default Team;
