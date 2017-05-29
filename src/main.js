import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Login from "./app/templates/login/login";
import ManagePictures from "./app/templates/managePictures/managePicture";


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/login" component={Login}/>
        <Route path="/managePictures" component={ManagePictures}/>
    </Router>,
    document.getElementById('app')
);