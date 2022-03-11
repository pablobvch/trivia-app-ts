import homeRouteDefinitions from "./routes/home/routeDefinition";
import questionRouteDefinitions from "./routes/questions/routeDefinition";
import resultsRouteDefinitions from "./routes/results/routeDefinition";

const routeDefinitions = [
  ...homeRouteDefinitions,
  ...questionRouteDefinitions,
  ...resultsRouteDefinitions
];

export default routeDefinitions;
