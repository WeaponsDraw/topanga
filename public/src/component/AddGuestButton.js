import React, { Component, Fragment } from "react";
import { Button, Input, TextArea, Segment, Form, Header, Image, Modal, Grid, GridRow, GridColumn } from "semantic-ui-react";
import QRCode from 'qrcode.react';

import axios from 'axios'

class AddGuestButton extends Component {

  constructor(props) {
    super(props)
    this.state = {
      topangaApi: 'https://topanga-web.herokuapp.com/nalakaiser/rsvp/',
      firstName: 'FirstName',
      lastName: 'LastName',
      phoneNumber: '',
      weddingYear: 2019,
      showQr: false,
    }

    this.onHandleChange = (e, { name, value }) => {
      this.setState({ [name]: value })
    };
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleSubmit() {
    axios.post('https://topanga-backend.herokuapp.com/api/topanga/nalaKaizer2019/guest', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
    })
      .then(function (response) {
        this.setState({ firstName: 'FirstName', lastName: 'LastName' })
      })
  }

  render() {
    return (
      <Fragment>
        <Modal trigger={<Button>Add Guest</Button>}>
          <Modal.Header>Add Guest</Modal.Header>
          <Modal.Content>
            <Segment>
              <Form onSubmit={this.onHandleSubmit}>
                <Form.Group widths="equal">
                  <Form.Field
                    id="form-input-control-first-name"
                    control={Input}
                    onChange={this.onHandleChange}
                    name="firstName"
                    label="First name"
                    placeholder="First name"
                  />
                  <Form.Field
                    id="form-input-control-last-name"
                    control={Input}
                    onChange={this.onHandleChange}
                    label="Last name"
                    name="lastName"
                    placeholder="Last name"
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input label='Address' placeholder="123 This St, WA " />
                  <Form.Input type='tel' label="Phone #" placeholder="(123)-456-7890" />
                  <Form.Input type='email' label="Email" placeholder="abc@xyz.com" />
                </Form.Group>
                <Form.TextArea
                  label='Description'
                  onChange={this.onHandleChange}
                  placeholder='Add action item description here.. (Markdown Enabled)'
                  id='description' />
                <Form.Group inline>
                  <label>Method of Delivery: </label>
                  <Form.Field control='input' type='checkbox' label="Email" />
                  <Form.Field control='input' type='checkbox' label="Text" />
                  <Form.Field control='input' type='checkbox' label="Link/QR Code on invite" />
                  <Form.Field control='input' type='checkbox' label="Send invite via Topanga" />
                </Form.Group>
                <Form.Button color="blue">Add Guest</Form.Button>
              </Form>
            </ Segment>
            <Segment>
              <Header as='h4'>Print this QR code and add it to your invitations</Header>
              <Grid>
                <GridRow divided>
                  <GridColumn width={6}>
                    <QRCode value={this.state.topangaApi + this.state.firstName + this.state.lastName + this.state.weddingYear} />
                  </GridColumn>
                  <GridColumn width={6}>
                    <Header textAlign="center" as="h2">
                      Link
                      <Header.Subheader>
                        {this.state.topangaApi + this.state.firstName + this.state.lastName + this.state.weddingYear}
                      </Header.Subheader>
                    </Header>
                  </GridColumn>
                </GridRow>
              </Grid>
            </Segment>
          </Modal.Content>
        </Modal>
      </Fragment>
    )
  }
}

export default AddGuestButton;
