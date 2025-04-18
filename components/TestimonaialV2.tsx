import Image from "next/image";

interface TestimonialProps {
  imageSrc: string;
  comment: string;
  name: string;
  title: string;
  additionalClassName?: string;
}

export default function Testimonial({ imageSrc, comment, name, title, additionalClassName = "" }: TestimonialProps) {
  return (
    <div className={`section-testimonials ${additionalClassName}`} style={{ background: "#f8fafc", padding: "48px 0" }}>
      <div className="page-padding">
        <div className="container-normal" style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="testimonial-card"
            style={{
              background: "#fff",
              borderRadius: "24px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
              maxWidth: 600,
              width: "100%",
              padding: "40px 32px 32px 32px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="testimonial-image_wrapper"
              style={{
                position: "absolute",
                top: "-60px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#fff",
                borderRadius: "50%",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                padding: "8px",
                width: 120,
                height: 120,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={imageSrc}
                width={104}
                height={104}
                loading="lazy"
                alt={name}
                className="testimonial-image"
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            </div>
            <div style={{ height: 60 }} /> {/* Spacer for image overlap */}
            <div className="testimonial-comment_wrapper" style={{ textAlign: "center", marginBottom: 24 }}>
              <span style={{ fontSize: 36, color: "#e2e8f0", verticalAlign: "top", fontWeight: 700, fontFamily: "serif" }}>&ldquo;</span>
              <p
                className="max-w-xl leading-relaxed"
                style={{
                  fontSize: 20,
                  fontStyle: "italic",
                  color: "#334155",
                  margin: "0 0 8px 0",
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                {comment}
              </p>
              <span style={{ fontSize: 36, color: "#e2e8f0", verticalAlign: "bottom", fontWeight: 700, fontFamily: "serif" }}>&rdquo;</span>
            </div>
            <hr style={{ width: 60, border: "1px solid #e2e8f0", margin: "0 auto 20px auto" }} />
            <div className="testimonial-profile" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div className="testinomial-name" style={{ fontWeight: 700, fontSize: 18, color: "#0f172a" }}>{name}</div>
              <div className="testimonial-job" style={{ fontSize: 15, color: "#64748b" }}>{title}</div>
              <Image
                src="/images/five_stars.svg"
                width={120}
                height={24}
                loading="lazy"
                alt="Five stars"
                className="star-icon"
                style={{ marginTop: 8 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
