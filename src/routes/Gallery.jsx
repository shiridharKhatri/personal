"use client"

import { useEffect, useRef, useState } from "react"
import Navbar from "../components/Navbar"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight, X } from "lucide-react" // Import Lucide icons
import "../style/gallery.css"

gsap.registerPlugin(ScrollTrigger)

export default function Gallery() {
  const galleryRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)
  const modalOverlayRef = useRef(null)

  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const websitePhotos = [
    {
      id: 1,
      src: "/gallery/skincare.png",
      title: "Skin care",
      description: "A premium mindfulness e-commerce brand website.",
    },
    {
      id: 2,
      src: "/portfolioo/dashboard.png",
      title: "E-Commerce Admin Dashboard",
      description: "Powerful backend for managing online store operations.",
    },
    {
      id: 3,
      src: "/portfolioo/nexus.png",
      title: "Nexus AI Chatbot",
      description: "Smart real-time conversational AI assistant.",
    },
    {
      id: 4,
      src: "/portfolioo/techwave.png",
      title: "TechWave Brand Site",
      description: "Showcase for a modern tech accessories brand.",
    },
    {
      id: 5,
      src: "/portfolioo/flexGym.png",
      title: "FLEX GYM",
      description: "Dynamic website for a fitness center.",
    },
    {
      id: 6,
      src: "/portfolioo/shophub.png",
      title: "ShopHub E-commerce",
      description: "Full-featured online shopping platform.",
    },
    {
      id: 7,
      src: "/portfolioo/icp.png",
      title: "Student Management System",
      description: "Hackathon project for student data management.",
    },
    {
      id: 8,
      src: "/portfolioo/ally.png",
      title: "Ally Integra",
      description: "Responsive business website for a consulting firm.",
    },
    {
      id: 9,
      src: "/portfolioo/food.png",
      title: "Shah Food",
      description: "Responsive website for a food business.",
    },
    {
      id: 10,
      src: "/portfolioo/donor.png",
      title: "Donor Website",
      description: "Informational site for a donor organization.",
    },
    {
      id: 11,
      src: "/portfolioo/asta.png",
      title: "Asta Wolf Clone",
      description: "E-commerce clone with responsive design.",
    },
    {
      id: 12,
      src: "/portfolioo/chat.png",
      title: "Anonymous Chat",
      description: "Real-time anonymous chatting application.",
    },
    {
      id: 13,
      src: "/portfolioo/news.png",
      title: "Today News",
      description: "Daily news and weather updates.",
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

    // Gallery items animation
    gsap.fromTo(
      gridRef.current.querySelectorAll(".gallery-item"),
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      },
    )
  }, [])

  const openModal = (index) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
    gsap.to(modalOverlayRef.current, { opacity: 1, visibility: "visible", duration: 0.3 })
  }

  const closeModal = () => {
    gsap.to(modalOverlayRef.current, {
      opacity: 0,
      visibility: "hidden",
      duration: 0.3,
      onComplete: () => {
        setSelectedImageIndex(null)
        setIsModalOpen(false)
      },
    })
  }

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % websitePhotos.length)
  }

  const goToPrevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + websitePhotos.length) % websitePhotos.length)
  }

  return (
    <>
      <Navbar position="relative" />
      <section className="gallery-page" ref={galleryRef}>
        <div className="gallery-header" ref={headerRef}>
          <h1>
            My Work <span>Gallery</span>
          </h1>
          <p>
            A collection of diverse web projects, showcasing my expertise in design, development, and responsive
            solutions.
          </p>
        </div>

        <div className="gallery-grid" ref={gridRef}>
          {websitePhotos.map((photo, index) => (
            <div key={photo.id} className="gallery-item" onClick={() => openModal(index)}>
              <img src={photo.src || "/placeholder.svg"} alt={photo.title} />
              <div className="gallery-info">
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-screen Image Modal */}
      <div className={`image-modal-overlay ${isModalOpen ? "open" : ""}`} ref={modalOverlayRef}>
        {isModalOpen && selectedImageIndex !== null && (
          <div className="image-modal-content">
            <button className="image-modal-close-button" onClick={closeModal}>
              <X />
            </button>
            <button className="image-modal-nav-button prev" onClick={goToPrevImage}>
              <ChevronLeft />
            </button>
            <img
              src={websitePhotos[selectedImageIndex].src || "/placeholder.svg"}
              alt={websitePhotos[selectedImageIndex].title}
            />
            <button className="image-modal-nav-button next" onClick={goToNextImage}>
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </>
  )
}
