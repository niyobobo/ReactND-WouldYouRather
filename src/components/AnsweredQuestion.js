import React, { Fragment } from "react";
import { connect } from "react-redux";
import QuestionAnswer from "./QuestionAnswer";

const AnsweredQuestion = ({ question, votes, user }) => {
  return (
    <Fragment>
      <h2>Results:</h2>
      {Object.keys(question)
        .filter(key => key.includes("option"))
        .map(option => (
          <QuestionAnswer
            key={option}
            option={question[option]}
            totalVotes={votes}
            user={user}
          />
        ))}
    </Fragment>
  );
};

const mapStateToProps = ({ user, questions }, ownProps) => {
  const question = questions[ownProps.id];
  const { optionOne, optionTwo } = question;
  const votes = optionOne.votes.concat(optionTwo.votes).length;
  return {
    user: user.id,
    votes,
    question
  };
};

export default connect(mapStateToProps)(AnsweredQuestion);
