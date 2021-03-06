import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/hoc/Layout/layout";
import NewsArticle from "./components/Articles/News/Post/index";
import VideoArticle from "./components/Articles/Videos/Video/index";
import NewsMain from "./components/Articles/News/Main/index";
import VideosMain from "./components/Articles/Videos/Main/index";

export default class routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/news" exact component={NewsMain}></Route>
          <Route path="/articles/:id" exact component={NewsArticle}></Route>
          <Route path="/videos/:id" exact component={VideoArticle}></Route>
          <Route path="/videos" exact component={VideosMain}></Route>
        </Switch>
      </Layout>
    );
  }
}
