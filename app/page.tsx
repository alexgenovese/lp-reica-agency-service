import Header from "@/components/header";
import Banner from "@/components/Banner";
import TrustedBrands from "@/components/TrustedBrands";
import FreelancerSection from "@/components/FreelancerSection";
import StepsSection from "@/components/StepsSection";
import Testimonial from "@/components/Testimonial";
import CreativeTalentSection from "@/components/CreativeTalentSection";
import BuildSection from "@/components/BuildSection";
import WorkSection from "@/components/WorkSection";
import WhatYouGet from "@/components/WhatYouGet";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="page-wrapper">
        <Header />

        <main className="main-wrapper">
          <Banner />
          <TrustedBrands />
          <FreelancerSection />
          <StepsSection />
          
          <Testimonial 
            imageSrc="/images/Gaute.png"
            comment="I have been working with Reica for nearly one year now. With their keen eye for design, development skills, and expert project management, I have managed to serve a lot more clients than I would without them."
            name="Gaute Remen"
            title="Tech Lead, Synlighet"
          />
          
          <CreativeTalentSection />
          <BuildSection />
          
          <Testimonial 
            imageSrc="/images/Lauren.png"
            comment="We're extremely happy of results we achieved and project manager has been exceptional. He's always very prompt with replies and communicating how things are going."
            name="Lauren Gilmore"
            title="VP Media, Hyperfocal"
            additionalClassName="transition"
          />
          
          <WorkSection />
          <WhatYouGet />
          
          <Testimonial 
            imageSrc="/images/6333d6beba025a63d9205056_test4.png"
            comment="Before finding Growmodo we were struggling to find good designers. With their service, we now have a dedicated team of designers that creates all our page designs, and the cost is very affordable."
            name="Aurelien Amacker"
            title="CEO, Systeme"
            additionalClassName="homepage"
          />
          
          <CtaSection />
        </main>

        <Footer />
      </div>
    </>
  );
}