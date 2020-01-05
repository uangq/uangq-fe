import React from "react";
import Head from "next/head";
import { withRedux } from "libs/redux/withRedux";

const _App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>NextJS - With Redux</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default withRedux(_App);
