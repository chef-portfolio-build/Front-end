import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import Register from "./components/Register-Page";
import Profile from "./components/Profile";
import ApiGet from "./components/Home-Page"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

        <Route exact path="/">
            <NavBar />
            <ApiGet/>
          </Route>

          <Route exact path="/login">
            <NavBar />
            <SignIn />
          </Route>

          <Route path="/register">
            <NavBar />
            <Register />
          </Route>

          <Route path="/profile">
            <NavBar />
            <Profile />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
