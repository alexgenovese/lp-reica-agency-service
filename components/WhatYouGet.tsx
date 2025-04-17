import Image from "next/image";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="what-you-get_container">
      <div className="what-you-get-icon">
        <Image src={icon} width={40} height={40} alt={`${title} icon`} />
      </div>
      <h3 className="what-you-get_heading">{title}</h3>
      <p className="what-you-get_text">{description}</p>
    </div>
  );
}

export default function WhatYouGet() {
  const features = [
    {
      icon: "/images/icons/scalable.svg",
      title: "Content Creation AI-Driven",
      description: "AI-driven content creation is a game-changer for marketers. It allows you to generate high-quality content quickly and efficiently, freeing up time for more strategic tasks."
    },
    {
      icon: "/images/icons/team.svg",
      title: "AI-Driven Performance Marketing",
      description: "Powerful tools for optimizing your marketing efforts, generating new sales AI driven. It uses data and algorithms to analyze customer behavior and preferences, allowing you to create targeted campaigns that drive results."
    },
    {
      icon: "/images/icons/project-manager.svg",
      title: "Personalization at Scale",
      description: "Tailored emails and landing pages backed by predictive behavior models. This means you can deliver the right message to the right person at the right time, increasing engagement and conversion rates."
    }
  ];

  return (
    <div className="section-what-you-get">
      <div className="page-padding">
        <div className="container-normal">
          <div className="what-your-get_wrapper">
            <h2 className="text-align-center max-width-915">What You Get From Us</h2>
            <p className="text-align-center margin-top-30 color-5e5e5e max-width-500">What can help you boost your progress at speed of light.</p>
            <div className="w-layout-grid what-you-get_grid">
              {features.map((feature, index) => (
                <Feature 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
