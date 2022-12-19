import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

export default function TextContainer(props) {
  const { content, imgClass } = props;

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div>
      <div className="text-container">
        <div>{content}</div>
      </div>
      <Slide direction={'up'} >
        <img src="../../public/placeholder.png" className={imgClass}/>
      </Slide>
    </div>
  );
}
