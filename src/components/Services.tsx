import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

// Import service images
import servicePerformance from "@/assets/service-performance.jpg";
import serviceInfluencer from "@/assets/service-influencer-new.jpg";
import serviceStrategy from "@/assets/service-strategy.jpg";
import contentShoot from "@/assets/content-shoot.png";
import contentEditing from "@/assets/content-editing.png";

const services = [
  {
    id: "content-creation",
    title: "Content Creation & Social Growth",
    tagline: "Scroll-stopping content built for brand + attention.",
    headline: "Content that builds attention and trust",
    description: "We create Instagram posts, Reels, and brand content designed to improve engagement, strengthen identity, and grow your audience consistently.",
    highlights: ["Reels + Editing", "Brand Shoots", "Content Calendars"],
    outcome: "Typical outcome: better engagement + more inbound inquiries",
    images: [contentShoot, contentEditing],
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing (Meta + Google Ads)",
    tagline: "ROI-first campaigns engineered for leads and sales.",
    headline: "Performance ads built for ROI",
    description: "We manage Meta Ads and Google Ads campaigns focused on qualified leads, conversion tracking, and continuous optimization to reduce cost per lead.",
    highlights: ["Meta Ads", "Google Search", "Conversion Tracking"],
    outcome: "Typical outcome: lower CPL + more qualified leads",
    images: [servicePerformance, serviceStrategy],
  },
  {
    id: "influencer-promotions",
    title: "Influencer & Promotion Campaigns",
    tagline: "Authentic collaborations that build trust and buzz.",
    headline: "Collaborations that create real buzz",
    description: "We run influencer partnerships and page promotions through niche communities to boost reach, credibility, and high-quality audience growth.",
    highlights: ["Creator Network", "Page Promotions", "Brand Collabs"],
    outcome: "Typical outcome: reach growth + stronger credibility",
    images: [serviceInfluencer, contentShoot],
  },
  {
    id: "strategy-analytics",
    title: "Strategy, Analytics & Reporting",
    tagline: "Clear insights, tracking, and next-step growth plans.",
    headline: "Decisions backed by real data",
    description: "We provide audits, reporting, and growth roadmaps to show what's working, what to scale, and how to improve marketing performance month by month.",
    highlights: ["Weekly Reports", "KPI Tracking", "Growth Roadmaps"],
    outcome: "Typical outcome: clearer reporting + faster scaling decisions",
    images: [serviceStrategy, servicePerformance],
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const handleServiceChange = (index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  const activeService = services[activeIndex];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Buzz trail - curved stroke at low opacity */}
        <svg className="absolute top-1/4 left-0 w-full h-96 opacity-[0.03]" viewBox="0 0 1200 400" fill="none">
          <path 
            d="M-100 200 Q 300 50 600 200 T 1300 200" 
            stroke="currentColor" 
            strokeWidth="2"
            className="text-honey"
          />
        </svg>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-radial from-honey/[0.02] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        {/* Section Header - Clean & Premium */}
        <div 
          className="mb-12 md:mb-16 lg:mb-20 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <p className="text-xs font-medium text-honey/80 uppercase tracking-[0.2em] mb-3">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Built to look premium. Built to convert faster.
          </p>
        </div>

        {/* Mobile: Horizontal Tabs */}
        <div className="lg:hidden mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => handleServiceChange(index)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                  ${activeIndex === index 
                    ? 'bg-honey text-background' 
                    : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
                  }`}
              >
                {service.title.split(' ').slice(0, 2).join(' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content: Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* LEFT: Sticky Service Spotlight Panel */}
          <div className="lg:sticky lg:top-24 lg:self-start order-2 lg:order-1">
            <div 
              className="relative p-6 md:p-8 lg:p-10 rounded-2xl overflow-hidden transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '200ms',
              }}
            >
              {/* Panel Background with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-muted/20 rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-tr from-honey/[0.02] via-transparent to-honey/[0.01] rounded-2xl" />
              
              {/* Thin gold accent line - animated */}
              <div 
                className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-honey/60 to-transparent transition-all duration-500"
                style={{
                  opacity: isTransitioning ? 0.3 : 1,
                  transform: `scaleX(${isTransitioning ? 0.5 : 1})`,
                }}
              />
              
              {/* Content */}
              <div 
                className={`relative transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
              >
                {/* Mini Image Collage */}
                <div className="flex gap-3 mb-6">
                  {activeService.images.map((img, i) => (
                    <div 
                      key={i}
                      className="relative w-1/2 aspect-[4/3] rounded-xl overflow-hidden"
                    >
                      <img 
                        src={img} 
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                    </div>
                  ))}
                </div>

                {/* Headline */}
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {activeService.headline}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  {activeService.description}
                </p>

                {/* Outcome micro-line */}
                <p className="text-xs text-honey/70 italic mb-6">
                  {activeService.outcome}
                </p>

                {/* Highlight Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeService.highlights.map((highlight, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-honey/10 text-honey text-xs font-medium border border-honey/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT: Service Menu List */}
          <div className="hidden lg:block order-1 lg:order-2">
            <div className="space-y-1">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onMouseEnter={() => handleServiceChange(index)}
                  onClick={() => handleServiceChange(index)}
                  className={`group w-full text-left p-5 md:p-6 rounded-xl transition-all duration-300 relative overflow-hidden
                    ${activeIndex === index 
                      ? 'bg-muted/30' 
                      : 'hover:bg-muted/20'
                    }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                    transitionDelay: `${300 + index * 80}ms`,
                  }}
                >
                  {/* Active indicator line */}
                  <div 
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 bg-honey rounded-full transition-all duration-300
                      ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                  />
                  
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Service Name - Big */}
                      <h4 className={`font-serif text-xl md:text-2xl font-bold mb-1.5 transition-colors duration-300 leading-tight
                        ${activeIndex === index ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'}`}>
                        {service.title}
                      </h4>
                      
                      {/* Tagline - Small */}
                      <p className={`text-sm transition-colors duration-300
                        ${activeIndex === index ? 'text-muted-foreground' : 'text-muted-foreground/60 group-hover:text-muted-foreground'}`}>
                        {service.tagline}
                      </p>
                    </div>
                    
                    {/* Arrow */}
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-all duration-300
                      ${activeIndex === index 
                        ? 'text-honey translate-x-0' 
                        : 'text-muted-foreground/40 -translate-x-1 group-hover:translate-x-0 group-hover:text-muted-foreground'}`} 
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: Spotlight Panel is already shown above via order classes */}
        </div>

        {/* CTA Strip */}
        <div 
          className="mt-16 md:mt-20 lg:mt-24 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '600ms',
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6 md:py-8 px-6 md:px-10 rounded-xl border border-border/30 bg-muted/10">
            <p className="text-foreground text-lg md:text-xl font-medium text-center sm:text-left">
              Want a custom growth plan for your brand?
            </p>
            <a
              href="https://www.instagram.com/buzzcraftcreatives/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-honey text-background rounded-full font-semibold text-sm hover:bg-honey-dark transition-all duration-300 whitespace-nowrap"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
