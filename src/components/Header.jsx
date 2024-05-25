import React, { useEffect, useRef, useState } from "react";
import { CgIcons, MdIcons } from "../tools/icons";
import moment from "moment";
export default function Header() {
  const scaleOne = useRef(null);
  const scaleTwo = useRef(null);
  const scaleThree = useRef(null);
  const [greeting, setGreeting] = useState("");

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
  useEffect(() => {
    const greetingText = () => {
      let currentTime = moment();
      let currentHour = currentTime.hour();
      setGreeting(currentHour);
      if (currentHour >= 6 && currentHour < 12) {
        setGreeting("morning 🌅");
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("afternoon ⛅");
      } else if (currentHour >= 18 && currentHour < 21) {
        setGreeting("evening 🌇");
      } else {
        setGreeting("night 🌃");
      }
    };
    greetingText();
  }, []);

  useEffect(() => {
    let top = document.querySelector(".images img.top");
    let second = document.querySelector(".images img.second");
    let third = document.querySelector(".images img.third");
    let forth = document.querySelector(".images img.forth");
    let fifth = document.querySelector(".images img.fifth");
    const handleScroll = () => {
      if (window.scrollY >= 400 && window.scrollY <= 900) {
        top.style.height = "30rem";
        second.style.left = "12rem";
        third.style.right = "12rem";
        forth.style.left = "6rem";
        fifth.style.right = "6rem";
      } else {
        top.style.height = "35rem";
        second.style.left = "23rem";
        third.style.right = "23rem";
        forth.style.left = "23rem";
        fifth.style.right = "23rem";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header id="headerId">
        <div className="headContainer">
          <div className="text">
            <h1>Hi, Good{greeting}!</h1>
            <h1 style={{ fontSize: "2rem", width: "40rem" }}>
              <span>Shiridhar Khatri</span>
            </h1>
            <h1>Web Developer/Designer</h1>
            <p>
              Full-stack developer with expertise in HTML, CSS, JavaScript,
              ReactJS, NodeJS, MongoDB, AWS, Wordpress, and GoDaddy. I
              specialize in crafting engaging user interfaces and solid backend
              solutions for web apps.
            </p>
            <div className="buttons">
              <a
                href="https://www.upwork.com/freelancers/shiridhark"
                target="_blank"
              >
                <button id="hireMe" style={{ color: "var(--black-white)" }}>Hire me</button>
              </a>
              <a href="/resume.pdf" target="_blank" title="Shiridhar-Resume">
                <button
                id="resume"
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
      <section className="responsiveness" style={{ display: "flex" }}>
        <div className="description">
          <h4>Other skill</h4>
          <h1><span>Responsive design</span> adapts websites to all screen sizes.</h1>
          <p>
            Responsive web design means making websites that look good on any
            device. We can achieve this using media queries, which adjust the
            layout based on screen size. Alternatively, we can use frameworks
            like Bootstrap or Tailwind CSS, which provide ready-made tools for
            creating responsive designs. In short, responsiveness ensures that a
            website works well whether it's viewed on a big computer screen or a
            small smartphone. I am proficient in making responsive designs as
            well.
          </p>
        </div>
        <div className="images">
          <img
            id="forth"
            className="forth"
            src="/responsiveness/forth.png"
            alt="forth"
          />
          <img
            id="second"
            className="second"
            src="/responsiveness/second.png"
            alt="second"
          />
          <img
            id="top"
            className="top"
            src="/responsiveness/top.png"
            alt="top"
          />
          <img
            id="third"
            className="third"
            src="/responsiveness/third.png"
            alt="third"
          />
          <img
            id="fifth"
            className="fifth"
            src="/responsiveness/fifth.png"
            alt="fifth"
          />
        </div>
      </section>
    </>
  );
}
