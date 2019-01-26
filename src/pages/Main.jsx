import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import Team from '../components/Team';

class Main extends Component {
  render() {
    const { team } = this.props;

    return (
      <>
        <h1><Trans>MainPage</Trans></h1>
        <Team team={team} />
      </>
    );
  }
}
export default Main;
