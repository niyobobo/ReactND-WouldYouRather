import React from "react";

const CircleImage = ({ title, url, ...props }) => {
  return (
    <img
      src={url}
      alt={title}
      {...props}
      style={{
        borderRadius: "50%"
      }}
    />
  );
};

export default CircleImage;
