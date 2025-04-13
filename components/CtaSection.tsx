import Image from "next/image";

export default function CtaSection() {
  return (
    <div className="section-cta homepage">
      <div className="page-padding">
        <div className="container-normal">
          <div className="design-dev_wrapper">
            <Image 
              src="/images/6333e34730318bc28d4e5996_scale_image-p-500.png" 
              width={186} 
              height={59} 
              loading="lazy" 
              alt="" 
              className="design-dev_image" 
            />
            <h2 className="text-align-center max-width-915 margin-top-30 font-size-48 font-color-white">
              Scale Your Creative with &amp; Generative AI Operations Without The Complexity
            </h2>
            <p className="text-align-center margin-top-30 max-width-500 font-color-ebeaea">
              Why would you chase random freelancers if you could have your own creative dream team today?
            </p>
            <div className="button_wrapper center-aligned">
              <a href="/call" className="primary_button box-green width-320 w-button">Book a Discovery Call</a>
              <a href="/pricing" className="primary_button box-black is-secondary width-320 w-button">Pricing Plans</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
