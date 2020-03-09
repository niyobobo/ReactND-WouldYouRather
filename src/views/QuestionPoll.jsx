import React, { Component } from "react";
import { connect } from "react-redux";
import { checkId } from "../utils/formatter";
import Card from "../components/Card";
import AnsweredQuestion from "../components/AnsweredQuestion";
import NotAnsweredQuestion from "../components/NotAnsweredQuestion";

class QuestionPoll extends Component {
  render() {
    const { user, answered, questionId } = this.props;
    return (
      <div className="dashboard">
        <Card author={user} answered={answered}>
          {answered ? (
            <AnsweredQuestion id={questionId} />
          ) : (
            <NotAnsweredQuestion id={questionId} />
          )}
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ user, users, questions }, ownProps) => {
  const { id } = ownProps.match.params;
  const question = questions[id];

  return {
    questionId: id,
    user: users[question.author], //TODO: check if question exists
    answered: checkId(question, user.id) //TODO: check if question exists
  };
};

export default connect(mapStateToProps)(QuestionPoll);
