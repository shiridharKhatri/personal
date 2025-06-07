"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { FaTimes, FaShoppingCart } from "react-icons/fa"
import "../style/promo-popup.css"

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const popupRef = useRef(null)
  const overlayRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    // Check if popup was closed recently (within 30 minutes)
    const popupClosedTime = localStorage.getItem("promoPopupClosed")
    const currentTime = new Date().getTime()
    const thirtyMinutes = 30 * 60 * 1000 // 30 minutes in milliseconds

    if (popupClosedTime && currentTime - Number.parseInt(popupClosedTime) < thirtyMinutes) {
      return // Don't show popup if closed within last 30 minutes
    }

    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isVisible) {
      // Animate popup entrance
      gsap.set(popupRef.current, { display: "flex" })
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
      gsap.fromTo(
        contentRef.current,
        { scale: 0.9, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
      )

      // Animate content elements
      gsap.fromTo(".popup-left", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 0.2 })
      gsap.fromTo(".popup-right", { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, delay: 0.2 })
    }
  }, [isVisible])

  const closePopup = () => {
    // Store the current time in localStorage
    localStorage.setItem("promoPopupClosed", new Date().getTime().toString())

    gsap.to(contentRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.3,
      ease: "power3.in",
    })
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setIsVisible(false)
        gsap.set(popupRef.current, { display: "none" })
      },
    })
  }

  const handleBuyNow = () => {
    window.open("https://www.upwork.com/freelancers/shiridhark", "_blank")
    closePopup()
  }

  if (!isVisible) return null

  return (
    <div className="promo-popup" ref={popupRef}>
      <div className="popup-overlay" ref={overlayRef} onClick={closePopup}></div>

      <div className="popup-content" ref={contentRef}>
        <button className="close-btn" onClick={closePopup}>
          <FaTimes />
        </button>

        <div className="popup-container">
          <div className="popup-left">
            <div className="popup-image">
              <img src="/adBannerSm.png" alt="Professional Web Development" />
            </div>
          </div>

          <div className="popup-right">
            <div className="popup-badge">Limited Time Offer</div>
            <h2>Professional Ecommerce website</h2>
            <p>Get a complete website with modern design, responsive layout, and cutting-edge technology</p>

            <div className="pricing-section">
              <div className="price-container">
                <span className="original-price">$500</span>
                <span className="discounted-price">$310</span>
                <div className="discount-badge">38% OFF</div>
              </div>
              <p className="price-note">Starting price for complete website</p>
            </div>

            {/* <div className="popup-stats">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Clients</span>
              </div>
            </div> */}

            <button className="cta-button" onClick={handleBuyNow}>
              <FaShoppingCart />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
