import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Foods from "./components/Foods";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Switch>
          <Route path="/foods">
            <Foods />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Redirect to="/foods" />
        </Switch>
        <footer className="bg-dark text-center text-white py-5">footer</footer>
      </BrowserRouter>
    </>
  );
}

export default App;
