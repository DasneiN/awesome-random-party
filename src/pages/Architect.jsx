import React, { Component } from 'react';
import ArchitectInfo from '../components/ArchitectInfo';
import TimelineBio from '../components/TimelineBio';

class Architect extends Component {
  render() {
    const { person } = this.props;

    return (
      <>
        <ArchitectInfo person={person} />
        <TimelineBio person={person} />
      </>
    );
  }
}
export default Architect;
