import React, { Component } from "react";

export default class CardProject extends Component {
  render() {
    const { project } = this.props;

    return (
      <>
        <div id="card-div">
          <a href={ project.url } rel="noreferrer" target="_blank">
            <h3>{ project.name }</h3>
            <p>{ project.description }</p>
          </a>
        </div>
      </>
    );
  }
}
