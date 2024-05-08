import React, { useEffect, useRef } from "react";
import { CgIcons, MdIcons } from "../tools/icons";
export default function Header() {
  const scaleOne = useRef(null);
  const scaleTwo = useRef(null);
  const scaleThree = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 95) {
        scaleOne.current.style.transform = "scale(0)";
        setTimeout(() => {
          scaleTwo.current.style.transform = "scale(0)";
        }, 500);
        setTimeout(() => {
          scaleThree.current.style.transform = "scale(0)";
        }, 800);
      } else {
        scaleOne.current.style.transform = "scale(1)";
        setTimeout(() => {
          scaleTwo.current.style.transform = "scale(1)";
        }, 500);
        setTimeout(() => {
          scaleThree.current.style.transform = "scale(1)";
        }, 800);
      }
    };
    scaleOne.current.style.transform = "scale(1)";
    window.addEventListener("scroll", handleScroll);
    setTimeout(() => {
      scaleTwo.current.style.transform = "scale(1)";
    }, 500);
    setTimeout(() => {
      scaleThree.current.style.transform = "scale(1)";
    }, 800);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header id="headerId">
      <div className="headContainer">
        <div className="text">
          <h1 style={{ fontSize: "4rem", width: "35rem" }}>
            Hi, I am <span>Shiridhar Khatri</span>
          </h1>
          <h1>Web Developer/Designer</h1>
          <p>
            Full-stack developer with expertise in HTML, CSS, JavaScript,
            ReactJS, NodeJS, MongoDB, AWS, Wordpress, and GoDaddy. I specialize
            in crafting engaging user interfaces and solid backend solutions for
            web apps.
          </p>
          <div className="buttons">
            <a href="https://www.upwork.com/freelancers/shiridhark" target="_blank">
              <button style={{ color: "var(--black-white)" }}>Hire me</button>
            </a>
            <a href="/resume.pdf" target="_blank" title="Shiridhar-Resume">
              <button
                style={{
                  background: "transparent",
                  color: "var(--btn-text-color)",
                  border: ".1rem dashed var(--btn-text-color)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="image">
          <h1 className="shadow"></h1>
          <img src="/headImg.png" alt="image" />
          <div className="clients" ref={scaleOne}>
            <div className="imgs">
              <img src="/review/ally.webp" alt="ally" />
              <img src="/review/neo.webp" alt="neo" />
              <img src="/review/vis.webp" alt="vis" />
              <img src="/review/aaisha.webp" alt="aaisha" />
              <h2>+2</h2>
            </div>
            <p>Happy Clients</p>
          </div>
          <div className="projectss" ref={scaleTwo}>
            <h2>
              <CgIcons.CgWebsite />
            </h2>{" "}
            100+ Projects
          </div>
          <div className="starss" ref={scaleThree}>
            <h2>
              <MdIcons.MdStars />
            </h2>
            <p>4.9</p>
          </div>
        </div>
      </div>
    </header>
  );
}
