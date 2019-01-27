import React, { Component } from 'react';
import uniqid from 'uniqid';

import '../styles/jobs.css';

class JobsSection extends Component {
  render() {
    const { section } = this.props;

    return (
      <div className="box-name-works">
        <h2 className="name-works">
          {section.nameWorks}
          :
        </h2>
        <ul id="nameWorks" className="name-works-list">
          {section.list.map(item => (
            <li key={uniqid()} className="list">{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default JobsSection;
