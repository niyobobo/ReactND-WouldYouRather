import React, { Component } from "react";
import { connect } from "react-redux";
import { checkId } from "../utils/formatter";
import Card from "../components/Card";
import AnsweredQuestion from "../components/AnsweredQuestion";
import NotAnsweredQuestion from "../components/NotAnsweredQuestion";

class QuestionPoll extends Component {
  render() {
    const { user, answered, question } = this.props;
    return (
      <div className="dashboard">
        <Card author={user} answered={answered}>
          {answered ? (
            <AnsweredQuestion question={question} />
          ) : (
            <NotAnsweredQuestion question={question} />
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
    question,
    user: users[question.author],
    answered: checkId(question, user.id)
  };
};

export default connect(mapStateToProps)(QuestionPoll);
