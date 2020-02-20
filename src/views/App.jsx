import React, { Component } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { connect } from "react-redux";
import { handleReceiveUsers } from "../redux/actions/users";

class App extends Component {
  componentDidMount() {
    this.props.getAllUsers();
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
  getAllUsers: () => dispatch(handleReceiveUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
