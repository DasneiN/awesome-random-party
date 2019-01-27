import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import uniqid from 'uniqid';
import JobsSection from './JobsSection';

class Jobs extends Component {
  render() {
    const { person } = this.props;

    return (
      <>
        <h3><Trans>Works</Trans></h3>
        <div>
          {person.mainWorks.map(section => (
            <JobsSection key={uniqid()} section={section} />
          ))}
        </div>
      </>
    );
  }
}

export default Jobs;
