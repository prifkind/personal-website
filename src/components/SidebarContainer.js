import React from "react";
import HeadlineContainer from "./HeadlineContainer";
import TextContainer from "./TextContainer";

export default function SidebarContainer(props) {
  const { imgStatus, setImgStatus } = props;

  return (
    <span>
      <span className="sidebar-container">
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
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`}
          imgId={`img6`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        <TextContainer
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`}
          imgId={`img7`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        <TextContainer
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.`}
          imgId={`img8`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
      </span>
    </span>
  );
}
