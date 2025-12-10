import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sai Rakesh Interiors | Luxury Home Design Studio</title>
        <meta
          name="description"
          content="Transform your home with Sai Rakesh Interiors. We create bespoke, elegant interiors that reflect your unique lifestyle. Expert residential design services."
        />
        <meta
          name="keywords"
          content="interior design, home design, luxury interiors, residential design, Sai Rakesh Interiors"
        />
        <link rel="canonical" href="https://sairakeshinteriors.com" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
