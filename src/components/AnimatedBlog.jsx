import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BiChevronRight } from "react-icons/bi"
import { Link } from "react-router-dom"
import "../style/blog.css"
gsap.registerPlugin(ScrollTrigger)

export default function AnimatedBlogs() {
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef(null)

  // Static blog data
  const blogs = [
    {
      _id: "blog1",
      title: "The Future of Web Development: What to Expect in 2025",
      image: "/blog/webdevelopment.png",
      color: "#5626c4",
      description:
        "Explore the upcoming trends and technologies that will shape web development in the coming years, from AI integration to advanced animations.",
      points: [
        {
          _id: "p1",
          title: "AI Integration",
          description: "How artificial intelligence is becoming a standard part of modern websites",
        },
        {
          _id: "p2",
          title: "WebAssembly",
          description: "The rise of high-performance web applications through WebAssembly",
        },
        {
          _id: "p3",
          title: "3D Experiences",
          description: "Creating immersive 3D experiences with Three.js and WebGL",
        },
        {
          _id: "p4",
          title: "Conclusion",
          description:
            "Staying ahead in web development requires continuous learning and adaptation to new technologies",
        },
      ],
    },
    {
      _id: "blog2",
      title: "Mastering GSAP Animations for Modern Websites",
      image: "/blog/gsap.jpg",
      color: "#00abe1",
      description:
        "Learn how to create stunning animations with GSAP that will take your website to the next level and impress your visitors.",
      points: [
        {
          _id: "p1",
          title: "Basics of GSAP",
          description: "Understanding the core concepts of GSAP animation library",
        },
        {
          _id: "p2",
          title: "ScrollTrigger",
          description: "Creating scroll-based animations that respond to user interaction",
        },
        { _id: "p3", title: "Performance", description: "Optimizing animations for better performance across devices" },
        {
          _id: "p4",
          title: "Conclusion",
          description: "GSAP is a powerful tool that can significantly enhance user experience when used correctly",
        },
      ],
    },
    {
      _id: "blog3",
      title: "Building Responsive E-commerce Sites with React",
      image: "/blog/react.png",
      color: "#f7cd46",
      description:
        "A comprehensive guide to creating responsive and user-friendly e-commerce websites using React and modern design principles.",
      points: [
        {
          _id: "p1",
          title: "Planning",
          description: "The importance of proper planning and architecture for e-commerce sites",
        },
        {
          _id: "p2",
          title: "Components",
          description: "Creating reusable components for product listings, cart, and checkout",
        },
        { _id: "p3", title: "Responsive Design", description: "Ensuring your site works perfectly on all devices" },
        {
          _id: "p4",
          title: "Conclusion",
          description: "React provides the perfect foundation for building modern e-commerce experiences",
        },
      ],
    },
    {
      _id: "blog4",
      title: "The Power of Three.js: Creating Interactive 3D Web Experiences",
      image: "/blog/three.png",
      color: "#fc2154",
      description:
        "Dive into the world of 3D web development with Three.js and learn how to create immersive experiences for your users.",
      points: [
        {
          _id: "p1",
          title: "Getting Started",
          description: "Setting up your first Three.js project and understanding the basics",
        },
        { _id: "p2", title: "3D Models", description: "Working with 3D models and textures in your web applications" },
        { _id: "p3", title: "Interactions", description: "Adding user interactions to create engaging experiences" },
        {
          _id: "p4",
          title: "Conclusion",
          description: "Three.js opens up new possibilities for creating unique web experiences",
        },
      ],
    },
  ]

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      },
    )

    // Blog cards animation
    const blogCards = cardsRef.current.querySelectorAll(".blog-card")

    blogCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        },
      )

      // Hover animation
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          boxShadow: "0 20px 30px rgba(0, 0, 0, 0.15)",
          duration: 0.3,
          ease: "power2.out",
        })

        // Animate image zoom
        const image = card.querySelector(".blog-card-image img")
        gsap.to(image, {
          scale: 1.1,
          duration: 0.5,
          ease: "power2.out",
        })

        // Animate button
        const button = card.querySelector(".read-more-btn")
        gsap.to(button, {
          backgroundColor: card.dataset.color,
          color: "#fff",
          scale: 1.05,
          duration: 0.3,
        })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out",
        })

        // Reset image zoom
        const image = card.querySelector(".blog-card-image img")
        gsap.to(image, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        })

        // Reset button
        const button = card.querySelector(".read-more-btn")
        gsap.to(button, {
          backgroundColor: "#fff",
          color: card.dataset.color,
          scale: 1,
          duration: 0.3,
        })
      })
    })

    // Create a special animation for the featured card
    gsap.fromTo(
      ".featured-blog-card",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: ".featured-blog-card",
          start: "top 80%",
        },
      },
    )
  }, [])

  return (
    <section id="blogs" className="container blogs" ref={containerRef}>
      <div className="textHead" ref={headingRef}>
        <h1>
          Read our <span>latest blog</span> posts, updated to keep you informed and engaged.
        </h1>
      </div>

      <div className="blogs-container" ref={cardsRef}>
        <div className="featured-blog">
          <div className="featured-blog-card" data-color={blogs[0].color}>
            <div className="featured-blog-content">
              <div className="featured-blog-tag" style={{ backgroundColor: blogs[0].color, width: "fit-content" }}>
                Featured
              </div>
              <h2>{blogs[0].title}</h2>
              <p>{blogs[0].description}</p>
              <Link to={`blogs/${blogs[0]._id}`} style={{ textDecoration: "none" }}>
                <button className="featured-read-more-btn" style={{ backgroundColor: blogs[0].color }}>
                  Read Article <BiChevronRight />
                </button>
              </Link>
            </div>
            <div className="featured-blog-image">
              <img src={blogs[0].image || "/placeholder.svg"} alt={blogs[0].title} />
            </div>
          </div>
        </div>

        <div className="blog-grid">
          {blogs.slice(1).map((blog) => (
            <div key={blog._id} className="blog-card" data-color={blog.color}>
              <div className="blog-card-image">
                <img src={blog.image || "/placeholder.svg"} alt={blog.title} />
                <div className="blog-card-overlay" style={{ backgroundColor: blog.color }}></div>
              </div>
              <div className="blog-card-content">
                <h3>{blog.title}</h3>
                <p>{blog.description.substring(0, 100)}...</p>
                <Link to={`blogs/${blog._id}`} style={{ textDecoration: "none" }}>
                  <button className="read-more-btn" style={{ color: blog.color, borderColor: blog.color }}>
                    Read More <BiChevronRight />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
