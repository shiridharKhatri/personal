import React from "react";
import Navbar from "../components/Navbar";
import {
  BiIcons,
  FiIcons,
  FaIcons,
  SiIcons,
  GrIcons,
  IoIcons,
  AiIcons,
} from "../tools/icons";

export default function About() {
  const socialicons = [
    {
      name: "Linkedin",
      color: "#0A66C2",
      icon: <FaIcons.FaLinkedinIn />,
      link: "https://www.linkedin.com/in/shiridharkhatri/",
    },
    {
      name: "Upwork",
      color: "#00b22d",
      icon: <BiIcons.BiLogoUpwork />,
      link: "https://www.upwork.com/freelancers/~01241e90d934b26b94",
    },
    {
      name: "Github",
      color: "#000000",
      icon: <FaIcons.FaGithub />,
      link: "https://github.com/shiridharKhatri",
    },
    {
      name: "Viber",
      color: "#7360F2",
      icon: <FaIcons.FaViber />,
      link: "viber://chat?number=+9779820610923",
    },
  ];
  const icons = {
    nextjs: <SiIcons.SiNextdotjs />,
    nodejs: <FaIcons.FaNodeJs />,
    reactjs: <GrIcons.GrReactjs />,
    mongodb: <BiIcons.BiLogoMongodb />,
    css: <IoIcons.IoLogoCss3 />,
    javascript: <BiIcons.BiLogoJavascript />,
    html: <AiIcons.AiFillHtml5 />,
    scss: <IoIcons.IoLogoSass />,
  };
  return (
    <>
      <Navbar position="relative" />
      <section className="container aboutme">
        <h1 className="headText" style={{ margin: "10rem 0 6rem 0" }}>
          About me
        </h1>
        <div className="aboutContainer">
          <div className="flexOne">
            <h2>Description</h2>
            <p>
              Hi there! I'm Shiridhar Khatri, and I've been working as a
              full-stack developer for 2 years now.Currently, I'm studying IT at
              the London Metropolitan University. I'm good at both making the
              front part and the back part of websites. For the front, I use
              things like HTML, CSS, and JavaScript, making sure everything
              looks nice and works well on different devices. I also make sure
              the websites I work on are visually appealing, using tools like
              Figma to bring designs to life. I really enjoy working with
              ReactJS because it lets me create cool and interactive web apps.
              And when it comes to the back-end stuff, I use NodeJS, ExpressJS,
              and MongoDB to make sure everything runs smoothly and securely.
            </p>
            <div className="social">
              {socialicons.map((e, index) => {
                return (
                  <h3 key={index} style={{ background: e.color }}>
                    <span>{e.icon}</span>
                    {e.name}
                  </h3>
                );
              })}
            </div>
          </div>
          <div className="image">
            <h1></h1>
            <span className="react">
              {icons.reactjs}
            </span>
            <span className="html">
              {icons.html}
            </span>
            <span className="javascript">
              {icons.javascript}
            </span>
            <span className="nextjs">
              {icons.nextjs}
            </span>
            
            <img src="/headImg.png" alt="headerImage" />
          </div>
        </div>
      </section>
    </>
  );
}
