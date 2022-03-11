import React, { Suspense } from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Loading from "./components/loading";
import Router from "./components/router";
import routeDefinitions from "./routeDefinitions";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  `;

const App = () => (
  <>
    <GlobalStyle />
    <Suspense fallback={<Loading />}>
      <Router {...{ routeDefinitions }} />
    </Suspense>
  </>
);

export default App;
