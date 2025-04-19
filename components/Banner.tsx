import Link from "next/link";
import Image from "next/image";

interface BannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  features: Array<{ text: string }>;
}

export default function Banner({ title, subtitle, buttonLink, buttonText, secondaryButtonLink, secondaryButtonText, features }: BannerProps) {
  return (
    <div className="section-banner">
      <div className="page-padding">
        <div className="container-normal">
          <div className="banner_wrapper">
            <h1 className="text-center max-w-4xl" dangerouslySetInnerHTML={{ __html: title }}></h1>
            <p className="text-center mt-10 max-w-xl" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
            <div className="button_wrapper center-aligned">
              <Link href={buttonLink} className="primary_button width-320 w-button">{ buttonText }</Link>
              { secondaryButtonText && secondaryButtonLink ?
                <Link href={secondaryButtonLink || '#'} className="primary_button is-secondary width-320 w-button">{ secondaryButtonText }</Link>
                : <></> }
            </div>
            <div className="inline-flex items-center justify-center mt-10">
              { features?.length > 0 ?
                features.map((feature, index) => (
                  <div key={index} className="item-list_check">
                    <Image src="/images/check-icon.svg" loading="lazy" alt="Check icon" width={32} height={32} className="list-check_icon" />
                    <div className="list-banner">{ feature.text }</div>
                  </div>
                ))
              : <></> }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
