import { useReveal } from "../hooks/use-reveal";
import { Navbar } from "../components/site/Navbar";
import { Hero } from "../components/site/Hero";
import { Skills } from "../components/site/Skills";
import { Services } from "../components/site/Services";
import { Process } from "../components/site/Process";
import { Quoter } from "../components/site/Quoter";
import { Gallery } from "../components/site/Gallery";
import { Footer } from "../components/site/Footer";
import { FloatingWhatsApp } from "../components/site/FloatingWhatsApp";

export default function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Services />
        <Process />
        <Gallery />
        <Quoter />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
