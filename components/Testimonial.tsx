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
    <div className={`section-testimonials ${additionalClassName}`}>
      <div className="page-padding">
        <div className="container-normal">
          <div className="testimonials_wrapper">
            <div className="w-layout-grid testimonials-grid">
              <div className="testimonial-image_wrapper">
                <Image src={imageSrc} width={260} height={260} loading="lazy" alt={name} className="testimonial-image" />
              </div>
              <div className="testimonial-comment_wrapper">
                <p className="testimonial-comment max-width-700 transition">{comment}</p>
                <div className="testimonial-profile">
                  <Image src="/images/five_stars.svg" width={135} height={28} loading="lazy" alt="Five stars" className="star-icon" />
                  <div className="testinomial-name transition">{name}</div>
                  <div className="testimonial-job transition">{title}</div>
                </div>
                <div className="testimonial-profile testimonial-profile_mobile">
                  <Image src={imageSrc} width={260} height={260} alt={name} loading="lazy" />
                  <div className="testinomial-name">{name}</div>
                  <div className="testimonial-job">{title.split(',')[0]}</div>
                  <Image src="/images/five_stars.svg" width={135} height={28} loading="lazy" alt="Five stars" className="star-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
