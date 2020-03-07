import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "../components/Navigation";
import Home from "./Home";
import Create from "./Create";
import LeaderBoard from "./LeaderBoard";
import QuestionPoll from "./QuestionPoll";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={Create} />
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/question/:id" component={QuestionPoll} />
          <Route render={() => <div>Not Found</div>} />
        </Switch>
      </Fragment>
    );
  }
}

export default Dashboard;
