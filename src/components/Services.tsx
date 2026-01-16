import { useEffect, useRef, useState } from "react";
import { 
  Palette, 
  BarChart3, 
  Users, 
  LineChart,
  ArrowRight,
  Sparkles,
  TrendingUp
} from "lucide-react";

// Import service images
import serviceContent from "@/assets/service-content.jpg";
import servicePerformance from "@/assets/service-performance.jpg";
import serviceInfluencer from "@/assets/service-influencer-new.jpg";
import serviceStrategy from "@/assets/service-strategy.jpg";

const services = [
  {
    id: "content-creation",
    title: "Content Creation & Social Growth",
    subtitle: "Scroll-Stopping Content",
    description: "Strategic Instagram posts, Reels, and branded content designed to build trust and grow your audience consistently.",
    icon: Palette,
    image: serviceContent,
    highlights: ["Branded Reels & Stories", "Engagement-Driven Posts"],
    tag: "Most Popular",
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    subtitle: "Meta + Google Ads",
    description: "High-performing paid campaigns across Instagram, Facebook, YouTube, and Google to generate qualified leads and sales.",
    icon: BarChart3,
    image: servicePerformance,
    highlights: ["ROI-Focused Campaigns", "Conversion Tracking"],
  },
  {
    id: "influencer-promotions",
    title: "Influencer & Promotions",
    subtitle: "Authentic Collaborations",
    description: "Influencer partnerships and page promotions through niche, high-engagement communities to boost reach and credibility.",
    icon: Users,
    image: serviceInfluencer,
    highlights: ["Niche Creator Network", "Page Promotions"],
  },
  {
    id: "strategy-analytics",
    title: "Strategy & Analytics",
    subtitle: "Data-Driven Insights",
    description: "Clear strategy, performance audits, and reporting that highlights what's working and what to scale next.",
    icon: LineChart,
    image: serviceStrategy,
    highlights: ["Weekly Reporting", "Growth Roadmaps"],
  },
];

const ServiceCard = ({ service, index, isVisible }: { service: typeof services[0]; index: number; isVisible: boolean }) => {
  const Icon = service.icon;
  
  return (
    <div
      className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-card via-card to-card/80 
        border border-border/40 hover:border-honey/40 shadow-soft hover:shadow-glow 
        transition-all duration-500 hover:-translate-y-1 overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-honey/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top Row: Image + Tag */}
      <div className="relative flex items-start gap-4 mb-5">
        {/* Image thumbnail */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-border/30 group-hover:ring-honey/30 transition-all duration-300">
          <img 
            src={service.image} 
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Dark overlay for consistency */}
          <div className="absolute inset-0 bg-background/20" />
        </div>
        
        {/* Icon badge */}
        <div className="w-10 h-10 rounded-lg bg-honey/10 flex items-center justify-center flex-shrink-0 group-hover:bg-honey/20 transition-colors duration-300">
          <Icon className="w-5 h-5 text-honey" />
        </div>
        
        {/* Popular tag */}
        {service.tag && (
          <div className="absolute top-0 right-0 flex items-center gap-1 px-2.5 py-1 rounded-full bg-honey/10 border border-honey/20">
            <Sparkles className="w-3 h-3 text-honey" />
            <span className="text-xs font-medium text-honey">{service.tag}</span>
          </div>
        )}
      </div>
      
      {/* Text Content */}
      <div className="relative space-y-3">
        {/* Title */}
        <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground leading-tight">
          {service.title}
        </h3>
        
        {/* Subtitle */}
        <p className="text-sm font-semibold text-honey uppercase tracking-wide">
          {service.subtitle}
        </p>
        
        {/* Description */}
        <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">
          {service.description}
        </p>
      </div>
      
      {/* Highlights */}
      <div className="relative mt-5 flex flex-wrap gap-2">
        {service.highlights.map((highlight, i) => (
          <span 
            key={i}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 border border-border/30 text-sm text-muted-foreground"
          >
            <TrendingUp className="w-3 h-3 text-honey/70" />
            {highlight}
          </span>
        ))}
      </div>
      
      {/* Explore Link */}
      <div className="relative mt-6 pt-5 border-t border-border/30">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-honey font-medium text-sm hover:gap-3 transition-all duration-300"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
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
      {/* Background subtle pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-honey/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-honey/[0.02] rounded-full blur-3xl" />
      </div>
      
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <span className="w-12 h-px bg-gradient-to-r from-transparent to-honey/30" />
        <span className="w-2 h-2 rounded-full bg-honey/60" />
        <span className="w-12 h-px bg-gradient-to-l from-transparent to-honey/30" />
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative">
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
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-stack marketing solutions designed to grow your brand and drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Mini CTA Strip */}
        <div 
          className="mt-16 md:mt-20 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '500ms',
          }}
        >
          <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-r from-honey/10 via-honey/5 to-honey/10 border border-honey/20 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-honey/5 via-transparent to-honey/5" />
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Ready to grow with <span className="text-honey">BuzzCraftCreatives</span>?
                </h3>
                <p className="text-muted-foreground">
                  Let's discuss how we can help scale your brand.
                </p>
              </div>
              
              <a
                href="https://www.instagram.com/buzzcraftcreatives/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-honey text-background rounded-full font-bold hover:bg-honey-dark glow-honey transition-all duration-300 whitespace-nowrap"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
