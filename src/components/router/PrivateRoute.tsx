import React from "react";
import { Route } from "react-router";
import { RouteComponentProps } from "react-router-dom";

type Props = {
  component: React.ComponentType<any>;
  exact: boolean;
  path: string;
  key: string | number | undefined;
};

const renderPage = (
  Page: React.ComponentType<any>,
  props: RouteComponentProps
) => <Page {...props} />;

const createRenderer =
  (Page: React.ComponentType<any>) => (props: RouteComponentProps) =>
    renderPage(Page, props);

const PrivateRoute = ({ component: Page, ...rest }: Props) => (
  <Route {...rest}>{createRenderer(Page)}</Route>
);

export default PrivateRoute;
