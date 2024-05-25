import React, { useEffect, useState } from "react";
import {
  BiIcons,
  SiIcons,
  FaIcons,
  GrIcons,
  IoIcons,
  AiIcons,
  MdIcons,
} from "../tools/icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import IframeLinks from "./IframeLinks";
export default function Portfolio() {
  const [livelink, setLiveLink] = useState("");
  const [iframeopen, setFrameopen] = useState(false);
  const portfolio = [
    {
      src: "/portfolioo/ally.png",
      name: "Ally Integra",
      color: "#1d1d1d",
      star: 5,
      tech: ["reactjs", "html", "css", "javascript"],
      points: ["Business website", "Fully responsive", "visually appealing"],
      description:
        "The Ally Integra website is created using Vite + ReactJS and vanilla CSS, which is fully responsive for all types of screen sizes. The website is fast and optimized for better performance.",
      link: "https://www.allyintegra.com/",
    },
    {
      src: "/portfolioo/neo.png",
      name: "Neo Caliste",
      color: "#eef002",
      star: 5,
      tech: ["scss", "html", "css", "javascript"],
      points: ["Portfolio website", "Fully responsive", "video showcase site"],
      description:
        "The NEO CALISTE portfolio website is recreated using HTML, CSS, JavaScript, and SCSS, which is fully responsive for all types of screen sizes. The website includes videos created by NEO CALISTE.",
      link: "https://neocaliste.com/",
    },
    {
      src: "/portfolioo/vis.png",
      name: "The Visbug Agency",
      color: "#fc2154",
      star: 5,
      tech: ["html", "css", "javascript"],
      points: ["Portfolio website", "Fully responsive", "App showcase site"],
      description:
        "The Visbug Mobile App Development Agency website is created using HTML, CSS, and JavaScript. The site is fully responsive for all types of mobile devices, and the performance is high and optimized.",
      link: "https://visbug.com/",
    },
    {
      src: "/portfolioo/food.png",
      name: "Shah Food",
      color: "#1b9e98",
      points: [
        "Business website",
        "Fully responsive",
        "Business management site",
      ],
      star: 4,
      tech: ["reactjs", "html", "css", "javascript"],
      description:
        "The Shah Food website is created using ReactJS, which is highly responsive and optimized for all types of screen sizes, from mobile to big screens.",
      link: "https://shiny-travesseiro-9d5183.netlify.app/",
    },
    {
      src: "/portfolioo/donor.png",
      name: "Donor Website",
      color: "#358546",
      star: 5,
      tech: ["reactjs", "html", "css", "javascript"],
      points: ["Donor website", "Fully responsive", "Information site"],
      description:
        "The Donor website is created using ReactJS, CSS which is highly responsive and optimized for all types of screen sizes, from mobile to big screens.",
      link: "https://symphonious-frangollo-eb32ed.netlify.app/",
    },
    {
      src: "/portfolioo/asta.png",
      name: "Asta Wolf",
      color: "#013546",
      tech: ["nextjs", "html", "css", "javascript", "nodejs"],
      points: ["E-commerce website", "Fully responsive", "Product buy/sell"],
      description:
        "Asta wolf is a e-commerce clone website that i have recreated the design using html, css and javascript the site is also responsive .",
      link: "#",
    },
    {
      src: "/portfolioo/chat.png",
      name: "Aayu Chat",
      color: "#3db6ff",
      tech: ["nextjs", "mongodb", "socket", "javascript", "nodejs"],
      points: ["Realtime Chatting", "Create groups", "Talk with strangers"],
      description:
        "Aayu Chat is a random chatting website that i have created the using nextjs, nodejs-expressjs, socketio for real time chat and mongodb for database. The site is also responsive .",
      link: "#",
    },
    {
      src: "/portfolioo/news.png",
      name: "Today News",
      color: "#6a8e22",
      tech: ["reactjs", "mongodb", "javascript", "nodejs"],
      points: [
        "Daily news update",
        "News by category",
        "Real time weather details",
      ],
      description: `The news website is created using ReactJS and the News API sourced from <a href="https://newsapi.org/">newsapi.org</a>. The site is fully responsive, providing real-time news updates and weather forecasts.`,
      link: "#",
    },
  ];
  const liveLink = (link) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".photo:not(:first-child)", {
      display: "none",
      opacity: 0,
      scale: 0.5,
    });

    const animation = gsap.to(".photo:not(:first-child)", {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 1,
      display: "flex",
    });

    ScrollTrigger.create({
      trigger: ".gallery",
      start: "0 top",
      end: "bottom bottom",
      pin: ".right",
      animation: animation,
      scrub: true,
      // markers: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const icons = {
    nextjs: <SiIcons.SiNextdotjs />,
    nodejs: <FaIcons.FaNodeJs />,
    reactjs: <GrIcons.GrReactjs />,
    mongodb: <BiIcons.BiLogoMongodb />,
    css: <IoIcons.IoLogoCss3 />,
    javascript: <BiIcons.BiLogoJavascript />,
    html: <AiIcons.AiFillHtml5 />,
    scss: <IoIcons.IoLogoSass />,
    socket: <SiIcons.SiSocketdotio />,
  };
  function getRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <h3 key={`full-star-${i}`} className="stars">
          <AiIcons.AiFillStar />
        </h3>
      );
    }

    for (let i = 0; i < halfStars; i++) {
      stars.push(
        <h3 key={`half-star-${i}`} className="stars">
          <AiIcons.AiFillStar style={{ opacity: 0.5 }} />
        </h3>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <h3 key={`empty-star-${i}`} className="stars">
          <AiIcons.AiOutlineStar />
        </h3>
      );
    }
    return stars;
  }
  useEffect(() => {
    AOS.init();
  }, []);
  const viewLiveInSite = (link) => {
    if (iframeopen === true) {
      setFrameopen(false);
      setLiveLink(link);
    } else {
      setFrameopen(true);
      setLiveLink(link);
    }
    console.log(link);
  };
  return (
    <section className="container protfolio">
        <div className="textHead">
        <h1 style={{margin:"7rem 0 0 0"}}>
        Some the of highlighted <span>projects</span> I've successfully created.
        </h1>
      </div>
      <IframeLinks
        link={livelink}
        isOpen={iframeopen}
        setFrameopen={setFrameopen}
      />
      <div className="gallery">
        <div className="left">
          <div className="detailsWrapper">
            {portfolio.map((e, index) => {
              return (
                <div
                  key={index}
                  className="details"
                  data-aos="fade-up-right"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="150"
                >
                  <h1>{index+1}. {e.name}</h1>
                  {!e.star || e.star <= 0 ? (
                    ""
                  ) : (
                    <div className="star">
                      <span>{getRatingStars(e.star)}</span>
                      |&nbsp;&nbsp;{e.star} Star&nbsp;&nbsp;|&nbsp;&nbsp;Client
                    </div>
                  )}
                  <p dangerouslySetInnerHTML={{ __html: e.description }}></p>
                  <div className="icons">
                    {e.tech.includes("nextjs") && <h4>{icons.nextjs}</h4>}
                    {e.tech.includes("nodejs") && <h4>{icons.nodejs}</h4>}
                    {e.tech.includes("reactjs") && <h4>{icons.reactjs}</h4>}
                    {e.tech.includes("mongodb") && <h4>{icons.mongodb}</h4>}
                    {e.tech.includes("css") && <h4>{icons.css}</h4>}
                    {e.tech.includes("javascript") && (
                      <h4>{icons.javascript}</h4>
                    )}
                    {e.tech.includes("html") && <h4>{icons.html}</h4>}
                    {e.tech.includes("scss") && <h4>{icons.scss}</h4>}
                    {e.tech.includes("socket") && <h4>{icons.socket}</h4>}
                  </div>
                  <ul>
                    {e.points.map((points, index) => {
                      return (
                        <li
                       
                          className={`points${index}`}
                          key={index}
                        >
                          <span>
                            <FaIcons.FaRegDotCircle />
                          </span>
                          {points}
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    onClick={() => {
                      liveLink(e.link);
                    }}
                    className="cssbuttons-io-button"
                  >
                    View site
                    <div className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="right">
          <div className="photos">
            {portfolio.map((e, index) => {
              return (
                <div
                  className="photo"
                  key={index}
                  onClick={() => {
                    viewLiveInSite(e.link);
                  }}
                >
                  <div
                    style={{ boxShadow: `0px 0px 125px 0px ${e.color}` }}
                    className="glowEffect"
                    id={`glowEffect${index}`}
                  ></div>
                  <button>
                    <MdIcons.MdLiveTv />
                  </button>
                  <img src={e.src} alt={e.name} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
