import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import "./App.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //piece of code which runs on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out..
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //any cleanup operation like componentdidunmocunt
      unsubscribe();
    };
  }, []);

  console.log("user is", user);

  return (
    <Router>
      <div className="app">
        {/* <h2>Amazon clone 🚀 </h2> */}

        {/* React router */}
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
