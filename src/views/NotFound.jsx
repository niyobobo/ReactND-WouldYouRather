import React from "react";
import { MdNotInterested } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="dashboard">
      <div className="not-found">
        <h2 className="not-found__header">
          <p>404</p>
          <p>This page not found</p>
        </h2>
        <MdNotInterested className="not-found__icon" />
      </div>
    </div>
  );
};

export default NotFound;
