import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "./Card";

const Question = ({ data, user }) => {
  return (
    <Card author={user}>
      <h2 className="card__question-title">Would you rather</h2>
      <p className="card__question-section">...{data.optionOne.text}....</p>
      <Link className="btn btn__poll block" to={`/questions/${data.id}`}>
        View Poll
      </Link>
    </Card>
  );
};

const mapStateToProps = ({ users }, ownProps) => ({
  user: users[ownProps.data.author]
});

export default connect(mapStateToProps)(Question);
