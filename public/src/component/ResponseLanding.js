import React, { Component, Fragment } from 'react'
import axios from 'axios'
import {
  Form,
  Header,
  Input,
  TextArea,
  Button,
  Select,
  Divider,
  Segment,
  Grid,
  GridRow
} from "semantic-ui-react";

import { Link } from 'react-router-dom'


import RSVP from './RSVP'
const attendingOptions = [
  { key: "y", text: "Yes", value: "yes" },
  { key: "n", text: "No", value: "no" }
];

class ResponseLanding extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      id: props.match.params.id,
      fetchingGuest: false,
      fetchedGuest: false,
      person: {
        firstName: '-',
        lastName: '-'
      }
    }
  }

  componentDidMount() {
    axios.get(`https://topanga-backend.herokuapp.com/api/topanga/nalaKaizer2019/guest`)
      .then(res => {
        let person = res.data[this.state.id];
        console.log(person)
        if (person != undefined || person != {}) {
          this.setState({ person });
        }
        console.log(this.state)
      })
  }

  render() {
    return (
      <Fragment>
        <Grid>
          <Grid.Row style={{ height: '30vh' }}></Grid.Row>
          <Grid.Row centered>
            <Grid.Column padded width={8}>
              <Segment raised>
                <Header textAlign="center" as="h2">
                  We would love to see you there!
                  <Header.Subheader>
                    December 12, 2018| 05:00PM | Gas Works Park , WA
                  </Header.Subheader>
                </Header>
                <Header as='h3'>
                  Name:
                  <Header.Subheader >
                    {this.state.person.firstName + ' ' + this.state.person.lastName}
                  </Header.Subheader>
                </Header>
                <Form>
                <Form.Group>
                  <Form.Group>
                    <Form.Field
                      control={Select}
                      options={attendingOptions}
                      label={{
                        children: "Attending",
                        htmlFor: "form-select-control-attending"
                      }}
                      placeholder="Attending"
                      search
                      searchInput={{ id: "form-select-control-attending" }}
                    />
                    <Form.Group inline>
                      <label>Plus</label>
                      <Form.Radio label="1" value="1" />
                      <Form.Radio label="2" value="2" />
                      <Form.Radio label="3" value="3" />
                    </Form.Group>
                  </Form.Group>
                </Form.Group>
                </Form>
                <Button color='teal'>
                  <Link to="/nalakaiser">About</Link>
                </Button>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment >
    )
  }
}

export default ResponseLanding;