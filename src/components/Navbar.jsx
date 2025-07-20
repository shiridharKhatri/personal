"use client"

import { useEffect, useState, useRef } from "react"
import { MdIcons, BiIcons, IoIcons, BsIcons, CgIcons, GoIcons, TbIcons, SiIcons } from "../tools/icons"
import { Link, useNavigate } from "react-router-dom"
export default function Navbar(props) {
  const themeRef = useRef(null)
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setDarkMode] = useState(false)
  const [inpVal, setInpVal] = useState("")
  const onChangeState = (e) => {
    setInpVal(e.target.value)
  }
  const sideMenuOnClick = () => {
    const sideMenu = document.getElementById("sideMenu")
    sideMenu.style.left = "0"
  }
  const cancelMenuOnClick = () => {
    const sideMenu = document.getElementById("sideMenu")
    sideMenu.style.left = "-100%"
  }
  const showMenuOnClick = () => {
    const id = document.getElementById("DropDown")
    id.classList.toggle("togglMoreSec")
    if (id.classList.contains("togglMoreSec")) {
      id.style.transform = "scale(1)"
    } else {
      id.style.transform = "scale(0)"
    }
  }

  const changeTheme = () => {
    themeRef.current.classList.toggle("darkTheme")
    if (themeRef.current.classList.contains("darkTheme")) {
      document.body.classList.add("darkMode")
      setDarkMode(true)
    } else {
      document.body.classList.remove("darkMode")
      setDarkMode(false)
    }
  }
  const focused = () => {
    const logoFirst = document.getElementById("logoFirst")
    const formSecSearch = document.getElementById("formSecSearch")
    const closeSearch = document.getElementById("closeSearch")
    logoFirst.style.display = "none"
    formSecSearch.style.width = "100%"
    closeSearch.style.display = "flex"
  }
  const blurred = () => {
    const logoFirst = document.getElementById("logoFirst")
    const formSecSearch = document.getElementById("formSecSearch")
    const closeSearch = document.getElementById("closeSearch")
    logoFirst.style.display = "flex"
    formSecSearch.style.width = "75%"
    closeSearch.style.display = "none"
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const searchBlogs = (e) => {
    e.preventDefault()
    console.log(inpVal)
    navigate(`/blog/${inpVal}`)
  }
  const routeTo = (route) => {
    navigate(route)
  }
  return (
    <nav
      style={{ position: props.position, background: props.background }}
      className={isScrolled ? "navbar-scrolled" : "navbar"}
    >
      <div id="logoFirst" className="logo">
        <Link to={`/`}>
          <img src="/logo.png" alt="logo" />
        </Link>
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
            placeholder="Search blogs..."
          />
          <button name="Search" onClick={searchBlogs}>
            <BiIcons.BiSearch />
          </button>
        </form>
        <form id="hiddenInMobile">
          <input type="search" value={inpVal} onChange={onChangeState} placeholder="Search blogs..." />
          <button
            name="Search"
            style={{
              background: "var(--btn-text-color)",
              color: " var(--black-white)",
            }}
            onClick={searchBlogs}
          >
            <BiIcons.BiSearch />
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
              <li
                onClick={() => {
                  routeTo("/")
                }}
              >
                <span className="hidden">
                  <BiIcons.BiHomeAlt />
                </span>
                Home
              </li>

              {/* <li
              onClick={() => {
                routeTo("/about");
              }}
            >
              <span className="hidden">
                <BsIcons.BsInfoLg />
              </span>
              About
            </li> */}
              <li>
                <a
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    color: "var(--color)",
                    fontWeight: "500",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  href="#testimonialId"
                >
                  <span className="hidden">
                    <SiIcons.SiYourtraveldottv />
                  </span>
                  Feedback
                </a>
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
              <a style={{ textDecoration: "none" }} href="#contactsec">
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
              </a>
            </div>

            <ul id="DropDown">
              <a style={{ textDecoration: "none", width: "100%" }} href="#blogs">
                <li>
                  <span>
                    <BsIcons.BsBook />
                  </span>
                  Blogs
                </li>
              </a>

              <a style={{ textDecoration: "none", width: "100%" }} href="#protfolio">
                <li>
                  <span>
                    <CgIcons.CgFeed />
                  </span>
                  Projectfeed
                </li>
              </a>
              <li>
                <span>
                  <MdIcons.MdOutlineWorkspacePremium />
                </span>
                Paid Code <p>Pending</p>
              </li>
              <li
                onClick={() => {
                  window.open("https://github.com/shiridharKhatri", "_blank")
                }}
              >
                <span>
                  <GoIcons.GoFileCode />
                </span>
                Free code
              </li>
              <Link to="/gallery" style={{ textDecoration: "none", width: "100%" }}>
                {" "}
                {/* Updated Link */}
                <li>
                  <span>
                    <TbIcons.TbPhoto />
                  </span>
                  Gallery
                </li>
              </Link>
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
  )
}
