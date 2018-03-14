import Head from "next/head";
import React from "react";
import { Header } from "@components";

export default class extends React.Component {
  render() {
    const { title, children, ...rest } = this.props;
    return (
      <div {...rest}>
        <Head>
          <title>{title}</title>
        </Head>
        <Header />
        {children}
      </div>
    );
  }
}
