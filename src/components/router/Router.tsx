import React, { lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

type RouteDefinition = {
  exact: boolean;
  loader: () => Promise<any>;
  path: string;
};

type Props = {
  routeDefinitions: RouteDefinition[];
};

const getElement = ({ loader }: RouteDefinition) => lazy(loader);

const renderRoute = (
  RouteComponent: typeof Route | any,
  routeDefinition: RouteDefinition,
  index: number
) => (
  <RouteComponent
    component={getElement(routeDefinition)}
    exact={routeDefinition.exact}
    key={`menuroute_${index}`}
    path={routeDefinition.path}
  />
);

const renderRouteFrom = (routeDefinition: RouteDefinition, index: number) =>
  renderRoute(PrivateRoute, routeDefinition, index);

const renderRoutes = ({ routeDefinitions }: Props) =>
  routeDefinitions.map(renderRouteFrom);

const Router = (props: Props) => (
  <BrowserRouter>
    <Switch>{renderRoutes(props)}</Switch>
  </BrowserRouter>
);

export default Router;
