import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../redux/actions/question";

class NotAnsweredQuestion extends Component {
  state = {
    selectedOption: ""
  };

  handleInputSelection = e => {
    this.setState({
      selectedOption: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { question } = this.props;
    const { selectedOption } = this.state;
    this.props.answerQuestion({
      qid: question.id,
      answer: selectedOption
    });
  };

  render() {
    const {
      question: { optionOne, optionTwo }
    } = this.props;
    const { selectedOption } = this.state;
    return (
      <Fragment>
        <h2>Would you rather</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="from__input">
            <label>
              <input
                type="radio"
                value="optionOne"
                checked={selectedOption === "optionOne"}
                onChange={this.handleInputSelection}
              />
              {optionOne.text}
            </label>
          </div>
          <div className="form__input">
            <label>
              <input
                type="radio"
                value="optionTwo"
                checked={selectedOption === "optionTwo"}
                onChange={this.handleInputSelection}
              />
              {optionTwo.text}
            </label>
          </div>
          <button
            className="block btn btn-primary"
            type="submit"
            disabled={!selectedOption}
          >
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ questions }, ownProps) => ({
  question: questions[ownProps.id]
});

const mapDispatchToProps = dispatch => ({
  answerQuestion: payload => dispatch(handleAnswerQuestion(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotAnsweredQuestion);
