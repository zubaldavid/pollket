import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {
  Button,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'

class TopHeader extends Component {
  render() {
    const style = {
      div : { leftheight:'60%', width: '90%', display: 'inline-block', topMargin: '100px'},
      segment: {height: '65px'},
      header: {color: '#5B5C5C'}
    };
    return (
        <Segment style={style.segment}>
        <div style={style.div}>
          <Header style={style.header} as='h3' style={{float:'left'}}>
              <Image src='/logo.png' size='small' />
              politicaldatainc.
          </Header>
          <LogoutButton/>
          </div>
        </Segment>
    )
  }
}

function LogoutButton () {
    return (
    <Link to='/'>
      <Button style={{float:'right'}}> Logout</Button>
    </Link>
    )
}


export default TopHeader
