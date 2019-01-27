import React, { Component } from 'react';
import uniqid from 'uniqid';
import ArchitectShortInfo from '../components/ArchitectShortInfo';
import Search from '../components/Search';
import NotFound from '../components/NotFound';

class Architects extends Component {
  constructor(props) {
    super(props);

    this.inputTextHandler = this.inputTextHandler.bind(this);

    this.state = {
      filter: '',
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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

    let searchResults;
    if (architects.length > 0) {
      searchResults = architects.map(architect => (
        <ArchitectShortInfo
          data={data}
          key={uniqid()}
          person={architect}
          onClick={getPersonToShow}
        />
      ));
    } else {
      searchResults = <NotFound />;
    }


    return (
      <main className="main">
        <Search onChange={this.inputTextHandler} />
        {searchResults}
      </main>
    );
  }
}
export default Architects;
