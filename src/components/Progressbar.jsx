import React from "react";

const Progressbar = ({ percentage }) => {
  return (
    <div className="progress-bar">
      {percentage === 0 ? null : (
        <div
          className="progress-bar__fill"
          style={{ width: `${percentage}%` }}
        ></div>
      )}
      <span className="progress-bar__label">{`${percentage}%`}</span>
    </div>
  );
};

export default Progressbar;
