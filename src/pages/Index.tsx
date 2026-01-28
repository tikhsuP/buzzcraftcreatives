import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyBuzzCraft from "@/components/WhyBuzzCraft";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import CaseStudies from "@/components/CaseStudies";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyBuzzCraft />
        <CaseStudies />
        <Clients />
        <Team />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
