import React from "react";
import { Slide } from "react-awesome-reveal";

export default function ImageContainer(props) {
  const { imgClass, imgStatus, imgUrl } = props;

  return imgStatus ? (
    <div className={imgClass}>
      <Slide direction={"up"} duration={1000} >
        <img
          src={imgUrl}
          alt="peter wearing a headlamp and pointing dramatically"
        />
      </Slide>
    </div>
  ) : null;
}
