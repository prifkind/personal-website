import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Slide } from "react-awesome-reveal";

import HeadlineContainer from "./HeadlineContainer";
import TextContainer from "./TextContainer";
import headlampMobile from "../images/Headlamp-Framed-Mobile.png";
import dangerousCliffMobile from "../images/DangerousCliff-Framed-Mobile.png";
import graduationMobile from "../images/Graduation-Framed-Mobile.png";
import grasshopperMobile from "../images/Grasshopper-Framed-Mobile.png";
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
              className="faq-link"
              target="_blank"
            >
              Oracle
            </a>,
            ` installing point-of-sale systems for restaurants and hotels.  Eventually I found my way to a startup called `,
            <a
              href="https://www.ultralinq.com"
              className="faq-link"
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
            <br />,
            <br />,
            `I met many talented people at UltraLinq, and was privileged to mentor a few.`,
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
              className="faq-link"
              target="_blank"
            >
              Grasshopper
            </a>,
            ` where I designed the service model.  Opening a bank was an amazing experience.`,
          ]}
          imgId={`img6a`}
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
        />
        {screenSize ? (
          <Slide direction={"up"} duration={1000} triggerOnce={true}>
            <img
              src={grasshopperMobile}
              alt="A group picture of people around a computer"
            />
          </Slide>
        ) : null}
        <TextContainer
          content={[
            `There I met my coding mentor who inspired me to learn more about software engineering.`,
            <br />,
            <br />,
            `It had the makings of a direction, but I wasn't sure.  After all, what do you do once you open a bank?  Running it wasn't nearly as fun as the launch part.`,
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
          content={[
            `During a conversation in`,
            <a href="https://www.supportdriven.com" className="faq-link">
              Support Driven
            </a>,
            `, I met an incredible Product Manager.  We began talking about providing high-quality customer service using the best tools imaginable. The idea was to support as many users as possible with as few people as possible.`,
            <br />,
            <br />,
            `It was a crazy idea, and it worked.`,
          ]}
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
              Q: Why did you make this website?
            </div>
            <div className="faq-answer">
              A: My career is pretty textured. That can be a tough thing to
              communicate on a resume; so, I thought this website might help me
              introduce myself in a narrative way.
            </div>
          </div>
          <br />
          <div className="faq">
            <div className="faq-question">
              Q: And now you want to be a software engineer?
            </div>
            <div className="faq-answer">
              A: That's right! I built some great projects during my software
              engineering immersive at Fullstack Academy, including:
              <ul>
                <li>
                  An ecommerce website with a heavy focus on gifting and
                  algorithimic gift suggestions
                </li>
                <li>An Ethereum smart contract deployed on the main net</li>
              </ul>
            </div>
          </div>
          <br />
          <div className="faq">
            <div className="faq-question">Q: What are you working on now?</div>
            <div className="faq-answer">
              A: Since graduating from Fullstack Academy in December 2022, I've
              been building several projects.
              <ul>
                <li>I built this website</li>
                <li>
                  I'm working on a full stack customer service tool to help
                  agents
                </li>
                <li>
                  A few fun projects focused on Magic: the Gathering (probably
                  the greatest game ever made).
                </li>
              </ul>
              <div>
                Check out my
                <a href="https://www.github.com/prifkind" className="faq-link">
                  Github repos
                </a>{" "}
                for more info.
              </div>
            </div>
          </div>
          <br />
          <div className="faq">
            <div className="faq-question">
              Q: If you went to culinary school, why are there no recipies on
              this page?
            </div>
            <div className="faq-answer">
              A: I didn't really think anyone was coming here for recipies, but
              ok. Here's my recipe for
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
              Tiffany and I had to stand in the road to stop traffic, but it was
              worth it.
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
