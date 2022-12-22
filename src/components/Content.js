import React from "react";
import ImageContainer from "./ImageContainer";
import adventureAwaits from "../images/AdventureAwaits.png";
import chuck from "../images/Chuck.png";
import dangerousCliff from "../images/DangerousCliff.png";
import headlamp from "../images/Headlamp.png";
import plane from "../images/Plane.png";
import plant from "../images/Plant.png";
import portrait from "../images/Portrait.png";
import space from "../images/Space.png";

export default function Content(props) {
  const { imgStatus } = props;
  return (
    <div className="img-container">
      <ImageContainer
        imgClass={`img1 ${imgStatus.img1}`}
        imgUrl={headlamp}
        imgStatus={imgStatus.img1}
      />
      <ImageContainer
        imgClass={`img2 ${imgStatus.img2}`}
        imgUrl={dangerousCliff}
        imgStatus={imgStatus.img2}
      />
      <ImageContainer
        imgClass={`img3 ${imgStatus.img3}`}
        imgUrl={adventureAwaits}
        imgStatus={imgStatus.img3}
      />
      <ImageContainer
        imgClass={`img4 ${imgStatus.img4}`}
        imgUrl={portrait}
        imgStatus={imgStatus.img4}
      />
      <ImageContainer
        imgClass={`img5 ${imgStatus.img5}`}
        imgUrl={plant}
        imgStatus={imgStatus.img5}
      />
      <ImageContainer
        imgClass={`img6 ${imgStatus.img6}`}
        imgUrl={plane}
        imgStatus={imgStatus.img6}
      />
      <ImageContainer
        imgClass={`img7 ${imgStatus.img7}`}
        imgUrl={space}
        imgStatus={imgStatus.img7}
      />
      <ImageContainer
        imgClass={`img8 ${imgStatus.img8}`}
        imgUrl={chuck}
        imgStatus={imgStatus.img8}
      />
    </div>
  );
}
