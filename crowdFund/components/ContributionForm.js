import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';

class ContributieForm extends Component {
  render() {
    state = {
      value: ''
    };

    return (
      <Form>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label="ehter"
            labelPosition="right"
          />
        </Form.Field>
        <Button primary>
          Contribute!
        </Button>
      </Form>
    )
  }
}

export default ContributieForm;
