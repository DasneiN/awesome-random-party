/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

import '../styles/gallery.css';
import '../styles/carousel.css';

class GallerySlide extends Component {
  render() {
    const {
      person, photo, index, isChecked, onChange,
    } = this.props;

    return (
      <li>
        <input
          className="carousel-toggle"
          type="radio"
          checked={isChecked && 'checked'}
          name="toggle"
          id={`tab-${index}`}
          onChange={() => onChange(index)}
        />
        <label className="dot" htmlFor={`tab-${index}`} />
        <ul className="carousel-content">
          <li>
            <img className="foto-works" src={photo} alt={`${person.general.nameArchitect} ${index + 1}`} />
            <label className="arrow back" htmlFor={`tab-${index === 0 ? person.fotoUrl.length - 1 : index - 1}`} />
            <label className="arrow next" htmlFor={`tab-${index === person.fotoUrl.length - 1 ? 0 : index + 1}`} />
          </li>
        </ul>
      </li>
    );
  }
}

export default GallerySlide;
