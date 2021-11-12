import React, { Component } from "react";
import { getDeserts } from "../fakeGenreService";
class Deserts extends Component {
  state = {
    deserts: [],
  };

  componentDidMount() {
    const deserts = getDeserts();
    this.setState({ deserts });
  }
  handleDecrement = (id) => {
    const a = this.state.deserts.filter((salad) => salad.id == id);
    a[0].count = a[0].count - 1;
    this.setState((prevStat) => ({ count: a }));
  };
  handleIncrement = (id) => {
    const a = this.state.deserts.filter((salad) => salad.id == id);
    a[0].count = a[0].count + 1;
    this.setState((prevStat) => ({ count: a }));
  };
  render() {
    return (
      <div className="Salads  d-flex flex-row justify-content-around  row">
        <div className="orderDiv w-25 d-flex flex-row  justify-content-center ">
          <div className="d-flex flex-column justify-content-evenly">
            <h3 className="text-light fw-bold"> Your Choice</h3>
            <div>Desert Something Name</div>
            <button className="btn btn-success" type="submit">
              Order
            </button>
          </div>
        </div>
        {this.state.deserts.map((deserts) => (
          <div
            className="aSaladDiv d-flex flex-column justify-content-around col-4 "
            key={deserts.key}
          >
            <div className="saladImg">
              <img src={deserts.img} />
            </div>
            <div className="d-flex flex-row justify-content-around ml-4 ">
              <div class="numberOforders bg-light d-flex flex-row justify-content-between mr-2 ">
                <button
                  className="btn badge badge-rounded btn-danger"
                  type="button"
                  onClick={() => this.handleDecrement(deserts.id)}
                >
                  -
                </button>
                <div className="text-dark mt-2 badge badge-lg badge-warning">
                  {deserts.count}
                </div>
                <button
                  className="btn badge badge-rounded btn-success"
                  onClick={() => this.handleIncrement(deserts.id)}
                >
                  +
                </button>
              </div>
              <div>
                <h4 className="text-secondary bg-light">
                  Price:{deserts.price}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Deserts;
