import { useEffect, useRef, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Loader from "../tools/Loader"
import { FaCalendarAlt, FaClock, FaTwitter, FaFacebookF, FaLinkedinIn, FaRegBookmark } from "react-icons/fa"
import { BiChevronRight } from "react-icons/bi"
import { gsap } from "gsap"

export default function Blogs() {
  const [blog, setBlog] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const [loader, setLoader] = useState(true)
  const params = useParams()
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const contentRef = useRef(null)

  // Static blog data
  const blogss = [
    {
      _id: "blog1",
      title: "The Future of Web Development: What to Expect in 2025",
      image: "/blog/webdevelopment.png",
      color: "#5626c4",
      date: "April 10, 2023",
      readTime: "8 min read",
      description:
        "Explore the upcoming trends and technologies that will shape web development in the coming years, from AI integration to advanced animations.",
      points: [
        {
          _id: "p1",
          title: "AI Integration",
          description:
            "How artificial intelligence is becoming a standard part of modern websites. AI-powered chatbots, content generation, and personalized user experiences are becoming increasingly common. Developers are now expected to understand how to integrate and work with AI APIs to enhance their web applications. This shift is not just about adding new features but fundamentally changing how users interact with websites.",
        },
        {
          _id: "p2",
          title: "WebAssembly",
          description:
            "The rise of high-performance web applications through WebAssembly. WebAssembly (Wasm) allows code written in languages like C, C++, and Rust to run on the web at near-native speed. This technology is enabling more complex applications to run efficiently in browsers, from video editing tools to advanced games. As WebAssembly matures, we're seeing a new generation of web applications that rival desktop software in performance and capabilities.",
        },
        {
          _id: "p3",
          title: "3D Experiences",
          description:
            "Creating immersive 3D experiences with Three.js and WebGL. The web is becoming increasingly three-dimensional, with more sites incorporating 3D elements for product showcases, interactive storytelling, and immersive experiences. Libraries like Three.js are making it easier for developers to create compelling 3D content without specialized graphics programming knowledge. This trend is accelerating with the growing interest in virtual and augmented reality experiences delivered through the web.",
        },
        {
          _id: "p4",
          title: "Conclusion",
          description:
            "Staying ahead in web development requires continuous learning and adaptation to new technologies. The field of web development continues to evolve at a rapid pace, with new tools, frameworks, and approaches emerging regularly. Successful developers will need to balance mastering fundamentals with exploring cutting-edge technologies. By understanding these trends and preparing for them now, you'll be well-positioned to create innovative and effective web experiences in the coming years.",
        },
      ],
    },
    {
      _id: "blog2",
      title: "Mastering GSAP Animations for Modern Websites",
      image: "/blog/gsap.jpg",
      color: "#00abe1",
      date: "March 15, 2023",
      readTime: "6 min read",
      description:
        "Learn how to create stunning animations with GSAP that will take your website to the next level and impress your visitors.",
      points: [
        {
          _id: "p1",
          title: "Basics of GSAP",
          description:
            "Understanding the core concepts of GSAP animation library. GreenSock Animation Platform (GSAP) is a robust JavaScript library that enables developers to create high-performance animations with minimal code. The core concepts include tweens (individual animations), timelines (sequences of animations), and eases (functions that control the rate of change). GSAP's intuitive API makes it accessible for beginners while offering advanced features for complex animations.",
        },
        {
          _id: "p2",
          title: "ScrollTrigger",
          description:
            "Creating scroll-based animations that respond to user interaction. ScrollTrigger is a powerful GSAP plugin that ties animations to the user's scroll position. This allows for creating engaging experiences where elements animate as they enter the viewport or as the user scrolls through a section. ScrollTrigger offers precise control over when animations start and end, with options for scrubbing (tying animation progress directly to scroll position) and pinning elements in place during scroll sequences.",
        },
        {
          _id: "p3",
          title: "Performance",
          description:
            "Optimizing animations for better performance across devices. GSAP is designed with performance in mind, but there are still best practices to follow for smooth animations. These include using transforms and opacity for animations when possible (as they're GPU-accelerated), limiting the number of elements being animated simultaneously, and using will-change to hint to browsers about elements that will animate. Testing animations on lower-powered devices is crucial to ensure a good experience for all users.",
        },
        {
          _id: "p4",
          title: "Conclusion",
          description:
            "GSAP is a powerful tool that can significantly enhance user experience when used correctly. By mastering GSAP, developers can create animations that not only look impressive but also serve to improve usability and engagement. The library's flexibility means it can be used for subtle interface enhancements or bold, attention-grabbing sequences. As web users increasingly expect dynamic, interactive experiences, animation skills are becoming essential for frontend developers.",
        },
      ],
    },
    {
      _id: "blog3",
      title: "Building Responsive E-commerce Sites with React",
      image: "/blog/react.png",
      color: "#f7cd46",
      date: "February 22, 2023",
      readTime: "10 min read",
      description:
        "A comprehensive guide to creating responsive and user-friendly e-commerce websites using React and modern design principles.",
      points: [
        {
          _id: "p1",
          title: "Planning",
          description:
            "The importance of proper planning and architecture for e-commerce sites. E-commerce websites require careful planning due to their complexity and the various user flows they must support. This includes mapping out the product catalog structure, user authentication flows, checkout process, and admin interfaces. A well-planned architecture will consider scalability, performance, and maintainability from the start, saving significant time and resources as the project grows.",
        },
        {
          _id: "p2",
          title: "Components",
          description:
            "Creating reusable components for product listings, cart, and checkout. React's component-based architecture is perfect for e-commerce sites, where many UI elements are repeated throughout the site. By designing a robust component library that includes product cards, filters, cart items, and form elements, developers can ensure consistency while speeding up development. These components should be designed with flexibility in mind, accepting props that allow them to be customized for different contexts.",
        },
        {
          _id: "p3",
          title: "Responsive Design",
          description:
            "Ensuring your site works perfectly on all devices. Mobile commerce continues to grow, making responsive design essential for e-commerce success. This involves more than just making layouts fluid; it requires rethinking navigation, product displays, and checkout flows for smaller screens. Techniques like CSS Grid, Flexbox, and media queries are fundamental, but also consider touch-friendly interfaces, appropriate text sizes, and optimized images for different screen sizes and network conditions.",
        },
        {
          _id: "p4",
          title: "Conclusion",
          description:
            "React provides the perfect foundation for building modern e-commerce experiences. Its component-based architecture, virtual DOM for performance, and rich ecosystem of libraries make it well-suited for the complex needs of e-commerce sites. By combining React with thoughtful UX design, responsive layouts, and performance optimizations, developers can create shopping experiences that convert well across all devices and provide a competitive edge in the crowded e-commerce landscape.",
        },
      ],
    },
    {
      _id: "blog4",
      title: "The Power of Three.js: Creating Interactive 3D Web Experiences",
      image: "/blog/three.png",
      color: "#fc2154",
      date: "January 18, 2023",
      readTime: "7 min read",
      description:
        "Dive into the world of 3D web development with Three.js and learn how to create immersive experiences for your users.",
      points: [
        {
          _id: "p1",
          title: "Getting Started",
          description:
            "Setting up your first Three.js project and understanding the basics. Three.js is a JavaScript library that makes it possible to create 3D graphics in the browser using WebGL. Getting started requires understanding a few core concepts: scenes (which contain all objects), cameras (which determine what's visible), renderers (which draw everything to the screen), and meshes (the 3D objects themselves). Setting up a basic scene involves creating these elements and establishing an animation loop to render frames continuously.",
        },
        {
          _id: "p2",
          title: "3D Models",
          description:
            "Working with 3D models and textures in your web applications. Three.js supports various 3D model formats, with glTF becoming the standard for web-based 3D content. Loading models requires using the appropriate loaders and handling asynchronous loading. Textures add realism to 3D models and can include diffuse maps (color), normal maps (surface detail), and metalness/roughness maps (material properties). Understanding how to optimize models and textures is crucial for performance.",
        },
        {
          _id: "p3",
          title: "Interactions",
          description:
            "Adding user interactions to create engaging experiences. Interactive 3D experiences allow users to engage with content in new ways. This includes implementing controls for camera movement (orbit, pan, zoom), making objects selectable or draggable, and creating animations triggered by user actions. Raycasting is a key technique for detecting when a user clicks on a 3D object. These interactions should feel natural and responsive, with appropriate visual feedback.",
        },
        {
          _id: "p4",
          title: "Conclusion",
          description:
            "Three.js opens up new possibilities for creating unique web experiences. As browsers become more powerful and WebGL support improves, 3D web experiences are becoming more common and sophisticated. Three.js makes this technology accessible to web developers without requiring extensive graphics programming knowledge. From product configurators to interactive data visualizations to immersive storytelling, 3D web content can differentiate your site and create memorable user experiences.",
        },
      ],
    },
  ]

  useEffect(() => {
    const blogData = blogss.find((e) => e._id === params.blogId)

    if (blogData) {
      setBlog(blogData)

      // Find related blogs (excluding current blog)
      const related = blogss.filter((b) => b._id !== params.blogId).slice(0, 3)

      setRelatedBlogs(related)
      setLoader(false)

      // Animations
      if (!loader && headerRef.current && contentRef.current) {
        // Header animations
        gsap.fromTo(
          headerRef.current.querySelectorAll(
            ".blog-post-image, .blog-post-title, .blog-post-meta, .blog-post-description",
          ),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
        )

        // Content animations with scroll trigger
        gsap.utils.toArray(".blog-post-section").forEach((section, i) => {
          gsap.fromTo(
            section,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
              },
            },
          )
        })

        // Conclusion animation
        gsap.fromTo(
          ".blog-post-conclusion",
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            scrollTrigger: {
              trigger: ".blog-post-conclusion",
              start: "top 80%",
            },
          },
        )

        // Related posts animation
        gsap.fromTo(
          ".blog-post-related",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            scrollTrigger: {
              trigger: ".blog-post-related",
              start: "top 80%",
            },
          },
        )
      }
    } else {
      setLoader(true)
    }
  }, [params.blogId, loader])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }, [params.blogId])

  return (
    <>
      <Navbar position="relative" />
      {loader ? (
        <section ref={containerRef} className="container indBlog">
          <div className="blogContainer">
            <Loader />
          </div>
        </section>
      ) : (
        <section ref={containerRef} className="container indBlog">
          <div className="blog-post-container">
            <div className="blog-post-header" ref={headerRef}>
              <div className="blog-post-image">
                <img src={blog.image || "/placeholder.svg"} alt={blog.title} />
              </div>

              <h1 className="blog-post-title">{blog.title}</h1>

              <div className="blog-post-meta">
                <div className="date">
                  <FaCalendarAlt /> {blog.date}
                </div>
                <div className="read-time">
                  <FaClock /> {blog.readTime}
                </div>
              </div>

              <p className="blog-post-description">{blog.description}</p>
            </div>

            <div className="blog-post-content" ref={contentRef}>
              {blog.points.slice(0, -1).map((point) => (
                <div key={point._id} className="blog-post-section">
                  <h2>{point.title}</h2>
                  <p>{point.description}</p>
                </div>
              ))}

              <div className="blog-post-conclusion">
                <h3>Conclusion</h3>
                <p>{blog.points[blog.points.length - 1].description}</p>
              </div>

              <div className="blog-post-share">
                <span>Share this article:</span>
                <div className="blog-post-share-buttons">
                  <div className="blog-post-share-button" style={{ backgroundColor: "#1DA1F2" }}>
                    <FaTwitter />
                  </div>
                  <div className="blog-post-share-button" style={{ backgroundColor: "#4267B2" }}>
                    <FaFacebookF />
                  </div>
                  <div className="blog-post-share-button" style={{ backgroundColor: "#0077B5" }}>
                    <FaLinkedinIn />
                  </div>
                  <div className="blog-post-share-button" style={{ backgroundColor: blog.color }}>
                    <FaRegBookmark />
                  </div>
                </div>
              </div>
            </div>

            {relatedBlogs.length > 0 && (
              <div className="blog-post-related">
                <h3>Related Articles</h3>
                <div className="blog-post-related-grid">
                  {relatedBlogs.map((relatedBlog) => (
                    <div key={relatedBlog._id} className="blog-card" data-color={relatedBlog.color}>
                      <div className="blog-card-image">
                        <img src={relatedBlog.image || "/placeholder.svg"} alt={relatedBlog.title} />
                        <div className="blog-card-overlay" style={{ backgroundColor: relatedBlog.color }}></div>
                      </div>
                      <div className="blog-card-content">
                        <h3>{relatedBlog.title}</h3>
                        <p>{relatedBlog.description.substring(0, 100)}...</p>
                        <Link to={`/blogs/${relatedBlog._id}`} style={{ textDecoration: "none" }}>
                          <button
                            className="read-more-btn"
                            style={{ color: relatedBlog.color, borderColor: relatedBlog.color }}
                          >
                            Read More <BiChevronRight />
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}
