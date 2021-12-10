import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Dashboard from "./features/Dashboard/Dashboard";
import Problem1 from "./features/Problem1/Problem1";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>

        <Route path="/problem1">
          <Problem1 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
