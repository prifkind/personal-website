import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Slide } from "react-awesome-reveal";

import HeadlineContainer from "./HeadlineContainer";
import TextContainer from "./TextContainer";
import headlampMobile from "../images/Headlamp-Framed-Mobile.png";
import dangerousCliffMobile from "../images/DangerousCliff-Framed-Mobile.png";
import graduationMobile from "../images/Graduation-Framed-Mobile.png";
import entremetMobile from "../images/Entremet-Framed-Mobile.png";
import portraitMobile from "../images/Portrait-Framed-Mobile.png";
import plantMobile from "../images/Plant-Framed-Mobile.png";
import planeMobile from "../images/Plane-Framed-Mobile.png";
import spaceMobile from "../images/Space-Framed-Mobile.png";
import chuckMobile from "../images/Chuck-Framed-Mobile.png";

export default function SidebarContainer(props) {
  const { imgStatus, screenSize, setImgStatus, setScrollDirection } = props;

  const [top, topView] = useInView();
  const [bottom, bottomView] = useInView();

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
        {screenSize ? (
          <Slide direction={"up"} duration={1000} triggerOnce={true}>
            <img
              src={headlampMobile}
              alt="Peter wearing a headlamp and pointing into the distance"
            />
          </Slide>
        ) : null}
        <TextContainer
          content={`I've done a lot of different things in my career; most of them unplanned.  Usually I was pulled in a direction.  Sometimes I was pushed.`}
          imgId={`img2`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        {screenSize ? (
          <Slide direction={"up"} duration={1000} triggerOnce={true}>
            <img
              src={dangerousCliffMobile}
              alt="Peter at the Badlands standing by a cliff marked with a danger sign"
            />
          </Slide>
        ) : null}
        <TextContainer
          content={`I graduated from Indiana University with a Management degree, and then went to the Culinary Institute of America.`}
          imgId={`img3`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        {screenSize ? (
          <Slide direction={"up"} duration={1000} triggerOnce={true}>
            <img
              src={graduationMobile}
              alt="Peter flexing in cap and gown after graduating from Indiana University"
            />
          </Slide>
        ) : null}
        <TextContainer
          content={`I wanted to be a chef, but I had so much student loan debt I couldn't afford to be a cook.`}
          imgId={`img3a`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        {screenSize ? (
          <Slide direction={"up"} duration={1000} triggerOnce={true}>
            <img
              src={entremetMobile}
              alt="Peter at the entremet station with Sey Keyong and Andy.  Looking happy for some reason."
            />
          </Slide>
        ) : null}
        <TextContainer
          content={[
            `I did work in restaurant management though.  And then joined `,
            <a
              href="https://www.oracle.com/industries/micros/"
              class="faq-link"
              target="_blank"
            >
              Oracle
            </a>,
            ` installing point-of-sale systems for restaurants and hotels.  Eventually I found my way to a startup called `,
            <a
              href="https://www.ultralinq.com"
              class="faq-link"
              target="_blank"
            >
              UltraLinq
            </a>,
            ` where I lead the Client Service team.`,
          ]}
          imgId={`img4`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        {screenSize ? (
          <Slide direction={"up"} duration={1000} triggerOnce={true}>
            <img
              src={portraitMobile}
              alt="Peter standing in front of a portrait of an ibex.  Both flashing smoldering looks while in the same color palette and looking in the same direction."
            />
          </Slide>
        ) : null}
        <TextContainer
          content={[
            `I built a large, global team responsible for customer service, user support, and implementation for hundreds of thousands of users.`,
            <br />,<br />,
            `I met many talented people at UltraLinq, and was privileged to have the opportunity to mentor a few.`,
          ]}
          imgId={`img5`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        {screenSize ? (
          <Slide direction={"up"} duration={1000} triggerOnce={true}>
            <img
              src={plantMobile}
              alt="Peter seated in front of an edible flower pot and smiling"
            />
          </Slide>
        ) : null}
        <TextContainer
          content={[
            `From there I joined the luanch team of a startup bank called `,
            <a
              href="https://www.grasshopper.bank"
              class="faq-link"
              target="_blank"
            >
              Grasshopper
            </a>,
            ` where I designed the service model.  Opening a bank was an amazing experience.`,
          ]}
          imgId={`img6`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        {screenSize ? (
          <Slide direction={"up"} duration={1000} triggerOnce={true}>
            <img
              src={planeMobile}
              alt="A black-and-white photo of Peter(?) standing in front of a WWII aircraft"
            />
          </Slide>
        ) : null}
        <TextContainer
          content={`I worked in the consumer space and built a headless service department meant to support as many users as possible with as few people as possible.`}
          imgId={`img7`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        {screenSize ? (
          <Slide direction={"up"} duration={1000} triggerOnce={true}>
            <img
              src={spaceMobile}
              alt="Peter in a space, wearing a space suit but no helmet"
            />
          </Slide>
        ) : null}
        <TextContainer
          content={`And I went to bootcamp to flex my software engineering skills.`}
          imgId={`img8`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        {screenSize ? (
          <Slide direction={"up"} duration={1000} triggerOnce={true}>
            <img
              src={chuckMobile}
              alt="Chuck the cat looking down with malice while Peter sleeps"
            />
          </Slide>
        ) : null}
        <div className="faq-container">
          <HeadlineContainer headline={`FAQs`} />
          <div className="faq">
            <div className="faq-question">
              Q: If you went to culinary school, why are there no recipies on
              this page?
            </div>
            <div className="faq-answer">
              A: I didn't really think anyone was coming here for recipies, but
              ok. Here's my recipe for{" "}
              <a
                className="faq-link"
                href="https://docs.google.com/document/d/101A5GO4zk8eQy1bBxJGKcVlqlqkCvVsN1vAZWyFhfUE/edit?usp=sharing"
              >
                chocolate cookies with tahini.
              </a>
            </div>
          </div>
          <br />
          <div className="faq">
            <div className="faq-question">Q: Did you really go to space?</div>
            <div className="faq-answer">A: No.</div>
          </div>
          <br />
          <div className="faq">
            <div className="faq-question">
              Q: Is it true you once drove the Oscar Mayer Weinermobile?
            </div>
            <div className="faq-answer">
              A: Absolutely true. It happened in the spring of 2001. My friend
              Tiffany and I had to stand in stand in the road to stop traffic,
              but it was worth it.
            </div>
          </div>
          <br />
        </div>
        <br />
        <div ref={bottom}></div>
      </span>
    </span>
  );
}
