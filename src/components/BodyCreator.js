import React, { Component } from 'react'
import { Modal, Card, Image } from 'semantic-ui-react'

class BodyCreator extends Component {
  render() {
    let { line1, line2, line3, image, header, link } = this.props
    return (
      <Modal
        size="large"
        trigger={
          <Card>
            <Image src={image} />
            <Card.Content>
              <Card.Header>{header}</Card.Header>
            </Card.Content>
          </Card>
        }
      >
        <Modal.Header>{header}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="huge" src={image} />
          <Modal.Description className="modal-text">
            <p>{line1}</p>
            <p>{line2}</p>
            <p>{line3}</p>
            {link && (
              <a href={link} target="_blank">
                <p>Here is the link if you want to check out the video!</p>
              </a>
            )}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default BodyCreator
