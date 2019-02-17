import React, { Component } from 'react'
import NewAdSteps from './NewAdSteps'
import Header from './Header'

class Campaign extends Component {
  render () {
    return (
      <div>
        <Header/>
        <NewAdSteps/>
      </div>
    )
  }
}
export default Campaign;
