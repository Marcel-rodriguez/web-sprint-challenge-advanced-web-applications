import React from "react";
import { Route } from "react-router-dom";

function PrivateRoute(props) {
  return (<Route exact={props.exact} render={props.render} path={props.path} />);
}

export default PrivateRoute;

//Task List:
//1. Complete PrivateRoute