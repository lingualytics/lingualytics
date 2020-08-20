import React from "react";
import { HashRouter as DefaultRouter, Switch, Route } from "react-router-dom";

import Home from "./Containers/Home"
import Demo from "./Containers/Demo"
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import styled from "styled-components";

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const Router = () => {
  return (
    <DefaultRouter history={history}>
      <NavBar />
      <NavPadding />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/demo" component={Demo} />
      </Switch>
      <Footer />
    </DefaultRouter>
  );
};

const NavPadding = styled.div`
  min-height: 61px;
`

export default Router;
