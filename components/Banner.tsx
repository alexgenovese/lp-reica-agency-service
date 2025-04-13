import Image from "next/image";

export default function Banner() {
  return (
    <div className="section-banner">
      <div className="page-padding">
        <div className="container-normal">
          <div className="banner_wrapper">
            <h1 className="text-align-center max-width-915"> Increase your sales with Artificial Intelligence Marketing</h1>
            <p className="text-align-center margin-top-30 color-5e5e5e max-width-730">Scale up your sales without complex marketing stuff</p>
            <div className="button_wrapper center-aligned">
              <a href="/call" className="primary_button width-320 w-button">Book a Discovery Call</a>
              <a href="/showcase" className="primary_button is-secondary width-320 w-button">See Previous Work</a>
            </div>
            <div className="features-check_wrapper">
              <div className="item-list_check">
                <Image src="/images/check-icon.svg" loading="lazy" alt="Check icon" width={32} height={32} className="list-check_icon" />
                <div className="list-banner">x3 minimum increase</div>
              </div>
              <div className="item-list_check">
                <Image src="/images/check-icon.svg" loading="lazy" alt="Check icon" width={32} height={32} className="list-check_icon" />
                <div className="list-banner">Monthly flat-rate</div>
              </div>
              <div className="item-list_check">
                <Image src="/images/check-icon.svg" loading="lazy" alt="Check icon" width={32} height={32} className="list-check_icon" />
                <div className="list-banner">No Contract. Cancel anytime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
