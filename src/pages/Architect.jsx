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
    const { data, indexPersonToShow } = this.props;

    return (
      <main className="main">
        <ArchitectInfo person={data[indexPersonToShow]} />
        <TimelineBio person={data[indexPersonToShow]} />
        <Jobs person={data[indexPersonToShow]} />
        <Video person={data[indexPersonToShow]} />
        <Gallery person={data[indexPersonToShow]} />
        <Map person={data[indexPersonToShow]} />
      </main>
    );
  }
}
export default Architect;
