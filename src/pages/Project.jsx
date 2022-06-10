import React, { Component } from 'react';

import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';
import CardProject from '../components/CardProject';

import data from '../projects.json';

export default class Project extends Component {
  render() {
    return (
      <>
        <div id="main-project">
          <div id="nav-links">
            <Header />
          </div>
          <div id="page-info">
            <p>Projetos que realizei para consolidar conhecimentos e tecnologia dentro e fora da Trybe.</p>
          </div>
          <div id="projects-div">
            { data.map((p) => {
              return <CardProject project={ p } />
            }) }
          </div>
          <div id="social-links">
            <SocialLinks />
          </div>
        </div>
      </>
    );
  }
}
