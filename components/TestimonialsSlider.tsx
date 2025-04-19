import React, { useState } from 'react';
import Image from 'next/image';

// Testimonial data array
const testimonials = [
    {
      text: "I have been working with Growmodo for nearly two years now. With their keen eye for design, development skills and expert project management, I have managed to serve a lot more clients than I would without them.",
      author: "Charlie Nelson",
      company: "Root Level Digital",
      image: "/images/testimonial-person.jpg"
    },
    {
      text: "Their team has been instrumental in helping us scale our design operations. The quality of work and turnaround time is exceptional.",
      author: "Sarah Johnson",
      company: "Innovative Solutions",
      image: "/images/testimonial-person.jpg"
    },
    {
      text: "Working with this team has completely transformed our development process. They deliver high-quality results consistently and on time.",
      author: "Michael Chen",
      company: "Digital Frontiers",
      image: "/images/testimonial-person.jpg"
    }
];

export default function TestimonialsSlider() {
    // State for tracking current testimonial
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    // Functions for testimonial navigation
    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section className="testimonials-section">
            <div className="container">
              <h2 className="section-title">Testimonials</h2>
              <div className="testimonial-wrapper relative">
                <button className="control prev absolute left-0 top-1/2 transform -translate-y-1/2" onClick={prevTestimonial}>←</button>
                <button className="control next absolute right-0 top-1/2 transform -translate-y-1/2" onClick={nextTestimonial}>→</button>
                <div className="px-20">
                  <div className="testimonial-text">
                    <p>{testimonials[currentTestimonial].text}</p>
                    <div className="testimonial-author">
                      <div className="author-name">{testimonials[currentTestimonial].author}</div>
                      <div className="author-company">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                  <div className="testimonial-image">
                    <Image 
                      src={testimonials[currentTestimonial].image} 
                      alt={`Testimonial from ${testimonials[currentTestimonial].author}`}
                      width={500}
                      height={500}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
        </section>
    )
}
