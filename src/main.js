console.log("po da po da punaku");
import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Login from "./app/templates/login/login"

console.log("in main.js");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/login" component={Login}/>
    </Router>,
    document.getElementById('app')
);