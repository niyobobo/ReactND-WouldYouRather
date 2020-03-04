import React, { Component } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { connect } from "react-redux";
import { handleInitialData } from "../redux/actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.getInitialData();
  }

  render() {
    const { user } = this.props;
    return !user ? <Login /> : <Dashboard />;
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.id
});

const mapDispatchToProps = dispatch => ({
  getInitialData: () => dispatch(handleInitialData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
