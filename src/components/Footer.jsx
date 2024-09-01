import React, { useEffect, useState } from "react";
import {
  FaIcons,
  IoIcons,
  FiIcons,
  Fa6Icons,
  AiIcons,
  BiIcons,
  SiIcons,
  GrIcons,
} from "../tools/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Footer(props) {
  const [datas, setData] = useState([]);
  const socialicons = [
    {
      name: "Facebook",
      color: "#4267B2",
      icon: <FaIcons.FaFacebookF />,
      link: "",
    },
    {
      name: "Instagram",
      color: "#E4405F",
      icon: <FiIcons.FiInstagram />,
      link: "",
    },
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
  const fetchRepo = async () => {
    let url = "https://api.github.com/users/shiridharKhatri/repos";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    fetchRepo();
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
  };
  return (
    <footer id="footerId">
      <div className="topSection">
        <div className="topLogo">
          <LazyLoadImage src="/logo.png" alt="logo" />
          <p id="footerP">
            Shiridhar Portfolio is a personal website that highlights my work,
            achievements, and professional details.
          </p>
        </div>
        <div className="flex-disp-footer">
          <div className="secondSection item">
            <h1>Menu</h1>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a
                  href="https://www.fiverr.com/shiridhar?public_mode=true"
                  target="_blank"
                >
                  Hire me
                </a>
              </li>
              <li>
                <a href="/blog">Blogs</a>
              </li>
              <li>
                <a href="/free_code">Free code</a>
              </li>
              <li>
                <a href="/project">Projectfeed</a>
              </li>
            </ul>
          </div>
          <div className="thirdSection item">
            <h1>Github Repos</h1>
            <ul>
              {datas?.slice(5, 11).map((e) => {
                return (
                  <li key={e.id}>
                    <a
                      target="_blank"
                      href={`https://shiridharkhatri.github.io/${e.name}/`}
                    >
                      {e.name}
                    </a>
                    <span
                      style={{
                        backgroundColor:
                          e.language &&
                          (e.language.toLowerCase() === "html" ||
                            e.language.toLowerCase() === "javascript" ||
                            e.language.toLowerCase() === "scss" ||
                            e.language.toLowerCase() === "css")
                            ? e.language.toLowerCase() === "html"
                              ? "#ea4335"
                              : e.language.toLowerCase() === "javascript"
                              ? "#F0DB4F"
                              : e.language.toLowerCase() === "scss"
                              ? "#d56ea3"
                              : e.language.toLowerCase() === "css"
                              ? "#264de4"
                              : null
                            : null,
                      }}
                    >
                      {e.language &&
                      (e.language.toLowerCase() === "html" ||
                        e.language.toLowerCase() === "javascript" ||
                        e.language.toLowerCase() === "scss" ||
                        e.language.toLowerCase() === "css")
                        ? e.language.toLowerCase() === "html"
                          ? icons.html
                          : e.language.toLowerCase() === "javascript"
                          ? icons.javascript
                          : e.language.toLowerCase() === "scss"
                          ? icons.scss
                          : e.language.toLowerCase() === "css"
                          ? icons.css
                          : null
                        : null}
                    </span>
                  </li>
                );
              })}
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/shiridharKhatri"
                target="_blank"
              >
                <li style={{ cursor: "pointer" }}>More</li>
              </a>
            </ul>
          </div>
          <div className="fourthSection">
            <h1>Contact</h1>
            <ul>
              <li>
                <span>
                  {" "}
                  <Fa6Icons.FaLocationDot />
                </span>

                <a
                  href="https://www.google.com/maps?q=Tutunga-15,33700,Pokhara,Nepal"
                  target="_blank"
                >
                  Tutunga-15, 33700
                  <br />
                  Pokhara, Nepal
                </a>
              </li>
              <li>
                <span>
                  {" "}
                  <IoIcons.IoCall />
                </span>

                <a href="tel:+9779820610923">+9779820610923</a>
              </li>
              <li>
                <span>
                  {" "}
                  <IoIcons.IoMail />
                </span>
                <a href="mailto:khatrishiridhar6@gmail.com">
                  shiridharkhatri2@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="socialMedia">
        <ul>
          {socialicons.map((e, index) => {
            return (
              <li
                onClick={() => {
                  window.open(e.link, "_blank");
                }}
                key={index}
                style={{ background: e.color }}
              >
                {e.icon}
              </li>
            );
          })}
        </ul>
        <p>&copy; 2023 Shiridhar Khatri. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
