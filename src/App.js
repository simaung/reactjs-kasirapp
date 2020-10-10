import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HeaderComponent } from "./components";
import { Home, Success } from "./pages";

export default function App() {
  return (
    <Router>
      <HeaderComponent />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/success" component={Success} exact />
        </Switch>
      </main>
    </Router>
  );
}
