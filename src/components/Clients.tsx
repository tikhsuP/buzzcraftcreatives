import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

// Client logos
import fairytaleDecors from "@/assets/client-fairytale-decors.png";
import fashionRoute from "@/assets/client-fashion-route.png";
import aamaira from "@/assets/client-aamaira.png";
import newAgeCustoms from "@/assets/client-new-age-customs.png";
import hoodCartel from "@/assets/client-hood-cartel.png";
import fairytaleProposals from "@/assets/client-fairytale-proposals.png";

interface Client {
  name: string;
  business: string;
  image: string;
  workType?: string;
}

const clients: Client[] = [
  {
    name: "Fairytale Decors",
    business: "Home Decor & Events",
    image: fairytaleDecors,
    workType: "Content + Ads",
  },
  {
    name: "Fashion Route",
    business: "Fashion & Apparel",
    image: fashionRoute,
    workType: "Reels Growth",
  },
  {
    name: "Aamaira",
    business: "Fashion Studio",
    image: aamaira,
    workType: "Content + Ads",
  },
  {
    name: "New Age Customs",
    business: "Custom Sneakers & Streetwear",
    image: newAgeCustoms,
    workType: "Google Lead Gen",
  },
  {
    name: "Hood Cartel",
    business: "Events & Community",
    image: hoodCartel,
    workType: "Content + Ads",
  },
  {
    name: "Fairytale Proposals",
    business: "Proposal Decor",
    image: fairytaleProposals,
    workType: "Reels Growth",
  },
];

const ClientCard = ({ client, index }: { client: Client; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group flex flex-col items-center p-4 transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Logo */}
      <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden mb-4">
        <img
          src={client.image}
          alt={`${client.name} – ${client.business}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Client Info */}
      <h3 className="text-lg md:text-xl font-semibold text-foreground text-center mb-1">
        {client.name}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground text-center">
        {client.business}
      </p>
    </div>
  );
};

const Clients = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="clients" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-base md:text-lg font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Clients
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
            Brands We've Worked With
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            From lifestyle to decor to e-commerce — we help brands grow with content + performance marketing.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
          {clients.map((client, index) => (
            <ClientCard key={client.name} client={client} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-muted-foreground text-lg mb-6">
            Want to be our next success story?
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          >
            Get a Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
