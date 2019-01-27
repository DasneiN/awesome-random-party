import React, { Component } from 'react';
import ArchitectInfo from '../components/ArchitectInfo';
import TimelineBio from '../components/TimelineBio';
import Video from '../components/Video';
import Gallery from '../components/Gallery';

class Architect extends Component {
  render() {
    const { person } = this.props;

    return (
      <main className="main">
        <ArchitectInfo person={person} />
        <TimelineBio person={person} />
        <Video person={person} />
        <Gallery person={person} />
      </main>
    );
  }
}
export default Architect;
