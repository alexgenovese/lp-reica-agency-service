import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  return (
    <div className="my-20">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
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
              Scale Your Business with &amp; AI Operations Without The Complexity of Hiring Freelancers or Manage Them
            </h2>
            <p className="text-align-center margin-top-30 max-width-500 font-color-ebeaea">
              Why would you chase random freelancers if you could have your own AI dream team today?
            </p>
            <div className="button_wrapper center-aligned">
              <a href="https://cal.com/growthmkt/first-call" target="_blank" className="primary_button box-green width-320 w-button">Book a Discovery Call</a>
              <Link href="/pricing" className="primary_button box-black is-secondary width-320 w-button">Pricing Plans</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
