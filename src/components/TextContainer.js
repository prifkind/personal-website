import React from "react";

export default function TextContainer(props) {
  const { content } = props;
  return (
    <div className="text-container">
      <div>{content}</div>
    </div>
  );
}
