import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import "./navSecStar.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  menu = () => {
    console.log("in");
    console.log("out");
  };
  render() {
    return (
      <div
        className="w-100  d-flex justify-content-around align-items-center"
        id="navBar"
      >
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Manager</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Chief</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Waiter</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Client</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div>Restaurant</div>

        <div className="d-flex flex-row justify-content-between  w-40">
          <div className="ml-5">Acount Owner</div>
          <div className="mr-4">Picture</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
