import Nav from "@/components/nav"
import Image from "next/image";
import Link from "next/link";

export default function Header() {

    return (
        <div className="main-header w-nav">
        <div className="header_container w-container">
          <div className="header_wrapper">
            <div className="logo_wrapper w-full max-w-40">
                <Link href="/" aria-current="page" className="header_logo w-nav-brand w--current">
                    <Image src="/logo/growthmkt-logo.png" width={512} height={512} loading="lazy" alt="Logo" className="w-10" />
                </Link>
            </div>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <div className="nav-link_wrapper why-us"><a href="#why-us" className="nav_link font_space-grotesk w-nav-link">Why Us</a></div>
              <div className="nav-link_wrapper"><a href="#whats-included" className="nav_link w-nav-link">What&apos;s included?</a></div>
              <div className="nav-link_wrapper"><a href="#showcase" className="nav_link w-nav-link">Showcase</a></div>
              <div className="nav-link_wrapper"><a href="#blog" className="nav_link w-nav-link">Blog</a></div>
              <div className="nav-link_wrapper"><a href="#pricing" className="nav_link w-nav-link">Pricing</a></div>
              <div className="nav-link_wrapper resources-menu hide">
                <a href="#" className="nav_link w-inline-block">
                  <div>Resources</div>arrow left
                </a>
                <div className="resources-nav_wrapper">
                  <div className="resources-dropdown resource-white">
                    <div className="w-layout-grid resources-grid">
                      <div className="resources-container">
                        <a href="/guides" className="resources-nav resources-nav1 resource-white w-inline-block">
                          <div className="resources-nav_image-wrapper">
                            <div className="svg-wrapper w-embed">
                              <Image src="images/guides.svg" alt="" width={32} height={32} />
                            </div>
                          </div>
                          <div className="resources-nav_link resource-white">Guides</div>
                          <p className="resources-desc_nav resource-white">Learn the insider secrets to creating successful web design &amp; app projects that make an impact on your revenue.</p>
                        </a>
                      </div>
                      <div className="resources-container">
                        <a href="/products" className="resources-nav resource-white w-inline-block">
                          <div className="resources-nav_image-wrapper">
                            <div className="svg-wrapper product-icon w-embed">
                              <Image src="images/products.svg" alt="" width={32} height={32} />
                            </div>
                          </div>
                          <div className="resources-nav_link resource-white">Products</div>
                          <p className="resources-desc_nav resource-white">Become a Growth Design Strategist and learn how to plan and create high-performing websites and marketing campaigns.</p>
                        </a>
                      </div>
                      <div className="resources-container"><a href="#" className="resources-nav resources-nav3 resource-white w-inline-block">
                          <div className="resources-nav_image-wrapper">
                            <div className="svg-wrapper w-embed"><svg className="svg-img" xmlns="http://www.w3.org/2000/svg" width="54" height="38" viewBox="0 0 54 38" fill="none">
                                <path d="M35.5508 35.5608L52.2394 18.8722L35.5508 2.18359" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.8604 35.5608L35.5495 18.8722L18.8604 2.18359" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2.17285 35.5608L18.8615 18.8722L2.17285 2.18359" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                              </svg></div>
                          </div>
                          <div className="newsletter_wrapper">
                            <div className="resources-nav_link newsletter-nav resource-white">Newsletter</div>
                            <div className="coming-soon-resources resource-white">(Coming Soon)</div>
                          </div>
                          <p className="resources-desc_nav resource-white">Join a tribe of marketers, product managers &amp; entrepreneurs who want to learn how to design better businesses &amp; products.</p>
                        </a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-link_wrapper desktop-hide"><a href="/general-application" className="nav_link w-nav-link">Contact Us</a></div>
              <div data-delay="0" data-hover="true" className="mobile-resources_nav w-dropdown">
                <div className="mobile-resources_header-item dropdown w-dropdown-toggle">
                  <div>Resources</div>
                  <div className="drop-icon w-icon-dropdown-toggle"></div>
                </div>

                <Nav />
                
              </div>
              <div className="cta-mobile-wrapper"><a href="/call" className="cta_button w-nav-link">Book a Call</a></div>
            </nav>
            <div className="menu-button w-nav-button">
              <div className="menu-icon w-icon-nav-menu"></div>
            </div>
            <div className="right-container-nav tablet-hide">
              <div className="nav-link_wrapper">
                <a href="https://www.careers.growmodo.com/" target="_blank" className="nav_link w-nav-link">Contact Us</a>
              </div>
              <a href="/call" className="cta_button tablet-hidden w-button">Book a Call</a>
            </div>
          </div>
        </div>
      </div>
    )
}