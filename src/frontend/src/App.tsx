import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import CursorTrail from "./components/CursorTrail";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import ToolsSection from "./components/ToolsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CursorTrail />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ToolsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
}
