import { Navbar } from "@/components/landing-page/Navbar";
import { Hero } from "@/components/landing-page/Hero";
import { Demo } from "@/components/landing-page/Demo";
import { SocialProof } from "@/components/landing-page/SocialProof";
import { Benefits } from "@/components/landing-page/Benefits";
import { Features } from "@/components/landing-page/Features";
import { HowItWorks } from "@/components/landing-page/HowItWorks";
import { Offer } from "@/components/landing-page/Offer";
import { Testimonials } from "@/components/landing-page/Testimonials";
import { Pricing } from "@/components/landing-page/Pricing";
import { FAQ } from "@/components/landing-page/FAQ";
import { CTA } from "@/components/landing-page/CTA";
import { Footer } from "@/components/landing-page/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Demo />
        <SocialProof />
        <Benefits />
        <Features />
        <HowItWorks />
        <Offer />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;