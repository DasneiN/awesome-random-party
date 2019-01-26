import React, { Component } from 'react';
import ArchitectInfo from '../components/ArchitectInfo';

class Architect extends Component {
  render() {
    const { person } = this.props;

    return (
      <>
        <ArchitectInfo person={person} />
      </>
    );
  }
}
export default Architect;
