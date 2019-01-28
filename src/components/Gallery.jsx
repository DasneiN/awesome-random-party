import React, { Component } from 'react';
import uniqid from 'uniqid';
import { Trans } from 'react-i18next';

import '../styles/gallery.css';

class Gallery extends Component {
  render() {
    const { person } = this.props;

    return (
      <section className="person-page gallery">
        <h3 className="gallery-title"><Trans>Gallery</Trans></h3>
        <div className="gallery-foto">
          <ul className="carousel-container">
            {
              person.fotoUrl.map((photo, index) => (
                <li key={uniqid()}>
                  <input className="carousel-toggle" type="radio" name="toggle" checked="checked" id="tab-0" />
                  <span className="dot" htmlFor="tab-0" />
                  <ul className="carousel-content">
                    <li>
                      <img className="foto-works" src={photo} alt={`${person.general.nameArchitect} ${index + 1}`} />
                      <span className="arrow back" htmlFor="tab-9" />
                      <span className="arrow next" htmlFor="tab-1" />
                    </li>
                  </ul>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    );
  }
}
export default Gallery;
