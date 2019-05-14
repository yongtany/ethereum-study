import React, { Component } from 'react';
import Layout from '../../components/Layout';

class ProjectDetail extends Component {
  static async getInitialProps(props) {
    console.log(props.query.address);

    return {};
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
