import React from "react";
import CircleImage from "./CircleImage";

const Card = ({ author, children, answered }) => {
  return (
    <div className="card">
      <div className="card__title">
        <h3>
          {!answered ? `${author.name} asks:` : `Asked by ${author.name}`}
        </h3>
      </div>
      <div className="row card__body">
        <div className="column card__body--left">
          <CircleImage
            className="avatar"
            src={author.avatarURL}
            title={author.name}
          />
        </div>
        <div className="column card__body--right">
          <div className="card__question">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
