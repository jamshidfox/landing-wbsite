import React, { Component } from "react";
import Sidebar from "./sideBar";
import Section from "./section";

class Homepage extends Component {
  render() {
    return (
      <div className="d-flex flex-row">
        <Sidebar />
        <Section history={this.props.history} />
      </div>
    );
  }
}

export default Homepage;
