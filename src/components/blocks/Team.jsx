import React, { Component } from 'react';
import uniqid from 'uniqid';
import { Trans } from 'react-i18next';
import TeamMember from './TeamMember';

import '../../styles/team.css';

class Team extends Component {
  render() {
    const { team } = this.props;

    return (
      <section className="team section">
        <h2 className="h2"><Trans>Team</Trans></h2>
        <div className="team__container items-wrap">
          {team.map(member => (
            <TeamMember
              key={uniqid()}
              github={member.github}
              name={member.name}
              avatar={member.avatar}
            />
          ))}
        </div>
      </section>
    );
  }
}
export default Team;
