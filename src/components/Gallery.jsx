import React, { Component } from 'react';
import uniqid from 'uniqid';
import { Trans } from 'react-i18next';

class Gallery extends Component {
  render() {
    const { person } = this.props;

    return (
      <div className="gallery">
        <h3><Trans>Gallery</Trans></h3>
        {
          person.fotoUrl.map((photo, index) => (
            <img key={uniqid()} src={photo} alt={`${person.general.nameArchitect} ${index + 1}`} width="200" />
          ))
        }
      </div>
    );
  }
}
export default Gallery;
