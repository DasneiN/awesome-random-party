import React, { Component } from 'react';
import uniqid from 'uniqid';
import TeamMember from './TeamMember';

class Team extends Component {
  render() {
    const { team } = this.props;

    return (
      <>
        {team.map(member => (
          <TeamMember key={uniqid()} name={member.name} avatar={member.avatar} />
        ))}
      </>
    );
  }
}
export default Team;
