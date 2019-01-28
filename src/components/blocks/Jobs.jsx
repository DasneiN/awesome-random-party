import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import uniqid from 'uniqid';
import JobsSection from './JobsSection';

import '../../styles/jobs.css';

class Jobs extends Component {
  render() {
    const { person } = this.props;

    return (
      <section className="person-page jobs">
        <h3 className="jobs-title"><Trans>Works</Trans></h3>
        {person.mainWorks.map(section => (
          <JobsSection key={uniqid()} section={section} />
        ))}
      </section>
    );
  }
}

export default Jobs;
