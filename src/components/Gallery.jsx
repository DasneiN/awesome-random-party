import React, { Component } from 'react';
import uniqid from 'uniqid';
import { Trans } from 'react-i18next';
import GallerySlide from './GallerySlide';

import '../styles/gallery.css';
import '../styles/carousel.css';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.carouselToggleSlider = this.carouselToggleSlider.bind(this);

    this.state = {
      checkedIndex: 0,
    };
  }

  carouselToggleSlider(index) {
    this.setState({
      checkedIndex: index,
    });
  }

  render() {
    const { person } = this.props;
    const { checkedIndex } = this.state;

    return (
      <section className="person-page gallery">
        <h3 className="gallery-title"><Trans>Gallery</Trans></h3>
        <div className="gallery-foto">
          <ul className="carousel-container">
            {
              person.fotoUrl.map((photo, index) => (
                <GallerySlide
                  key={uniqid()}
                  person={person}
                  photo={photo}
                  index={index}
                  isChecked={index === checkedIndex}
                  onChange={this.carouselToggleSlider}
                />
              ))
            }
          </ul>
        </div>
      </section>
    );
  }
}

export default Gallery;
