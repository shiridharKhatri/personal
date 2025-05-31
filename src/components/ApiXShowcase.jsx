import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FaCode, FaDownload, FaImage, FaLink, FaRocket, FaPlay, FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { SiVisualstudiocode } from "react-icons/si"
import "../style/apix-showcase.css"

gsap.registerPlugin(ScrollTrigger)

export default function ApiXShowcase() {
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const featuresRef = useRef(null)

  const features = [
    {
      icon: <FaCode />,
      title: "HTTP Requests",
      description: "GET, POST, PUT, DELETE - all from VS Code",
    },
    {
      icon: <FaImage />,
      title: "Image Extraction",
      description: "Preview & download images from responses",
    },
    {
      icon: <FaLink />,
      title: "Link Grabber",
      description: "Extract all links in one click",
    },
    {
      icon: <FaRocket />,
      title: "Lightweight",
      description: "No tab switching, runs inside VS Code",
    },
  ]

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      },
    )

    // Features animation
    gsap.fromTo(
      featuresRef.current.querySelectorAll(".feature-card"),
      { y: 30, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 85%",
        },
      },
    )

    // Floating animation for VS Code icon
    gsap.to(".vscode-icon", {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  }, [])

  const handleInstall = () => {
    window.open("https://marketplace.visualstudio.com/items?itemName=shiridhar.apixx", "_blank")
  }

  const handleGithub = () => {
    window.open("https://github.com/your-username/apix-extension", "_blank")
  }

  return (
    <section className="apix-showcase" ref={containerRef}>
      <div className="apix-container">
        {/* Main Content */}
        <div className="apix-main-content" ref={headerRef}>
          <div className="apix-text-content">
            <div className="apix-badge">
              <SiVisualstudiocode />
              <span>VS Code Extension</span>
            </div>
            <h1>
              Meet <span className="apix-brand">ApiXX</span> - API Testing Reimagined
            </h1>
            <p>
              A sleek VS Code extension that goes beyond basic API testing. Extract images, grab links, and test APIs
              without leaving your editor.
            </p>

            {/* Quick Install */}
            <div className="quick-install">
              <div className="install-command">
                <span className="command-text">code --install-extension shiridhar.apixx</span>
                <button className="copy-btn" title="Copy command">
                  <FaCode />
                </button>
              </div>
              <div className="install-buttons">
                <button className="apix-install-btn" onClick={handleInstall}>
                  <SiVisualstudiocode />
                  Install Now
                </button>
                <button className="apix-github-btn" onClick={handleGithub}>
                  <FaGithub />
                  GitHub
                </button>
              </div>
            </div>
          </div>

          <div className="apix-visual-content">
            <div className="vscode-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control close"></span>
                  <span className="control minimize"></span>
                  <span className="control maximize"></span>
                </div>
                <div className="window-title">ApiXX - VS Code</div>
              </div>
              <div className="window-content">
                <div className="vscode-icon">
                  <SiVisualstudiocode />
                </div>
                <div className="api-demo">
                  <div className="request-bar">
                    <span className="method">GET</span>
                    <span className="url">api.example.com/data</span>
                    <button className="send-btn">
                      <FaPlay />
                    </button>
                  </div>
                  <div className="response-items">
                    <div className="response-item">
                      <FaImage />
                      <span>3 images found</span>
                      <FaDownload />
                    </div>
                    <div className="response-item">
                      <FaLink />
                      <span>12 links extracted</span>
                      <FaExternalLinkAlt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Features */}
        <div className="apix-features" ref={featuresRef}>
          <h2>Why Developers Love ApiXX</h2>
          <div className="features-compact">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
