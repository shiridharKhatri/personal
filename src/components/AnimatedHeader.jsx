import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BiLogoUpwork } from "react-icons/bi"
import { HiArrowDown } from "react-icons/hi"
import "../style/animatedHeader.css"
gsap.registerPlugin(ScrollTrigger)

export default function AnimatedHeader() {
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)
  const imageContainerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const ctaRef = useRef(null)
  const statsRef = useRef(null)
  const scrollRef = useRef(null)
  const particlesRef = useRef(null)

  useEffect(() => {
    // Create particles
    const createParticles = () => {
      const container = particlesRef.current
      if (!container) return

      for (let i = 0; i < 40; i++) {
        const particle = document.createElement("div")
        particle.className = "particle"

        // Size between 2px and 6px
        const size = Math.random() * 4 + 2
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`

        // Position randomly within container
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`

        // Opacity between 0.1 and 0.5
        particle.style.opacity = Math.random() * 0.4 + 0.1

        container.appendChild(particle)

        // Animate each particle
        gsap.to(particle, {
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
          duration: Math.random() * 15 + 15,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 5,
        })
      }
    }

    // Main animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Initial setup
    gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, ctaRef.current, statsRef.current], {
      y: 30,
      opacity: 0,
    })

    gsap.set(imageContainerRef.current, {
      opacity: 0,
      scale: 0.9,
    })

    gsap.set(scrollRef.current, {
      y: 20,
      opacity: 0,
    })

    // Animation sequence
    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
    })
      .to(
        subtitleRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.6",
      )
      .to(
        descriptionRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.6",
      )
      .to(
        ctaRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.6",
      )
      .to(
        statsRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
        },
        "-=0.6",
      )
      .to(
        imageContainerRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=1.2",
      )
      .to(
        scrollRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "-=0.4",
      )

    // Create particles
    createParticles()

    // Animate image container
    gsap.to(imageContainerRef.current, {
      y: 15,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    // Animate image mask rotation
    gsap.to(".image-mask", {
      rotation: 360,
      duration: 40,
      repeat: -1,
      ease: "none",
    })

    // Animate the border
    gsap.to(".image-border", {
      rotation: -360,
      duration: 60,
      repeat: -1,
      ease: "none",
    })

    // Subtle pulse animation for the scroll indicator
    gsap.to(scrollRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    return () => {
      tl.kill()
    }
  }, [])

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#protfolio")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

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
    <section className="professional-hero" ref={heroRef}>
      <div className="professional-hero-container">
        <div className="professional-hero-content" ref={contentRef}>
          <div className="professional-hero-text">
            <h1 ref={titleRef}>
              <span className="professional-greeting">Hello, I'm</span>
              <span className="professional-name">Shiridhar Khatri</span>
            </h1>

            <h2 ref={subtitleRef}>Web Developer & Designer</h2>

            <p ref={descriptionRef}>
              I create engaging digital experiences with expertise in HTML, CSS, JavaScript, ReactJS, NodeJS, and
              MongoDB. Specializing in both frontend and backend development to deliver complete web solutions.
            </p>

            <div className="professional-hero-cta" ref={ctaRef}>
              <a
                href="https://www.upwork.com/freelancers/shiridhark"
                target="_blank"
                rel="noreferrer"
                className="professional-primary-btn"
              >
                Hire Me
              </a>
              <a
                href="https://github.com/shiridharKhatri"
                target="_blank"
                title="shiridharKhatri"
                rel="noreferrer"
                className="professional-secondary-btn"
              >
                Github
              </a>
            </div>

            <div className="professional-hero-stats" ref={statsRef}>
              <div className="professional-stat">
                <span className="professional-stat-number">100+</span>
                <span className="professional-stat-label">Projects</span>
              </div>
              <div className="professional-stat">
                <span className="professional-stat-number">4.9</span>
                <span className="professional-stat-label">Rating</span>
              </div>
              <div className="professional-stat">
                <span className="professional-stat-number">25+</span>
                <span className="professional-stat-label">Clients</span>
              </div>
            </div>

            <div className="professional-hero-social">
              <a href="https://github.com/shiridharKhatri" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shiridharkhatri/" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.upwork.com/freelancers/shiridhark" target="_blank" rel="noreferrer">
                <BiLogoUpwork />
              </a>
            </div>
          </div>

          <div className="professional-image-section">
            <div className="professional-image-container" ref={imageContainerRef}>
              <div className="particles-container" ref={particlesRef}></div>
              <div className="image-border"></div>
              <div className="image-mask"></div>
              <div className="professional-image" ref={imageRef}>
                <img src="/profile2.png" alt="Shiridhar Khatri" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="professional-scroll-indicator" ref={scrollRef} onClick={scrollToNextSection}>
          <span>Scroll</span>
          <HiArrowDown />
        </div> */}
      </div>
    </section>
  
     <section className="responsiveness" style={{ display: "flex" }}>
        <div className="description">
          <h4>Other skill</h4>
          <h1>
            <span>Responsive design</span> adapts websites to all screen sizes.
          </h1>
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
      </section></>
  )
}
