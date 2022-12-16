import React from "react";

export default function HeadlineContainer(props) {
  const { byline, headline } = props;

  return (
    <div className="headline-container">
      <h1>{headline}</h1>
      <h2>{byline}</h2>
    </div>
  );
}
