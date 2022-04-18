import React, { Component } from 'react';
import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';
import perfilPhoto from '../perfil-photo.jpeg';

export default class About extends Component {
  componentDidMount() {
    document.title = 'Rael - Dev | Sobre';
  }

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
            <br />Atualmente sou estudante de Desenvolvimento Web Full-Stack pela Trybe, uma escola que te ensina a programar, a aprender e a trabalhar. Sigo estudando e trabalhando para poder contribuir com a sociedade e ajudar o mundo a ser um lugar melhor!
          </span>
        </div>
        <div id="social-links">
          <SocialLinks />
        </div>
      </div>
    );
  }
}
