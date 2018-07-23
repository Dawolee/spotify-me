import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import BodyCreator from './BodyCreator'
import {
  guitar,
  drums,
  skateboard,
  ninja,
  graduation,
  youtube
} from '../images'

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <h1 id="about-me" className="text underline spotify">
          About Me
        </h1>
        <div id="tech-stack">
          <div className="paragraph-container">
            <p className="paragraph">
              I am a software engineer trained in Full Stack JavaScript,
              experienced in HTML, CSS, and React/Redux on the front end and
              Node.js on the backend.
            </p>
            <p className="paragraph">
              I am also familiar with these technologies: Express, Sequelize,
              React Native, Firebase, Heroku, Socket.io, Webpack, NPM. In
              addition, I am currently learning some Python!
            </p>
            <p className="paragraph">
              I was part of Fullstack Academy's 1802 NY Cohort and graduated on
              May 25, 2018. I loved every moment of this life changing
              experience and learned so much in a short period of time!
            </p>
          </div>
          <div id="my-graduation">
            <img className="graduation" src={graduation} alt="graudation" />
            <figcaption>Fullstack Academy Graduation!</figcaption>
          </div>
        </div>
        <div id="guitar-container">
          <ReactPlayer
            className="yt-video"
            url="https://www.youtube.com/watch?v=XtWOTyW-eyA"
          />
          <div className="paragraph-container">
            <p className="paragraph ">
              I have been playing the guitar since middle school and it still
              remains today as one of my favorite hobbies.
            </p>
          </div>
        </div>
        <div id="hobbies">
          <div className="hobby">
            <img className="hobby-images" src={skateboard} alt="skateboard" />
            <figcaption>Fancy looking kickflip</figcaption>
          </div>
          <div className="hobby">
            <p className="paragraph ">
              Some of my other favorite hobbies include: Skateboarding,
              snowboarding, playing video games and being a goofball!
            </p>
          </div>
          <div className="hobby">
            <img className="hobby-images" src={ninja} alt="ninja" />
            <figcaption>Powering up my ultimate move</figcaption>
          </div>
        </div>
        <h1 className="text pictures">
          Here are some pictures with short stories behind them!
        </h1>
        <div className="gallery">
          <BodyCreator
            image={guitar}
            line1="I used to be a part of my church's music group during my high school years. This was during a Christmas show, while I was going through my 'metal phase.'"
            line2="I ended up playing a metal remix of Carol of the Bells, and always get a laugh thinking back on it because most of the audience was elderly people."
            line3="Nonetheless, everyone enjoyed the show and I even played an encore!"
            header="Church Christmas Show"
          />
          <BodyCreator
            image={youtube}
            line1="This is a cover I made with a friend I met through YouTube over 8 years ago!!!"
            line2="I used to make guitar covers a lot back in the day and I was able to meet so many cool people through the web."
            line3="The friend in this video is from Finland, and the fact that I was able to meet people from around the world through the internet and music is honestly so amazing."
            link="https://www.youtube.com/watch?v=Eu3qJRKpAKY"
            header="YouTube Collaboration"
          />
          <BodyCreator
            image={drums}
            line1="Our high school had many music classes and held biannual concerts where each one of the classes played a set they practiced for the semester."
            line2="Since I always wanted to learn how to play the drums, I volunteered to be one of the three drummers for our class!"
            line3="Guitar class was definitely my favorite class in high school and moments like these, I will forever cherish."
            header="High School Concert"
          />
        </div>
        <h1 className="reasons-text">
          The reasons I am applying to Spotify are:
        </h1>
        <ul className="reasons">
          <li>
            I love the company's mission/vision and how they are using new and
            innovative technology to set them apart from others. With the way
            Spotify uses big tech trends such as Machine Learning and Big Data
            to produce such accurate recommendations, Spotify's outstanding
            success is well earned.
          </li>
          <li>
            I love the application and I use it almost everyday. The offline
            mode is godsend for me during my commutes and I love the fact that I
            can listen to music wherever I am, whenever I want. The Discover
            Weekly Playlist also knows my tastes very well and I end up spending
            so much time browsing through new artists from the recommendations
            that Discover gives me.
          </li>
          <li>
            I have an obsessive personality when it comes to activities or work
            I enjoy doing and I LOVE programming and Spotify. If I was able to
            pass the CPA Exam (Accountant Prior to Bootcamp) without enjoying
            the work I was doing, imagine what could be possible in a field that
            I love with a company that I am inspired by!
          </li>
        </ul>
      </div>
    )
  }
}
