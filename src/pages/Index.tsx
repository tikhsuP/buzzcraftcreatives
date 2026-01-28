import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyBuzzCraft from "@/components/WhyBuzzCraft";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        <Hero />
        <Services />
        <WhyBuzzCraft />
        <Clients />
        <CaseStudies />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
