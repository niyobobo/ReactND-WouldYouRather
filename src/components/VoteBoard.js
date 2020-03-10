import React from "react";
import CircleImage from "./CircleImage";

const VoteBoard = ({ user }) => {
  return (
    <div className="card">
      <div className="row card__body">
        <div className="card__body--left">
          <CircleImage
            className="avatar"
            src={user.avatarURL}
            title={user.name}
          />
        </div>
        <div className="card__body--question">
          <h2 className="name">{user.name}</h2>
          <div className="row">
            <span className="column">Answered questions</span>
            <span>{Object.keys(user.answers).length}</span>
          </div>
          <hr />
          <div className="row">
            <span className="column">Created questions</span>
            <span>{user.questions.length}</span>
          </div>
        </div>
        <div className="card__body--end">
          <div className="card">
            <p className="head">Score</p>
            <p className="score-value">
              {Object.keys(user.answers).length + user.questions.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteBoard;
