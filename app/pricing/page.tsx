import Header from "@/components/header";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import "./pricing.css";

export default function PricingPage() {
  return (
    <>
      <div className="page-wrapper">
        <Header />

        <main className="main-wrapper">
          {/* Pricing Hero Section */}
          <section className="pricing-hero-section">
            <div className="container text-center">
              <h1 className="pricing-title">Predictable Pricing.<br />No Surprises.</h1>
              <p className="pricing-subtitle">Choose the number of active talents working<br />on your requests at the same time:</p>
              
              {/* Slider for selecting talents */}
              <div className="talent-slider-container">
                <div className="slider-label-start">
                  Small up<br />and down
                </div>
                <div className="talent-slider">
                  <div className="slider-marks">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* All Inclusive Plan Section */}
          <section className="pricing-all-inclusive-section">
            <div className="container">
              <div className="all-inclusive-plan">
                <div className="plan-header">
                  <div className="plan-label">All Inclusive</div>
                  <button className="close-button">×</button>
                </div>
                <p className="plan-description">For high-performing, marketing teams & scale-ups who want access to reliable on-demand design & dev talents for more even faster.</p>
                
                <div className="plan-features-pricing-wrapper">
                  <div className="plan-features-columns">
                    <div className="features-column">
                      <div className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span>Unlimited Design Requests</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span>Unlimited Development Requests</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span>Unlimited Revisions</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span>Unlimited Brands</span>
                      </div>
                    </div>
                    <div className="features-column">
                      <div className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span>Dedicated Project Manager</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span>Daily Updates & Progress Reports</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span>Pause or Cancel Anytime</span>
                      </div>
                      <div className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span>Upgrade or Downgrade Anytime</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="plan-pricing">
                    <div className="price">$1995/m</div>
                    <button className="subscribe-button">Subscribe Now →</button>
                  </div>
                </div>
                
                <div className="maintenance-plan-note">
                  <span>Need a Maintenance Plan?</span>
                  <span className="info-icon">ⓘ</span>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="stats-section">
            <div className="container">
              <div className="stats-wrapper">
                <div className="stat-item">
                  <div className="stat-number">7×</div>
                  <div className="stat-description">Faster Than Hiring<br />In-House</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">66%</div>
                  <div className="stat-description">Less Employment<br />Cost per Month</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">9.4</div>
                  <div className="stat-description">Average<br />Customer Rating</div>
                </div>
              </div>
            </div>
          </section>

          {/* Business Growth Section */}
          <section className="business-growth-section">
            <div className="container">
              <h2 className="section-title">We Help You Grow Your Business<br />Without Growing Your Team</h2>
              <p className="section-description">Growmodo creates reliable on-demand design and development teams & makes them truly your own. Our clients are double the size of the industry average because they have us.</p>
              
              <div className="benefits-wrapper">
                <div className="benefits-column">
                  <div className="benefit-item">
                    <span className="check-icon">✓</span>
                    <span>Scalable Remote Workforce</span>
                  </div>
                  <div className="benefit-item">
                    <span className="check-icon">✓</span>
                    <span>Top 1% Designers & Developers</span>
                  </div>
                  <div className="benefit-item">
                    <span className="check-icon">✓</span>
                    <span>You Own 100% of Everything We Do</span>
                  </div>
                  <div className="benefit-item">
                    <span className="check-icon">✓</span>
                    <span>Dedicated Project Manager</span>
                  </div>
                  <div className="benefit-item">
                    <span className="check-icon">✓</span>
                    <span>Daily Updates (Morning Briefings)</span>
                  </div>
                  <div className="benefit-item">
                    <span className="check-icon">✓</span>
                    <span>No Contract, Cancel Anytime</span>
                  </div>
                </div>
                <div className="benefits-column negative">
                  <div className="benefit-item">
                    <span className="x-icon">✕</span>
                    <span>No Long Hiring Process</span>
                  </div>
                  <div className="benefit-item">
                    <span className="x-icon">✕</span>
                    <span>No Disappointing Freelance Workers</span>
                  </div>
                  <div className="benefit-item">
                    <span className="x-icon">✕</span>
                    <span>No Overbooking on Your Agency Fee Updates</span>
                  </div>
                  <div className="benefit-item">
                    <span className="x-icon">✕</span>
                    <span>No Big Long-term Payment</span>
                  </div>
                  <div className="benefit-item">
                    <span className="x-icon">✕</span>
                    <span>No Long-Term Commitment</span>
                  </div>
                  <div className="benefit-item">
                    <span className="x-icon">✕</span>
                    <span>No Invoices Waiting For a Response by Your Web Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="testimonials-section">
            <div className="container">
              <h2 className="section-title">Testimonials</h2>
              <div className="testimonial-wrapper">
                <div className="testimonial-controls">
                  <button className="control prev">←</button>
                  <button className="control next">→</button>
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-text">
                    <p>I have been working with Growmodo for nearly two years now. With their keen eye for design, development skills and expert project management, I have managed to serve a lot more clients than I would without them.</p>
                    <div className="testimonial-author">
                      <div className="author-name">Charlie Nelson</div>
                      <div className="author-company">Root Level Digital</div>
                    </div>
                  </div>
                  <div className="testimonial-image">
                    <img src="/images/testimonial-person.jpg" alt="Testimonial" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="pricing-faq-section">
            <div className="container">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-items">
                <div className="faq-item">
                  <h3>What is Growmodo?</h3>
                  <div className="faq-toggle">↓</div>
                </div>
                <div className="faq-item">
                  <h3>How do I request a new task or project?</h3>
                  <div className="faq-toggle">↓</div>
                </div>
                <div className="faq-item">
                  <h3>Do I communicate directly with the designer and developer?</h3>
                  <div className="faq-toggle">↓</div>
                </div>
                <div className="faq-item">
                  <h3>Can we communicate via Slack or MS Teams?</h3>
                  <div className="faq-toggle">↓</div>
                </div>
                <div className="faq-item">
                  <h3>How does your pricing work?</h3>
                  <div className="faq-toggle">↓</div>
                </div>
                <div className="faq-item">
                  <h3>What do you mean by Requests?</h3>
                  <div className="faq-toggle">↓</div>
                </div>
                <div className="faq-item">
                  <h3>What s the difference between Tasks and Projects?</h3>
                  <div className="faq-toggle">↓</div>
                </div>
                <div className="faq-item">
                  <h3>What does your 100% Satisfaction Guarantee include?</h3>
                  <div className="faq-toggle">↓</div>
                </div>
                <div className="faq-item">
                  <h3>How long does it take to build a simple website?</h3>
                  <div className="faq-toggle">↓</div>
                </div>
                <div className="faq-item">
                  <h3>What is the difference between the Maintenance Plan and the All-Inclusive Plan?</h3>
                  <div className="faq-toggle">↓</div>
                </div>
              </div>
              <div className="see-all-faqs">
                <button className="faq-button">See All FAQs</button>
              </div>
            </div>
          </section>

          <CtaSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
