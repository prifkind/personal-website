import UseAnimations from "react-useanimations";
import arrowUp from "react-useanimations/lib/arrowUp";

import React from "react";

export default function UpArrow() {
  return <UseAnimations animation={arrowUp} size={56} strokeColor={"#FFF"} />;
}
