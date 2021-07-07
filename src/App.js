import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Header from "./Components/Header/Header";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddContact from "./Components/AddContact/AddContact";
import EditeContact from "./Components/EditeConact/EditeContact";
import HomePage from "./Components/HomePage/HomePage";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/add">
            <AddContact />
          </Route>
          <Route exact path="/edite/:id">
            <EditeContact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
