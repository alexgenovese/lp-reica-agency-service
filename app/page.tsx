import Image from "next/image";
import Header from "@/components/header"

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
                <h1 className="text-align-center max-width-915"> Increase team productivity in minutes integrating Generative AI in your pipeline  </h1>
                <p className="text-align-center margin-top-30 color-5e5e5e max-width-730">Scale up your productivity team without expanding or complex freelance or agency hiring.</p>
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
                  <h2 className="font-color-white max-width-915 font-color--0b0b0b transition inline-text">Frustrated with Unreliable Freelancers? </h2>
                  
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
                <h2 className="text-align-center max-w-3xl transition">The Quickest &amp; Smartest Way To Generate Creatives for Marketing, E-Commerce &amp; Social Media </h2>
                <p className="text-align-center margin-top-30 color-5e5e5e max-width-615 transition">We're a generative marketing studio subscription agency that takes the pain out of hiring creatives for your business.</p>
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
                ICON
              </div>
            </div>
            <div className="w-layout-grid footer-grid">
              <div className="footer-growmodo">
                <a href="/" aria-current="page" className="footer-main-logo w-inline-block w--current">
                  <Image src="/images/63351503c49cd58521a88d32_footer-main-logo-growmodo-white.svg" width={160} height={32} loading="lazy" alt="" className="logo-image_white" />
                  <Image src="/images/6335150e1512f768616b82c0_footer-main-logo-growmodo-color.svg" width={160} height={32} loading="lazy" alt="" className="logo-image_color-footer" />
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
                  <h6 className="heading font-color-white">Follow  Us</h6><a href="https://www.linkedin.com/company/growmodo/" target="_blank" className="footer-nav_link dark-bg w-inline-block">
                    <div className="social-icon w-embed"><svg width="16" height="16" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_3484_16675)">
                          <path d="M10.8029 0H1.4293C0.980273 0 0.617188 0.354492 0.617188 0.792773V10.2051C0.617188 10.6434 0.980273 11 1.4293 11H10.8029C11.252 11 11.6172 10.6434 11.6172 10.2072V0.792773C11.6172 0.354492 11.252 0 10.8029 0ZM3.88066 9.37363H2.24785V4.12285H3.88066V9.37363ZM3.06426 3.40742C2.54004 3.40742 2.1168 2.98418 2.1168 2.46211C2.1168 1.94004 2.54004 1.5168 3.06426 1.5168C3.58633 1.5168 4.00957 1.94004 4.00957 2.46211C4.00957 2.98203 3.58633 3.40742 3.06426 3.40742ZM9.99082 9.37363H8.36016V6.82129C8.36016 6.21328 8.34941 5.4291 7.51152 5.4291C6.66289 5.4291 6.53398 6.09297 6.53398 6.77832V9.37363H4.90547V4.12285H6.46953V4.84043H6.49102C6.70801 4.42793 7.24082 3.9918 8.03359 3.9918C9.68574 3.9918 9.99082 5.07891 9.99082 6.49258V9.37363Z" fill="currentColor" />
                        </g>
                        <defs>
                          <clipPath id="clip0_3484_16675">
                            <rect width="11" height="11" fill="white" transform="translate(0.617188)" />
                          </clipPath>
                        </defs>
                      </svg></div>
                    <div>LinkedIn</div>
                  </a><a href="https://www.facebook.com/growmodo/" target="_blank" className="footer-nav_link dark-bg w-inline-block">
                    <div className="social-icon w-embed"><svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_3484_16666)">
                          <path d="M12.6172 6.60742C12.6172 3.29371 9.9309 0.607422 6.61719 0.607422C3.30348 0.607422 0.617188 3.29371 0.617188 6.60742C0.617188 9.60215 2.81129 12.0844 5.67969 12.5345V8.3418H4.15625V6.60742H5.67969V5.28555C5.67969 3.7818 6.57547 2.95117 7.94598 2.95117C8.60223 2.95117 9.28906 3.06836 9.28906 3.06836V4.54492H8.5325C7.78719 4.54492 7.55469 5.00746 7.55469 5.48242V6.60742H9.21875L8.95273 8.3418H7.55469V12.5345C10.4231 12.0844 12.6172 9.60215 12.6172 6.60742Z" fill="currentColor" />
                        </g>
                        <defs>
                          <clipPath id="clip0_3484_16666">
                            <rect width="12" height="12" fill="white" transform="translate(0.617188 0.607422)" />
                          </clipPath>
                        </defs>
                      </svg></div>
                    <div>Facebook</div>
                  </a><a href="https://www.instagram.com/growmodo/" target="_blank" className="footer-nav_link dark-bg w-inline-block">
                    <div className="social-icon w-embed"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_3484_16670)">
                          <path d="M8.61719 1.44062C10.7547 1.44062 11.0078 1.45 11.8484 1.4875C12.6297 1.52187 13.0516 1.65313 13.3328 1.7625C13.7047 1.90625 13.9734 2.08125 14.2516 2.35938C14.5328 2.64063 14.7047 2.90625 14.8484 3.27813C14.9578 3.55938 15.0891 3.98437 15.1234 4.7625C15.1609 5.60625 15.1703 5.85938 15.1703 7.99375C15.1703 10.1313 15.1609 10.3844 15.1234 11.225C15.0891 12.0063 14.9578 12.4281 14.8484 12.7094C14.7047 13.0813 14.5297 13.35 14.2516 13.6281C13.9703 13.9094 13.7047 14.0813 13.3328 14.225C13.0516 14.3344 12.6266 14.4656 11.8484 14.5C11.0047 14.5375 10.7516 14.5469 8.61719 14.5469C6.47969 14.5469 6.22656 14.5375 5.38594 14.5C4.60469 14.4656 4.18281 14.3344 3.90156 14.225C3.52969 14.0813 3.26094 13.9063 2.98281 13.6281C2.70156 13.3469 2.52969 13.0813 2.38594 12.7094C2.27656 12.4281 2.14531 12.0031 2.11094 11.225C2.07344 10.3813 2.06406 10.1281 2.06406 7.99375C2.06406 5.85625 2.07344 5.60312 2.11094 4.7625C2.14531 3.98125 2.27656 3.55938 2.38594 3.27813C2.52969 2.90625 2.70469 2.6375 2.98281 2.35938C3.26406 2.07813 3.52969 1.90625 3.90156 1.7625C4.18281 1.65313 4.60781 1.52187 5.38594 1.4875C6.22656 1.45 6.47969 1.44062 8.61719 1.44062ZM8.61719 0C6.44531 0 6.17344 0.009375 5.32031 0.046875C4.47031 0.084375 3.88594 0.221875 3.37969 0.41875C2.85156 0.625 2.40469 0.896875 1.96094 1.34375C1.51406 1.7875 1.24219 2.23438 1.03594 2.75938C0.839062 3.26875 0.701563 3.85 0.664063 4.7C0.626563 5.55625 0.617188 5.82813 0.617188 8C0.617188 10.1719 0.626563 10.4438 0.664063 11.2969C0.701563 12.1469 0.839062 12.7313 1.03594 13.2375C1.24219 13.7656 1.51406 14.2125 1.96094 14.6563C2.40469 15.1 2.85156 15.375 3.37656 15.5781C3.88594 15.775 4.46719 15.9125 5.31719 15.95C6.17031 15.9875 6.44219 15.9969 8.61406 15.9969C10.7859 15.9969 11.0578 15.9875 11.9109 15.95C12.7609 15.9125 13.3453 15.775 13.8516 15.5781C14.3766 15.375 14.8234 15.1 15.2672 14.6563C15.7109 14.2125 15.9859 13.7656 16.1891 13.2406C16.3859 12.7313 16.5234 12.15 16.5609 11.3C16.5984 10.4469 16.6078 10.175 16.6078 8.00313C16.6078 5.83125 16.5984 5.55938 16.5609 4.70625C16.5234 3.85625 16.3859 3.27188 16.1891 2.76563C15.9922 2.23438 15.7203 1.7875 15.2734 1.34375C14.8297 0.9 14.3828 0.625 13.8578 0.421875C13.3484 0.225 12.7672 0.0875 11.9172 0.05C11.0609 0.009375 10.7891 0 8.61719 0Z" fill="currentColor" />
                          <path d="M8.61719 3.89062C6.34844 3.89062 4.50781 5.73125 4.50781 8C4.50781 10.2688 6.34844 12.1094 8.61719 12.1094C10.8859 12.1094 12.7266 10.2688 12.7266 8C12.7266 5.73125 10.8859 3.89062 8.61719 3.89062ZM8.61719 10.6656C7.14531 10.6656 5.95156 9.47188 5.95156 8C5.95156 6.52813 7.14531 5.33437 8.61719 5.33437C10.0891 5.33437 11.2828 6.52813 11.2828 8C11.2828 9.47188 10.0891 10.6656 8.61719 10.6656Z" fill="currentColor" />
                          <path d="M13.8484 3.72793C13.8484 4.25918 13.4172 4.68731 12.8891 4.68731C12.3578 4.68731 11.9297 4.25606 11.9297 3.72793C11.9297 3.19668 12.3609 2.76855 12.8891 2.76855C13.4172 2.76855 13.8484 3.19981 13.8484 3.72793Z" fill="currentColor" />
                        </g>
                        <defs>
                          <clipPath id="clip0_3484_16670">
                            <rect width="16" height="16" fill="white" transform="translate(0.617188)" />
                          </clipPath>
                        </defs>
                      </svg></div>
                    <div>Instagram</div>
                  </a><a href="https://twitter.com/growmodo" target="_blank" className="footer-nav_link dark-bg w-inline-block">
                    <div className="social-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg></div>
                    <div>Twitter</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-layout-grid footer-bottom">
              <div className="copyright-wrapper">
                <div className="copyright-text current-year">Copyright © <span className="current-year">2024</span> Growmodo. All Rights Reserved.</div>
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
                </a></div>
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