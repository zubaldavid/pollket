import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <div className='login-form'>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header style={{color: '#5B5C5C'}} as='h1' textAlign='center'>
          <Image src='/logo.png' /> politcaldatainc.
        </Header>
        <br/>
        <Form size='large'>
          <Segment raised>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Link to='/campaign'>
              <Button style={{ backgroundColor: '#97C93C', color: '#5B5C5C'}} fluid size='large'>
                Login
              </Button>
            </Link>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm;
