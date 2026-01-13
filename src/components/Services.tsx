import { useEffect, useRef, useState } from "react";
import { 
  Palette, 
  BarChart3, 
  Users, 
  Megaphone, 
  MessageCircle, 
  LineChart, 
  Rocket,
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: "content-strategy",
    title: "Content Strategy & Creation",
    description: "High-quality content planning, scripting, shoots, editing, Reels, and brand storytelling designed to stop the scroll.",
    icon: Palette,
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing (Meta + Google Ads)",
    description: "Instagram, Facebook, YouTube & Google Ads campaigns built for leads, conversions, and ROI — with tracking and optimization.",
    icon: BarChart3,
  },
  {
    id: "influencer-promotions",
    title: "Influencer & Page Promotions",
    description: "Strategic collaborations and promotions through high-engagement niche pages to boost reach and credibility.",
    icon: Users,
  },
  {
    id: "brand-strategy",
    title: "Brand Strategy & Positioning",
    description: "Brand messaging, tone, and identity direction that helps you stand out and stay consistent everywhere.",
    icon: Megaphone,
  },
  {
    id: "community-management",
    title: "Community Management",
    description: "We manage DMs, comments, and engagement so your audience feels heard — and converts faster.",
    icon: MessageCircle,
  },
  {
    id: "analytics-reporting",
    title: "Performance Analytics & Reporting",
    description: "Clear weekly/monthly reporting with insights, improvements, and next-step growth planning.",
    icon: LineChart,
  },
  {
    id: "event-marketing",
    title: "Event Marketing & Launch Support",
    description: "Campaign planning and promotions for product launches, store openings, and brand events.",
    icon: Rocket,
  },
];

const ServiceCard = ({ service, index, isVisible }: { service: typeof services[0]; index: number; isVisible: boolean }) => {
  const Icon = service.icon;
  
  return (
    <div
      className="group p-6 md:p-8 rounded-2xl bg-card border border-border/30 hover:border-honey/50 
        shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${index * 75}ms`,
      }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-honey/10 flex items-center justify-center mb-5 group-hover:bg-honey/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-honey" />
      </div>
      
      {/* Title */}
      <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">
        {service.title}
      </h3>
      
      {/* Description */}
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28 bg-background relative"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <span className="w-12 h-px bg-gradient-to-r from-transparent to-honey/30" />
        <span className="w-2 h-2 rounded-full bg-honey/60" />
        <span className="w-12 h-px bg-gradient-to-l from-transparent to-honey/30" />
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div 
          className="text-center mb-12 md:mb-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <p className="text-sm font-semibold text-honey uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* CTA */}
        <div 
          className="mt-12 md:mt-16 text-center transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '500ms',
          }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-honey text-background rounded-full font-bold hover:bg-honey-dark glow-honey transition-all duration-300"
          >
            <span>Request a Free Strategy Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
