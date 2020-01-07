
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import Register from "./components/Register-Page";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <NavBar />
            <SignIn />
          </Route>

          <Route path="/register">
            <NavBar />
            <Register />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
