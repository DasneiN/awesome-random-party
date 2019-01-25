import React, { Component } from 'react';
import Main from '../pages/Main';

import mikhamaAvatar from '../images/team/mikhama.jpg';
import Pulya10cAvatar from '../images/team/Pulya10c.jpg';
import haspadarZPadMenskuAvatar from '../images/team/haspadarZ-padMensku.jpg';
import OlgaNaranovichAvatar from '../images/team/OlgaNaranovich.png';
import Kirill82Avatar from '../images/team/Kirill82.jpg';

import '../styles/App.css';

const TEAM = [
  {
    github: 'mikhama',
    name: 'Dzmitry Tsebruk',
    avatar: mikhamaAvatar,
  },
  {
    github: 'Pulya10c',
    name: 'Aleh Serhiyenia',
    avatar: Pulya10cAvatar,
  },
  {
    github: 'haspadarZ-padMensku',
    name: 'Dzianis Hancharou',
    avatar: haspadarZPadMenskuAvatar,
  },
  {
    github: 'OlgaNaranovich',
    name: 'Volha Naranovich',
    avatar: OlgaNaranovichAvatar,
  },
  {
    github: 'Kirill82',
    name: 'Kiryl Horbikau',
    avatar: Kirill82Avatar,
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
