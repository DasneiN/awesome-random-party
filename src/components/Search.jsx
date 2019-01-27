import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import '../styles/search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.textInputHandler = this.textInputHandler.bind(this);
  }

  textInputHandler(e) {
    const { onChange } = this.props;

    onChange(e.target.value);
  }

  render() {
    return (
      <div className="search">
        <label htmlFor="search" className="label search__label">
          <Trans>EnterPersonOrCity</Trans>
          <input className="input search__input" id="search" type="text" onChange={this.textInputHandler} />
        </label>
      </div>
    );
  }
}
export default Search;
