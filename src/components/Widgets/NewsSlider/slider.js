import React, { Component } from "react";
import axios from "axios";
import SliderTemplates from "./slider_templates";

export default class NewsSlider extends Component {
  state = {
    news: []
  };

  componentWillMount() {
    axios.get(`http://localhost:3004/articles?start=0&end=3`).then(response => {
      this.setState({
        news: response.data
      });
    });
  }

  render() {
    return <SliderTemplates data={this.state.news} type="featured" />;
  }
}
