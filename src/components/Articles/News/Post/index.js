import React, { Component } from "react";
import axios from "axios";
import { URL } from "../../../../config";
import styles from "../../articles.css";

class NewsArticles extends Component {
  state = {
    article: [],
    team: []
  };

  componentWillMount() {
    axios
      .get(`${URL}/articles?id=${this.props.match.params.id}`)
      .then(response => {
        console.log(response.data);
      });
  }

  render() {
    return <div>article view</div>;
  }
}

export default NewsArticles;
