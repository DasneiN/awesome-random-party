import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class TeamMember extends Component {
  render() {
    const { github, name, avatar } = this.props;

    return (
      <div className="team-member">
        <img src={avatar} alt={`${name}'s avatar`} width="100" height="100" />
        <span><Trans>{name}</Trans></span>
        <a href={`https://github.com/${github}`}>{github}</a>
      </div>
    );
  }
}
export default TeamMember;
