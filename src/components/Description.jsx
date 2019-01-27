import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class Description extends Component {
  render() {
    return (
      <section className="description section">
        <h2 className="h2"><Trans>DescriptionHeading</Trans></h2>
        <p><Trans>SiteDescription</Trans></p>
      </section>
    );
  }
}
export default Description;
