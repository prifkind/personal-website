import React from "react";
import { Slide } from "react-awesome-reveal";

export default function ImageContainer(props) {
  const { imgClass, imgUrl } = props;

  return (
    <div className={imgClass}>
      <Slide direction={"up"}>
        <img
          src={imgUrl}
          alt="peter wearing a headlamp and pointing dramatically"
          className={imgClass}
        />
      </Slide>
    </div>
  );
}
