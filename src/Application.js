import React from 'react'
import { Helmet } from "react-helmet";
import Router from './Router';

const Application = () => {

  return (
    <>
      <Helmet>
        <title>LINGUALYTICS</title>
        <meta charSet="utf-8" />
        <meta name="description" content="LINGUALYTICS" />
        <meta name="theme-color" content="#52c8fa" />
      </Helmet>
      <Router />
    </>
  )
};

export default Application;