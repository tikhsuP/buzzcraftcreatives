import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown } from "lucide-react";

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
  workType?: string;
  caseStudy?: CaseStudy;
}

const clients: Client[] = [
  {
    name: "Fairytale Decors",
    business: "Premium Balloon Decor & Event Installations",
    image: fairytaleDecors,
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
    workType: "Reels Growth",
    caseStudy: {
      intro: "A romantic proposal planning brand creating magical moments. We built their content strategy to capture heartwarming stories and drive enquiries from couples.",
      results: "Increased proposal bookings and stronger emotional brand connection.",
    },
  },
];

const CaseStudyPopup = ({ caseStudy }: { caseStudy: CaseStudy }) => (
  <div className="p-4">
    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
      {caseStudy.intro}
    </p>
    <div className="flex items-start gap-2">
      <Badge className="bg-primary/20 text-primary border-primary/30 text-xs font-semibold shrink-0">
        Results
      </Badge>
      <p className="text-sm font-bold text-foreground leading-snug">
        {caseStudy.results}
      </p>
    </div>
  </div>
);

const ClientCard = ({ client, index }: { client: Client; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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

  const handleInteraction = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col items-center transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Main Card */}
      <div
        className="group flex flex-col items-center p-4 cursor-pointer"
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onClick={handleInteraction}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-expanded={isMobile ? isExpanded : isHovered}
        aria-label={`View case study for ${client.name}`}
      >
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
        <h3 className="text-lg md:text-xl font-semibold text-foreground text-center mb-1">
          {client.name}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground text-center">
          {client.business}
        </p>

        {/* Mobile expand indicator */}
        {isMobile && client.caseStudy && (
          <ChevronDown 
            className={`w-4 h-4 text-muted-foreground mt-2 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {/* Desktop Hover Popup */}
      {!isMobile && client.caseStudy && (
        <div
          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[280px] md:w-[320px] z-50 pointer-events-none transition-all duration-300 ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
        >
          <div className="bg-card/95 backdrop-blur-sm border border-primary/20 rounded-xl shadow-xl shadow-black/20">
            <CaseStudyPopup caseStudy={client.caseStudy} />
          </div>
          {/* Arrow */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 rotate-45 bg-card/95 border-r border-b border-primary/20" />
        </div>
      )}

      {/* Mobile Expanded Drawer */}
      {isMobile && client.caseStudy && (
        <div
          className={`w-full overflow-hidden transition-all duration-300 ease-out ${
            isExpanded ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-3 bg-card/50 border border-primary/10 rounded-xl mx-2">
            <CaseStudyPopup caseStudy={client.caseStudy} />
          </div>
        </div>
      )}
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
            Want results like these for your brand?
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
