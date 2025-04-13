import Image from "next/image";
import Link from "next/link";
import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
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
                <Link href="/" aria-current="page" className="inline-block align-middle w-full">
                  <Image src="/logo/logo-icon-64x64.png" width={64} height={64} loading="lazy" alt="Reica Logo" /> 
                  <span className="text-white text-3xl">Reica <span className="text-sm">for agencies</span></span>
                </Link>
                <div className="spacer"></div>
                <a href="/call" className="cta_button bg-section-black w-button">Book a Discovery Call</a>
              </div>
              <div className="footer-nav_column">
                <div className="footer-nav_wrapper">
                  <h6 className="heading font-color-white">Quick Links</h6>
                  <a href="/talents" className="footer-nav_link dark-bg w-inline-block">
                    <div>Talents</div>
                  </a>
                  <a href="/showcase" className="footer-nav_link dark-bg w-inline-block">
                    <div>Showcase</div>
                  </a>
                  <a href="/pricing" className="footer-nav_link dark-bg w-inline-block">
                    <div>Pricing</div>
                  </a>
                  <a href="https://www.careers.growmodo.com/" target="_blank" className="footer-nav_link dark-bg w-inline-block">
                    <div>Careers</div>
                  </a>
                </div>
              </div>
              <div className="footer-nav_column middle-footer-nav">
                <div className="footer-nav_wrapper">
                  <h6 className="heading font-color-white">Resources</h6>
                  <a href="/guides" className="footer-nav_link dark-bg w-inline-block">
                    <div>Guides</div>
                  </a>
                  <a href="/products" className="footer-nav_link dark-bg w-inline-block">
                    <div>Products</div>
                  </a>
                  <a href="/scope" className="footer-nav_link dark-bg w-inline-block">
                    <div>Scope of work</div>
                  </a>
                  <a href="https://help.growmodo.com/growmodo/hSJAVvZpApN9LerBNa9fs9" target="_blank" className="footer-nav_link dark-bg w-inline-block">
                    <div>FAQ</div>
                  </a>
                </div>
              </div>
              <div className="footer-nav_column right-footer-nav">
                <div className="footer-nav_wrapper">
                  <h6 className="heading font-color-white">Follow Us</h6>
                  <a href="https://www.linkedin.com/company/getreica/" target="_blank" rel="noopener noreferrer" className="footer-nav_link dark-bg w-inline-block">
                    <div className="social-icon w-embed">
                      <IoLogoLinkedin />
                    </div>  
                    <div>LinkedIn</div>
                  </a>
                  <a href="https://www.instagram.com/get_reica/" target="_blank" rel="noopener noreferrer" className="footer-nav_link dark-bg w-inline-block">
                    <div className="social-icon w-embed">
                      <IoLogoInstagram />
                    </div>
                    <div>Instagram</div>
                  </a>
                  <a href="https://twitter.com/getreica" target="_blank" rel="noopener noreferrer" className="footer-nav_link dark-bg w-inline-block">
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
                <div className="copyright-text current-year">Copyright © <span className="current-year">{currentYear}</span> Growth Marketing srl. All Rights Reserved.</div>
              </div>
              <div className="footer-bottom_nav-wrapper">
                <a title="Terms and Conditions" href="/terms-and-conditions" className="footer-bottom_nav w-inline-block">
                  <div>Terms &amp; Conditions</div>
                </a>
                <a title="Privacy Policy" href="/privacy-policy" className="footer-bottom_nav footer-bottom_nav-last w-inline-block">
                  <div>Privacy Policy</div>
                </a>
                <a title="Cookie Policy" href="/cookie-policy" className="footer-bottom_nav footer-bottom_nav-last w-inline-block">
                  <div>Cookie Policy</div>
                </a>
                <a title="Data Preferences" href="#data-preferences" className="footer-bottom_nav footer-bottom_nav-last iubenda-cs-preferences-link w-inline-block">
                  <div>Data Preferences</div>
                </a>
                <a href="/imprint" className="footer-bottom_nav footer-bottom_nav-last w-inline-block">
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
                <Image src="/logo/logo-icon-64x64.png" width={64} height={32} loading="lazy" alt="Reica Logo" className="logo-image_white" />
              </a>
              <div className="copyright-text mobile_copyright-text">© <span className="current-year">{currentYear}</span> Reica. All Rights Reserved.</div>
              <div className="footer-bottom_nav-wrapper">
                <a href="/terms-and-conditions" className="footer-bottom_nav w-inline-block">
                  <div>Terms &amp; Conditions</div>
                </a>
                <a href="/privacy-policy" className="footer-bottom_nav footer-bottom_nav-last w-inline-block">
                  <div>Privacy Policy</div>
                </a>
                <a href="/cookie-policy" className="footer-bottom_nav footer-bottom_nav-last w-inline-block">
                  <div>Cookie Policy</div>
                </a>
                <a title="Data Preferences" href="#data-preferences" className="footer-bottom_nav footer-bottom_nav-last iubenda-cs-preferences-link w-inline-block">
                  <div>Data Preferences</div>
                </a>
                <a href="/imprint" className="footer-bottom_nav footer-bottom_nav-last w-inline-block">
                  <div>Imprint</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
