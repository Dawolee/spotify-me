import React, { Component } from 'react'

export default class ContactMe extends Component {
  render() {
    return (
      <div id="contact" className="paragraph-container">
        <h1 className="text contact-header underline">My Contact Info</h1>
        <p className="paragraph">
          You can contact me by Email at daniel.lee9415@gmail.com
        </p>
        <p className="paragraph">or by phone at 917-446-4667</p>
        <div className="social-media">
          <a
            className="icons"
            href="https://github.com/Dawolee"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github fa-2x" />
          </a>
          <a
            className="icons"
            href="https://www.linkedin.com/in/da-woon-lee/ "
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin-in fa-2x" />
          </a>
        </div>
      </div>
    )
  }
}
