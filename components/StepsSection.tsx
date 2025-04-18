import { TbUsers, TbAnalyze, TbCurrencyEuro } from "react-icons/tb";

export default function StepsSection() {
  return (
    <div className="section-steps">
      <div className="page-padding">
        <div className="container-normal">
          <div className="steps_wrapper">
            <h2 className="text-align-center max-w-6xl transition">The Quickest Way To Generate New Sales Consistently for your E-Commerce </h2>
            <p className="text-align-center margin-top-30 color-5e5e5e max-width-615 transition">We deliver data-driven marketing strategies, AI based without fluffy words and complex stuff. Just results.</p>
            <div className="w-layout-grid steps_grid">
              <div className="steps_container" style={{ position: "relative" }}>
                <div className="steps-content">
                  <h3 className="steps-heading">Meeting & Define Goals</h3>
                  <div className="steps-desc">with a vetted project manager to listen your requests.</div>
                </div>
                <div
                  className="steps-icon-bottom-left"
                  style={{
                    position: "absolute",
                    left: 24,
                    bottom: 24,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <TbUsers size={32} />
                </div>
              </div>
              <div className="steps_container" style={{ position: "relative" }}>
                <div className="steps-content">
                  <h3 className="steps-heading">Analyze & Schedule Experiments</h3>
                  <div className="steps-desc">Data Analysis that drives growth experiments</div>
                </div>
                <div
                  className="steps-icon-bottom-left"
                  style={{
                    position: "absolute",
                    left: 24,
                    bottom: 24,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <TbAnalyze size={32} />
                </div>
              </div>
              <div className="steps_container" style={{ position: "relative" }}>
                <div className="steps-content">
                  <h3 className="steps-heading">Earn Revenue from New Streams</h3>
                  <div className="steps-desc steps-desc3">dashboard to see all experiments and much you ll earn.</div>
                </div>
                <div
                  className="steps-icon-bottom-left"
                  style={{
                    position: "absolute",
                    left: 24,
                    bottom: 24,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <TbCurrencyEuro size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
