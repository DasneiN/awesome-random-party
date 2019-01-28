import React, { Component } from 'react';
import uniqid from 'uniqid';
import { Trans } from 'react-i18next';
import Lightbox from 'lightbox-react';

import 'lightbox-react/style.css';
import '../../styles/video.css';

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { person } = this.props;
    const { isOpen, videoIndex } = this.state;

    const id = uniqid();

    const videos = person.videoUrl.map(video => (
      <iframe
        title={id}
        key={id}
        src={video}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '60%',
        }}
      />
    ));

    return (
      <section id="video" className="person-page video">
        <div className="conteiner-video">
          {
            isOpen && (
              <Lightbox
                mainSrc={videos[videoIndex]}
                nextSrc={videos[(videoIndex + 1) % videos.length]}
                prevSrc={videos[(videoIndex + videos.length - 1) % videos.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() => this.setState({
                  videoIndex: (videoIndex + videos.length - 1) % videos.length,
                })}
                onMoveNextRequest={() => this.setState({
                  videoIndex: (videoIndex + 1) % videos.length,
                })}
              />
            )
          }
          <button className="gallery-video" type="button" onClick={() => this.setState({ isOpen: true })}><Trans>ShowVideo</Trans></button>
        </div>
      </section>
    );
  }
}
export default Video;
