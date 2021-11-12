import React, { Component } from "react";
import { getDrinks } from "./../fakeGenreService";

class Drinks extends Component {
  state = {
    drinks: [],
  };

  componentDidMount() {
    const drinks = getDrinks();
    this.setState({ drinks });
  }
  handleDecrement = (id) => {
    const a = this.state.drinks.filter((salad) => salad.id == id);
    a[0].count = a[0].count - 1;
    this.setState((prevStat) => ({ count: a }));
  };
  handleIncrement = (id) => {
    const a = this.state.drinks.filter((salad) => salad.id == id);
    a[0].count = a[0].count + 1;
    this.setState((prevStat) => ({ count: a }));
  };

  render() {
    console.log(this.state.drinks);
    return (
      <div className="Salads  d-flex flex-row justify-content-around  row">
        <div className="orderDiv w-25 d-flex flex-row  justify-content-center ">
          <div className="d-flex flex-column justify-content-evenly">
            <h3 className="text-light fw-bold"> Your Choice</h3>
            <div>Smtjffg skdjsoifd lksdllksd;</div>
            <button className="btn btn-success" type="submit">
              Order
            </button>
          </div>
        </div>
        {this.state.drinks.map((drinks) => (
          <div
            className="aSaladDiv d-flex flex-column justify-content-around col-4 "
            key={drinks.key}
          >
            <div className="saladImg">
              <img src={drinks.img} />
            </div>
            <div className="d-flex flex-row justify-content-around ml-4 ">
              <div class="numberOforders bg-light d-flex flex-row justify-content-between mr-2 ">
                <button
                  className="btn badge badge-rounded btn-danger"
                  type="button"
                  onClick={() => this.handleDecrement(drinks.id)}
                >
                  -
                </button>
                <div className="text-dark mt-2 badge badge-lg badge-warning">
                  {drinks.count}
                </div>
                <button
                  className="btn badge badge-rounded btn-success"
                  onClick={() => this.handleIncrement(drinks.id)}
                >
                  +
                </button>
              </div>
              <div>
                <h4 className="text-secondary bg-light">
                  Price:{drinks.price}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Drinks;
