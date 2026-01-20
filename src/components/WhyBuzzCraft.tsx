import { useEffect, useRef, useState } from "react";
import { Users, BarChart3, Award, CheckCircle2 } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";

// Stats data with clear hierarchy
const metrics = [
  {
    value: "3×",
    label: "Growth",
    sublabel: "Social reach & engagement uplift",
  },
  {
    value: "100K+",
    label: "Impressions",
    sublabel: "Generated across campaigns",
  },
  {
    value: "₹25L+",
    label: "Revenue",
    sublabel: "Attributed to paid performance",
  },
  {
    value: "14–21",
    label: "Days",
    sublabel: "Typical optimization window",
  },
];

// Trust badges
const trustBadges = [
  { icon: Users, label: "Creative + Performance Team" },
  { icon: BarChart3, label: "Weekly Reporting" },
  { icon: Award, label: "Meta + Google Specialists" },
  { icon: CheckCircle2, label: "Transparent Metrics" },
];

// Portfolio images with tags
const portfolioImages = [
  {
    image: portfolio1,
    tag: "CREATIVE",
    alt: "Creative content showcase",
  },
  {
    image: portfolio2,
    tag: "FAST",
    alt: "Fast turnaround results",
  },
  {
    image: portfolio3,
    tag: "DATA-DRIVEN",
    alt: "Data-driven marketing approach",
  },
];

const WhyBuzzCraft = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection observer for fade-in
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
      id="results"
      ref={sectionRef} 
      className="py-12 md:py-16 bg-secondary relative overflow-hidden"
      role="region"
      aria-label="Why Buzz Craft and Results"
    >
      {/* Subtle background arc pattern at low opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-[0.04]" 
          viewBox="0 0 1000 600"
          aria-hidden="true"
        >
          <path
            d="M-100,300 Q250,80 500,300 T1100,300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-honey"
          />
          <path
            d="M-100,380 Q250,160 500,380 T1100,380"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-honey"
          />
        </svg>
        
        {/* Subtle glow */}
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-honey/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="w-[88%] max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Why BuzzCraftCreatives
          </h2>
        </div>

        {/* Two Column Layout: Left Copy (56%) + Right Stats Grid (40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-8">
          
          {/* Left Column: Copy + Trust Badges */}
          <div
            className="lg:col-span-7 flex flex-col justify-center transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: '100ms',
            }}
          >
            {/* Editorial headline with selective bold keywords */}
            <h3 className="font-serif text-xl md:text-2xl lg:text-[1.7rem] text-foreground leading-[1.35] mb-4">
              BuzzCraftCreatives combines{' '}
              <span className="text-honey font-semibold">creative storytelling</span>{' '}
              with{' '}
              <span className="text-honey font-semibold">performance marketing</span>{' '}
              to drive measurable growth.
            </h3>
            
            {/* Short supporting copy - max 2 lines */}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5 max-w-xl">
              From scroll-stopping content to conversion-focused ads, we build campaigns that convert consistently and scale with data-backed decisions.
            </p>
            
            {/* Trust Badges Row */}
            <div className="flex flex-wrap gap-2.5 md:gap-3">
              {trustBadges.map((badge, index) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/50 border border-border/30 text-xs text-muted-foreground transition-all duration-300 hover:border-honey/40 hover:text-foreground hover:bg-card/70"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${250 + index * 60}ms`,
                  }}
                >
                  <badge.icon className="w-3.5 h-3.5 text-honey/80" strokeWidth={1.5} />
                  <span className="whitespace-nowrap">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 2×2 Stats Grid */}
          <div
            className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transitionDelay: '200ms',
            }}
          >
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="group relative p-4 md:p-5 rounded-xl bg-card/60 backdrop-blur-sm border border-border/30 transition-all duration-400 hover:border-honey/40 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  transitionDelay: `${280 + index * 70}ms`,
                }}
              >
                {/* Big Number - accent color */}
                <div className="font-serif text-3xl md:text-4xl font-bold text-honey mb-1 tracking-tight leading-none">
                  {metric.value}
                </div>
                
                {/* Label - medium */}
                <div className="text-sm md:text-base text-foreground font-medium">
                  {metric.label}
                </div>
                
                {/* Micro context - muted */}
                <div className="text-[11px] md:text-xs text-muted-foreground/70 mt-0.5 leading-snug">
                  {metric.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Image Row with Tags */}
        <div 
          className="mt-10 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '400ms',
          }}
        >
          {/* Desktop: 3 columns, Mobile: horizontal scroll or stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {portfolioImages.map((item, index) => (
              <div 
                key={item.tag}
                className="flex flex-col items-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                  transitionDelay: `${450 + index * 100}ms`,
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                }}
              >
                {/* Image Container - Portrait aspect ratio for social media content */}
                <div className="relative w-full aspect-[3/4] max-h-[380px] rounded-xl overflow-hidden shadow-lg group">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Subtle dark overlay */}
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors duration-300" />
                </div>
                
                {/* Tag Label */}
                <div className="mt-4 text-center">
                  <span className="font-serif text-base md:text-lg font-semibold text-foreground tracking-wide relative">
                    {item.tag}
                    {/* Gold underline accent */}
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-honey rounded-full" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuzzCraft;
