import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const CustomRoute: React.FC<CustomRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const isSigned: boolean = false;

  return (
    <Route
      {...rest}
      render={() =>
        isPrivate ? (
          isSigned ? (
            <Component />
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
