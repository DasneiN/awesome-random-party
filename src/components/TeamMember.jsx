import React, { Component } from 'react';

class TeamMember extends Component {
  render() {
    const { name, avatar } = this.props;

    return (
      <div clasName="team-member">
        <img src={avatar} alt={`${name}'s avatar`} width="100" height="100" />
        <p>{name}</p>
      </div>
    );
  }
}
export default TeamMember;
