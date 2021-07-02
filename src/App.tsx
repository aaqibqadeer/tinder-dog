import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Histroy } from "./pages";
import { RootProvider } from "./store/providers";

function App() {
  return (
    <div className="App">
      <RootProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/history" component={Histroy} />
          </Switch>
        </Router>
      </RootProvider>
    </div>
  );
}

export default App;
