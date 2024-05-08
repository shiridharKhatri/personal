import React, { useEffect, useState, useRef } from "react";
import {
  MdIcons,
  BiIcons,
  IoIcons,
  BsIcons,
  CgIcons,
  GoIcons,
  TbIcons,
  SiIcons,
} from "../tools/icons";

export default function Navbar(props) {
  const themeRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [inpVal, setInpVal] = useState("");
  const onChangeState = (e) => {
    setInpVal(e.target.value);
  };
  const sideMenuOnClick = () => {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.style.left = "0";
  };
  const cancelMenuOnClick = () => {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.style.left = "-100%";
  };
  const showMenuOnClick = () => {
    let id = document.getElementById("DropDown");
    id.classList.toggle("togglMoreSec");
    if (id.classList.contains("togglMoreSec")) {
      id.style.transform = "scale(1)";
    } else {
      id.style.transform = "scale(0)";
    }
  };

  const changeTheme = () => {
    themeRef.current.classList.toggle("darkTheme");
    if (themeRef.current.classList.contains("darkTheme")) {
      document.body.classList.add("darkMode");
      setDarkMode(true);
    } else {
      document.body.classList.remove("darkMode");
      setDarkMode(false);
    }
  };
  const focused = () => {
    const logoFirst = document.getElementById("logoFirst");
    const formSecSearch = document.getElementById("formSecSearch");
    const closeSearch = document.getElementById("closeSearch");
    logoFirst.style.display = "none";
    formSecSearch.style.width = "100%";
    closeSearch.style.display = "flex";
  };
  const blurred = () => {
    const logoFirst = document.getElementById("logoFirst");
    const formSecSearch = document.getElementById("formSecSearch");
    const closeSearch = document.getElementById("closeSearch");
    logoFirst.style.display = "flex";
    formSecSearch.style.width = "75%";
    closeSearch.style.display = "none";
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      style={{ position: props.position, background: props.background }}
      className={isScrolled ? "navbar-scrolled" : "navbar"}
    >
      <div id="logoFirst" className="logo">
        <img src="/logo.png" alt="logo" />
      </div>

      <div className="otherSec" id="formSecSearch">
        <div className="hidden closeSearch" id="closeSearch">
          <BsIcons.BsChevronLeft />
        </div>
        <form className="hidden" id="hiddeOnDesktop">
          <input
            onFocus={focused}
            onBlur={blurred}
            type="search"
            value={inpVal}
            onChange={onChangeState}
            placeholder="Search..."
          />
          <button
            name="Search"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <BiIcons.BiSearch />
          </button>
          <button name="voice" id="voice">
            <MdIcons.MdKeyboardVoice />
          </button>
        </form>
        <form id="hiddenInMobile">
          <input
            type="search"
            value={inpVal}
            onChange={onChangeState}
            placeholder="Search..."
          />
          <button
            name="Search"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <BiIcons.BiSearch />
          </button>
          <button name="voice" id="voice">
            <MdIcons.MdKeyboardVoice />
          </button>
        </form>
        <ul id="sideMenu">
          <div className="sideMenuContainer">
            <div className="logo hidden" id="logo">
              <img src="/logo.png" alt="logo" width={200} height={150} />

              <div className="cancel">
                <h2 onClick={cancelMenuOnClick}>
                  <IoIcons.IoCloseSharp />
                </h2>
              </div>
            </div>
            <div className="topMenuSecInfo">
              <div className="hidden more">
                <h3>
                  <span>
                    <BsIcons.BsMenuUp />
                  </span>
                  Menu
                </h3>
              </div>
              <li>
                <span className="hidden">
                  <BiIcons.BiHomeAlt />
                </span>
                Home
              </li>
              <li onClick={props.tour}>
                <span className="hidden">
                  <SiIcons.SiYourtraveldottv />
                </span>
                Tour
              </li>
              <li>
                <span className="hidden">
                  <BsIcons.BsInfoLg />
                </span>
                About
              </li>

              <li id="moreItem" onClick={showMenuOnClick}>
                More <BiIcons.BiChevronDown />
              </li>
              <li ref={themeRef} onClick={changeTheme} id="themes">
                {!isDarkMode ? (
                  <>
                    {" "}
                    <span>
                      <IoIcons.IoSunny />
                    </span>{" "}
                    <h5 className="hidden">Light Mode</h5>
                  </>
                ) : (
                  <>
                    {" "}
                    <span>
                      <IoIcons.IoMoonSharp />
                    </span>{" "}
                    <h5 className="hidden">Dark Mode</h5>
                  </>
                )}
              </li>
              <li
                style={{
                  backgroundColor: " var(--btn-text-color)",
                  width: "13rem",
                  color: "var(--black-white)",
                }}
                id="contact"
                className="mobile-hidden"
              >
                <IoIcons.IoCall />
                &nbsp;Contact
              </li>
            </div>

            <ul id="DropDown">
              <li>
                <span>
                  <BsIcons.BsBook />
                </span>
                Blogs
              </li>
              <li>
                <span>
                  <CgIcons.CgFeed />
                </span>
                Projectfeed
              </li>
              <li>
                <span>
                  <MdIcons.MdOutlineWorkspacePremium />
                </span>
                Paid Code <p>Coming soon</p>
              </li>
              <li>
                <span>
                  <GoIcons.GoFileCode />
                </span>
                Free code (For learners)
              </li>
              <li>
                <span>
                  <TbIcons.TbPhoto />
                </span>
                Gallery <p>Coming soon</p>
              </li>
            </ul>
            <li
              style={{
                backgroundColor: " var(--btn-text-color)",
                width: "13rem",
                color: "var(--black-white)",
              }}
              id="contactMobile"
              className="hidden"
            >
              <IoIcons.IoCall />
              &nbsp;Contact
            </li>
          </div>
        </ul>
        <div className="menu hidden">
          <h1 onClick={sideMenuOnClick}>
            <IoIcons.IoMenu />
          </h1>
        </div>
      </div>
    </nav>
  );
}
