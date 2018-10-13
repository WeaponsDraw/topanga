import React, { Component, Fragment } from 'react'
import { Button, Comment, Form, Header, Image, Grid, Segment, List, Icon } from 'semantic-ui-react'

class Admin extends Component{
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
    }
  }
  render(){
    return(
      <Fragment>
        <Header as='h2'>
          <Image circular src='https://laughingsquid.com/wp-content/uploads/2013/11/tumblr_mvpn9b8Bg51sow2azo1_500.jpg' /> NalaKaiser
        </Header>
        <Grid columns={2} divided padded>
          <Grid.Row >
            <Grid.Column width={9}>
               <List divided verticalAlign='middle'>
                <List.Item>
                  <List.Content floated='right'>
                    
                      <Icon name='plus circle'/>
                    
                  </List.Content>
                  <List.Content>Invite Guest</List.Content>
                </List.Item>
                <List.Item>
                  <List.Content floated='right'>
                    <Icon name='frown' color='red'/>
                    <Icon name='x'/>
                    <Icon name='pencil'/>
                  </List.Content>
                  
                  <List.Content>Lindsay</List.Content>
                </List.Item>
                <List.Item>
                  <List.Content floated='right'>
                    <Icon name='smile' color='green'/>
                  </List.Content>
                  
                  <List.Content>Mark</List.Content>
                </List.Item>
                <List.Item>
                  <List.Content floated='right'>
                    <Icon name='meh' color='yellow'/>
                  </List.Content>
                  
                  <List.Content>Molly</List.Content>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment>Info</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={3} divided padded>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>ToDO</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>APPTS</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>EDIT</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    )
  }
}

export default Admin;