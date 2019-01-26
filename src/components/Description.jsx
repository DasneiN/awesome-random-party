import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class Description extends Component {
  render() {
    return (
      <div className="description">
        <p><Trans>SiteDescription</Trans></p>
      </div>
    );
  }
}
export default Description;
