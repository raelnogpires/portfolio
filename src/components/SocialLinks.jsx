import React, { Component } from 'react'

const githubUrl = 'https://github.com/raelnogpires';
const linkedinUrl = 'https://www.linkedin.com/in/rnogpires/';

export default class SocialLinks extends Component {
  render() {
    return (
      <>
        <a
          href={ githubUrl }
          target="_blank"
          rel="noopener noreferrer"
          className="git-link"
        >
          <p>
            github
          </p>
        </a>
        <a
          href={ linkedinUrl }
          target="_blank"
          rel="noopener noreferrer"
          className="linked-link"
        >
          <p>
            linkedin
          </p>
        </a>
      </>
    )
  }
}