"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    bgClass: "portfolio-bg",
    img: "/images/portfolio1.jpg",
    alt: "Portfolio 1",
  },
  {
    bgClass: "portfolio-bg portfolio-bg2",
    img: "/images/portfolio2.jpg",
    alt: "Portfolio 2",
  },
  {
    bgClass: "portfolio-bg portfolio-bg3",
    img: "/images/portfolio3.jpg",
    alt: "Portfolio 3",
  },
  {
    bgClass: "portfolio-bg portfolio-bg4",
    img: "/images/portfolio4.jpg",
    alt: "Portfolio 4",
    seeMore: true,
  },
];

export default function WorkSection() {
  const [current, setCurrent] = useState(0);

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="section-work">
      <div className="page-padding">
        <div className="container-normal">
          <div className="work_wrapper">
            <h2 className="max-width-470">Selected Work From Our Talents</h2>
            <div className="portfolio-slider desktop-slider w-slider">
              <div className="portfolio-mask w-slider-mask">
                {slides.map((slide, idx) => (
                  <div
                    className={`portfolio-slide w-slide${idx === current ? " active" : ""}`}
                    key={idx}
                    style={{ display: idx === current ? "block" : "none" }}
                  >
                    <div className={slide.bgClass}>
                      <Image
                        src={slide.img}
                        width={600}
                        height={400}
                        alt={slide.alt}
                        style={{ width: "100%", height: "auto", borderRadius: "12px" }}
                      />
                    </div>
                    {slide.seeMore && (
                      <div className="slider-see-more_wrapper desktop-slider">
                        <a href="/showcase" className="see-more_wrapper w-inline-block">
                          <div className="see-more_button">See More</div>
                          <div className="see-more_arrow w-embed">
                            See-more_arrow.svg
                          </div>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="portfolio_left-arrow w-slider-arrow-left" onClick={goToPrev} style={{ cursor: "pointer" }}>
                <div className="icon-3 w-icon-slider-left"></div>
                <Image src="/images/left-arrow.svg" width={26} height={26} loading="lazy" alt="Left arrow" />
              </div>
              <div className="portfolio_right-arrow w-slider-arrow-right" onClick={goToNext} style={{ cursor: "pointer" }}>
                <div className="icon-4 w-icon-slider-right"></div>
                <Image src="/images/right-arrow.svg" width={26} height={26} loading="lazy" alt="Right arrow" />
              </div>
              <div className="slide-nav w-slider-nav w-round">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    className={`slide-dot${idx === current ? " active" : ""}`}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      margin: "0 4px",
                      background: idx === current ? "#000" : "#ccc",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            <div data-delay="4000" data-animation="slide" className="portfolio-slider tablet-slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="false">
              {/* Mobile slider content */}
              {/* ...existing code... */}
            </div>
            <div className="slider-overlay"></div>
            <Image src="images/overlay-portfolio.svg" width={299} height={596} loading="lazy" alt="" className="overlay-white_portfolio display-none" />
            {/* Additional slider elements */}
            {/* ...existing code... */}
          </div>
        </div>
      </div>
    </div>
  );
}