import React from "react";
import ImageContainer from "./ImageContainer";

export default function Content(props) {
  const { imgStatus } = props;
  return (
    <div className="img-container">
      <ImageContainer imgClass={`img1 ${imgStatus.img1}`} />
      <ImageContainer imgClass={`img2 ${imgStatus.img2}`} />
      <ImageContainer imgClass={`img3 ${imgStatus.img3}`} />
      <ImageContainer imgClass={`img4 ${imgStatus.img4}`} />
      <ImageContainer imgClass={`img5 ${imgStatus.img5}`} />
      <ImageContainer imgClass={`img6 ${imgStatus.img6}`} />
      <ImageContainer imgClass={`img7 ${imgStatus.img7}`} />
      <ImageContainer imgClass={`img8 ${imgStatus.img8}`} />
    </div>
  );
}
