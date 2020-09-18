import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import NavBar from "./components/lib/NavBar/NavBar";
import Descriptive from "./components/pages/Descriptive";
import Training from "./components/pages/Training";
import Experience from "./components/pages/Experience";

import "./App.css";
import AdPrev from "./components/pages/AdPrev";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/descriptive" component={Descriptive} />
        <Route path="/training" component={Training} />
        <Route path="/experience" component={Experience} />
        <Route path="/adprev" component={AdPrev} />
      </Switch>
    </Router>
  );
}

export default App;
