import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function TextContainer(props) {
  const { content, imgId, imgStatus, setImgStatus } = props;
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    inView
      ? setImgStatus({ ...imgStatus, [imgId]: true })
      : setImgStatus({ ...imgStatus, [imgId]: false });
  }, [inView]);

  return (
    <div>
      <div className="text-container" ref={ref}>
        <div>{content}</div>
      </div>
    </div>
  );
}
