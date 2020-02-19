import React from "react";

const CircleImage = ({ title, url }) => {
  return (
    <img
      src={url}
      alt={title}
      style={{
        borderRadius: "50%"
      }}
    />
  );
};

export default CircleImage;
