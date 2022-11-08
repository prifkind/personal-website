import React from "react";

const Headline = (props) => {
  const {title} = props;
  return (
    <div>
      <h2 className="Headline">{title}</h2>
    </div>
  );
};

export default Headline;
