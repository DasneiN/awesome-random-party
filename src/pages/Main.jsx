import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import Team from '../components/Team';
import Description from '../components/Description';

class Main extends Component {
  render() {
    const { team } = this.props;

    return (
      <>
        <h1><Trans>MainPage</Trans></h1>
        <Description />
        <Team team={team} />
      </>
    );
  }
}
export default Main;
