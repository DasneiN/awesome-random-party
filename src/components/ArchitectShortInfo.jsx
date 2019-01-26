import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class ArchitectShortInfo extends Component {
  static cutInfo(info, maxLength = 20) {
    if (info.length > maxLength) {
      return `${info.slice(0, maxLength)} ...`;
    }

    return info;
  }

  render() {
    const { person } = this.props;

    return (
      <div className="architect-short-info">
        <img src={person.general.fotoArchitect} alt={person.general.nameArchitect} width="100" height="100" />
        <h3>{person.general.nameArchitect}</h3>
        <p>{ArchitectShortInfo.cutInfo(person.general.information, 100)}</p>
        <button type="button"><Trans>More</Trans></button>
      </div>
    );
  }
}
export default ArchitectShortInfo;
