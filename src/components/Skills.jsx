import React, { Component } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  IoLogoJavascript,
  FaReact,
  SiJest,
  FaNodeJs,
  GrMysql,
} from 'react-icons/all';

export class Skills extends Component {
  render() {
    return (
      <>
      <div>
        <FaHtml5 />
        <p>HTML</p>
      </div>
      <div>
        <FaCss3Alt />
        <p>CSS</p>
      </div>
      <div>
        <FaGitAlt />
        <p>Git</p>
      </div>
      <div>
        <IoLogoJavascript />
        <p>JavaScript</p>
      </div>
      <div>
        <FaReact />
        <p>ReactJS</p>
      </div>
      <div>
        <SiJest />
        <p>Jest</p>
      </div>
      <div>
        <FaNodeJs />
        <p>NodeJS</p>
      </div>
      <div>
        <GrMysql />
        <p>MySQL</p>
      </div>
      </>
    );
  }
};

export default Skills