import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

// Import service images
import contentShoot from "@/assets/content-shoot.png";
import contentEditing from "@/assets/content-editing.png";
import performanceAnalytics from "@/assets/performance-analytics.png";
import performancePlanning from "@/assets/performance-planning.png";
import influencerCreator from "@/assets/influencer-creator.png";
import influencerCollab from "@/assets/influencer-collab.png";
import strategyPlanning from "@/assets/strategy-planning.png";
import strategyBoard from "@/assets/strategy-board.png";

interface Service {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  tagline: string;
  headline: string;
  description: string;
  highlights: string[];
  outcome: string;
  images: string[];
  accentColor: string;
}

const services: Service[] = [
  {
    id: "content-creation",
    number: "01",
    title: "Content Creation & Social Growth",
    tagline: "Scroll-stopping content built for brand + attention.",
    headline: "Content that builds attention and trust",
    description:
      "We create Instagram posts, Reels, and brand content designed to improve engagement, strengthen identity, and grow your audience consistently.",
    highlights: ["Reels + Editing", "Brand Shoots", "Content Calendars"],
    outcome: "Typical outcome: better engagement + more inbound inquiries",
    images: [contentShoot, contentEditing],
    accentColor: "from-amber-500/20 to-orange-500/10",
  },
  {
    id: "performance-marketing",
    number: "02",
    title: "Performance Marketing",
    subtitle: "(Meta + Google Ads)",
    tagline: "ROI-first campaigns engineered for leads and sales.",
    headline: "Performance ads built for ROI",
    description:
      "We manage Meta Ads and Google Ads campaigns focused on qualified leads, conversion tracking, and continuous optimization to reduce cost per lead.",
    highlights: ["Meta Ads", "Google Search", "Conversion Tracking"],
    outcome: "Typical outcome: lower CPL + more qualified leads",
    images: [performanceAnalytics, performancePlanning],
    accentColor: "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: "influencer-promotions",
    number: "03",
    title: "Influencer & Promotion Campaigns",
    tagline: "Authentic collaborations that build trust and buzz.",
    headline: "Collaborations that create real buzz",
    description:
      "We run influencer partnerships and page promotions through niche communities to boost reach, credibility, and high-quality audience growth.",
    highlights: ["Creator Network", "Page Promotions", "Brand Collabs"],
    outcome: "Typical outcome: reach growth + stronger credibility",
    images: [influencerCreator, influencerCollab],
    accentColor: "from-purple-500/20 to-pink-500/10",
  },
  {
    id: "strategy-analytics",
    number: "04",
    title: "Strategy, Analytics & Reporting",
    tagline: "Clear insights, tracking, and next-step growth plans.",
    headline: "Decisions backed by real data",
    description:
      "We provide audits, reporting, and growth roadmaps to show what's working, what to scale, and how to improve marketing performance month by month.",
    highlights: ["Weekly Reports", "KPI Tracking", "Growth Roadmaps"],
    outcome: "Typical outcome: clearer reporting + faster scaling decisions",
    images: [strategyPlanning, strategyBoard],
    accentColor: "from-emerald-500/20 to-teal-500/10",
  },
];

interface ServiceSlideProps {
  service: typeof services[0];
  isActive: boolean;
  index: number;
}

const ServiceSlide = ({ service, isActive, index }: ServiceSlideProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div
      className={cn(
        "min-h-screen flex items-center justify-center py-20 md:py-24 lg:py-0 relative",
        "transition-opacity duration-700",
        isActive ? "opacity-100" : "opacity-40"
      )}
    >
      {/* Background accent gradient */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-30 pointer-events-none transition-opacity duration-1000",
          service.accentColor,
          isActive ? "opacity-30" : "opacity-0"
        )}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={cn(
          "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center",
          isEven ? "" : "lg:direction-rtl"
        )}>
          {/* Content Side */}
          <div className={cn(
            "space-y-6 md:space-y-8",
            isEven ? "lg:pr-8" : "lg:pl-8 lg:order-2"
          )}>
            {/* Service Number */}
            <div 
              className={cn(
                "transition-all duration-700 delay-100",
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <span className="text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-primary/10">
                {service.number}
              </span>
            </div>

            {/* Title */}
            <div 
              className={cn(
                "transition-all duration-700 delay-200 -mt-12 md:-mt-16",
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {service.title}
              </h3>
              {service.subtitle && (
                <span className="text-xl md:text-2xl text-muted-foreground font-light">
                  {service.subtitle}
                </span>
              )}
            </div>

            {/* Tagline */}
            <p 
              className={cn(
                "text-lg md:text-xl text-primary font-medium transition-all duration-700 delay-300",
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {service.tagline}
            </p>

            {/* Description */}
            <p 
              className={cn(
                "text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl transition-all duration-700 delay-400",
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {service.description}
            </p>

            {/* Highlights */}
            <div 
              className={cn(
                "flex flex-wrap gap-3 transition-all duration-700 delay-500",
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {service.highlights.map((highlight, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 backdrop-blur-sm"
                >
                  {highlight}
                </span>
              ))}
            </div>

            {/* Outcome */}
            <p 
              className={cn(
                "text-sm text-muted-foreground/80 italic border-l-2 border-primary/30 pl-4 transition-all duration-700 delay-600",
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
            >
              {service.outcome}
            </p>
          </div>

          {/* Image Side */}
          <div className={cn(
            "relative",
            isEven ? "lg:order-2" : "lg:order-1"
          )}>
            <div 
              className={cn(
                "relative transition-all duration-1000",
                isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
            >
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/20">
                <img
                  src={service.images[0]}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Secondary Image - Floating */}
              <div 
                className={cn(
                  "absolute -bottom-6 md:-bottom-8 transition-all duration-1000 delay-300 z-10",
                  isEven ? "-right-4 md:-right-8" : "-left-4 md:-left-8",
                  isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
              >
                <div className="w-32 h-32 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-xl shadow-black/30 border-4 border-background">
                  <img
                    src={service.images[1]}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div 
                className={cn(
                  "absolute -z-10 w-full h-full rounded-2xl bg-primary/5 transition-all duration-700",
                  isEven ? "top-4 left-4" : "top-4 -left-4"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceNav = ({ 
  services, 
  activeIndex, 
  onSelect 
}: { 
  services: Service[]; 
  activeIndex: number; 
  onSelect: (index: number) => void;
}) => {
  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {services.map((service, index) => (
        <button
          key={service.id}
          onClick={() => onSelect(index)}
          className="group relative flex items-center gap-3"
          aria-label={`Go to ${service.title}`}
        >
          {/* Label on hover */}
          <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-card/90 backdrop-blur-sm text-sm font-medium text-foreground whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 border border-border/50 shadow-lg">
            {service.title}
          </span>
          
          {/* Dot indicator */}
          <div 
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300 border-2",
              activeIndex === index 
                ? "bg-primary border-primary scale-125" 
                : "bg-transparent border-muted-foreground/40 group-hover:border-primary/60"
            )}
          />
        </button>
      ))}
    </div>
  );
};

const MobileServiceNav = ({ 
  services, 
  activeIndex, 
  onSelect 
}: { 
  services: Service[]; 
  activeIndex: number; 
  onSelect: (index: number) => void;
}) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden">
      <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-card/90 backdrop-blur-md border border-border/50 shadow-xl">
        {services.map((service, index) => (
          <button
            key={service.id}
            onClick={() => onSelect(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              activeIndex === index 
                ? "bg-primary w-8" 
                : "bg-muted-foreground/40"
            )}
            aria-label={`Go to ${service.title}`}
          />
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Intersection Observer for scroll-based active detection
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    slideRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.5 }
      );
      
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      const nextIndex = (activeIndex + 1) % services.length;
      scrollToSlide(nextIndex);
    }, 6000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, activeIndex]);

  const scrollToSlide = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  const handleNavSelect = (index: number) => {
    setIsAutoPlaying(false);
    scrollToSlide(index);
  };

  return (
    <section id="services" ref={sectionRef} className="bg-background relative">
      {/* Section Header - Sticky on scroll */}
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-border/20 py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div>
            <span className="text-xs md:text-sm font-medium text-primary uppercase tracking-[0.2em]">
              What We Do
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Our Services
            </h2>
          </div>
          
          {/* Service Counter */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-3xl md:text-4xl font-serif font-bold text-primary">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-muted-foreground text-lg">/</span>
              <span className="text-muted-foreground text-lg">
                {String(services.length).padStart(2, '0')}
              </span>
            </div>
            
            {/* Auto-play toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-2 rounded-full bg-muted/30 hover:bg-muted/50 transition-colors"
              aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Play className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Service Slides */}
      <div className="relative">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (slideRefs.current[index] = el)}
            id={service.id}
          >
            <ServiceSlide
              service={service}
              isActive={activeIndex === index}
              index={index}
            />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <ServiceNav 
        services={services} 
        activeIndex={activeIndex} 
        onSelect={handleNavSelect} 
      />
      <MobileServiceNav 
        services={services} 
        activeIndex={activeIndex} 
        onSelect={handleNavSelect} 
      />

      {/* CTA Section */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to grow your brand?
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Let's create a custom growth strategy tailored to your business goals.
            </p>
            <a
              href="https://www.instagram.com/buzzcraft.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-base md:text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;