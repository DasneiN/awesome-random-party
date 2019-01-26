import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class ArchitectInfo extends Component {
  render() {
    const { person } = this.props;

    return (
      <div className="architect-info">
        <img src={person.general.fotoArchitect} alt={person.general.nameArchitect} width="300" height="300" />
        <h2>{person.general.nameArchitect}</h2>
        <p>{person.general.information}</p>
        <p>
          <span>
            <Trans>LifePeriod</Trans>
            :
          </span>
          {`${person.general.dateBirth} — ${person.general.dateDeath}`}
        </p>
        <p>
          <span>
            <Trans>BirthPlace</Trans>
            :
          </span>
          {`${person.general.countryBirth}, ${person.general.сityBirth}`}
        </p>
      </div>
    );
  }
}
export default ArchitectInfo;
