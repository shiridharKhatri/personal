"use client"
import Navbar from "../components/Navbar"
import {
  FaShoppingCart,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobile,
  FaCheck,
  FaRocket,
} from "react-icons/fa"
import { SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si"
import { AiFillHtml5 } from "react-icons/ai"
import { IoLogoCss3 } from "react-icons/io5"
import { BiLogoJavascript } from "react-icons/bi"
import "../style/product-showcase.css" // Reuse existing product card styles

export default function AllProducts() {
   const products = [
    {
      id: 1,
      title: "E-commerce Platform",
      subtitle: "Complete Online Store",
      description: "Full-featured e-commerce website with shopping cart, payments, and admin dashboard.",
      price: 310,
      originalPrice: 500,
      image: "/premium/clothingEcom.png",
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
      title: "E-commerce Skincare Template",
      subtitle: "Beauty & Skincare Store",
      description:
      "MERN e-commerce template for beauty brands. Clean, responsive, and ready to launch.",
      price: 470,
      originalPrice: 799,
      image: "/premium/skincare.png",
    technologies: [
      { name: "React", class: "tech-react" },
      { name: "Node.js", class: "tech-node" },
      { name: "MongoDB", class: "tech-mongo" },
    ],
    features: ["Full Source Code", "Modern Design", "Essential Features", "Easy to Customize"],
    link: "https://shiridharkhatri.gumroad.com/l/skin-care",
    status: "available",
    badge: "New Release",
    cardClass: "product-card-mern",
  },
    {
      id: 3,
      title: "Dashboard Template",
      subtitle: "Admin Dashboard",
      description: "Professional admin dashboard with charts, tables, and user management features.",
      price: 510,
      originalPrice: 600,
      image: "/premium/dashboard.png",
      technologies: [
        { icon: <FaReact />, name: "React", class: "tech-react" },
        { icon: <FaDatabase />, name: "Database", class: "tech-database" },
        { icon: <FaRocket />, name: "Fast", class: "tech-fast" },
      ],
      features: ["Charts & Analytics", "User Management", "Dark Mode", "Responsive"],
      link: "https://shiridharkhatri.gumroad.com/l/admin-panel",
      status: "available",
      badge: "New Release",
      cardClass: "product-card-dashboard",
    },
    
    {
      id: 4,
      title: "Business/Personal Portfolio",
      subtitle: "Developer Portfolio",
      description: "Modern portfolio website with animations, project showcase, and contact forms.",
      price: 280,
      originalPrice: 400,
      image: "/premium/portfolio.png",
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
  ]

  const handleAction = (product) => {
    if (product.status === "available") {
      window.open(product.link, "_blank")
    }
  }

  return (
    <>
      <Navbar position="relative" />
      <section className="product-showcase" style={{ paddingTop: "10rem" }}>
        <div className="showcase-container">
          <div className="showcase-header">
            <h2>All Available Products</h2>
            <p>Browse our full catalog of professional web solutions and templates.</p>
          </div>

          <div className="products-wrapper">
            <div className="products-grid">
              {" "}
              {/* Removed inline style to use CSS */}
              {products.map((product) => (
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
                        <div key={index} className={`tech-item ${tech.class}`}>
                          {tech.icon}
                          <span>{tech.name}</span>
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
    </>
  )
}
