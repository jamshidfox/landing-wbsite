import React, { Component } from "react";
import Sidebar from "../section/maleculas/Sidebar";
import Section from "../../section1/section";

const Homepage = () => {
    console.log(this.props.history)
    return (
      <div className="d-flex flex-row">
        <Sidebar />
        <Section history={this.props.history} />
      </div>
    );
  }

export default Homepage;
