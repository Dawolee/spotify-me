import React, { Component } from 'react'
import './App.css'
import { Menu } from 'semantic-ui-react'
import { AboutMe, Intro, ContactMe, FeatureProposal } from './components'
import scrollToComponent from 'react-scroll-to-component'

class App extends Component {
  constructor(props) {
    super(props)
    this.aboutMe = React.createRef()
    this.contactMe = React.createRef()
    this.featureProposal = React.createRef()
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="App">
        <Menu fixed="top" inverted widths={3}>
          <Menu.Item
            onClick={() =>
              scrollToComponent(this.aboutMe, {
                offset: -100,
                align: 'top',
                duration: 1000
              })
            }
            position="right"
            name="About Me"
          />
          <Menu.Item
            onClick={() =>
              scrollToComponent(this.featureProposal, {
                offset: -100,
                align: 'top',
                duration: 1000
              })
            }
            name="Feature Proposal"
          />
          <Menu.Item
            onClick={() =>
              scrollToComponent(this.contactMe, {
                offset: -100,
                align: 'top',
                duration: 1000
              })
            }
            name="Contact Me"
          />
        </Menu>
        <Intro />
        <AboutMe
          ref={section => {
            this.aboutMe = section
          }}
        />
        <FeatureProposal
          ref={section => {
            this.featureProposal = section
          }}
        />
        <ContactMe
          ref={section => {
            this.contactMe = section
          }}
        />
      </div>
    )
  }
}

export default App
