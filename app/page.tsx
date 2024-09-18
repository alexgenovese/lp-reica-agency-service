import Image from "next/image";
import Header from "@/components/header"
import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <>
    <div className="page-wrapper">
      
      <Header />

      <main className="main-wrapper">
        <div className="section-banner">
          <div className="page-padding">
            <div className="container-normal">
              <div className="banner_wrapper">
                <h1 className="text-align-center max-width-915"> Increase your team productivity integrating Generative AI</h1>
                <p className="text-align-center margin-top-30 color-5e5e5e max-width-730">Scale up your productivity team without expanding your team with complexy hiring or time wasting to find out the perfect freelance available.</p>
                <div className="button_wrapper center-aligned"><a href="/call" className="primary_button width-320 w-button">Book a Discovery Call</a><a href="/showcase" className="primary_button is-secondary width-320 w-button">See Previous Work</a></div>
                <div className="features-check_wrapper">
                  <div className="item-list_check"><Image src="images/check-icon.svg" loading="lazy" alt=""  width={32} height={32} className="list-check_icon" />
                    <div className="list-banner">Unlimited generations &amp; edits requests</div>
                  </div>
                  <div className="item-list_check"><Image src="images/check-icon.svg" loading="lazy" alt="" width={32} height={32} className="list-check_icon" />
                    <div className="list-banner">Monthly flat-rate</div>
                  </div>
                  <div className="item-list_check"><Image src="images/check-icon.svg" loading="lazy" alt="" width={32} height={32} className="list-check_icon" />
                    <div className="list-banner">No Contract. Cancel anytime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="section-trusted">
          <div className="page-padding">
            <div className="container-normal">
              <div className="trusted_wrapper">
                <div className="w-layout-grid trusted-grid">
                  <div className="trusted-content">
                    <h3 className="heading-2 transition">Trusted by fast-moving <br />brands &amp; agencies worldwide</h3>
                    <div className="counter_wrapper">
                      <div className="counter-wrapper">
                        <div className="counter-text">6,000+</div>
                        <div className="counter-desc">Tasks delivered</div>
                      </div>
                      <div className="counter2-wrapper">
                        <div className="counter-text">50+</div>
                        <div className="counter-desc desc-pl">Projects nailed</div>
                      </div>
                    </div>
                  </div>
                  <div className="company_wrapper">
                    <div className="w-layout-grid company-grid">
                      <Image src="https://cdn.prod.website-files.com/63329fb5ec1e5cdf02d0af1b/6336b0eca9242e1ee819f367_systeme.svg" loading="lazy" alt="" className="company-image"  width={95} height={23} />
                      <Image src="https://cdn.prod.website-files.com/63329fb5ec1e5cdf02d0af1b/633a8451a1f06fa4636d55f8_podigy2.svg" loading="lazy" alt="" className="company-image" width={95} height={23} />
                      <Image src="https://cdn.prod.website-files.com/63329fb5ec1e5cdf02d0af1b/633a8451a1f06fa4636d55f8_podigy2.svg" loading="lazy" alt="" className="company-image" width={95} height={23} />
                      <Image src="https://cdn.prod.website-files.com/63329fb5ec1e5cdf02d0af1b/633a8451a1f06fa4636d55f8_podigy2.svg" loading="lazy" alt="" className="company-image" width={95} height={23} />
                      <Image src="https://cdn.prod.website-files.com/63329fb5ec1e5cdf02d0af1b/633a8451a1f06fa4636d55f8_podigy2.svg" loading="lazy" alt="" className="company-image" width={95} height={23} />
                      <Image src="https://cdn.prod.website-files.com/63329fb5ec1e5cdf02d0af1b/633a8451a1f06fa4636d55f8_podigy2.svg" loading="lazy" alt="" className="company-image" width={95} height={23} />
                      <Image src="https://cdn.prod.website-files.com/63329fb5ec1e5cdf02d0af1b/633a8451a1f06fa4636d55f8_podigy2.svg" loading="lazy" alt="" className="company-image" width={95} height={23} />
                      <Image src="https://cdn.prod.website-files.com/63329fb5ec1e5cdf02d0af1b/633a8451a1f06fa4636d55f8_podigy2.svg" loading="lazy" alt="" className="company-image" width={95} height={23} />
                      <Image src="https://cdn.prod.website-files.com/63329fb5ec1e5cdf02d0af1b/633a8451a1f06fa4636d55f8_podigy2.svg" loading="lazy" alt="" className="company-image" width={95} height={23} />
                      <Image src="https://cdn.prod.website-files.com/63329fb5ec1e5cdf02d0af1b/633a8451a1f06fa4636d55f8_podigy2.svg" loading="lazy" alt="" className="company-image" width={95} height={23} />
                      <Image src="https://cdn.prod.website-files.com/63329fb5ec1e5cdf02d0af1b/633a8451a1f06fa4636d55f8_podigy2.svg" loading="lazy" alt="" className="company-image" width={95} height={23} />
                      <Image src="https://cdn.prod.website-files.com/63329fb5ec1e5cdf02d0af1b/633a8451a1f06fa4636d55f8_podigy2.svg" loading="lazy" alt="" className="company-image" width={95} height={23} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-freelancers">
          <div className="page-padding">
            <div className="container-normal">
              <div className="freelancers_wrapper">
                <div className="freelancers_text-wrapper">
                  <h2 className="font-color-white max-width-915 font-color--0b0b0b transition inline-text">Frustrated with Unreliable Freelancers or complex and time consuming hiring processes? </h2>
                  
                </div>
                <p className="font-color--d4d4d4 margin-top-60 max-width-534 font-weight-400 transition">There are more than enough places to find remote or in-house staff these days. However, finding the good ones is often time-consuming, nerve-racking, and expensive, especially when you need them now!<br /><br />Lucky you, we can fix that.</p>
                <div className="freelancers-list_wrapper">
                  <div className="freelancers-list_conntainer"><Image src="images/check-icon-rounded.svg" width={32} height={32} loading="lazy" alt="" className="list-check-icon" />
                    <div className="list-text transition">No Endless Profile Scrolling</div>
                  </div>
                  <div className="freelancers-list_conntainer"><Image src="images/check-icon-rounded.svg" width={32} height={32} loading="lazy" alt="" className="list-check-icon" />
                    <div className="list-text transition">No Draining Interviews</div>
                  </div>
                  <div className="freelancers-list_conntainer"><Image src="images/check-icon-rounded.svg" width={32} height={32} loading="lazy" alt="" className="list-check-icon" />
                    <div className="list-text transition">No Recruiting Fees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-steps">
          <div className="page-padding">
            <div className="container-normal">
              <div className="steps_wrapper">
                <h2 className="text-align-center max-w-6xl transition">The Quickest &amp; Smartest Way To Generate Creative Assets for Marketing, E-Commerce &amp; Social Media </h2>
                <p className="text-align-center margin-top-30 color-5e5e5e max-width-615 transition">We're a photo generative AI marketing agency based on subscription model that takes the pain out of hiring for your business.</p>
                <div className="w-layout-grid steps_grid">
                  <div className="steps_container">
                    <div className="steps-content">
                      <h3 className="steps-heading">Subscribe</h3>
                      <div className="steps-desc">to a plan &amp; request your first project or task.</div>
                    </div>
                    
                  </div>
                  <div className="steps_container">
                    <div className="steps-content">
                      <h3 className="steps-heading">Meeting</h3>
                      <div className="steps-desc">with a vetted project manager.</div>
                    </div>
                    
                  </div>
                  <div className="steps_container">
                    <div className="steps-content">
                      <h3 className="steps-heading">Receive</h3>
                      <div className="steps-desc steps-desc3">a project update or finished task within 24-48 hrs.</div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-testimonials">
          <div className="page-padding">
            <div className="container-normal">
              <div className="testimonials_wrapper">
                <div className="w-layout-grid testimonials-grid">
                  <div className="testimonial-image_wrapper"><Image src="/images/Gaute.png" width={260} height={260} loading="lazy" alt="" className="testimonial-image" /></div>
                  <div className="testimonial-comment_wrapper">
                    <p className="testimonial-comment max-width-700">&quot;I have been working with Reica for nearly one year now. With their keen eye for design, development skills, and expert project management, I have managed to serve a lot more clients than I would without them.&quot;</p>
                    <div className="testimonial-profile"><Image src="/images/five_stars.svg" width={135} height={28} loading="lazy" alt="" className="star-icon" />
                      <div className="testinomial-name">Gaute Remen</div>
                      <div className="testimonial-job">Tech Lead, Synlighet</div>
                    </div>
                    <div className="testimonial-profile testimonial-profile_mobile"><Image src="/images/Gaute.png" width={260} height={260}  loading="lazy" alt="" className="testimonial-image testimonial-image_mobile" />
                      <div className="testinomial-name">Gaute Remen</div>
                      <div className="testimonial-job">Synlighet</div><Image src="/images/five_stars.svg" width={135} height={28} loading="lazy" alt="" className="star-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-creative-talent">
          <div className="page-padding">
            <div className="container-normal">
              <div className="creative-heading-wrapper">
                <h2 className="text-align-center max-width-915">Creative Talent Recruiting </h2>
                <div className="creative-heading-flexbox">
                  <h2 className="text-align-center max-width-915">Made </h2><Image src="/images/ghirigoro_1.svg" width={23} height={9} loading="lazy" alt="" className="heading-shape-wave" />
                  <h2 className="text-align-center max-width-915"><span className="font-color-2468ff">Super</span> </h2><Image src="/images/ghirigoro_2.svg" width={18} height={20} loading="lazy" alt="" className="heading-shape-star" />
                  <h2 className="text-align-center max-width-915"><span className="font-color-2468ff"></span>Simple</h2>
                </div>
                <p className="text-align-center margin-top-30 color-5e5e5e max-width-615">We work as an extension of your in-house team and assemble the right team members for every task and project.</p>
              </div>
              <div id="creative-content-wrapper" className="creative-content-wrapper margin-top-60">
                <div className="creative-item fast-hiring">
                  <div className="fast-hiring-block">
                    <h3 className="creative-heading fast-hiring">Cost-Efficient</h3>
                    <p className="color-5e5e5e margin-top-20 fast-hiring">Our services help you maximize productivity while minimizing costs.</p>
                  </div>
                </div>
                <div className="creative-item rigorously-vetter">
                  <div className="regoriously-block">
                    <h3 className="creative-heading rigorously-vetter">Rigorously Vetted Experts</h3>
                    <p className="color-5e5e5e margin-top-20 rigorously-vetter">We build in-house, manage &amp; keep training the best talents we can find to roll out our products.</p>
                  </div>
                </div>
                <div className="creative-item fully-managed">
                  <div className="fully-managed-block">
                    <h3 className="creative-heading fully-managed">Fully-Managed Teams</h3>
                    <p className="color-5e5e5e margin-top-20 fully-managed">Your dedicated PM matches you with the right team members.</p>
                  </div>
                </div>
                <div className="creative-item daily-progress">
                  <div className="progress-block">
                    <h3 className="creative-heading daily-progress">Innovative Solution</h3>
                    <p className="color-5e5e5e margin-top-20 daily-progress">We help you generate your marketing ideas fast.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-buid">
          <div className="page-padding">
            <div className="container-normal">
              <div className="build_wrapper">
                <h2 className="text-align-center max-width-820 transition">Build Whatever You Want, With the Tools You Love</h2>
              </div>
            </div>
          </div>
          <div className="container-full is-aolp4">
            <Image src="images/white-gradient-left.svg" width={450} height={102} loading="lazy" alt="" className="overlay-tools-left-white no-transition" />
            <Image src="images/black-gradient-left.svg" width={450} height={102} loading="lazy" alt="" className="overlay-tools-left no-transition" />
            <Image src="images/white-gradient-right.svg" width={450} height={102} loading="lazy" alt="" className="overlay-tools-right-white no-transition" />
            <Image src="images/black-gradient-right.svg" width={450} height={102} loading="lazy" alt="" className="overlay-tools-right no-transition" />
            <div className="tools-section is-aolp4">
              <div className="tools-wrapper">
                <div className="tools-container">
                  <div className="tools-content"><a href="#" className="tools-button w-button">Graphics</a><a href="#" className="tools-button w-button">Ecommerce Stores</a><a href="#" className="tools-button w-button">Websites</a><a href="#" className="tools-button w-button">UI Designs</a><a href="#" className="tools-button w-button">Funnels</a><a href="#" className="tools-button w-button">Automations</a><a href="#" className="tools-button w-button">Portal</a></div>
                  <div className="tools-content"><a href="#" className="tools-button w-button">Graphics</a><a href="#" className="tools-button w-button">Ecommerce Stores</a><a href="#" className="tools-button w-button">Websites</a><a href="#" className="tools-button w-button">UI Designs</a><a href="#" className="tools-button w-button">Funnels</a><a href="#" className="tools-button w-button">Automations</a><a href="#" className="tools-button w-button">Portal</a></div>
                  <div className="tools-content"><a href="#" className="tools-button w-button">Graphics</a><a href="#" className="tools-button w-button">Ecommerce Stores</a><a href="#" className="tools-button w-button">Websites</a><a href="#" className="tools-button w-button">UI Designs</a><a href="#" className="tools-button w-button">Funnels</a><a href="#" className="tools-button w-button">Automations</a><a href="#" className="tools-button w-button">Portal</a></div>
                  <div className="tools-content"><a href="#" className="tools-button w-button">Graphics</a><a href="#" className="tools-button w-button">Ecommerce Stores</a><a href="#" className="tools-button w-button">Websites</a><a href="#" className="tools-button w-button">UI Designs</a><a href="#" className="tools-button w-button">Funnels</a><a href="#" className="tools-button w-button">Automations</a><a href="#" className="tools-button w-button">Portal</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="tools-images_wrapper full-on-mobile"></div>
          <div className="overlaytools-bg_wrapper"></div>
          <div className="overlaytools-bg-white_wrapper on-mobile"></div>
        </div>
        <div className="section-testimonials transition">
          <div className="page-padding">
            <div className="container-normal">
              <div className="testimonials_wrapper">
                <div className="w-layout-grid testimonials-grid">
                  <div className="testimonial-image_wrapper">
                    <Image src="/images/Lauren.png" width={260} height={260} loading="lazy" sizes="(max-width: 767px) 100vw, 260px" alt="" className="testimonial-image" />
                  </div>
                  <div className="testimonial-comment_wrapper">
                    <p className="testimonial-comment max-width-700 transition">&quot;We&#x27;re extremely happy with Growmodo. Our project manager has been exceptional. She&#x27;s always very prompt with replies and communicating how things are going.&quot;</p>
                    <div className="testimonial-profile testimonial-profile_mobile">
                        <Image src="/images/Lauren.png" width={260} height={260} alt="" loading="lazy" />
                      <div className="testinomial-name">Lauren Gilmore</div>
                      <div className="testimonial-job">Hyperfocal</div><Image src="/images/five_stars.svg" width={135} height={28}  loading="lazy" alt="" className="star-icon" />
                    </div>
                    <div className="testimonial-profile"><Image src="/images/five_stars.svg" width={135} height={28}  loading="lazy" alt="" className="star-icon" />
                      <div className="testinomial-name transition">Lauren Gilmore</div>
                      <div className="testimonial-job transition">VP Media, Hyperfocal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-work">
          <div className="page-padding">
            <div className="container-normal">
              <div className="work_wrapper">
                <h2 className="max-width-470">Selected Work From Our Talents</h2>
                <div data-delay="4000" data-animation="slide" className="portfolio-slider desktop-slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="false">
                  <div className="portfolio-mask w-slider-mask">
                    <div className="portfolio-slide w-slide">
                      <div className="portfolio-bg"></div>
                    </div>
                    <div className="portfolio-slide w-slide">
                      <div className="portfolio-bg portfolio-bg2"></div>
                    </div>
                    <div className="portfolio-slide w-slide">
                      <div className="portfolio-bg portfolio-bg3"></div>
                    </div>
                    <div className="portfolio-slide w-slide">
                      <div className="portfolio-bg portfolio-bg4"></div>
                      <div className="slider-see-more_wrapper desktop-slider"><a href="/showcase" className="see-more_wrapper w-inline-block">
                          <div className="see-more_button">See More</div>
                          <div className="see-more_arrow w-embed">
                            See-more_arrow.svg
                            </div>
                        </a></div>
                    </div>
                  </div>
                  <div className="portfolio_left-arrow w-slider-arrow-left">
                    <div className="icon-3 w-icon-slider-left"></div><Image src="/images/left-arrow.svg" width={26} height={26} loading="lazy" alt="" />
                  </div>
                  <div className="portfolio_right-arrow w-slider-arrow-right">
                    <div className="icon-4 w-icon-slider-right"></div><Image src="/images/right-arrow.svg" width={26} height={26} loading="lazy" alt="" />
                  </div>
                  <div className="slide-nav w-slider-nav w-round"></div>
                </div>
                <div data-delay="4000" data-animation="slide" className="portfolio-slider tablet-slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="false">
                  <div className="portfolio-mask w-slider-mask">
                    <div className="portfolio-slide w-slide">
                      <div className="portfolio-bg"></div>
                    </div>
                    <div className="portfolio-slide w-slide">
                      <div className="portfolio-bg portfolio-bg2"></div>
                    </div>
                    <div className="portfolio-slide w-slide">
                      <div className="portfolio-bg portfolio-bg3"></div>
                    </div>
                    <div className="portfolio-slide w-slide">
                      <div className="portfolio-bg portfolio-bg4"></div>
                      <div className="slider-see-more_wrapper tablet-slider"><a href="#" className="see-more_wrapper w-inline-block">
                          <div className="see-more_button">See More</div><Image src="/images/right-arrow.svg" width={26} height={26} loading="lazy" alt="" className="see-more_arrow" />
                        </a></div>
                    </div>
                    <div className="portfolio-slide w-slide">
                      <div className="portfolio-bg portfolio-bg4 display-none"></div>
                      <div className="slider-see-more_wrapper"><a href="/showcase" className="see-more_wrapper w-inline-block">
                          <div className="see-more_button">See More</div>
                          <div className="see-more_arrow w-embed">
                            see more_arrow
                          </div>
                        </a></div>
                    </div>
                  </div>
                  <div className="portfolio_left-arrow w-slider-arrow-left">
                    <div className="icon-3 w-icon-slider-left"></div><Image src="/images/left-arrow.svg" width={26} height={26} loading="lazy" alt="" />
                  </div>
                  <div className="portfolio_right-arrow w-slider-arrow-right">
                    <div className="icon-4 w-icon-slider-right"></div><Image src="/images/right-arrow.svg" width={26} height={26} loading="lazy" alt="" />
                  </div>
                  <div className="slide-nav w-slider-nav w-round"></div>
                </div>
                <div className="slider-overlay"></div>
                <Image src="images/overlay-portfolio.svg" width={299} height={596} loading="lazy" alt="" className="overlay-white_portfolio display-none" />
                <div className="work_slider-wrapper">
                  <div className="work_slider-frame">
                    <div className="work_slider-slide slide-1"></div>
                    <div className="work_slider-slide slide-2"></div>
                    <div className="work_slider-slide slide-3"></div>
                    <div className="work_slider-slide slide-4"></div>
                  </div>
                  <div className="portfolio_left-arrow height-45">
                    <Image src="images/left-arrow.svg" width={17} height={17} loading="lazy" alt="" />
                    <div className="to-last"></div> 
                    <div className="to-third"></div>
                    <div className="to-second"></div>
                    <div className="to-first"></div>
                  </div>
                  <div className="portfolio_right-arrow height-45">
                    <Image src="images/right-arrow.svg" width={17} height={17} loading="lazy" alt="" />
                    <div className="second"></div>
                    <div className="third"></div>
                    <div className="fourth"></div>
                    <div className="first"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-what-you-get">
          <div className="page-padding">
            <div className="container-normal">
              <div className="what-your-get_wrapper">
                <h2 className="text-align-center max-width-915">What You Get From Us</h2>
                <p className="text-align-center margin-top-30 color-5e5e5e max-width-500">Meet your new team members minus the Recruiting, HR, Operations, and Admin work.</p>
                <div className="w-layout-grid what-you-get_grid">
                  <div className="what-you-get_container">
                    ICON
                    <h3 className="what-you-get_heading">Scalable Workforce</h3>
                    <p className="what-you-get_text">Add a new team member to your projects whenever you need more hands. We make sure the additional designer or developer will be briefed on your brand and work preferences upfront.</p>
                  </div>
                  <div className="what-you-get_container">ICON
                    <h3 className="what-you-get_heading">Fully-Managed Team</h3>
                    <p className="what-you-get_text">With more team members, there come more responsibilities that can make your working day more complex. We take care of replacing staff dropouts, skill training, team happiness, and health benefits.</p>
                  </div>
                  <div className="what-you-get_container">ICON
                    <h3 className="what-you-get_heading">Dedicated Project Manager</h3>
                    <p className="what-you-get_text">To move projects to completion faster, you will need a person who knows your business and project requirements. Your PM briefs the talent and delivers the work.</p>
                  </div>
                  <div className="what-you-get_container">ICON
                    <h3 className="what-you-get_heading">Flexible Skill-Matching</h3>
                    <p className="what-you-get_text">Your projects and your needs for specific skills will change, but it takes too long to hire or train your in-house team members if you need to get things done fast.</p>
                  </div>
                  <div className="what-you-get_container">ICON
                    <h3 className="what-you-get_heading">No Learning Curve</h3>
                    <p className="what-you-get_text">We want to make delegating work feel as natural as possible to you. That&#x27;s why we manage all your tasks and projects within Asana and don&#x27;t let you learn a new platform.</p>
                  </div>
                  <div className="what-you-get_container">ICON
                    <h3 className="what-you-get_heading">Quick Communication</h3>
                    <p className="what-you-get_text">Send feedback or questions via text messages or screen-recording videos in a few minutes, so you don&#x27;t get stuck writing essay-long briefings.</p>
                  </div>
                  <div className="what-you-get_container">ICON
                    <h3 className="what-you-get_heading">Trained for Efficiency</h3>
                    <p className="what-you-get_text">We are passionate about constantly improving our processes and how our talents complete tasks. With checklists &amp; guidelines based on best practices, we reduce errors and improve turnaround times.</p>
                  </div>
                  <div className="what-you-get_container">ICON
                    <h3 className="what-you-get_heading">Predictable Pricing</h3>
                    <p className="what-you-get_text">Forget salary negotiations and paid vacations. We even skip the setup and recruiting fees for you. You pay a fixed monthly rate for every additional talent without any long-term commitment.</p>
                  </div>
                  <div className="what-you-get_container">ICON
                    <h3 className="what-you-get_heading">IP &amp; Data Security</h3>
                    <p className="what-you-get_text">Working with a global workforce requires an extra layer of protection. We use the necessary tools in the background to make sure your sites are safe against hackers and spam.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-testimonials homepage">
          <div className="page-padding">
            <div className="container-normal">
              <div className="testimonials_wrapper">
                <div className="w-layout-grid testimonials-grid">
                  <div className="testimonial-image_wrapper"><Image src="/images/6333d6beba025a63d9205056_test4.png" loading="lazy" width={260} height={296} alt="" className="testimonial-image" /></div>
                  <div className="testimonial-comment_wrapper">
                    <p className="testimonial-comment max-width-700">“Before finding Growmodo we were struggling to find good designers. With their service, we now have a dedicated team of designers that creates all our page designs, and the cost is very affordable.&quot;</p>
                    <div className="testimonial-profile"><Image src="images/five_stars.svg" width={135} height={28} loading="lazy" alt="" className="star-icon" />
                      <div className="testinomial-name">​​Aurelien Amacker</div>
                      <div className="testimonial-job">CEO, Systeme</div>
                    </div>
                    <div className="testimonial-profile testimonial-profile_mobile"><Image src="/images/6333d6beba025a63d9205056_test4.png" width={260} height={296} alt="" loading="lazy" />
                      <div className="testinomial-name">​​Aurelien Amacker</div>
                      <div className="testimonial-job">Systeme</div><Image src="images/five_stars.svg" width={135} height={28} loading="lazy" alt="" className="star-icon" />
                    </div>
                  </div>
                </div>
                <div className="section-as-seen-on">
                  <div className="as-seen-on_heading">
                    <div className="font-color--0b0b0b font-weight-600 text-align-center">As seen on:</div>
                  </div>
                  <div className="w-layout-grid as-seen-on_grid">
                    ICON 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-cta homepage">
          <div className="page-padding">
            <div className="container-normal">
              <div className="design-dev_wrapper"><Image src="/images/6333e34730318bc28d4e5996_scale_image-p-500.png" width={186} height={59} loading="lazy" alt="" className="design-dev_image" />
                <h2 className="text-align-center max-width-915 margin-top-30 font-size-48 font-color-white">Scale Your Creative with &amp; Generative AI Operations Without The Complexity</h2>
                <p className="text-align-center margin-top-30 max-width-500 font-color-ebeaea">Why would you chase random freelancers if you could have your own creative dream team today?</p>
                <div className="button_wrapper center-aligned"><a href="/call" className="primary_button box-green width-320 w-button">Book a Discovery Call</a><a href="/pricing" className="primary_button box-black is-secondary width-320 w-button">Pricing Plans</a></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="main-footer">
        <div className="page-padding">
          <div className="container-normal">
            <div className="footer_wrapper">
              <div className="footer-heading max-width-820">
                <h2 className="font-color-white footer font-weight-500">Generate AI Creatives &amp; Delivery Platform for Innovative Agency</h2>
              </div>
            </div>
            <div className="w-layout-grid footer-grid">
              <div className="block">
                <a href="/" aria-current="page" className="inline-block align-middle w-full">
                  <Image src="/logo/logo-icon-64x64.png" width={64} height={64} loading="lazy" alt="Reica Logo" /> <span className="text-white text-3xl">Reica <span className="text-sm">for agencies</span></span>
                </a>
                <div className="spacer"></div><a href="/call" className="cta_button bg-section-black w-button">Book a Discovery Call</a>
              </div>
              <div className="footer-nav_column">
                <div className="footer-nav_wrapper">
                  <h6 className="heading font-color-white">Quick Links</h6><a href="/talents" className="footer-nav_link dark-bg w-inline-block">
                    <div>Talents</div>
                  </a><a href="/showcase" className="footer-nav_link dark-bg w-inline-block">
                    <div>Showcase</div>
                  </a><a href="/pricing" className="footer-nav_link dark-bg w-inline-block">
                    <div>Pricing</div>
                  </a><a href="https://www.careers.growmodo.com/" target="_blank" className="footer-nav_link dark-bg w-inline-block">
                    <div>Careers</div>
                  </a>
                </div>
              </div>
              <div className="footer-nav_column middle-footer-nav">
                <div className="footer-nav_wrapper">
                  <h6 className="heading font-color-white">Resources</h6><a href="/guides" className="footer-nav_link dark-bg w-inline-block">
                    <div>Guides</div>
                  </a><a href="/products" className="footer-nav_link dark-bg w-inline-block">
                    <div>Products</div>
                  </a><a href="/scope" className="footer-nav_link dark-bg w-inline-block">
                    <div>Scope of work</div>
                  </a><a href="https://help.growmodo.com/growmodo/hSJAVvZpApN9LerBNa9fs9" target="_blank" className="footer-nav_link dark-bg w-inline-block">
                    <div>FAQ</div>
                  </a>
                </div>
              </div>
              <div className="footer-nav_column right-footer-nav">
                <div className="footer-nav_wrapper">
                  <h6 className="heading font-color-white">Follow  Us</h6>
                    <a href="https://www.linkedin.com/company/getreica/" target="_blank" className="footer-nav_link dark-bg w-inline-block">
                    <div className="social-icon w-embed">
                      <IoLogoLinkedin />
                    </div>  
                    <div>LinkedIn</div>
                  </a>
                  <a href="https://www.instagram.com/get_reica/" target="_blank" className="footer-nav_link dark-bg w-inline-block">
                    <div className="social-icon w-embed">
                      <IoLogoInstagram />
                    </div>
                    <div>Instagram</div>
                  </a>
                  <a href="https://twitter.com/getreica" target="_blank" className="footer-nav_link dark-bg w-inline-block">
                    <div className="social-icon w-embed">
                      <FaXTwitter />
                    </div>
                    <div>Twitter</div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-layout-grid footer-bottom">
              <div className="copyright-wrapper">
                <div className="copyright-text current-year">Copyright © <span className="current-year">2024</span> Reica. All Rights Reserved.</div>
              </div>
              <div className="footer-bottom_nav-wrapper"><a title="Terms and Conditions" href="/terms-and-conditions" className="footer-bottom_nav w-inline-block">
                  <div>Terms &amp; Conditions</div>
                </a><a title="Privacy Policy" href="/privacy-policy" className="footer-bottom_nav footer-bottom_nav-last w-inline-block">
                  <div>Privacy Policy</div>
                </a><a title="Privacy Policy" href="/cookie-policy" className="footer-bottom_nav footer-bottom_nav-last w-inline-block">
                  <div>Cookie Policy</div>
                </a><a title="Data Preferences" href="#data-preferences" className="footer-bottom_nav footer-bottom_nav-last iubenda-cs-preferences-link w-inline-block">
                  <div>Data Preferences</div>
                </a><a href="/imprint" className="footer-bottom_nav footer-bottom_nav-last w-inline-block">
                  <div>Imprint</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom_mobile ao-footer_mobile">
        <div className="page-padding">
          <div className="container-normal">
            <div className="footer-bottm-mobile_wrapper">
              <a href="/" aria-current="page" className="footer-main-logo mobile w-inline-block w--current">
                <Image src="/images/63351503c49cd58521a88d32_footer-main-logo-growmodo-white.svg" width={160} height={32}  loading="lazy" alt="" className="logo-image_white" />
                <Image src="/images/6335150e1512f768616b82c0_footer-main-logo-growmodo-color.svg" width={160} height={32}  loading="lazy" alt="" className="logo-image_color-footer" />
              </a>
              <div className="copyright-text mobile_copyright-text">© <span className="current-year">2023</span> Growmodo. All Rights Reserved.</div>
              <div className="footer-bottom_nav-wrapper"><a href="/terms-and-conditions" className="footer-bottom_nav w-inline-block">
                  <div>Terms &amp; Conditions</div>
                </a><a href="/privacy-policy" className="footer-bottom_nav footer-bottom_nav-last w-inline-block">
                  <div>Privacy Policy</div>
                </a><a href="/cookie-policy" className="footer-bottom_nav footer-bottom_nav-last w-inline-block">
                  <div>Cookie Policy</div>
                </a><a title="Data Preferences" href="#data-preferences" className="footer-bottom_nav footer-bottom_nav-last iubenda-cs-preferences-link w-inline-block">
                  <div>Data Preferences</div>
                </a><a href="/imprint" className="footer-bottom_nav footer-bottom_nav-last w-inline-block">
                  <div>Imprint</div>
                </a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}