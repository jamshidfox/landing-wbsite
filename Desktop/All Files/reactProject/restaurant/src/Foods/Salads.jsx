import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { getSalads } from "../fakeGenreService";
import "../Foods/food.css";

class Salads extends Component {
  state = {
    salads: [],
  };

  componentDidMount() {
    const salads = getSalads();
    this.setState({ salads });
  }
  handleDecrement = (id) => {
    const a = this.state.salads.filter((salad) => salad.id == id);
    a[0].count = a[0].count - 1;
    this.setState((prevStat) => ({ count: a }));
  };
  handleIncrement = (id) => {
    const a = this.state.salads.filter((salad) => salad.id == id);
    a[0].count = a[0].count + 1;
    this.setState((prevStat) => ({ count: a }));
  };
  render() {
    // console.log(this.state.salads);
    return (
      <div className="Salads w-100 d-flex flex-row justify-content-around  row">
        <div className="orderDiv w-25 d-flex flex-row  justify-content-center ">
          <div className="d-flex flex-column justify-content-evenly">
            <h3 className="text-light fw-bold"> Your Choice</h3>
            <div>Desert Something Name</div>
            <button className="btn btn-success" type="submit">
              Order
            </button>
          </div>
        </div>
        {this.state.salads.map((salad) => (
          <div
            className="aSaladDiv d-flex flex-column justify-content-between  mt-4 col-4 "
            key={salad.key}
          >
            <div className="saladImg">
              <img src={salad.img} />
            </div>
            <div className="d-flex flex-row justify-content-between ">
              <div class="numberOforders bg-light d-flex flex-row justify-content-between ">
                <button
                  className="btn badge badge-rounded btn-danger"
                  type="button"
                  onClick={() => this.handleDecrement(salad.id)}
                >
                  -
                </button>
                <div className="text-dark mt-2 badge badge-lg badge-warning">
                  {salad.count}
                </div>
                <button
                  className="btn badge badge-rounded btn-success"
                  onClick={() => this.handleIncrement(salad.id)}
                >
                  +
                </button>
              </div>
              <div>
                <h4 className="text-secondary bg-light">Price:{salad.price}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Salads;
