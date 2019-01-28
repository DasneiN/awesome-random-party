import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import '../../styles/architect-short-info.css';

class ArchitectShortInfo extends Component {
  static cutInfo(info, maxLength = 20) {
    if (info.length > maxLength) {
      return `${info.slice(0, maxLength)} ...`;
    }

    return info;
  }

  render() {
    const { data, person, onClick } = this.props;

    return (
      <section className="architect-short-info section">
        <div className="architect-short-info__content">
          <div className="photo architect-short-info__photo">
            <img src={person.general.fotoArchitect} alt={person.general.nameArchitect} width="150" />
          </div>
          <div className="architect-short-info__text">
            <h3 className="h3">{person.general.nameArchitect}</h3>
            <div className="architect-short-info__description">
              <p>{ArchitectShortInfo.cutInfo(person.general.information, 400)}</p>
            </div>
            <button className="button architect-short-info__button" type="button" onClick={() => onClick(data.indexOf(person))}>
              <Trans>More</Trans>
            </button>
          </div>
        </div>
      </section>
    );
  }
}
export default ArchitectShortInfo;
