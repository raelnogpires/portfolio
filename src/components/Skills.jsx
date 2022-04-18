import React, { Component } from 'react';
import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiJest } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

export class Skills extends Component {
  render() {
    return (
      <>
      <div className="skill-icon">
        <FaHtml5 />
        <p>HTML</p>
      </div>
      <div className="skill-icon">
        <FaCss3Alt />
        <p>CSS</p>
      </div>
      <div className="skill-icon">
        <FaGitAlt />
        <p>Git</p>
      </div>
      <div className="skill-icon">
        <IoLogoJavascript />
        <p>JavaScript</p>
      </div>
      <div className="skill-icon">
        <FaReact />
        <p>ReactJS</p>
      </div>
      <div className="skill-icon">
        <SiJest />
        <p>Jest</p>
      </div>
      <div className="skill-icon">
        <FaNodeJs />
        <p>NodeJS</p>
      </div>
      <div className="skill-icon">
        <GrMysql />
        <p>MySQL</p>
      </div>
      </>
    );
  }
};

export default Skills