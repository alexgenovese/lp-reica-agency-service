"use client"
import { useState, useEffect, useRef } from "react";
import Header from "@/components/header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import CountUp from 'react-countup';
import FAQAccordion from "@/components/FAQAccordion";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import "./pricing.css";


export default function PricingPage() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = statsRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <Header />

        <main className="main-wrapper">
          <Banner 
            title="Predictable Pricing.<br />No Surprises."
            subtitle="Choose the number of active talents working<br />on your requests at the same time:"
            buttonText="Book a Discovery Call"
            buttonLink={process.env.BOOK_A_CALL || "#"}
            features={[
              { text: "x3 minimum increase" },
              { text: "Monthly flat-rate" },
              { text: "No Contract. Cancel anytime" },
            ]}
          />

          {/* Service Comparison Table */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-10">No hidden costs, simply a full-service to growth</h2>
              
              <div className="overflow-x-auto">
                <table className="comparison-table w-full">
                  <thead>
                    <tr>
                      <th className="text-left w-1/3 p-4">Features</th>
                      <th className="text-center w-1/5 p-4">
                        <span className="font-bold text-xl text-blue-600">GrowthMkt</span>
                      </th>
                      <th className="text-center w-1/5 p-4">
                        <span className="font-medium">Other<br />Growth Agency</span>
                      </th>
                      <th className="text-center w-1/5 p-4">
                        <span className="font-medium">Common<br />Marketing Agency</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Features Section */}
                    <tr>
                      <td className="p-4">Sustainable Budget Fees</td>
                      <td className="text-center p-4">
                        <span className="check-mark">✓</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="x-mark">✗</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="check-mark">✓</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">Full Services (Adv, Mail, Automations, Data Analysis, Retention programs)</td>
                      <td className="text-center p-4">
                        <span className="check-mark">✓</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="check-mark">✓</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="x-mark">✗</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">Data Science & BI</td>
                      <td className="text-center p-4">
                        <span className="check-mark">✓</span>
                      </td>
                      <td className="text-center p-4">0 or 1</td>
                      <td className="text-center p-4">0</td>
                    </tr>
                    <tr>
                      <td className="p-4">Client&apos;s Team Commitment</td>
                      <td className="text-center p-4">few days a month</td>
                      <td className="text-center p-4">partially</td>
                      <td className="text-center p-4">1 or 2 resources</td>
                    </tr>
                    <tr>
                      <td className="p-4">Tool stack costs included</td>
                      <td className="text-center p-4">
                        <span className="check-mark">✓</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="x-mark">✗</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="x-mark">✗</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">Educational Training on Job</td>
                      <td className="text-center p-4">
                        <span className="check-mark">✓</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="x-mark">✗</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="x-mark">✗</span>
                      </td>
                    </tr>

                    {/* Extra Services Section */}
                    <tr className="border-t-2">
                      <td colSpan={4} className="p-4 font-semibold">Extra with all our Growth Programs</td>
                    </tr>
                    <tr>
                      <td className="p-4">Customer Data Platform</td>
                      <td className="text-center p-4">Free</td>
                      <td className="text-center p-4">
                        <span className="x-mark">✗</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="x-mark">✗</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">Internationalization Services</td>
                      <td className="text-center p-4">
                        <span className="check-mark">✓</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="check-mark">✓</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="x-mark">✗</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">Business Intelligence</td>
                      <td className="text-center p-4">
                        <span className="check-mark">✓</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="x-mark">✗</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="x-mark">✗</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">Dedicated Account (not sales account)</td>
                      <td className="text-center p-4">
                        <span className="check-mark">✓</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="x-mark">✗</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="x-mark">✗</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">Business Reviews per Quarter</td>
                      <td className="text-center p-4">
                        <span className="check-mark">✓</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="check-mark">✓</span>
                      </td>
                      <td className="text-center p-4">
                        <span className="x-mark">✗</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Stats Section - Professional Redesign */}
          <section className="stats-section py-20 bg-white border-y border-gray-100" ref={statsRef}>
            <div className="container mx-auto px-4">
              <h3 className="text-base font-medium text-center mb-10 tracking-widest text-gray-600 uppercase">
                Client Success Metrics
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="stat-card">
                  <div className="stat-icon mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="stat-value text-5xl font-light text-gray-900 mb-4">
                    {statsVisible ? <CountUp end={140} suffix="%" duration={2.5} /> : "0%"}
                  </div>
                  <div className="stat-label text-lg text-gray-600 font-light">
                    Average clients&apos; annual growth rate
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="stat-value text-5xl font-light text-gray-900 mb-4">
                    {statsVisible ? <CountUp end={25} prefix="+" suffix=" mln" decimals={0} duration={3} /> : "+0 mln"}
                  </div>
                  <div className="stat-label text-lg text-gray-600 font-light">
                    New revenue generated
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="stat-value text-5xl font-light text-gray-900 mb-4">
                    {statsVisible ? <CountUp end={25} suffix="%" duration={2} /> : "0%"}
                  </div>
                  <div className="stat-label text-lg text-gray-600 font-light">
                    Average conversion rate increase
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
                  <div className="font-sans font-bold text-3xl text-green-700">All Inclusive</div>
                </div>
                <p className="plan-description">For high-performing, marketing teams & scale-ups who want access to reliable on-demand design & dev talents for more even faster.</p>
                
                <div className="plan-features-pricing-wrapper">
                  <div className="flex flex-col md:flex-row justify-between items-center">
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
                    <div className="text-4xl font-semibold py-10">€1995/m</div>
                    <button className="block w-full mb-2 bg-blue-800 text-white button rounded-md">Start Now →</button>
                    <span className="italic">100% Satisfaction Guaranteed</span>
                  </div>
                </div>
                
              </div>
            </div>
          </section>

          {/* Business Growth Section */}
          <section className="business-growth-section">
            <div className="container">
              <h2 className="section-title">We Help You Grow Your Business<br />Growing Your Margins</h2>
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
          <TestimonialsSlider />

          {/* FAQ Section */}
          <FAQAccordion />

          <CtaSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
