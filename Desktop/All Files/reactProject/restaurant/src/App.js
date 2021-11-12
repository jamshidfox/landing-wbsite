// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import Navbar from "./pages/navbar/navbar"
import Salads from "./Foods/Salads";
import Homepage from "./pages/section/index";
import MainCourse from "./Foods/MainCourse";
import Deserts from "./Foods/Deserts";
import Drinks from "./Foods/Drinks";
import { Route, Switch } from "react-router";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/Salad" component={Salads} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Main" component={MainCourse} />
        <Route exact path="/dessert" component={Deserts} />
        <Route exact path="/drinks" component={Drinks} />
        <Route />
      </Switch>
    </React.Fragment>
  );
}

export default App;
