import React from "react";
import Head from "next/head";

const _App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>UangQ</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default _App;
