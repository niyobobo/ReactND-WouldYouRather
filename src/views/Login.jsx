import React, { Component } from "react";
import { connect } from "react-redux";
import { DiReact } from "react-icons/di";
import { handleUserLogin } from "../redux/actions/auth";
import Dropdown from "../components/Dropdown";

class Login extends Component {
  state = {
    user: null
  };

  handleSelect = user => {
    this.setState(() => ({
      user
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { user } = this.state;
    this.props.userLogin(user.id);
  };

  render() {
    const { user } = this.state;
    return (
      <section className="section-login">
        <div className="card ">
          <div className="row">
            <div className="column card-left">
              <DiReact className="card__logo" />
              <h1>Enjoy playing Would you rather game.</h1>
            </div>
            <div className="column card-right">
              <h1>Sign in</h1>
              <form onSubmit={this.handleSubmit}>
                <Dropdown
                  title={user ? user.name : "Select user"}
                  users={this.props.users}
                  handleSelect={this.handleSelect}
                />
                <button
                  className="block btn btn-auth"
                  type="submit"
                  disabled={!user}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userLogin: id => dispatch(handleUserLogin(id))
});

const mapStateToProps = ({ users }) => ({
  users: Object.values(users)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
