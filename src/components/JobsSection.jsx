import React, { Component } from 'react';
import uniqid from 'uniqid';

class JobsSection extends Component {
  render() {
    const { section } = this.props;

    return (
      <>
        <h4>{section.nameWorks}</h4>
        <div>
          {section.list.map(item => (
            <div key={uniqid()}>{item}</div>
          ))}
        </div>
      </>
    );
  }
}

export default JobsSection;
