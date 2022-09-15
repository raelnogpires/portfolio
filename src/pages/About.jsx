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
          Moro em São Sebastião, litoral norte de São Paulo, município em que nasci e fui criado. Aos 20 anos terminei uma graduação de Tecnologia em Gestão Pública e decidir estudar sobre algo que sempre esteve ao meu redor e presente na minha vida, a Tecnologia.<br />
          <br />Sou desenvolvedor Back-end com formação em Desenvolvimento Web Full-stack em andamento pela Trybe, com conhecimento técnico e experiência comprovada em desenvolvimento de projetos tanto no Front-end, quanto Back-end e com uma pitada de Ciência da Computação.<br />
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
