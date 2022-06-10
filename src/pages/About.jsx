import React, { Component } from 'react';

import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';
import Skills from '../components/Skills';

import perfilPhoto from '../perfil-photo.jpeg';

export default class About extends Component {
  render() {
    return (
      <div id="main-about">
        <div id="nav-links">
          <Header />
        </div>
        <div id="photo">
          <img src={ perfilPhoto } alt="rael n pires" />
        </div>
        <div id="about-me">
          <h2 id="hi">Olá, eu sou o Rael!</h2>
          <span id="about-text">
            Moro em São Sebastião/SP, aonde nasci e fui criado - um autêntico "caiçara". Aos 20 anos terminei uma graduação em Gestão Pública e decidi estudar sobre algo que sempre esteve ao meu redor e presente na minha vida, a Tecnologia.<br />
            <br />Sou desenvolvedor back-end, mas continuo trilhando meus estudos na Trybe para me tornar um desenvolvedor Web Full Stack e ter conhecimento sobre ciência de dados.<br />
            <br />Sigo estudando e trabalhando para poder contribuir com a sociedade e ajudar o mundo a ser um lugar melhor!
          </span>
        </div>
        <div id="skills">
          <h3 id="tech">Tecnologias</h3>
          <div id="icon-div">
            <Skills />
          </div>
        </div>
        <div id="social-links">
          <SocialLinks />
        </div>
      </div>
    );
  }
}
