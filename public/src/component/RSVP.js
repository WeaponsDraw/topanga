import React, { Component, Fragment } from "react";
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

const attendingOptions = [
  { key: "y", text: "Yes", value: "yes" },
  { key: "n", text: "No", value: "no" }
];

class RSVP extends Component {
  render() {
    return (
      <Fragment>
        <Segment raised>
          <Divider horizontal section>
            <h1>RSVP</h1>
          </Divider>
          <Header textAlign="center" as="h2">
            We would love to see you there!
            <Header.Subheader>
              December 12, 2018| 05:00PM | Gas Works Park , WA
            </Header.Subheader>
          </Header>
          <Form>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                label="First name"
                placeholder="First name"
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Last name"
                placeholder="Last name"
              />
            </Form.Group>
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
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Comments"
              placeholder="Let us know what you think!"
            />
            <Form.Field
              id="form-button-control-public"
              control={Button}
              content="Confirm"
            />
          </Form>
        </Segment>
      </Fragment>
    );
  }
}
export default RSVP;
