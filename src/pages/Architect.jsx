import React, { Component } from 'react';
import ArchitectInfo from '../components/ArchitectInfo';
import TimelineBio from '../components/TimelineBio';
import Video from '../components/Video';
import Gallery from '../components/Gallery';
import Map from '../components/Map';
import Jobs from '../components/Jobs';

class Architect extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { person } = this.props;

    return (
      <main className="main">
        <ArchitectInfo person={person} />
        <TimelineBio person={person} />
        <Jobs person={person} />
        <Video person={person} />
        <Gallery person={person} />
        <Map person={person} />
      </main>
    );
  }
}
export default Architect;
