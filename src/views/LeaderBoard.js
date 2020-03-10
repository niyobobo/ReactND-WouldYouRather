import React from "react";
import { connect } from "react-redux";
import VoteBoard from "../components/VoteBoard";

const LeaderBoard = ({ users }) => {
  return (
    <div className="dashboard">
      <div className="leader-board">
        {users.map(user => (
          <VoteBoard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users).sort(
      (a, b) =>
        [b.questions.length + Object.values(b.answers).length] -
        [a.questions.length + Object.values(a.answers).length]
    )
  };
};

export default connect(mapStateToProps)(LeaderBoard);
