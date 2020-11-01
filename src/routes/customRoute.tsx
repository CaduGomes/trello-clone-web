import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import Header from "../components/Header/index";
import { useAuth } from "../context/useAuth";

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const CustomRoute: React.FC<CustomRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  // const { auth } = useAuth();
  return (
    <Route
      {...rest}
      render={() =>
        isPrivate ? (
          // {auth.logged} ? (
          true ? (
            <Header>
              <Component />
            </Header>
          ) : (
            <Redirect to={{ pathname: "/login" }} />
          )
        ) : (
          <Component />
        )
      }
    />
  );
};

export default CustomRoute;
