import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <>
        <Link to="/" className="home hover">home</Link>
        <Link to="/about" className="about hover">sobre</Link>
        <Link to="/projects" className="project hover">projetos</Link>
      </>
    );
  }
}
