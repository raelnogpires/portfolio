import React, { Component } from 'react';

import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';

export default class Home extends Component {
  render() {
    return (
      <div id="main-home">
        <div id="nav-links">
          <Header />
        </div>
        <div id="name-and-stack">
          <span id="name">Rael Nogueira Pires</span>
          <span id="stack">back end developer</span>
        </div>
        <div id="social-links">
          <SocialLinks />
        </div>
      </div>
    );
  }
}
