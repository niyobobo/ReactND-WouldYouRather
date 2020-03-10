import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../redux/actions/shared";
import LoadingBar from "react-redux-loading";
import Login from "./Login";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.getInitialData();
  }

  render() {
    const { user } = this.props;
    return (
      <Fragment>
        <LoadingBar />
        {!user ? <Login /> : <Dashboard />}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.id
});

const mapDispatchToProps = dispatch => ({
  getInitialData: () => dispatch(handleInitialData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
