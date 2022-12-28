import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";

import React from "react";

export default function DownArrow() {
  return <UseAnimations animation={arrowDown} size={56} strokeColor={"#FFF"} />;
}
