import React, { Component, Fragment } from 'react'
import { Button, Comment, Form, Header, Image, Grid, Segment, List, Icon, Input, TextArea, Modal, Checkbox, Divider } from 'semantic-ui-react'

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
        <Header as='h2'>
          <Image circular src='https://laughingsquid.com/wp-content/uploads/2013/11/tumblr_mvpn9b8Bg51sow2azo1_500.jpg' /> NalaKaiser
        </Header>
        <Grid columns={2} divided padded>
          <Grid.Row >
            <Grid.Column width={8}>
              <Segment>
               <Header textAlign='center' as='h3'>Guest List</Header>
               <List divided verticalAlign='middle'>
                <List.Item>
                  
                  <List.Content>
                    <Input placeholder='Invite New Guest'/>
                    <Button animated>
                     <Button.Content visible>ADD</Button.Content>
                    <Button.Content hidden>
                      <Icon name='plus' />
                    </Button.Content>
                   </Button>
                  </List.Content>
                </List.Item>
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
                <Modal trigger={<Button>ADD TO DO</Button>} closeIcon>
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