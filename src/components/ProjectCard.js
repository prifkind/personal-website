import React from "react";

const ProjectCard = (props) => {
  const {name} = props
  return <span className="Project-card">{name}</span>;
};

export default ProjectCard;
