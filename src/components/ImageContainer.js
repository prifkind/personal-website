import React from "react";
import { Slide } from "react-awesome-reveal";

export default function ImageContainer(props) {
  const { imgClass, imgStatus, imgUrl } = props;

  return imgStatus ? (
    <div>
      <Slide direction={"up"} duration={2000} className={imgClass}>
        <img
          src={imgUrl}
          alt="peter wearing a headlamp and pointing dramatically"
        />
      </Slide>
    </div>
  ) : null;
}
