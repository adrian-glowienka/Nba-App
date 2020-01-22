import React, { Component } from "react";
import axios from "axios";

export default class NewsSlider extends Component {
  state = {
    news: []
  };

  componentWillMount() {
    axios.get(`http://localhost:3004/articles`).then(response => {
      console.log(response);
    });
  }

  render() {
    return <div>Slider</div>;
  }
}
