import React, { Component } from 'react'
import {Button, Grid, Icon, Segment, Step, } from 'semantic-ui-react'

function FacebookButton () {
  return (
    <Button>
       Facebook
    </Button>
  )
}

class NewStepsComponent extends Component {
  render () {
    return (
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column>
        <Step.Group>
          <Step active>
            <Icon name='globe' />
            <Step.Content>
              <Step.Title>Universe</Step.Title>
              <Step.Description>Choose a universe</Step.Description>
            </Step.Content>
          </Step>
          <Step >
            <Icon name='facebook f' />
            <Step.Content>
              <Step.Title>Publisher</Step.Title>
              <Step.Description>Sign into a publisher</Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Icon name='group' />
            <Step.Content>
              <Step.Title>Audience</Step.Title>
              <Step.Description>Choose a publisher audience</Step.Description>
            </Step.Content>
          </Step>
          <Step disabled>
            <Icon name='check' />
            <Step.Content>
              <Step.Title>Complete</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        <Segment style={{height: '500px', marginLeft: '10%',width: '80%'}}>
        <Button style={{float: 'left'}}>Back</Button>
        <Button style={{float: 'right'}}>Forward</Button>
            Component will go here
        </Segment>
      </Grid.Column>
    </Grid>
    )
  }
}

export default NewStepsComponent;
