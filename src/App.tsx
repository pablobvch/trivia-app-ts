import React, { Suspense } from "react";
import "./App.css";
import Loading from "./components/loading";
import Router from "./components/router";
import routeDefinitions from "./routeDefinitions";

const App = () => (
  <>
    <Suspense fallback={<Loading />}>
      <Router {...{ routeDefinitions }} />
    </Suspense>
  </>
);

export default App;
