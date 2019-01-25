import React, { Component } from 'react';

class TeamMember extends Component {
  render() {
    const { github, name, avatar } = this.props;

    return (
      <div clasName="team-member">
        <img src={avatar} alt={`${name}'s avatar`} width="100" height="100" />
        <span>{name}</span>
        <a href={`https://github.com/${github}`}>{github}</a>
      </div>
    );
  }
}
export default TeamMember;
