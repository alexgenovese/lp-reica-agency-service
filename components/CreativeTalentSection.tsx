import Image from "next/image";

export default function CreativeTalentSection() {
  return (
    <div className="section-creative-talent">
      <div className="page-padding">
        <div className="container-normal">
          <div className="creative-heading-wrapper">
            <h2 className="text-align-center max-width-915">AI Marketing Solutions </h2>
            <div className="creative-heading-flexbox">
              <h2 className="text-align-center max-width-915">Made </h2>
              <Image src="/images/ghirigoro_1.svg" width={23} height={9} loading="lazy" alt="" className="heading-shape-wave" />
              <h2 className="text-align-center max-width-915"><span className="font-color-2468ff">Super</span> </h2>
              <Image src="/images/ghirigoro_2.svg" width={18} height={20} loading="lazy" alt="" className="heading-shape-star" />
              <h2 className="text-align-center max-width-915"><span className="font-color-2468ff"></span>Simple</h2>
            </div>
            <p className="text-center mt-10 max-w-xl">We work as an extension of your in-house team and assemble the right team members for every task and project.</p>
          </div>
          <div id="creative-content-wrapper" className="mt-20 grid grid-cols-4 gap-4">
            <div className="bg-slate-50 p-10 col-span-2">
              <div className="max-w-xs">
                <h3 className="text-4xl text-">Growth Marketing for B2B E-Commerce</h3>
                <p className="mt-10">Build a Marketing Machine with clear ROI that works.</p>
                <a href="/call" className="mt-10 inline-flex items-center text-2468ff underline hover:underline-offset-4">
                  Book a Discovery Call
                </a>
              </div>
            </div>
            <div className="bg-slate-50 p-10 col-span-2">
              <div className="max-w-xs">
                <h3 className="text-4xl">Growth Marketing for B2C E-Commerce</h3>
                <p className="mt-10">Deliver record breaking growth for your e-commerce sales, built and managed by our experts.</p>
                <a href="/call" className="mt-10 inline-flex items-center text-2468ff underline hover:underline-offset-4">
                  Book a Discovery Call
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
