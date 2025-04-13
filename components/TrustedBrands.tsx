import Image from "next/image";

export default function TrustedBrands() {
  return (
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
                  <Image src="https://cdn.prod.website-files.com/63329fb5ec1e5cdf02d0af1b/6336b0eca9242e1ee819f367_systeme.svg" loading="lazy" alt="" className="company-image" width={95} height={23} />
                  {Array(11).fill(0).map((_, i) => (
                    <Image 
                      key={i}
                      src="https://cdn.prod.website-files.com/63329fb5ec1e5cdf02d0af1b/633a8451a1f06fa4636d55f8_podigy2.svg" 
                      loading="lazy" 
                      alt="" 
                      className="company-image" 
                      width={95} 
                      height={23} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
