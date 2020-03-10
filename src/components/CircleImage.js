import React from "react";

const CircleImage = ({ src, title, ...props }) => {
  return (
    <img
      src={src}
      alt={title}
      {...props}
      style={{
        borderRadius: "50%"
      }}
    />
  );
};

export default CircleImage;
