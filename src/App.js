import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { freewriter, login, market, pandamarket, Nav } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/pandamarket" component={pandamarket} />
        <Route exact path="/freewirter" component={freewriter} />
        <Route exact path="/usedmarket" component={market} />
        <Route exact path="/login" component={login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
