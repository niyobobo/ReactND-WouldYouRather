import React from "react";
import Progressbar from "./Progressbar";
import { IoMdCheckmarkCircle } from "react-icons/io";

const QuestionAnswer = ({ option, totalVotes, user }) => {
  const selected = option.votes.includes(user);
  return (
    <div className={`answer ${selected ? "selected" : ""}`}>
      {selected ? <IoMdCheckmarkCircle className="answer__check" /> : null}
      <p className="answer__option">{`Would you rather ${option.text}`}</p>
      <Progressbar
        percentage={Math.round((option.votes.length / totalVotes) * 100)}
      />
      <p className="answer__votes">{`${
        option.votes.length
      } out of ${totalVotes} ${totalVotes <= 1 ? "vote" : "votes"}`}</p>
    </div>
  );
};

export default QuestionAnswer;
