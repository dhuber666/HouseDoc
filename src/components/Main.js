import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import DetailView from "./DetailView";

const Main = props => {
  console.log(props);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail/:id" component={DetailView} />
    </Switch>
  );
};

export default Main;
