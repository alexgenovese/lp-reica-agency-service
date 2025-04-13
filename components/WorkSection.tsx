import Image from "next/image";

export default function WorkSection() {
  return (
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
                  <div className="slider-see-more_wrapper desktop-slider">
                    <a href="/showcase" className="see-more_wrapper w-inline-block">
                      <div className="see-more_button">See More</div>
                      <div className="see-more_arrow w-embed">
                        See-more_arrow.svg
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio_left-arrow w-slider-arrow-left">
                <div className="icon-3 w-icon-slider-left"></div>
                <Image src="/images/left-arrow.svg" width={26} height={26} loading="lazy" alt="Left arrow" />
              </div>
              <div className="portfolio_right-arrow w-slider-arrow-right">
                <div className="icon-4 w-icon-slider-right"></div>
                <Image src="/images/right-arrow.svg" width={26} height={26} loading="lazy" alt="Right arrow" />
              </div>
              <div className="slide-nav w-slider-nav w-round"></div>
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