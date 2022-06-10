import React, { Component } from 'react';
import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJest, SiTypescript, SiSequelize, SiExpress, SiJavascript, SiGoland } from 'react-icons/si';
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
        <SiJavascript />
        <p>JavaScript</p>
      </div>
      <div className="skill-icon">
        <SiTypescript />
        <p>TypeScript</p>
      </div>
      <div className="skill-icon">
        <SiGoland />
        <p>Golang</p>
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
        <SiExpress />
        <p>Express</p>
      </div>
      <div className="skill-icon">
        <SiSequelize />
        <p>Sequelize</p>
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