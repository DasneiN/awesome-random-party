import React, { Component } from 'react';
import uniqid from 'uniqid';

class JobsSection extends Component {
  render() {
    const { section } = this.props;

    return (
      <div className="box-name-works">
        <h2 className="name-works">{section.nameWorks}</h2>
        <ul className="name-works-list">
          {section.list.map(item => (
            <li className="list" key={uniqid()}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default JobsSection;
