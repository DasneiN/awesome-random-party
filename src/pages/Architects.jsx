import React, { Component } from 'react';
import uniqid from 'uniqid';
import ArchitectShortInfo from '../components/ArchitectShortInfo';
import Search from '../components/Search';

class Architects extends Component {
  constructor(props) {
    super(props);

    this.inputTextHandler = this.inputTextHandler.bind(this);

    this.state = {
      filter: '',
    };
  }

  static getFilteredArchitects(architects, filter) {
    if (filter.length === 0) return architects;

    const preparedFilter = filter.trim().toLowerCase();
    const filtered = architects.filter((architect) => {
      const isNameMatch = architect.general.nameArchitect.toLowerCase()
        .indexOf(preparedFilter) !== -1;
      const isCityMatch = architect.general.сityBirth.toLowerCase()
        .indexOf(preparedFilter) !== -1;

      if (isNameMatch || isCityMatch) {
        return true;
      }
      return false;
    });

    return filtered;
  }

  inputTextHandler(text) {
    this.setState({
      filter: text,
    });
  }

  render() {
    const { data, getPersonToShow } = this.props;
    const { filter } = this.state;

    const architects = Architects.getFilteredArchitects(data, filter);

    return (
      <main className="main">
        <Search onChange={this.inputTextHandler} />
        {
          architects.map(architect => (
            <ArchitectShortInfo
              key={uniqid()}
              person={architect}
              onClick={getPersonToShow}
            />
          ))
        }
      </main>
    );
  }
}
export default Architects;
