import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { freewriter, login, market, pandamarket, Nav } from "./pages";

function App() {
  async function getData() {
    try {
      const response = await axios.get(
        "https://panda-market-api.vercel.app/docs/#/"
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/pandamarket" component={pandamarket} />
        <Route exact path="/freewirter" component={freewriter} />
        <Route exact path="/items" component={market} />
        <Route exact path="/login" component={login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
