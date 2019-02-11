import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import QuizApp from "./components/quizApp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Error from "./components/error";
import Home from "./components/home";

import Admin from "./components/admin";
import AddNew from "./components/addNew";
import Overview from "./components/adminOverview";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <div>
              <Route path="/" component={Home} />
              {/* <Route path="/quiz" component={QuizApp} exact /> */}
              <Route path="/admin" exact component={Admin} exact />
              <Route path="/overview" component={Overview} exact />
              <Route path="/addnew" component={AddNew} exact />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
