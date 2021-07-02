import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Histroy } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/history" component={Histroy} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
