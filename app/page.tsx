import Header from "@/components/header";
import Banner from "@/components/Banner";
import TrustedBrands from "@/components/TrustedBrands";
import AdAgenciesAreDead from "@/components/FreelancerSection";
import QuickestWayToGenerate from "@/components/StepsSection";
import Testimonial from "@/components/Testimonial";
import AIMarketingSolutionsSimple from "@/components/CreativeTalentSection";
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
          <Banner 
            title="Increase your sales with Artificial Intelligence Marketing"
            subtitle="Scale up your sales without complex marketing stuff"
            buttonText="Book a Discovery Call"
            buttonLink={process.env.BOOK_A_CALL || "#"}
            secondaryButtonText="See Previous Work"
            secondaryButtonLink="/showcase"
            features={[
              { text: "x3 minimum increase" },
              { text: "Monthly flat-rate" },
              { text: "No Contract. Cancel anytime" },
            ]}
          />
          <TrustedBrands />

          <AdAgenciesAreDead />

          <QuickestWayToGenerate />
          
          <Testimonial 
            imageSrc="/images/Gaute.png"
            comment="I have been working with Growth Marketing for nearly one year now. With their keen eye for design, development skills, and expert project management, I have managed to serve a lot more clients than I would without them."
            name="Gaute Remen"
            title="Tech Lead, Synlighet"
          />
          
          <AIMarketingSolutionsSimple />
          
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