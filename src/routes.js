import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/hoc/Layout/layout";
import NewsArticle from "./components/Articles/News/Post/index";

export default class routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/articles/:id" exact component={NewsArticle}></Route>
        </Switch>
      </Layout>
    );
  }
}
