import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import Team from '../components/Team';
import ArchitectShortInfo from '../components/ArchitectShortInfo';
import Description from '../components/Description';

class Main extends Component {
  static getRandomPerson(persons) {
    const randomIndex = Math.floor(Math.random() * (persons.length - 1));

    return persons[randomIndex];
  }

  render() {
    const { team, data } = this.props;
    const person = Main.getRandomPerson(data);

    return (
      <>
        <h1><Trans>MainPage</Trans></h1>
        <h2><Trans>ArchitectOfTheDay</Trans></h2>
        <ArchitectShortInfo person={person} />
        <Description />
        <Team team={team} />
      </>
    );
  }
}
export default Main;
