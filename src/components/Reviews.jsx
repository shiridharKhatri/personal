import { useEffect, useState } from "react";
import { AiIcons, BiIcons, MdIcons } from "../tools/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const reviews = [
    {
      review:
        "Shiridhar is an A+ developer! Wen't above and beyond what was required to make sure that I was happy with the outcome! Highly recommended! Very responsive and works really fast! Shiridhar is the guy! 10/10!",
      display_name: "Neo Caliste",
      star: 5,
      img: "/review/neo.webp",
      source: "upwork",
    },
    {
      review:
        "Shiridhar delivered good work on this CSS, HTML development project and I enjoyed working with him. His communication was top-notch, he met all deadlines, and his skills were reasonably strong. At one point I asked for an additional milestone and he was very forthcoming that the additional work was outside his area of expertise. He helped me find additional freelancers to support the work. I enjoyed working with Shiridhar and will likely have additional jobs for him in the future",
      display_name: "Rakefet Benyamini",
      star: 5,
      img: "/review/Rakefet.webp",
      source: "upwork",
    },
    {
      review:
        "Shiridhar delivered good work on this react development project and I enjoyed working with him. His communication was good and his skills were reasonably strong. He handled delays from our side and some unseen work very gracefully. Any delays which were caused in the project were communicated beforehand. Will definitely recommend for react websites",
      display_name: "Karan Dewani",
      star: 4,
      img: "/review/spa.webp",
      source: "upwork",
    },
    {
      review:
        "I recently collaborated with Shiridhar on a website project hosted on AWS. Their dedication, promptness, and innovative ideas surpassed my expectations. Despite a tight deadline, Shiridhar flawlessly implemented features and enhanced the user experience. Even after completion, they promptly addressed any issues. Working with Shiridhar was a pleasure, and I highly recommend them for exceeding expectations in web design.",
      display_name: "Ally Integra",
      star: 5,
      img: "/review/ally.webp",
      source: "upwork",
    },
    {
      review: "Did a great job taking my feedback and implementing it .",
      display_name: "Devesh Laungani",
      star: 5,
      img: "/review/vis.webp",
      source: "upwork",
    },
    {
      review:
        "I've worked with him twice, and both times, he did an amazing job. He brings a lot of enthusiasm and attention to detail, making sure the design matches what I want. He doesn't just make websites; he creates easy-to-use, engaging, and visually appealing experiences. He's proactive, communicates well, and is open to feedback, making the process smooth and enjoyable. I'm very happy with Shiridhar's work and look forward to working with him again. His creativity, skills, and work ethic are outstanding, and I highly recommend him.",
      display_name: "Ally Integra",
      star: 5,
      img: "/review/ally.webp",
      source: "upwork",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };
  function getRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <h3 key={`full-star-${i}`} className="stars">
          <AiIcons.AiFillStar />
        </h3>
      );
    }

    for (let i = 0; i < halfStars; i++) {
      stars.push(
        <h3 key={`half-star-${i}`} className="stars">
          <AiIcons.AiFillStar style={{ opacity: 0.5 }} />
        </h3>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <h3 key={`empty-star-${i}`} className="stars">
          <AiIcons.AiOutlineStar />
        </h3>
      );
    }
    return stars;
  }

  const currentReview = reviews[currentIndex];
  return (
    <>
      <section
        className="testimonial"
        id="testimonialId"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/review.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {currentReview?.source === "upwork" ? (
          <h3 id="reference" style={{ background: "#00b22d" }}>
            <BiIcons.BiLogoUpwork />
          </h3>
        ) : (
          ""
        )}
        <h1>
          Feedback from <span style={{ color: "#f7cd46" }}>Client&apos;s</span>.
        </h1>
        <div className="mainSectiontestimonial">
          <div className="testimonial-card">
            <q>{currentReview.review}</q>
            <div className="imageTestimonial">
              {currentIndex <= 0 ? (
                <LazyLoadImage
                  style={{ opacity: "0" }}
                  id="prevImg"
                  src="/profile.webp"
                  alt={reviews[currentIndex].display_name}
                  width={200}
                  height={150}
                  loading="lazy"
                />
              ) : (
                <LazyLoadImage
                  id="prevImg"
                  src={
                    reviews[currentIndex - 1].display_name === "unknown"
                      ? "./anonymous.webp"
                      : `${reviews[currentIndex - 1].img}`
                  }
                  alt={reviews[currentIndex - 1].display_name}
                  width={200}
                  height={150}
                />
              )}

              <LazyLoadImage
                id="currentImage"
                src={
                  currentReview.display_name === "unknown"
                    ? "./anonymous.webp"
                    : `${currentReview.img}`
                }
                alt={currentReview.display_name}
                width={200}
                height={150}
              />
              {currentIndex === reviews.length - 1 ? (
                <LazyLoadImage
                  style={{ opacity: "0" }}
                  id="nextImg"
                  src="/profile.webp"
                  alt={
                    reviews[(currentIndex + 1) % reviews.length].display_name
                  }
                  width={200}
                  height={150}
                />
              ) : (
                <LazyLoadImage
                  id="nextImg"
                  src={
                    reviews[(currentIndex + 1) % reviews.length]
                      .display_name === "unknown"
                      ? "./anonymous.webp"
                      : `${reviews[(currentIndex + 1) % reviews.length].img}`
                  }
                  alt={
                    reviews[(currentIndex + 1) % reviews.length].display_name
                  }
                  width={200}
                  height={150}
                />
              )}
              <div className="nextPrevtest">
                <button onClick={handlePrev} disabled={currentIndex <= 0}>
                  <MdIcons.MdKeyboardArrowLeft />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === reviews.length - 1}
                >
                  <MdIcons.MdKeyboardArrowRight />
                </button>
              </div>
            </div>
            <h2>{currentReview.display_name}</h2>
            <div className="star">{getRatingStars(currentReview.star)}</div>
          </div>
        </div>
      </section>
    </>
  );
}
