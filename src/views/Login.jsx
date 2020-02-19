import React, { Component } from "react";
import Dropdown from "../components/Dropdown";
import { DiReact } from "react-icons/di";

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
    console.log(user);
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
                  list={this.state.users}
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

export default Login;
