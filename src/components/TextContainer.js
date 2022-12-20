import React, { useEffect, useRef, useState } from "react";
import { useInView, useView } from "react-intersection-observer";

export default function TextContainer(props) {
  const { content, imgId, imgStatus, setImgStatus } = props;
  const { ref, inView, entry } = useInView();

  // const [scrolling, setScrolling] = useState(false);
  // const [scrollTop, setScrollTop] = useState(0);

  // useEffect(() => {
  //   const onScroll = (e) => {
  //     console.log(`scrolled`)
  //     setImgStatus({ ...imgStatus, [imgId]: true });
  //     setScrollTop(e.target.documentElement.scrollTop);
  //     setScrolling(e.target.documentElement.scrollTop > scrollTop);
  //   };
  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [scrollTop]);

  useEffect(() => {
    inView
      ? setImgStatus({ ...imgStatus, [imgId]: true })
      : setImgStatus({ ...imgStatus, [imgId]: false });
  }, [inView]);

  return (
    <div>
      <div className="text-container" ref={ref}>
        <div>{content}</div>
        <div>{console.log(inView)}</div>
      </div>
    </div>
  );
}
