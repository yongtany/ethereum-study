import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true
      }
    });

    return <Card.Group items={items} />;
  }

  render() {
    return <div>{this.renderCampaigns()}</div>
  }
}

export default CampaignIndex;
