import React, { Component } from "react";
import Dropdown from "../components/Dropdown";

class Login extends Component {
  state = {
    users: [
      {
        id: "sarahedo",
        name: "Sarah Edo",
        avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg"
      },
      {
        id: "tylermcginnis",
        name: "Tyler McGinnis",
        avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg"
      },
      {
        id: "johndoe",
        name: "John Doe",
        avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg"
      }
    ],
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
  };

  render() {
    const { user } = this.state;
    return (
      <div className="container">
        <div className="card ">
          <div className="row">
            <div className="card-left column">
              <h1>Welcome to Would you rather App!</h1>
            </div>
            <div className="card-right column">
              <form onSubmit={this.handleSubmit}>
                <Dropdown
                  title={user ? user.name : "Select user"}
                  list={this.state.users}
                  handleSelect={this.handleSelect}
                />
                <button className="btn block" type="submit" disabled={!user}>
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
