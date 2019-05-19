import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Project from '../../ethereum/project';

class ProjectDetail extends Component {
  static async getInitialProps(props) {
    const project = Project(props.query.address);

    const summary = await project.methods.getSummary().call();


    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  render() {
    return  (
      <Layout>
        <h3>Project Detail</h3>
      </Layout>
    );
  }
}

export default ProjectDetail;
