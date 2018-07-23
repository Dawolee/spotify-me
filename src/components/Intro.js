import React, { Component } from 'react'
import { me } from '../images'

export default class Intro extends Component {
  render() {
    return (
      <div id="intro">
        <div id="my-picture">
          <img className="me" src={me} alt="myself" />
        </div>
        <div className="paragraph-container">
          <h1 className="text">
            Hello <span className="spotify">Spotify</span>, my name is Da Woon
            Lee!
          </h1>
          <p className="paragraph">
            I am applying to the Spotify Fellowship Program via Tech Talent
            Pipeline and here is what I have to offer! But first a little bit
            about myself and why I am applying to Spotify!
          </p>
        </div>
      </div>
    )
  }
}
