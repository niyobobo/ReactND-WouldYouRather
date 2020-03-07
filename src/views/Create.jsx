import React, { Component } from "react";
import { connect } from "react-redux";
import { handleCreateQuestion } from "../redux/actions/question";
import { Redirect } from "react-router-dom";

class Create extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    redirect: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const { createQuestion } = this.props;
    createQuestion({ optionOneText, optionTwoText });
    this.setState(() => ({
      optionOneText: "",
      optionTwoText: "",
      redirect: true
    }));
  };

  render() {
    const { optionOneText, optionTwoText, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="dashboard">
        <div className="card">
          <div className="card__title">
            <h1>Create New Question</h1>
          </div>
          <div className="column card__body">
            <h3 className="header">Would you rather...</h3>
            <form onSubmit={this.handleSubmit}>
              <input
                className="form-control block"
                type="text"
                name="optionOneText"
                value={optionOneText}
                placeholder="Option one"
                onChange={this.handleChange}
              />
              <p className="separator">or</p>
              <input
                type="text"
                className="form-control block"
                name="optionTwoText"
                value={optionTwoText}
                placeholder="Option two"
                onChange={this.handleChange}
              />
              <button
                className="block btn btn-primary"
                type="submit"
                disabled={!optionOneText && !optionTwoText}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createQuestion: question => dispatch(handleCreateQuestion(question))
});

export default connect(null, mapDispatchToProps)(Create);
