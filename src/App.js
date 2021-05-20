import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import Character from "../src/pages/Character";
import Favorites from "../src/pages/Favorites";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/character/:id" component={Character} />
      </Switch>
    </Router>
  );
}

export default App;
