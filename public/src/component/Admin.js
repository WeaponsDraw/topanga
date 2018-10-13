import React, { Component, Fragment } from 'react'
import { Button, Comment, Form, Header, Image, Grid, Segment, List, Icon, Input } from 'semantic-ui-react'

import AddGuestButton from './AddGuestButton'
import NavBar from './NavBar'
class Admin extends Component{
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      guestList: [
        {
          name: 'Molly',
          info: 'poop',
          status: 'maybe'
        },
        {
          name: 'Jim',
          info: 'poop',
          status: 'yes'
        },
        {
          name: 'Hector',
          info: 'poop',
          status: 'no'
        },
      ]
    }
  }
  render(){
    return(
      <Fragment>
        <NavBar/>
        <Grid columns={2} divided padded>
          <Grid.Row >
            <Grid.Column width={8}>
              <Segment>
               <Header textAlign='center' as='h3'>Guest List</Header>
               <AddGuestButton/> 
               <List divided verticalAlign='middle'>
                {this.state.guestList.map((guest, i) => {
                  let status;
                  let color;
                  if(guest.status === 'yes'){
                    status = 'smile';
                    color = 'green';
                  }
                  if(guest.status === 'no'){
                    status = 'frown';
                    color = 'red';
                  }
                  if(guest.status === 'maybe'){
                    status = 'meh';
                    color = 'yellow'
                  }
                  
                  return  <List.Item>
                              <List.Content floated='right'>
                                <Icon name={status} color={color}/>
                                <Icon name='pencil'/>
                                <Icon name='x'/>
                              </List.Content>
                              <List.Content>{guest.name}</List.Content>
                            </List.Item>
                })}
              </List>
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment>
                <Header as='h3' textAlign='center'>EVENT INFO</Header>
                <List>
                  <List.Item icon='building' content='House of God Chapel' />
                  <List.Item icon='marker' content='568 Lords Way, Compton, CA' />
                  <List.Item icon ='clock' content='4:30 p.m.'/>
                </List>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={3} divided padded>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>
                <Header as='h3' textAlign='center'>TO DO</Header>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h3' textAlign='center'>APPOINTMENTS</Header>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment >
                <Header as='h3' textAlign='center'>EDIT PAGE</Header>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    )
  }
}

export default Admin;