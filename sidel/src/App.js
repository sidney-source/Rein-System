import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

const express = require("express");
const mongoose = require("");
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://SidMut:Password123@reinqt.1iutv8u.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
app.listen(3000, () => {
  console.log("applistening on port 3000");
});

app.get("/home", (req, res) => {
  res.json({ mssg: "welcome to teh api" });
});

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
