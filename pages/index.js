import React, { Component } from "react";
import { Layout, WrapLink } from "@components";

export default class extends Component {
  // static async getInitialProps(ctx) {
  //   return null;
  // }
  state = {
    id: "asvsds"
  };
  render() {
    const { id } = this.state;
    return (
      <Layout title="首页">
        <h1>My Blog</h1>
        <ul>
          <PostLink id={id} />
        </ul>
      </Layout>
    );
  }
}
const PostLink = props => (
  <li>
    <WrapLink as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      {props.id}
    </WrapLink>
  </li>
);
