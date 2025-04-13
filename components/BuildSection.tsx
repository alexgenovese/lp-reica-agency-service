import Image from "next/image";

export default function BuildSection() {
  return (
    <div className="section-buid">
      <div className="page-padding">
        <div className="container-normal">
          <div className="build_wrapper">
            <h2 className="text-align-center max-width-820 transition">Build Whatever You Want, With the Tools You Love</h2>
          </div>
        </div>
      </div>
      <div className="container-full is-aolp4">
        <Image src="/images/white-gradient-left.svg" width={450} height={102} loading="lazy" alt="White gradient overlay" className="overlay-tools-left-white no-transition" />
        <Image src="/images/black-gradient-left.svg" width={450} height={102} loading="lazy" alt="Black gradient overlay" className="overlay-tools-left no-transition" />
        <Image src="/images/white-gradient-right.svg" width={450} height={102} loading="lazy" alt="White gradient overlay" className="overlay-tools-right-white no-transition" />
        <Image src="/images/black-gradient-right.svg" width={450} height={102} loading="lazy" alt="Black gradient overlay" className="overlay-tools-right no-transition" />
        <div className="tools-section is-aolp4">
          <div className="tools-wrapper">
            <div className="tools-container">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="tools-content">
                  <a href="#" className="tools-button w-button">Graphics</a>
                  <a href="#" className="tools-button w-button">Ecommerce Stores</a>
                  <a href="#" className="tools-button w-button">Websites</a>
                  <a href="#" className="tools-button w-button">UI Designs</a>
                  <a href="#" className="tools-button w-button">Funnels</a>
                  <a href="#" className="tools-button w-button">Automations</a>
                  <a href="#" className="tools-button w-button">Portal</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="tools-images_wrapper full-on-mobile"></div>
      <div className="overlaytools-bg_wrapper"></div>
      <div className="overlaytools-bg-white_wrapper on-mobile"></div>
    </div>
  );
}
