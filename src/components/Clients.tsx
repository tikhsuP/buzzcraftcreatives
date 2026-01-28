import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

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
  instagram: string;
}

const clients: Client[] = [
  {
    name: "Fairytale Decors",
    business: "Premium Balloon Decor & Event Installations",
    image: fairytaleDecors,
    instagram: "https://www.instagram.com/fairytale.balloons_/",
  },
  {
    name: "Fashion Route",
    business: "Fashion & Lifestyle Exhibitions",
    image: fashionRoute,
    instagram: "https://www.instagram.com/fashionroute_jsr/",
  },
  {
    name: "Aamaira",
    business: "Fashion Studio",
    image: aamaira,
    instagram: "https://www.instagram.com/aamairastudio/",
  },
  {
    name: "New Age Customs",
    business: "Custom Sneakers & Footwear Personalization",
    image: newAgeCustoms,
    instagram: "https://www.instagram.com/_newagecustoms_/",
  },
  {
    name: "Hood Cartel",
    business: "Corporate Events, Gifting & Brand Experiences",
    image: hoodCartel,
    instagram: "https://www.instagram.com/thehoodcartel.in/",
  },
  {
    name: "Fairytale Proposals",
    business: "Proposal Decor",
    image: fairytaleProposals,
    instagram: "https://www.instagram.com/fairytale.proposals/",
  },
];

const ClientCard = ({ 
  client, 
  index,
}: { 
  client: Client; 
  index: number;
}) => {
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
      className={`relative flex flex-col items-center transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Main Card */}
      <div className="group flex flex-col items-center p-4">
        {/* Logo */}
        <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.4)]">
          <img
            src={client.image}
            alt={`${client.name} – ${client.business}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Client Info */}
        <div className="flex items-center justify-center gap-2 mb-1">
          <h3 className="text-lg md:text-xl font-semibold text-foreground text-center">
            {client.name}
          </h3>
          <a
            href={client.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="hover-bounce transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.7)]"
            aria-label={`Visit ${client.name} on Instagram`}
          >
            <svg 
              className="w-4 h-4 md:w-5 md:h-5" 
              viewBox="0 0 24 24" 
              fill="url(#instagram-gradient)"
            >
              <defs>
                <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFDC80" />
                  <stop offset="10%" stopColor="#FCAF45" />
                  <stop offset="30%" stopColor="#F77737" />
                  <stop offset="50%" stopColor="#F56040" />
                  <stop offset="70%" stopColor="#FD1D1D" />
                  <stop offset="80%" stopColor="#E1306C" />
                  <stop offset="90%" stopColor="#C13584" />
                  <stop offset="100%" stopColor="#833AB4" />
                </linearGradient>
              </defs>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
        <p className="text-sm md:text-base text-muted-foreground text-center">
          {client.business}
        </p>
      </div>
    </div>
  );
};

const Clients = () => {
  return (
    <section id="clients" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-base md:text-lg font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Clients
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Brands We've Worked With
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            From lifestyle to decor to e-commerce — we help brands grow with content + performance marketing.
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
          {clients.map((client, index) => (
            <ClientCard 
              key={client.name} 
              client={client} 
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-muted-foreground text-lg mb-6">
            Want results like these for your brand?
          </p>
          <a
            href="https://www.instagram.com/buzzcraft.official/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-4 bg-honey text-background rounded-full font-bold hover:bg-honey-dark glow-honey transition-all duration-300"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;