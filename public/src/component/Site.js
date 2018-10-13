import React, { Component, Fragment } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

class Site extends Component{
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
    }
  }
  render(){
    return(
      <Fragment>
        <Header as='h1' dividing>
          Hello Dawg
        </Header>
      </Fragment>
    )
  }
}

export default Site;