import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown, ArrowRight } from "lucide-react";

// Client logos
import fairytaleDecors from "@/assets/client-fairytale-decors.png";
import fashionRoute from "@/assets/client-fashion-route.png";
import aamaira from "@/assets/client-aamaira.png";
import newAgeCustoms from "@/assets/client-new-age-customs.png";
import hoodCartel from "@/assets/client-hood-cartel.png";
import fairytaleProposals from "@/assets/client-fairytale-proposals.png";

interface CaseStudy {
  intro: string;
  results: string;
}

interface Client {
  name: string;
  business: string;
  image: string;
  instagram: string;
  workType?: string;
  caseStudy?: CaseStudy;
}

const clients: Client[] = [
  {
    name: "Fairytale Decors",
    business: "Premium Balloon Decor & Event Installations",
    image: fairytaleDecors,
    instagram: "https://www.instagram.com/fairytale.balloons_/",
    workType: "Content + Ads",
    caseStudy: {
      intro: "A premium event décor brand specializing in balloon installations for birthdays, proposals, and celebrations. We created a consistent content + promotion plan to increase reach and drive booking intent.",
      results: "70,000+ Instagram impressions, 250 followers, and installs increased from 5–7 to ~20/month.",
    },
  },
  {
    name: "Fashion Route",
    business: "Fashion & Lifestyle Exhibitions",
    image: fashionRoute,
    instagram: "https://www.instagram.com/fashionroute_jsr/",
    workType: "Reels Growth",
    caseStudy: {
      intro: "A fashion and lifestyle exhibition brand curating showcases for clothing and jewellery labels. We built a stronger Instagram presence to boost visibility, attract more footfall, and bring in more participating brands.",
      results: "200 → 750+ followers in 6 months + higher event discovery and enquiries.",
    },
  },
  {
    name: "Aamaira",
    business: "Fashion Studio",
    image: aamaira,
    instagram: "https://www.instagram.com/aamairastudio/",
    workType: "Content + Ads",
    caseStudy: {
      intro: "A fashion studio brand where we developed their visual identity and content strategy. We focused on showcasing their unique designs to attract the right audience.",
      results: "Increased brand visibility and consistent engagement growth.",
    },
  },
  {
    name: "New Age Customs",
    business: "Custom Sneakers & Footwear Personalization",
    image: newAgeCustoms,
    instagram: "https://www.instagram.com/_newagecustoms_/",
    workType: "Google Lead Gen",
    caseStudy: {
      intro: "A sneaker customization brand where we built their social media presence from scratch — positioning, content direction, and growth strategy. We focused on visibility + traffic that converts into website interest.",
      results: "50,000+ Instagram impressions + 2,000+ website impressions in 30 days.",
    },
  },
  {
    name: "Hood Cartel",
    business: "Corporate Events, Gifting & Brand Experiences",
    image: hoodCartel,
    instagram: "https://www.instagram.com/thehoodcartel.in/",
    workType: "Content + Ads",
    caseStudy: {
      intro: "We've supported multiple corporate clients with event planning, coordination, and experience-driven execution—from conferences and team activities to corporate gifting. Our approach improves participation and creates better event impact.",
      results: "Higher engagement, smoother execution, and stronger attendee participation.",
    },
  },
  {
    name: "Fairytale Proposals",
    business: "Proposal Decor",
    image: fairytaleProposals,
    instagram: "https://www.instagram.com/fairytale.proposals/",
    workType: "Reels Growth",
    caseStudy: {
      intro: "A romantic proposal planning brand creating magical moments. We built their content strategy to capture heartwarming stories and drive enquiries from couples.",
      results: "Increased proposal bookings and stronger emotional brand connection.",
    },
  },
];

const CaseStudyPopup = ({ caseStudy }: { caseStudy: CaseStudy }) => (
  <div className="p-4 md:p-4">
    <p className="text-[13px] md:text-sm text-muted-foreground leading-relaxed mb-3">
      {caseStudy.intro}
    </p>
    <div className="flex flex-col gap-2">
      <Badge className="bg-primary/20 text-primary border-primary/30 text-xs font-semibold w-fit">
        Results
      </Badge>
      <p className="text-[13px] md:text-sm font-bold text-foreground leading-relaxed">
        {caseStudy.results}
      </p>
    </div>
  </div>
);

const ClientCard = ({ 
  client, 
  index, 
  isActive,
  onActivate,
  onDeactivate 
}: { 
  client: Client; 
  index: number;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

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

  // Close on click outside (mobile)
  useEffect(() => {
    if (!isActive || !isMobile) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        onDeactivate();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isActive, isMobile, onDeactivate]);

  const handleInteraction = (e: React.MouseEvent) => {
    if (isMobile) {
      e.stopPropagation();
      if (isActive) {
        onDeactivate();
      } else {
        onActivate();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (isActive) {
        onDeactivate();
      } else {
        onActivate();
      }
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      onActivate();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      onDeactivate();
    }
  };

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col items-center transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${isActive && isMobile ? "z-50" : ""}`}
    >
      {/* Mobile Popup - Above Image with bounce animation */}
      {isMobile && client.caseStudy && (
        <div
          className={`w-full mb-3 origin-bottom ${
            isActive 
              ? "opacity-100 animate-bounce-in" 
              : "opacity-0 scale-95 max-h-0 pointer-events-none transition-all duration-200"
          }`}
        >
          <div className="bg-card/95 backdrop-blur-md border border-primary/20 rounded-xl shadow-lg shadow-primary/10 mx-1">
            <CaseStudyPopup caseStudy={client.caseStudy} />
          </div>
          {/* Arrow pointing down */}
          <div className="flex justify-center -mt-1">
            <div className="w-4 h-4 rotate-45 bg-card/95 border-r border-b border-primary/20" />
          </div>
        </div>
      )}

      {/* Main Card */}
      <div
        className="group flex flex-col items-center p-4 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        onClick={handleInteraction}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-expanded={isActive}
        aria-label={`View case study for ${client.name}`}
      >
        {/* Logo */}
        <div className={`w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full overflow-hidden mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.4)] ${
          isActive ? "ring-2 ring-primary/50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]" : ""
        }`}>
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
            className="hover:scale-110 transition-transform"
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

        {/* Mobile expand indicator */}
        {isMobile && client.caseStudy && (
          <ChevronDown 
            className={`w-4 h-4 text-primary mt-2 transition-transform duration-300 ${
              isActive ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {/* Desktop Hover Popup with bounce animation */}
      {!isMobile && client.caseStudy && (
        <div
          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[280px] md:w-[320px] z-50 pointer-events-none origin-bottom ${
            isActive
              ? "opacity-100 animate-bounce-in"
              : "opacity-0 translate-y-2 scale-95 transition-all duration-200"
          }`}
        >
          <div className="bg-card/95 backdrop-blur-sm border border-primary/20 rounded-xl shadow-xl shadow-black/20">
            <CaseStudyPopup caseStudy={client.caseStudy} />
          </div>
          {/* Arrow */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 rotate-45 bg-card/95 border-r border-b border-primary/20" />
        </div>
      )}
    </div>
  );
};

const Clients = () => {
  const [activeClientIndex, setActiveClientIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="clients" className="py-24 md:py-32 bg-background relative">
      {/* Mobile backdrop blur overlay */}
      {isMobile && activeClientIndex !== null && (
        <div 
          className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 animate-fade-in"
          onClick={() => setActiveClientIndex(null)}
        />
      )}
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
              isActive={activeClientIndex === index}
              onActivate={() => setActiveClientIndex(index)}
              onDeactivate={() => setActiveClientIndex(null)}
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
