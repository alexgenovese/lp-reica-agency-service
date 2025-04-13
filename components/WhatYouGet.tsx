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
      title: "Scalable Workforce",
      description: "Add a new team member to your projects whenever you need more hands. We make sure the additional designer or developer will be briefed on your brand and work preferences upfront."
    },
    {
      icon: "/images/icons/team.svg",
      title: "Fully-Managed Team",
      description: "With more team members, there come more responsibilities that can make your working day more complex. We take care of replacing staff dropouts, skill training, team happiness, and health benefits."
    },
    {
      icon: "/images/icons/project-manager.svg",
      title: "Dedicated Project Manager",
      description: "To move projects to completion faster, you will need a person who knows your business and project requirements. Your PM briefs the talent and delivers the work."
    },
    {
      icon: "/images/icons/skill-matching.svg",
      title: "Flexible Skill-Matching",
      description: "Your projects and your needs for specific skills will change, but it takes too long to hire or train your in-house team members if you need to get things done fast."
    },
    {
      icon: "/images/icons/no-learning-curve.svg",
      title: "No Learning Curve",
      description: "We want to make delegating work feel as natural as possible to you. That's why we manage all your tasks and projects within Asana and don't let you learn a new platform."
    },
    {
      icon: "/images/icons/quick-communication.svg",
      title: "Quick Communication",
      description: "Send feedback or questions via text messages or screen-recording videos in a few minutes, so you don't get stuck writing essay-long briefings."
    },
    {
      icon: "/images/icons/efficiency.svg",
      title: "Trained for Efficiency",
      description: "We are passionate about constantly improving our processes and how our talents complete tasks. With checklists & guidelines based on best practices, we reduce errors and improve turnaround times."
    },
    {
      icon: "/images/icons/pricing.svg",
      title: "Predictable Pricing",
      description: "Forget salary negotiations and paid vacations. We even skip the setup and recruiting fees for you. You pay a fixed monthly rate for every additional talent without any long-term commitment."
    },
    {
      icon: "/images/icons/security.svg",
      title: "IP & Data Security",
      description: "Working with a global workforce requires an extra layer of protection. We use the necessary tools in the background to make sure your sites are safe against hackers and spam."
    }
  ];

  return (
    <div className="section-what-you-get">
      <div className="page-padding">
        <div className="container-normal">
          <div className="what-your-get_wrapper">
            <h2 className="text-align-center max-width-915">What You Get From Us</h2>
            <p className="text-align-center margin-top-30 color-5e5e5e max-width-500">Meet your new team members minus the Recruiting, HR, Operations, and Admin work.</p>
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
