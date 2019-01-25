import React, { Component } from 'react';
import Main from '../pages/Main';

import mikhamaAvatar from '../images/team/mikhama.jpg';

import '../styles/App.css';

const TEAM = [
  {
    name: 'mikhama',
    avatar: mikhamaAvatar,
  },
];

class App extends Component {
  render() {
    return (
      <Main team={TEAM} />
    );
  }
}
export default App;
