import React, { Component } from 'react'
import { demo, demo2 } from '../images'

export default class FeatureProposal extends Component {
  render() {
    return (
      <div id="feature-proposal">
        <h1 className="text underline spotify">My Feature Proposal</h1>
        <div id="feature-container">
          <div id="demo-gif">
            <img className="gif" src={demo} alt="feature demo" />
          </div>
          <div className="paragraph-container">
            <h2 className="text underline">Playlist Cleaner</h2>
            <p className="paragraph ">
              Have you ever felt the pain of having to review your long playlist
              of bangers to weed out the songs you got tired of listening to? If
              so, my Playlist Cleaner feature would make your life easier!
            </p>
            <p className="paragraph ">
              After inspecting the object model for tracks from the Spotify Web
              API, I realized that there is a key called 'popularity'.
            </p>
          </div>
        </div>
        <div id="feature-container2">
          <div className="paragraph-container">
            <p className="paragraph ">
              My Playlist Cleaner feature would use a key very similar to the
              'popularity' key, and would either move the song into a separate
              sub-playlist for songs that are often skipped or just remove the
              song from the playlist depending on the 'skipRatio.'
            </p>
            <p className="paragraph ">
              Instead of having to review and remove songs from your playlist
              one at a time, the sub-playlist will hold all the songs for easy
              review!
            </p>
          </div>
          <div id="demo-jpeg">
            <img className="jpeg" src={demo2} alt="feature demo" />
          </div>
        </div>
      </div>
    )
  }
}
