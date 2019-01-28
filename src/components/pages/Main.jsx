import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import Team from '../blocks/Team';
import ArchitectShortInfo from '../blocks/ArchitectShortInfo';
import Description from '../blocks/Description';

class Main extends Component {
  static getRandomPerson(persons) {
    const randomIndex = Math.floor(Math.random() * (persons.length - 1));

    return persons[randomIndex];
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { team, data, getPersonToShow } = this.props;
    const person = Main.getRandomPerson(data);

    return (
      <main className="main">
        <Description />
        <h2 className="h2"><Trans>ArchitectOfTheDay</Trans></h2>
        <ArchitectShortInfo data={data} person={person} onClick={getPersonToShow} />
        <Team team={team} />
      </main>
    );
  }
}
export default Main;
