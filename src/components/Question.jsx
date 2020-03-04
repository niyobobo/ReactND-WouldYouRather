import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CircleImage from "./CircleImage";

const Question = ({ data, user }) => {
  return (
    <div className="card">
      <div className="card__title">
        <h3>{user.name} asks:</h3>
      </div>
      <div className="row card__body">
        <div className="column card__body--left">
          <CircleImage
            className="avatar"
            src={user.avatarURL}
            title={user.name}
          />
        </div>
        <div className="column card__body--right">
          <div className="card__question">
            <h2 className="card__question-title">Would you rather</h2>
            <p className="card__question-section">
              ...{data.optionOne.text}....
            </p>
            <Link className="btn btn__poll block" to={`/question/${data.id}`}>
              View Poll
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }, ownProps) => ({
  user: users[ownProps.data.author]
});

export default connect(mapStateToProps)(Question);
