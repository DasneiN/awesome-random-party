import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import '../styles/not-found.css';

class NotFound extends Component {
  render() {
    return (
      <section className="not-found section">
        <div className="not-found__text">
          <p><Trans>NotFound</Trans></p>
        </div>
      </section>
    );
  }
}
export default NotFound;
