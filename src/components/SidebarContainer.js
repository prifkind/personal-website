import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import HeadlineContainer from "./HeadlineContainer";
import TextContainer from "./TextContainer";

export default function SidebarContainer(props) {
  const { imgStatus, scrollDirection, setImgStatus, setScrollDirection } =
    props;

  const [top, topView] = useInView();
  const [bottom, bottomView] = useInView();

  console.log(`TopView - ${topView} BottomView - ${bottomView}`)
  console.log(scrollDirection)

  useEffect(() => {
    if (topView) {
      setScrollDirection("arrowDown");
    }
  }, [topView]);

  useEffect(() => {
    if (bottomView) {
      setScrollDirection("arrowUp");
    }
  }, [bottomView]);

  return (
    <span>
      <span className="sidebar-container">
      <div ref={top}></div>
        <HeadlineContainer
          headline={`Food. Health. Finance. Gear. Software.`}
          byline={`A career in adventure.`}
        />
        <TextContainer
          content={`
My name is Peter Rifkind.  This website is about me.  Specifically, my career.
            `}
          imgId={`img1`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        <TextContainer
          content={`I've done a lot of different things in my career; most of them unplanned.  Usually I was pulled in a direction.  Sometimes I was pushed.`}
          imgId={`img2`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        <TextContainer
          content={`I graduated from Indiana University with a Management degree, and then went to the Culinary Institute of America.`}
          imgId={`img3`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        <TextContainer
          content={`I wanted to be a chef, but I had so much student loan debt I couldn't afford to be a cook.`}
          imgId={`img3a`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        <TextContainer
          content={`I did work in restaurant management though.  And then joined Oracle installing point-of-sale systems for restaurants and hotels.  Eventually I found my way to a startup called UltraLinq.`}
          imgId={`img4`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        <TextContainer
          content={`I built a large, global team responsible for the customer service, user support, and implementation for hundreds of thousands of users.`}
          imgId={`img5`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        <TextContainer
          content={`After that I designed the service model for an OCC-chartered national bank.`}
          imgId={`img6`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        <TextContainer
          content={`I worked in the consumer space and built a headless service department meant to support as many users as possible with as few people as possible.`}
          imgId={`img7`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        <TextContainer
          content={`And I went to bootcamp to flex my software engineering skills.`}
          imgId={`img8`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        <HeadlineContainer headline={`FAQs`}  />
      <div ref={bottom}></div>
      </span>
    </span>
  );
}
