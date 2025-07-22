import React from "react";
import {
  AiIcons,
  BiIcons,
  IoIcons,
  SiIcons,
  FaIcons,
  GrIcons,
} from "../tools/icons";
import {  SiTailwindcss, SiAmazonaws } from "react-icons/si";

export default function Expertise() {
  const content = [
    {
      icon: <SiIcons.SiNextdotjs />,
      name: "Nextjs",
      color: "#000000",
      discription: "",
      link: "https://nextjs.org/",
    },
    {
      icon: <FaIcons.FaJava />,
      name: "Java",
      color: "#5382a1",
      discription: "",
      link: "https://www.java.com/en/",
    },
    {
      icon: <FaIcons.FaNodeJs />,
      name: "Nodejs",
      color: "#3C873A",
      discription: "",
      link: "https://nodejs.org/en",
    },
    {
      icon: <GrIcons.GrReactjs />,
      name: "Reactjs",
      color: "#61dafb",
      discription: "",
      link: "https://react.dev/",
    },
    {
      icon: <BiIcons.BiLogoMongodb />,
      name: "MongoDB",
      color: "#589636",
      discription: "",
      link: "https://www.mongodb.com/",
    },

    {
      icon: <BiIcons.BiLogoJavascript />,
      name: "JavaScript",
      color: "#F0DB4F",
      discription: "",
      link: "https://www.javascript.com/",
    }, {
    icon: <SiAmazonaws />,
    name: "AWS",
    color: "#FF9900",
    discription: "",
    link: "https://aws.amazon.com/",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    color: "#38B2AC",
    discription: "",
    link: "https://tailwindcss.com/",
  },
 
  ];
  function openNewWindow(link) {
    window.open(link, "_blank");
  }
  return (
    <section className="container expertise ">
      <div className="textHead">
        <h1><span>My expertise</span> lies in various fields including all listed below</h1>
      </div>
      <div className="mainContent" id="mainExpContainer">
        {content.map((e, index) => {
          return (
            <div
              // data-aos="fade-up fade-out"
              // data-aos-anchor-placement="top-bottom"
              // data-aos-delay="100"
              className="contentCard"
              style={{ background: e.color }}
              onClick={() => openNewWindow(e.link)}
              key={index}
            >
              <h2 style={{ color: "#ffffff" }}>{e.icon}</h2>
              <h3>{e.name}</h3>
            </div>
          );
        })}
      </div>
      <div
        // data-aos="flip-left fade-out"
        // data-aos-anchor-placement="top-bottom"
        // data-aos-delay="200"
        className="banner"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(/banner.png)`,
        }}
      >
        <h1>Get free source code here</h1>
        <h3>
          I am serving free codes for beginner learners in my github you can
          check it out!
        </h3>

        <button onClick={()=>{
          window.open("https://github.com/shiridharKhatri", "_blank");
        }} id="freeCodeId" className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Get Code</span>
        </button>
      </div>
    </section>
  );
}
