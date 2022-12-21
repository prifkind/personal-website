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
      <ImageContainer imgClass={`img1 ${imgStatus.img1}`} imgUrl={headlamp} />
      <ImageContainer
        imgClass={`img2 ${imgStatus.img2}`}
        imgUrl={dangerousCliff}
      />
      <ImageContainer
        imgClass={`img3 ${imgStatus.img3}`}
        imgUrl={adventureAwaits}
      />
      <ImageContainer imgClass={`img4 ${imgStatus.img4}`} imgUrl={portrait} />
      <ImageContainer imgClass={`img5 ${imgStatus.img5}`} imgUrl={plant} />
      <ImageContainer imgClass={`img6 ${imgStatus.img6}`} imgUrl={plane} />
      <ImageContainer imgClass={`img7 ${imgStatus.img7}`} imgUrl={space} />
      <ImageContainer imgClass={`img8 ${imgStatus.img8}`} imgUrl={chuck} />
    </div>
  );
}
