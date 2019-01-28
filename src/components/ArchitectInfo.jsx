import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import '../styles/architect-info.css';

class ArchitectInfo extends Component {
  render() {
    const { person } = this.props;

    return (
      <section className="person-page architects-info">
        <div className="architects-info">
          <div className="foto-architects">
            <img className="source-foto" src={person.general.fotoArchitect} alt={person.general.nameArchitect} />
          </div>
          <div className="box-information">
            <div className="name-architects">
              <span className="name-architects-source">{person.general.nameArchitect}</span>
            </div>
            <div className="inform-architects">
              <span className="inform-architects-source">{person.general.information}</span>
            </div>
            <div className="yers-life-architects">
              <span className="headlines">
                <Trans>LifePeriod</Trans>
                :
              </span>
              <p className="source-life">{`${person.general.dateBirth} — ${person.general.dateDeath}`}</p>
            </div>
            <div className="city-birth-architects">
              <span className="headlines">
                <Trans>BirthPlace</Trans>
                :
              </span>
              <p className="source-birth">{`${person.general.countryBirth}, ${person.general.сityBirth}`}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ArchitectInfo;
