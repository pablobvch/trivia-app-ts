const homeRouteDefinitions = [
  {
    exact: true,
    loader: () => import("./ResultsPage"),
    path: "/results"
  }
];

export default homeRouteDefinitions;
