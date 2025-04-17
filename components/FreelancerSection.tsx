import Image from "next/image";

export default function FreelancerSection() {
  return (
    <div className="section-freelancers">
      <div className="page-padding">
        <div className="container-normal">
          <div className="freelancers_wrapper">
            <div className="freelancers_text-wrapper">
              <h2 className="font-color-white max-width-915 font-color--0b0b0b transition inline-text">Frustrated with results and time consuming digital processes? </h2>
            </div>
            <p className="font-color--d4d4d4 margin-top-60 max-width-534 font-weight-400 transition">Transform your marketing strategy with Artificial Intelligence. We create tailor-made campaigns and visually captivating content to propel your B2B business beyond the boundaries of innovation. However, finding the good ones is often time-consuming, nerve-racking, and expensive, especially when you need them now!<br /><br />Lucky you, we can fix that.</p>
            <div className="freelancers-list_wrapper">
              <div className="freelancers-list_conntainer">
                <Image src="/images/check-icon-rounded.svg" width={32} height={32} loading="lazy" alt="Check icon rounded" className="list-check-icon" />
                <div className="list-text transition">No Endless Meeting</div>
              </div>
              <div className="freelancers-list_conntainer">
                <Image src="/images/check-icon-rounded.svg" width={32} height={32} loading="lazy" alt="Check icon rounded" className="list-check-icon" />
                <div className="list-text transition">No Fluffy Words</div>
              </div>
              <div className="freelancers-list_conntainer">
                <Image src="/images/check-icon-rounded.svg" width={32} height={32} loading="lazy" alt="Check icon rounded" className="list-check-icon" />
                <div className="list-text transition">No Complex Data</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
