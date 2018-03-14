import React, { Component } from "react";
import { Layout } from "@components";

export default class extends Component {
  static async getInitialProps(ctx) {
    const { id } = ctx.query;
    return { id };
  }
  render() {
    const { id } = this.props;
    return (
      <Layout>
        <h1>{id}</h1>
        <p>This is the blog post content.</p>
      </Layout>
    );
  }
}
