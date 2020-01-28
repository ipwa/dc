import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./components/App";
import SGSForm from "./components/SGSForm";
import SGSResults from "./components/SGSResults";
import SRForm from "./components/SRForm";
import SRReceived from "./components/SRReceived";
import QuestionContext from "./provider/question";
import "./external.css";
import "./style.css";

const Routing = () => {
  const questions = React.useState({});
  return (
    <QuestionContext.Provider value={questions}>
      <Router>
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-12">
              <Switch>
                <Route path="/sr" component={SRForm} />
                <Route path="/sr-received" component={SRReceived} />
                <Route path="/sgs" component={SGSForm} />
                <Route path="/sgs-results" component={SGSResults} />
                <Route path="/" component={App} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </QuestionContext.Provider>
  );
};

const rootElement = document.getElementById("react-app-container");
ReactDOM.render(<Routing />, rootElement);
