import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { FaRegDotCircle, FaNodeJs, FaGithub } from "react-icons/fa";
import { BiLogoMongodb, BiLogoJavascript } from "react-icons/bi";
import { IoLogoCss3, IoLogoSass } from "react-icons/io5";
import { AiFillHtml5 } from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import { SiNextdotjs, SiSocketdotio } from "react-icons/si";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdLiveTv,
} from "react-icons/md";
import "../style/portfolio-showcase.css";
export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef(null);
  const deviceRef = useRef(null);
  const infoRef = useRef(null);

  const portfolio = [
    {
      src: "/portfolioo/manifest.png",
      name: "Manifest & Elevate",
      color: "#8458b3",
      star: 5,
      device: "laptop",
      tech: ["reactjs", "nodejs", "css", "javascript", "mongodb", "socket"],
      points: [
        "E-commerce & brand website",
        "Responsive & performance-optimized",
        "SEO & social sharing meta integration",
      ],
      description:
        "Manifest & Elevate is a premium mindfulness brand website built using ReactJS. It features full SEO meta integration, Open Graph tags for rich link previews, and responsive design. It offers a clean, fast, and aesthetically pleasing shopping experience for journals, diaries, and more.",
      link: "https://manifestandelevate.com",
    },
    {
      src: "/portfolioo/nexus.png",
      name: "Nexus AI",
      color: "#2d9fe9",
      star: 5,
      device: "laptop",
      tech: [
        "reactjs",
        "nodejs",
        "css",
        "javascript",
        "mongodb",
        "socket",
      ],
      points: [
        "Smart real-time chatbot with contextual memory",
        "Responsive UI with typing animations",
        "Integrated with OpenAI for natural conversations",
      ],
      description:
        "Nexus AI is a smart conversational chatbot built using ReactJS and NodeJS. It uses OpenAI's API to deliver human-like responses and maintain context throughout the chat. With real-time Socket.io communication, sleek UI, and adaptive design, it's perfect for websites looking to enhance user interaction through intelligent automation.",
      link: "https://nexusai.shiridhar.com.np",
    },
    {
      src: "/portfolioo/techwave.png",
      name: "TechWave",
      color: "var(--color)",
      star: 5,
      device: "laptop",
      tech: ["reactjs", "html", "css", "javascript"],
      points: [
        "Tech brand showcase",
        "Modern, minimalist UI/UX",
        "Product-focused and scalable",
      ],
      description:
        "TechWave is a premium tech accessories brand website designed with ReactJS. The platform showcases a diverse product range across audio, wearables, and smart accessories. Built with a sleek and modern aesthetic, it reflects the brand’s mission to enhance digital lifestyles through innovation, quality, and user-centered design.",
      link: "https://github.com/shiridharKhatri",
    },
    {
      src: "/portfolioo/flexGym.png",
      name: "FLEX GYM",
      color: "#60b478",
      star: 5,
      device: "laptop",
      tech: ["reactjs", "html", "css", "javascript"],
      points: [
        "Fitness center website",
        "Inclusive & goal-oriented design",
        "Responsive layout with trainer support features",
      ],
      description:
        "FLEX GYM is a modern fitness website built with ReactJS, designed to motivate and guide users on their fitness journey. It emphasizes inclusivity and personal growth, offering a community-driven platform supported by expert trainers. The site features a clean, energetic UI and is optimized for all devices.",
      link: "https://github.com/shiridharKhatri",
    },
    {
      src: "/portfolioo/icp.png",
      name: "Student Management System",
      color: "#a41034",
      star: 5,
      device: "laptop",
      tech: ["reactjs", "nodejs", "mongodb", "html", "css", "javascript"],
      points: [
        "Built during a hackathon competition",
        "Centralized student data management",
        "Admin, teacher & student roles with role-based access",
        "Real-time updates and analytics dashboard",
      ],
      description:
        "A college-focused Student Management System built during a hackathon using the MERN stack. It features role-based access for admins, teachers, and students, with real-time data handling and a clean, responsive interface.",
      link: "https://github.com/shiridharKhatri",
    },
    {
      src: "/portfolioo/shophub.png",
      name: "E-commerce Platform",
      color: "#1b4d3e",
      star: 4.8,
      device: "laptop",
      tech: ["reactjs", "nodejs", "mongodb", "html", "css", "javascript"],
      points: [
        "Founded in 2018 with a customer-first approach",
        "Offers thousands of products across diverse categories",
        "Scalable platform supporting global users",
        "Partnered with trusted brands and sellers",
      ],
      description:
        "ShopHub is a full-featured e-commerce platform that started in 2018, aiming to provide a one-stop online shopping experience. It supports a wide range of product categories, serving millions globally with a focus on quality, affordability, and exceptional customer service.",
      link: "https://github.com/shiridharKhatri",
    },

    {
      src: "/portfolioo/ally.png",
      name: "Ally Integra",
      color: "var(--color)",
      star: 5,
      device: "laptop",
      tech: ["reactjs", "html", "css", "javascript"],
      points: ["Business website", "Fully responsive", "visually appealing"],
      description:
        "The Ally Integra website is created using Vite + ReactJS and vanilla CSS, which is fully responsive for all types of screen sizes. The website is fast and optimized for better performance.",
      link: "https://github.com/shiridharKhatri",
    },
    // {
    //   src: "/portfolioo/neo.png",
    //   name: "Neo Caliste",
    //   color: "#eef002",
    //   star: 5,
    //   device: "laptop",
    //   tech: ["scss", "html", "css", "javascript"],
    //   points: ["Portfolio website", "Fully responsive", "video showcase site"],
    //   description:
    //     "The NEO CALISTE portfolio website is recreated using HTML, CSS, JavaScript, and SCSS, which is fully responsive for all types of screen sizes. The website includes videos created by NEO CALISTE.",
    //   link: "https://github.com/shiridharKhatri",
    // },
    // {
    //   src: "/portfolioo/vis.png",
    //   name: "The Visbug Agency",
    //   color: "#fc2154",
    //   star: 5,
    //   device: "laptop",
    //   tech: ["html", "css", "javascript"],
    //   points: ["Portfolio website", "Fully responsive", "App showcase site"],
    //   description:
    //     "The Visbug Mobile App Development Agency website is created using HTML, CSS, and JavaScript. The site is fully responsive for all types of mobile devices, and the performance is high and optimized.",
    //   link: "https://github.com/shiridharKhatri",
    // },
    // {
    //   src: "/portfolioo/food.png",
    //   name: "Shah Food",
    //   color: "#1b9e98",
    //   device: "laptop",
    //   points: [
    //     "Business website",
    //     "Fully responsive",
    //     "Business management site",
    //   ],
    //   star: 4,
    //   tech: ["reactjs", "html", "css", "javascript"],
    //   description:
    //     "The Shah Food website is created using ReactJS, which is highly responsive and optimized for all types of screen sizes, from mobile to big screens.",
    //   link: "https://github.com/shiridharKhatri",
    // },
    // {
    //   src: "/portfolioo/donor.png",
    //   name: "Donor Website",
    //   color: "#358546",
    //   star: 5,
    //   device: "laptop",
    //   tech: ["reactjs", "html", "css", "javascript"],
    //   points: ["Donor website", "Fully responsive", "Information site"],
    //   description:
    //     "The Donor website is created using ReactJS, CSS which is highly responsive and optimized for all types of screen sizes, from mobile to big screens.",
    //   link: "https://github.com/shiridharKhatri",
    // },
    // {
    //   src: "/portfolioo/asta.png",
    //   name: "Asta Wolf",
    //   color: "#013546",
    //   device: "laptop",
    //   tech: ["nextjs", "html", "css", "javascript", "nodejs"],
    //   points: ["E-commerce website", "Fully responsive", "Product buy/sell"],
    //   description:
    //     "Asta wolf is a e-commerce clone website that i have recreated the design using html, css and javascript the site is also responsive.",
    //   link: "#",
    // },
    // {
    //   src: "/portfolioo/chat.png",
    //   name: "Anonymous Chat",
    //   color: "#3db6ff",
    //   device: "laptop",
    //   tech: ["nextjs", "mongodb", "socket", "javascript", "nodejs"],
    //   points: ["Realtime Chatting", "Create groups", "Talk with strangers"],
    //   description:
    //     "Anonymous Chat is a random chatting website that i have created the using nextjs, nodejs-expressjs, socketio for real time chat and mongodb for database. The site is also responsive.",
    //   link: "https://github.com/shiridharKhatri",
    // },
    // {
    //   src: "/portfolioo/news.png",
    //   name: "Today News",
    //   color: "#6a8e22",
    //   device: "laptop",
    //   tech: ["reactjs", "mongodb", "javascript", "nodejs"],
    //   points: [
    //     "Daily news update",
    //     "News by category",
    //     "Real time weather details",
    //   ],
    //   description: `The news website is created using ReactJS and the News API sourced from <a href="https://newsapi.org/">newsapi.org</a>. The site is fully responsive, providing real-time news updates and weather forecasts.`,
    //   link: "https://github.com/shiridharKhatri",
    // },
  ];

  const icons = {
    nextjs: <SiNextdotjs />,
    nodejs: <FaNodeJs />,
    reactjs: <GrReactjs />,
    mongodb: <BiLogoMongodb />,
    css: <IoLogoCss3 />,
    javascript: <BiLogoJavascript />,
    html: <AiFillHtml5 />,
    scss: <IoLogoSass />,
    socket: <SiSocketdotio />,
  };

  const openGithub = (link) => {
    window.open(link, "_blank");
  };

  const viewLive = (link) => {
    window.open(link, "_blank");
  };

  const nextProject = () => {
    gsap.to([deviceRef.current, infoRef.current], {
      opacity: 0,
      x: -30,
      duration: 0.2,
      onComplete: () => {
        setActiveProject((prev) =>
          prev < portfolio.length - 1 ? prev + 1 : 0
        );
        gsap.to([deviceRef.current, infoRef.current], {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: 0.1,
        });
      },
    });
  };

  const prevProject = () => {
    gsap.to([deviceRef.current, infoRef.current], {
      opacity: 0,
      x: 30,
      duration: 0.2,
      onComplete: () => {
        setActiveProject((prev) =>
          prev > 0 ? prev - 1 : portfolio.length - 1
        );
        gsap.to([deviceRef.current, infoRef.current], {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: 0.1,
        });
      },
    });
  };

  useEffect(() => {
    // Initial animation
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );

    // Device animation
    gsap.fromTo(
      deviceRef.current,
      { opacity: 0, scale: 0.9, rotationY: -10 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      }
    );

    // Info animation
    gsap.fromTo(
      infoRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.5, delay: 0.2, ease: "power2.out" }
    );

    // Floating animation for device
    gsap.to(deviceRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      gsap.killTweensOf(deviceRef.current);
      gsap.killTweensOf(infoRef.current);
      gsap.killTweensOf(containerRef.current);
    };
  }, []);

  const currentProject = portfolio[activeProject];

  return (
    <section id="protfolio" className="container protfolio" ref={containerRef}>
      <div className="textHead">
        <h1 style={{ margin: "7rem 0 0 0" }}>
          Some of the highlighted <span>projects</span> I've successfully
          created.
        </h1>
      </div>

      <div className="portfolio-showcase">
        <div className="device-container" ref={deviceRef}>
          {currentProject.device === "laptop" && (
            <div className="laptop-mockup">
              <div className="laptop-screen">
                <img
                  src={currentProject.src || "/placeholder.svg"}
                  alt={currentProject.name}
                />
              </div>
              <div className="laptop-base">
                <div className="laptop-keyboard"></div>
                <div className="laptop-trackpad"></div>
              </div>
            </div>
          )}

          {currentProject.device === "phone" && (
            <div className="phone-mockup">
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <img
                    src={currentProject.src || "/placeholder.svg"}
                    alt={currentProject.name}
                  />
                </div>
                <div className="phone-button"></div>
              </div>
            </div>
          )}

          {currentProject.device === "tablet" && (
            <div className="tablet-mockup">
              <div className="tablet-frame">
                <div className="tablet-camera"></div>
                <div className="tablet-screen">
                  <img
                    src={currentProject.src || "/placeholder.svg"}
                    alt={currentProject.name}
                  />
                </div>
                <div className="tablet-button"></div>
              </div>
            </div>
          )}
        </div>

        <div className="project-info" ref={infoRef}>
          <h2 style={{ color: currentProject.color }}>{currentProject.name}</h2>
          <p
            dangerouslySetInnerHTML={{ __html: currentProject.description }}
          ></p>

          <div className="tech-stack">
            {currentProject.tech.map((tech, index) => (
              <div
                className="tech-icon"
                key={index}
                style={{ color: currentProject.color }}
              >
                {icons[tech]}
                {/* <span>{tech}</span> */}
              </div>
            ))}
          </div>

          <div className="project-features">
            <h3>Key Features:</h3>
            <ul>
              {currentProject.points.map((point, index) => (
                <li key={index}>
                  <FaRegDotCircle />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="project-actions">
            <button
              className="github-btn"
              onClick={() => openGithub(currentProject.link)}
            >
              <FaGithub /> View on GitHub
            </button>
            <button
              className="live-btn"
              onClick={() => viewLive(currentProject.link)}
            >
              <MdLiveTv /> View Live
            </button>
          </div>
        </div>
      </div>
      <div className="pagBtn">
        <button className="nav-btn next-btn" onClick={nextProject}>
          <MdKeyboardArrowRight />
        </button>

        <button className="nav-btn prev-btn" onClick={prevProject}>
          <MdKeyboardArrowLeft />
        </button>
      </div>

      <div className="portfolio-pagination">
        {portfolio.map((_, index) => (
          <span
            key={index}
            className={`pagination-dot ${
              index === activeProject ? "active" : ""
            }`}
            onClick={() => {
              gsap.to([deviceRef.current, infoRef.current], {
                opacity: 0,
                scale: 0.95,
                duration: 0.2,
                onComplete: () => {
                  setActiveProject(index);
                  gsap.to([deviceRef.current, infoRef.current], {
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    stagger: 0.1,
                  });
                },
              });
            }}
          ></span>
        ))}
      </div>
    </section>
  );
}
