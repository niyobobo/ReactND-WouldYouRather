import React from "react";

const TabItem = ({ title, value, isActive, handleSelection }) => {
  return (
    <div
      onClick={handleSelection}
      className={`column tab-pane__navigation--item ${
        isActive ? "activeItem" : ""
      }`}
    >
      <span className="title">{title}</span>
      <span className="badge">{value}</span>
    </div>
  );
};

export default TabItem;
