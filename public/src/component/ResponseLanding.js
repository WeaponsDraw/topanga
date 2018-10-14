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
  Segment
} from "semantic-ui-react";

import RSVP from './RSVP'

class ResponseLanding extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      id: props.match.params.id
    }
  }

  componentDidMount() {
    console.log(this.state)
  }
  render() {
    return (
      <Fragment>
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
      </Fragment >
    )
  }
}

export default ResponseLanding;