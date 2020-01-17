import React, { Component } from "react";
import "./layout.css";
import Header from "../../Header/header";

export default class Layout extends Component {
  state = {
    showNav: false
  };

  toggleSidenav = action => {
    this.setState({
      showNav: action
    });
  };

  render() {
    return (
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSidenav(false)}
          onOpenNav={() => this.toggleSidenav(true)}
        />
        {this.props.children}
        footer
      </div>
    );
  }
}
