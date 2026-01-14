import { useEffect, useRef, useState } from "react";
import { 
  Palette, 
  BarChart3, 
  Users, 
  LineChart,
  ArrowRight
} from "lucide-react";

const services = [
  {
    id: "content-creation",
    title: "Content Creation & Social Media Growth",
    description: "We create scroll-stopping Instagram posts, Reels, and branded content designed to build trust, improve engagement, and grow your audience consistently. Our content is planned strategically to match your brand voice and drive real business outcomes.",
    icon: Palette,
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing (Meta + Google Ads)",
    description: "We manage high-performing paid campaigns across Instagram, Facebook, YouTube, and Google Ads to generate qualified leads and sales. From targeting and creative testing to conversion tracking and optimization, we focus on improving ROI and reducing cost per lead.",
    icon: BarChart3,
  },
  {
    id: "influencer-promotions",
    title: "Influencer & Promotion Campaigns",
    description: "We run influencer collaborations and page promotions through niche, high-engagement communities to boost reach and brand credibility. Our approach helps businesses build visibility faster while keeping content authentic and audience-relevant.",
    icon: Users,
  },
  {
    id: "strategy-analytics",
    title: "Strategy, Analytics & Reporting",
    description: "We support brands with clear strategy, performance audits, and reporting that highlights what's working and what to scale next. Every decision is backed by data so your marketing stays consistent, measurable, and growth-focused.",
    icon: LineChart,
  },
];

const ServiceCard = ({ service, index, isVisible }: { service: typeof services[0]; index: number; isVisible: boolean }) => {
  const Icon = service.icon;
  
  return (
    <div
      className="group p-8 md:p-10 rounded-2xl bg-card border border-border/30 hover:border-honey/50 
        shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-xl bg-honey/10 flex items-center justify-center mb-6 group-hover:bg-honey/20 transition-colors duration-300">
        <Icon className="w-8 h-8 text-honey" />
      </div>
      
      {/* Title */}
      <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">
        {service.title}
      </h3>
      
      {/* Description */}
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
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

        {/* Services Grid - 2x2 for cleaner layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
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
