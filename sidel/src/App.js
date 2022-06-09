import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homes from ".";
import Home from "./components/Home";
import Login from "./components/Login";
function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route exact path="/">
                  <Login />
               </Route>
               <Route path="/home">
                  <Home />
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
