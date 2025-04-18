import { ReactNode } from "react";
import {
  TbMessage2Code,
  TbTrendingUp,
  TbUsers,
  TbAdjustmentsAlt,
  TbUserPlus,
} from "react-icons/tb";

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="what-you-get_container">
      <div className="what-you-get-icon">
        {icon}
      </div>
      <h3 className="what-you-get_heading">{title}</h3>
      <p className="what-you-get_text">{description}</p>
    </div>
  );
}

export default function WhatYouGet() {
  const features = [
    {
      icon: <TbMessage2Code size={40} color="#222" />, // Content Creation AI-Driven
      title: "Content Creation AI-Driven",
      description: "AI-driven content creation is a game-changer for marketers. It allows you to generate high-quality content quickly and efficiently, freeing up time for more strategic tasks."
    },
    {
      icon: <TbTrendingUp size={40} color="#222" />, // AI-Driven Performance Marketing
      title: "AI-Driven Performance Marketing",
      description: "Powerful tools for optimizing your marketing efforts, generating new sales AI driven. It uses data and algorithms to analyze customer behavior and preferences, allowing you to create targeted campaigns that drive results."
    },
    {
      icon: <TbUsers size={40} color="#222" />, // Personalization at Scale
      title: "Personalization at Scale",
      description: "Tailored emails and landing pages backed by predictive behavior models. This means you can deliver the right message to the right person at the right time, increasing engagement and conversion rates."
    },
    {
      icon: <TbAdjustmentsAlt size={40} color="#222" />, // Conversion Rate Optimisation
      title: "Conversion Rate Optimisation",
      description: "Work with our world-class team of conversion rate optimisation experts to ensure you yield the greatest value possible from paid and organic traffic."
    },
    {
      icon: <TbUserPlus size={40} color="#222" />, // User Acquisition
      title: "User Acquisition",
      description: "Partner with us to grow your customer base in record time, whilst maximising return."
    },
    {
      icon: <TbUserPlus size={40} color="#222" />, // User Acquisition (duplicate)
      title: "User Acquisition",
      description: "Partner with us to grow your customer base in record time, whilst maximising return."
    },
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
