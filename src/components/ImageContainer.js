import React from "react";
import { Slide } from "react-awesome-reveal";

export default function ImageContainer(props) {
  const { imgClass } = props;

  return (
    <div className="img-container">
      <Slide direction={"up"}>
        <img src="https://picsum.photos/200/300" className={imgClass} />
      </Slide>
    </div>
  );
}
