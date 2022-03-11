const homeRouteDefinitions = [
  {
    exact: true,
    loader: () => import("./HomePage"),
    path: "/"
  }
];

export default homeRouteDefinitions;
