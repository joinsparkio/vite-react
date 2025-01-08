import { Navbar } from "@/components/landing-page/Navbar";
import { Hero } from "@/components/landing-page/Hero";
import { Features } from "@/components/landing-page/Features";
import { HowItWorks } from "@/components/landing-page/HowItWorks";
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
        <Features />
        <HowItWorks />
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