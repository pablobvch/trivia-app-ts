const questionsRouteDefinitions = [
  {
    exact: true,
    loader: () => import("./QuestionsPage"),
    path: "/questions"
  }
];

export default questionsRouteDefinitions;
