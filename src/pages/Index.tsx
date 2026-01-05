import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyBuzzCraft from "@/components/WhyBuzzCraft";
import SocialProof from "@/components/SocialProof";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyBuzzCraft />
        <Results />
        <Process />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
