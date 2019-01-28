import React, { Component } from 'react';
import ArchitectInfo from '../blocks/ArchitectInfo';
import TimelineBio from '../blocks/TimelineBio';
import Video from '../blocks/Video';
import Gallery from '../blocks/Gallery';
import Map from '../blocks/Map';
import Jobs from '../blocks/Jobs';

class Architect extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { data, indexPersonToShow } = this.props;

    return (
      <main className="main">
        <ArchitectInfo person={data[indexPersonToShow]} />
        <TimelineBio person={data[indexPersonToShow]} />
        <Jobs person={data[indexPersonToShow]} />
        <Gallery person={data[indexPersonToShow]} />
        <Video person={data[indexPersonToShow]} />
        <Map person={data[indexPersonToShow]} />
      </main>
    );
  }
}
export default Architect;
