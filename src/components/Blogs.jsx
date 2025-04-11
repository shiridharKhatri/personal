import React, { useEffect, useState } from "react";
import { BiIcons } from "../tools/icons";
import { Link } from "react-router-dom";

export default function Blogs() {
  // const [blogs, setBlogs] = useState([]);
  const [success, setSuccess] = useState(true);
  const HOST = import.meta.env.VITE_HOST;

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
          description:
            "How artificial intelligence is becoming a standard part of modern websites",
        },
        {
          _id: "p2",
          title: "WebAssembly",
          description:
            "The rise of high-performance web applications through WebAssembly",
        },
        {
          _id: "p3",
          title: "3D Experiences",
          description:
            "Creating immersive 3D experiences with Three.js and WebGL",
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
          description:
            "Understanding the core concepts of GSAP animation library",
        },
        {
          _id: "p2",
          title: "ScrollTrigger",
          description:
            "Creating scroll-based animations that respond to user interaction",
        },
        {
          _id: "p3",
          title: "Performance",
          description:
            "Optimizing animations for better performance across devices",
        },
        {
          _id: "p4",
          title: "Conclusion",
          description:
            "GSAP is a powerful tool that can significantly enhance user experience when used correctly",
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
          description:
            "The importance of proper planning and architecture for e-commerce sites",
        },
        {
          _id: "p2",
          title: "Components",
          description:
            "Creating reusable components for product listings, cart, and checkout",
        },
        {
          _id: "p3",
          title: "Responsive Design",
          description: "Ensuring your site works perfectly on all devices",
        },
        {
          _id: "p4",
          title: "Conclusion",
          description:
            "React provides the perfect foundation for building modern e-commerce experiences",
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
          description:
            "Setting up your first Three.js project and understanding the basics",
        },
        {
          _id: "p2",
          title: "3D Models",
          description:
            "Working with 3D models and textures in your web applications",
        },
        {
          _id: "p3",
          title: "Interactions",
          description:
            "Adding user interactions to create engaging experiences",
        },
        {
          _id: "p4",
          title: "Conclusion",
          description:
            "Three.js opens up new possibilities for creating unique web experiences",
        },
      ],
    },
  ];

  // useEffect(() => {
  //   async function fetchItems() {
  //     try {
  //       const response = await fetch(`${HOST}/blog/fetchBlog`);
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setBlogs(data.blog);
  //       if (data.success === true) {
  //         setSuccess(true);
  //       } else {
  //         setSuccess(false);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   fetchItems();
  // }, [HOST]);
  return (
    <section id="blogs" className="container blogs">
      <div className="textHead">
        <h1>
          Read our <span>latest blog</span> posts, updated to keep you informed
          and engaged.
        </h1>
      </div>
      <div className="blogContainer">
        {success === true ? (
          <>
            {blogs?.slice(-4).map((e) => {
              return (
                <div
                  style={{
                    backgroundImage: `url(${e.image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                  }}
                  key={e._id}
                  className="blogCards"
                >
                  
                  <div className="details">
                    <h2>{e.title}</h2>
                    <Link to={`blogs/${e._id}/${e.title}`}>
                      <button style={{ background: e.color }}>
                        Read more&nbsp;
                        <BiIcons.BiChevronRight />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <div className="blogCards loading">
              <div className="details">
                <h2></h2>
                <h2></h2>
                <button></button>
              </div>
            </div>
            <div className="blogCards loading">
              <div className="details">
                <h2></h2>
                <h2></h2>
                <button></button>
              </div>
            </div>
            <div className="blogCards loading">
              <div className="details">
                <h2></h2>
                <h2></h2>
                <button></button>
              </div>
            </div>
            <div className="blogCards loading">
              <div className="details">
                <h2></h2>
                <h2></h2>
                <button></button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
