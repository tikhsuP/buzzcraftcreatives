import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyBuzzCraft from "@/components/WhyBuzzCraft";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CursorBee from "@/components/CursorBee";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorBee />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyBuzzCraft />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
