import React, { Component, Fragment } from 'react'
import { Image, Header, Grid, Container, Divider, GridColumn, GridRow, Modal } from 'semantic-ui-react'

import RSVP from './RSVP'
import Registry from './Registry'
import NavBar from './NavBar'

class EditSite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      about: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam sit amet magna in magna gravida vehicula. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Fusce aliquam vestibulum ipsum. Duis pulvinar. Integer pellentesque quam vel velit. Curabitur bibendum justo non orci. Curabitur sagittis hendrerit ante. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Praesent id justo in neque elementum ultrices. Ut tempus purus at lorem. Donec quis nibh at felis congue commodo. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Aliquam in lorem sit amet leo accumsan lacinia',
      heroImage: 'https://farberlawpa.com/wp-content/uploads/2017/06/Prenup.jpg',
      info: '',
      rsvp: '',
      isEditing: false,
      title: 'Nala and Kaizer Wedding'
    }
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit(){
     this.setState({isEditing: !this.state.isEditing});
  }
  render() {
      
    return (
      <Fragment>
        <NavBar toggleView={this.props.toggleView}/>
        <Header onDoubleClick={this.toggleEdit} as='h1' textAlign='center'>
          Nala and Kaizer Wedding

          <Header.Subheader>December 12, 2018| 05:00PM | Gas Works Park , WA</Header.Subheader>
        </Header>
        <Divider />
        <Grid padded >
          <Grid.Row centered>
            <Grid.Column width={12}>
              <Image  rounded src={this.state.heroImage} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row >
            <Grid.Column stretched >
              <Container fluid text textAlign='justified'>
                <Header as='h2'>Our Story</Header>
                <Divider />
                <p>
                  {this.state.about}
                </p>
                <Divider />
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Registry/>
          </Grid.Row>
          <Grid.Row centered>
            <Container>
              <Grid.Column>
                <RSVP />
              </Grid.Column>
            </Container>
          </Grid.Row>
        </Grid>
      </Fragment>
    )
  }
}

export default EditSite;