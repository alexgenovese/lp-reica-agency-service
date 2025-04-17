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
  );
}
