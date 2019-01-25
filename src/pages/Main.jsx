import React, { Component } from 'react';
import Team from '../components/Team';

class Main extends Component {
  render() {
    const { team } = this.props;

    return (
      <>
        <h1>Main Page</h1>
        <Team team={team} />
      </>
    );
  }
}
export default Main;
