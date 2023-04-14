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
import FaqQuestion from "./FaqQuestion";
import FaqAnswer from "./FaqAnswer";
import SidebarMenu from "./SidebarMenu";

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
    <span className="sidebar-container">
      {screenSize ? <SidebarMenu /> : null}
      <div ref={top} id="top"></div>
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
          `From there I joined the launch team of a startup bank called `,
          <a
            href="https://www.grasshopper.bank"
            className="faq-link"
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
        imgId={`img6a`}
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
          `During a conversation in a professional group called `,
          <a
            href="https://www.supportdriven.com"
            className="faq-link"
            target="_blank"
          >
            Support Driven
          </a>,
          `, I met an incredible product leader from `,
          <a
            href="https://www.feelcove.com"
            className="faq-link"
            target="_blank"
          >
            Feelmore Labs
          </a>,
          `.`,
          <br />,
          <br />,
          `We began talking about providing high-quality customer service using the best tools on the market. The idea was to support as many users as possible, with as few people as possible.`,
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
        content={[
          `And through it all I was building my software engineering skills, making full stack applications for my teams to use. I enjoyed it so much that I took the leap and attended Fullstack Academy's software engineering immersive.`,
          <br />,
          <br />,
          `If you're interested in learning more about how my experience can help your business, I would love `,
          <a href="mailto:prifkind@gmail.com" className="faq-link">
            to chat further!
          </a>,
        ]}
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
          <FaqQuestion content={`Q: Why did you make this website?`} />
          <FaqAnswer
            content={`A: My career is pretty textured. That can be a tough thing to
              communicate on a resume; so, I thought this website might help me
              introduce myself in a narrative way.`}
          />
          <br />
          <FaqQuestion
            content={`Q: So you worked in hospitality, then startups.  Now you're a software engineer?`}
          />
          <FaqAnswer
            content={[
              `A: That's right! I've been doing some amazing work as a contract-based software engineer, including:`,
              <ul>
                <li>
                  <a
                    href="https://www.purplemana.com"
                    className="faq-link"
                  >
                    Purplemana
                  </a>
                  &nbsp;- helping the crew at Purplemana launch a multi-platform Giveaways page using React Native.
                </li>
                <li>
                  <a
                    href="https://www.sitecraft.io"
                    className="faq-link"
                  >
                    Sitecraft
                  </a>
                  &nbsp;- I consulted on several projects for Sitecraft, focusing on front end development using React with TypeScript.
                </li>
                <li>
                  <a
                    href="https://favorite-color-eth.onrender.com"
                    className="faq-link"
                  >
                    Favorite Color
                  </a>
                  &nbsp;- An Ethereum smart contract deployed on the main net
                </li>
              </ul>,
            ]}
          />
          <br />
          <FaqQuestion content={`Q: What are you working on now?`} />
          <FaqAnswer
            content={[
              `A: I'm working on several projects`,
              <ul>
                <li>
                  I built this website&nbsp;
                  <a
                    href="https://github.com/prifkind/personal-website"
                    className="faq-link"
                    target="_blank"
                  >
                    (repo)
                  </a>
                </li>
                <li>
                  I've been doing some amazing work for local businesses helping them improve their online presence.  I'll definitely share those once they're available for public consumption.
                </li>
                <li>
                  A few fun projects focused on Magic: the Gathering investing using NodeJs and RabbitMQ.
                </li>
              </ul>,
              `Check out my `,
              <a href="https://www.github.com/prifkind" className="faq-link">
                Github repos
              </a>,
              ` for more info.`,
            ]}
          />
          <br />
          <FaqQuestion
            content={`Q: If you went to culinary school, why are there no recipes on this
          page?`}
          />
          <FaqAnswer
            content={[
              `A: I didn't really think anyone was coming here for recipies, but
            ok. Here's my recipe for `,

              <a
                className="faq-link"
                href="https://docs.google.com/document/d/101A5GO4zk8eQy1bBxJGKcVlqlqkCvVsN1vAZWyFhfUE/edit?usp=sharing"
              >
                chocolate cookies with tahini.
              </a>,
            ]}
          />
          <br />
          <FaqQuestion content={`Q: Did you really go to space?`} />
          <FaqAnswer content={`A: No.`} />
          <br />
          <FaqQuestion
            content={`Q: Is it true you once drove the Oscar Mayer Weinermobile?`}
          />
          <FaqAnswer
            content={`A: Absolutely true. It happened in the spring of 2001. My friend
          Tiffany and I had to stand in the road to stop traffic, but it was
          worth it.`}
          />
        </div>
      </div>
      <br />
      <br />
      <div ref={bottom}></div>
    </span>
  );
}
