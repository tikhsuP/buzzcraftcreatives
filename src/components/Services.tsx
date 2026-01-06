import { useEffect, useRef, useState } from "react";
import serviceInstagram from "@/assets/service-instagram-ads.jpg";
import serviceReels from "@/assets/service-reels.jpg";
import serviceInfluencer from "@/assets/service-influencer.jpg";
import serviceGoogle from "@/assets/service-google-ads.jpg";

const services = [
  {
    id: "instagram-ads",
    title: "Instagram Ads",
    subtitle: "Performance-driven paid social campaigns",
    description:
      "We create and manage Instagram advertising campaigns that focus on creative testing, precise targeting, and ROI tracking to generate consistent leads and sales for growing brands.",
    image: serviceInstagram,
    imageAlt: "Instagram advertising campaign on mobile phone",
  },
  {
    id: "reels-strategy",
    title: "Reels Strategy",
    subtitle: "Short-form content that converts",
    description:
      "Our Reels marketing focuses on strong 3-second hooks, high-retention edits, and conversion-focused content to help brands grow consistently through organic and paid short-form video.",
    image: serviceReels,
    imageAlt: "Content creator filming vertical video",
  },
  {
    id: "influencer-promos",
    title: "Influencer Promos",
    subtitle: "Authentic collaborations that build trust",
    description:
      "Strategic influencer marketing through high-engagement niche accounts to build awareness, grow followers, and create authentic engagement that resonates with your audience.",
    image: serviceInfluencer,
    imageAlt: "Influencer collaboration meeting",
  },
  {
    id: "google-ads",
    title: "Google Ads",
    subtitle: "High-intent leads, measurable ROI",
    description:
      "From Google Search Ads and PPC campaign management to conversion tracking and optimization, we help reduce cost per lead and scale profitable advertising campaigns.",
    image: serviceGoogle,
    imageAlt: "Google Analytics dashboard showing growth",
  },
];

// Individual service row component with scroll animation
const ServiceRow = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isImageLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className="transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      }}
    >
      {/* Desktop: Alternating Layout */}
      <div className="hidden md:grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Image Column - 40% width */}
        <div
          className={`md:col-span-5 ${isImageLeft ? "md:order-1" : "md:order-2"}`}
        >
          <div className="relative group overflow-hidden rounded-2xl shadow-card border border-border/30">
            <img
              src={service.image}
              alt={service.imageAlt}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-honey/0 group-hover:bg-honey/10 transition-colors duration-500" />
            {/* Buzz accent dot */}
            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-honey opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse" />
          </div>
        </div>

        {/* Text Column - 60% width */}
        <div
          className={`md:col-span-7 flex items-center ${isImageLeft ? "md:order-2" : "md:order-1"}`}
        >
          <div className={`${isImageLeft ? "md:pl-4 lg:pl-8" : "md:pr-4 lg:pr-8"}`}>
            <h3 className="font-serif text-2xl lg:text-4xl font-bold text-foreground mb-2">
              {service.title}
            </h3>
            <p className="text-base lg:text-lg text-honey font-semibold mb-4">
              {service.subtitle}
            </p>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-[55ch]">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile: Stacked Layout */}
      <div className="md:hidden flex flex-col items-center text-center">
        {/* Image */}
        <div className="w-full max-w-xs overflow-hidden rounded-2xl shadow-card border border-border/30 mb-6">
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
        
        {/* Text */}
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
          {service.title}
        </h3>
        <p className="text-base text-honey font-semibold mb-3">
          {service.subtitle}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-[50ch]">
          {service.description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28 bg-background">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className="text-center mb-10 md:mb-12 lg:mb-16 transition-all duration-700"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <p className="text-sm font-semibold text-honey uppercase tracking-widest mb-2">
            What We Create
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Our Services
          </h2>
        </div>

        {/* Services List - Vertical Stack */}
        <div className="space-y-14 md:space-y-16 lg:space-y-20">
          {services.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
