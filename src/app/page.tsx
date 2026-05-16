import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Challenges from "@/components/sections/Challenges";
import Philosophy from "@/components/sections/Philosophy";
import CorporateSection from "@/components/sections/CorporateSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/sections/Footer";
import StickyCTA from "@/components/sections/StickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Challenges />
      <Philosophy />
      <CorporateSection />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
