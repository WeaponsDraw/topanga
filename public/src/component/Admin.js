import React, { Component, Fragment } from 'react'
import { Button, Comment, Form, Header, Image, Grid, Segment, List, Icon, Input, TextArea, Modal, Checkbox, Divider, Feed } from 'semantic-ui-react'

import AddGuestButton from './AddGuestButton'
import NavBar from './NavBar'
import EditSite from './EditSite'
import axios from 'axios'
class Admin extends Component{
  constructor(props) {
    super(props)
    this.state = {
      view: 'Dashboard',
      user: this.props.user,
      guestList: []
    }
  }

  componentDidMount(){
     axios.get('https://topanga-backend.herokuapp.com/api/topanga/')
      .then(res => {
        console.log(res)
        let list = [];
        for (var i in res.data.guests) {
          let obj = res.data.guests[i]

          list.push(obj)
          }
        console.log(list)
        
        this.setState({guestList: list})
        console.log(this.state)
      })
  }
      
    

  toggleView(view){
    this.setState({view: view})
  }
  render(){
    if(this.state.view === 'Event Site'){
      return(<EditSite toggleView={this.toggleView}/>)
    }else{

    return(
      <Fragment>
        <NavBar toggleView={this.toggleView}/>
        <Grid columns={2} divided padded>
          <Grid.Row >
            <Grid.Column width={8}>
              <Segment style={{overflow: 'auto', height: 200 }}>
               <Header textAlign='center' as='h3'>Guest List</Header>
               <AddGuestButton/> 
               <List divided verticalAlign='middle'>
                {this.state.guestList.map((guest, i) => {
                  let status;
                  let color;
                  if(guest.rsvp.responded === 'yes'){
                    status = 'smile';
                    color = 'green';
                  }
                  if(guest.rsvp.responded === 'no'){
                    status = 'frown';
                    color = 'red';
                  }
                  if(guest.rsvp.responded === 'maybe'){
                    status = 'meh';
                    color = 'yellow'
                  }
                  
                  return  <List.Item>
                              <List.Content floated='right'>
                                <Icon name={status} color={color}/>
                                <Icon name='pencil'/>
                                <Icon name='x'/>
                              </List.Content>
                              <List.Content>{guest.firstName} {guest.lastName}</List.Content>
                            </List.Item>
                })}
              </List>
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment style={{height: 200}}>
                <Header as='h3' textAlign='center'>EVENT INFO</Header>
                <List>
                  <List.Item icon='building' content='House of God Chapel' />
                  <List.Item icon='marker' content='231 Finish Ave, Seattle, WA' />
                  <List.Item icon ='clock' content='5:00 p.m.'/>
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
                <Modal trigger={<Button>CREATE TO DO</Button>} closeIcon>
                  <Header icon='sticky note' content='ADD NEW TO DO' />
                  <Modal.Content>
                   <Form>
                    <Form.Field
                      id='form-input-control-title'
                      control={Input}
                      label='Title'
                      placeholder='Title'
                      width={6}
                    />
                    <Form.Field
                      id='form-textarea-control-description'
                      control={TextArea}
                      label='Description'
                      placeholder='description'
                    />
                    <Form.Field
                      id='form-button-control-public'
                      control={Button}
                      content='Submit'
                    />
                </Form>
                  </Modal.Content>
                </Modal>
                <List>
                  
                  <List.Item as='a'>
                    <Icon name='right triangle' />
                    <List.Content>
                      <List.Header>Cake</List.Header>
                      <List.Description>
                        Pick out a Cake.
                      </List.Description>
                      <Checkbox label='Completed' />
                    </List.Content>
                  </List.Item>
                  <Divider />
                   <List.Item as='a'>
                    <Icon name='right triangle' />
                    <List.Content>
                      <List.Header>Pick Out a Venue</List.Header>
                      <List.Description>
                        We need to find a venue, possible locations are the beach, the mountain, the lake, the interstate.
                      </List.Description>
                      <Checkbox label='Completed' />
                    </List.Content>
                  </List.Item>
                  
                </List>


              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header as='h3' textAlign='center'>APPOINTMENTS</Header>
                <Modal trigger={<Button>CREATE APPOINTMENT</Button>} closeIcon>
                  <Header icon='calendar alternate outline' content='ADD NEW APPOINTMENT' />
                  <Modal.Content>
                   <Form>
                     <Form.Group widths='equal'>
                    <Form.Field
                      id='form-input-control-title'
                      control={Input}
                      label='Title'
                      placeholder='Title'
                      width={6}
                    />
                    <Form.Field
                      id='form-textarea-control-date'
                      control={Input}
                      label='Date'
                      placeholder='Date'
                      width={6}
                    />
                    <Form.Field
                      id='form-textarea-control-time'
                      control={Input}
                      label='Time'
                      placeholder='Time'
                      width={6}
                    />
                    </Form.Group>
                    <Form.Group widths='equal'>
                    <Form.Field
                      id='form-textarea-control-location'
                      control={Input}
                      label='Location'
                      placeholder='Location'
                      width={6}
                    />
                    <Form.Field
                      id='form-textarea-control-phone'
                      control={Input}
                      label='Phone Number'
                      placeholder='Phone Number'
                      width={6}
                    />
                    </Form.Group>
                    <Form.Field
                      id='form-button-control-public'
                      control={Button}
                      content='Submit'
                    />
                </Form>
                  </Modal.Content>
                </Modal>
                <List>
                  
                  <List.Item as='a'>
                    <Icon name='x' />
                    <List.Content>
                      <List.Header>Ted's Bakery</List.Header>
                      <List.Description>
                        <Icon name='calendar alternate'/>
                        11-13-18
                      </List.Description>
                      <List.Description>
                        <Icon name='clock'/>
                        11:30 a.m.
                      </List.Description>
                      <List.Description>
                        <Icon name='location arrow'/>
                        1313 Cake Way, Seattle, WA
                      </List.Description>
                      <List.Description>
                        <Icon name='phone'/>
                        206-555-5555
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <Divider />
                </List>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment >
                <Header as='h3' textAlign='center'>ACTIVITY</Header>
                <Feed>
                  <Feed.Event>
                    <Feed.Label>
                      <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.User>Kaiser</Feed.User> added <a>A New Guest</a>
                        <Feed.Date>1 Hour Ago</Feed.Date>
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>

                  <Feed.Event>
                    <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
                    <Feed.Content>
                      <Feed.Summary>
                        <a>Nala</a> added <a>A New Appointment</a>
                        <Feed.Date>4 days ago</Feed.Date>
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                  </Feed>
                  <Feed>
                  <Feed.Event>
                    <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
                    <Feed.Content>
                      <Feed.Summary>
                        <a>Nala</a> deleted <a>A Guest</a>
                        <Feed.Date>7 days ago</Feed.Date>
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                  </Feed>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid centered columns={1} padded>
        <Grid.Column width={8}>
          <Segment>
            <Comment.Group>
              <Header as='h3'>
                Comments
              </Header>
              <Divider width={16} />
              <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Kaiser</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 8:35AM</div>
                  </Comment.Metadata>
                  <Comment.Text>I am so excited!!!!!</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
              <Form reply>
                <Form.TextArea />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
              </Form>
            </Comment.Group>
          </Segment>
        </Grid.Column>
        </Grid>
      </Fragment>
    )
    }
  }
}

export default Admin;