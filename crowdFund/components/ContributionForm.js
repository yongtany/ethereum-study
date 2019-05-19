import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';

class ContributieForm extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
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
