import React, { Component } from 'react';
import uniqid from 'uniqid';

import '../styles/map.css';

class Map extends Component {
  render() {
    const { person } = this.props;

    return (
      <section id="map" className="person-page map-box">
        <iframe title={uniqid()} className="maps" src={person.mapSrc.url} frameBorder="0" style={{ border: 0 }} allowFullScreen />
      </section>
    );
  }
}

export default Map;
