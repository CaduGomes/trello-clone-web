import React from "react";
import { Switch } from "react-router-dom";
import Route from "./customRoute";
import Login from "../pages/Login/index";
import Signup from "../pages/Signup/index";
import Dashboard from "../pages/Dashboard/index";
import Home from "../pages/Home/index";
import NotFound from "../pages/NotFound/index";

const Router: React.FC = () => (
  <Switch>
    <Route path={"/"} exact component={Home} />

    <Route path={"/login"} component={Login} />

    <Route path={"/signup"} component={Signup} />

    <Route path={"/dashboard"} component={Dashboard} isPrivate />

    <Route path={"*"} component={NotFound} />
  </Switch>
);

export default Router;
