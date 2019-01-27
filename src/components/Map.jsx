import React, { Component } from 'react';
import uniqid from 'uniqid';
import { Trans } from 'react-i18next';

class Map extends Component {
  render() {
    const { person } = this.props;

    return (
      <>
        <h3><Trans>BirthPlace</Trans></h3>
        <iframe title={uniqid()} className="maps" src={person.mapSrc.url} frameBorder="0" style={{ border: 0 }} allowFullScreen />
      </>
    );
  }
}

export default Map;
