"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  FaShoppingCart,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPalette,
  FaMobile,
  FaRocket,
  FaCheck,
} from "react-icons/fa"
import { SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si"
import "../style/product-showcase.css"

gsap.registerPlugin(ScrollTrigger)

export default function ProductShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  const products = [
    {
      id: 1,
      title: "E-commerce Platform",
      subtitle: "Complete Online Store",
      description: "Full-featured e-commerce website with shopping cart, payments, and admin dashboard.",
      price: 310,
      originalPrice: 500,
      image: "/premium/fivOne.png",
      technologies: [
        { icon: <FaReact />, name: "React", class: "tech-react" },
        { icon: <FaNodeJs />, name: "Node.js", class: "tech-node" },
        { icon: <SiMongodb />, name: "MongoDB", class: "tech-mongo" },
      ],
      features: ["Shopping Cart", "Payment Gateway", "Admin Panel", "Order Management"],
      link: "https://shiridharkhatri.gumroad.com/l/ecommerce",
      status: "available",
      badge: "Best Seller",
      cardClass: "product-card-ecommerce",
    },
    {
      id: 2,
      title: "Business/Personal Portfolio",
      subtitle: "Developer Portfolio",
      description: "Modern portfolio website with animations, project showcase, and contact forms.",
      price: 280,
      originalPrice: 400,
      image: "/premium/porOne.png",
      technologies: [
        { icon: <FaReact />, name: "React", class: "tech-react" },
        { icon: <SiNextdotjs />, name: "Next.js", class: "tech-next" },
        { icon: <SiTailwindcss />, name: "Tailwind", class: "tech-tailwind" },
      ],
      features: ["Animations", "Project Gallery", "Contact Forms", "Blog Section"],
      link: "#",
      status: "coming-soon",
      badge: "Coming Soon",
      cardClass: "product-card-portfolio",
    },
    
    {
      id: 3,
      title: "Dashboard Template",
      subtitle: "Admin Dashboard",
      description: "Professional admin dashboard with charts, tables, and user management features.",
      price: 410,
      originalPrice: 600,
      image: "/portfolioo/dashboard.png",
      technologies: [
        { icon: <FaReact />, name: "React", class: "tech-react" },
        { icon: <FaDatabase />, name: "Database", class: "tech-database" },
        { icon: <FaRocket />, name: "Fast", class: "tech-fast" },
      ],
      features: ["Charts & Analytics", "User Management", "Dark Mode", "Responsive"],
      link: "#",
      status: "coming-soon",
      badge: "Coming Soon",
      cardClass: "product-card-dashboard",
    },
  ]

  const itemsPerSlide = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3
  const maxSlides = Math.ceil(products.length / itemsPerSlide)

  useEffect(() => {
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

    gsap.fromTo(
      ".product-card",
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      },
    )
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides)
  }

  const handleAction = (product) => {
    if (product.status === "available") {
      window.open(product.link, "_blank")
    }
  }

  const getVisibleProducts = () => {
    const start = currentSlide * itemsPerSlide
    const end = start + itemsPerSlide
    return products.slice(start, end)
  }

  return (
    <section className="product-showcase" ref={containerRef}>
      <div className="showcase-container">
        <div className="showcase-header" ref={headerRef}>
          <div className="header-badge">
            <FaRocket />
            <span>Premium Products</span>
          </div>
          <h2>Ready-to-Use Web Solutions</h2>
          <p>Professional websites and templates at unbeatable prices. Save time and get your project online faster.</p>
        </div>

        <div className="products-wrapper">
          <div className="products-grid" ref={gridRef}>
            {getVisibleProducts().map((product) => (
              <div key={product.id} className={`product-card ${product.cardClass}`}>
                <div className="card-header">
                  <div
                    className={`product-badge ${product.status === "available" ? "badge-available" : "badge-coming-soon"}`}
                  >
                    {product.badge}
                  </div>
                  <div className="product-image">
                    <img src={product.image || "/placeholder.svg"} alt={product.title} />
                    <div className="image-overlay">
                      <button
                        className="view-btn"
                        onClick={() => handleAction(product)}
                        disabled={product.status === "coming-soon"}
                      >
                        {product.status === "available" ? <FaExternalLinkAlt /> : "🔒"}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card-content">
                  <div className="product-header">
                    <h3>{product.title}</h3>
                    <span className="subtitle">{product.subtitle}</span>
                  </div>

                  <p className="description">{product.description}</p>

                  <div className="tech-stack">
                    {product.technologies.map((tech, index) => (
                      <div key={index} className={`tech-badge ${tech.class}`}>
                        <span className="tech-icon">{tech.icon}</span>
                        {/* <span className="tech-name">{tech.name}</span> */}
                      </div>
                    ))}
                  </div>

                  <div className="features-list">
                    {product.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <FaCheck />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pricing">
                    <div className="price-section">
                      <span className="original-price">${product.originalPrice}</span>
                      <span className="current-price">${product.price}</span>
                    </div>
                    <div className="discount-badge">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </div>
                  </div>

                  <button
                    className={`action-btn ${product.status}`}
                    onClick={() => handleAction(product)}
                    disabled={product.status === "coming-soon"}
                  >
                    {product.status === "available" ? (
                      <>
                        <FaShoppingCart />
                        <span>Buy Now</span>
                      </>
                    ) : (
                      <>
                        <span>🔒 Coming Soon</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
