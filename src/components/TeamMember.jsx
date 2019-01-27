import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class TeamMember extends Component {
  render() {
    const { github, name, avatar } = this.props;

    return (
      <div className="team__member">
        <img src={avatar} alt={`${name}'s avatar`} width="150" />
        <span className="team__member-name"><Trans>{name}</Trans></span>
        <div className="team__member-github">
          <a href={`https://github.com/${github}`}>{github}</a>
        </div>
      </div>
    );
  }
}
export default TeamMember;
