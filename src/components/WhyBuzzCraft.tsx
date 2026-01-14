import { useEffect, useRef, useState } from "react";
import { TrendingUp, Target, Wallet, Zap, Users, BarChart3, Award, CheckCircle2 } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "3×",
    label: "Growth",
    sublabel: "Social reach + engagement uplift",
  },
  {
    icon: Target,
    value: "100K+",
    label: "Leads",
    sublabel: "Generated across campaigns",
  },
  {
    icon: Wallet,
    value: "₹25L+",
    label: "Revenue",
    sublabel: "Attributed to paid performance",
  },
  {
    icon: Zap,
    value: "14-21",
    label: "Days",
    sublabel: "Optimized testing cycles",
  },
];

const trustBadges = [
  { icon: Users, label: "Creative + Performance Team" },
  { icon: BarChart3, label: "Weekly Reporting & Optimization" },
  { icon: Award, label: "Meta + Google Specialists" },
  { icon: CheckCircle2, label: "Transparent Metrics" },
];

const WhyBuzzCraft = () => {
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
      id="results"
      ref={sectionRef} 
      className="py-12 md:py-16 lg:py-20 bg-secondary relative overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <span className="w-16 h-px bg-gradient-to-r from-transparent to-honey/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-honey/70" />
        <span className="w-16 h-px bg-gradient-to-l from-transparent to-honey/40" />
      </div>
      
      {/* Premium background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Curved wave lines */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03]" viewBox="0 0 800 600">
          <path
            d="M-100,300 Q200,100 400,300 T900,300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-honey"
          />
          <path
            d="M-100,350 Q200,150 400,350 T900,350"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-honey"
          />
          <path
            d="M-100,250 Q200,50 400,250 T900,250"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-honey"
          />
        </svg>
        
        {/* Subtle glow accents */}
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-honey/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-10 w-48 h-48 bg-honey/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[90%] lg:max-w-6xl mx-auto px-5 md:px-8 relative z-10">
        {/* Section Heading */}
        <div 
          className={`text-center mb-8 md:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
            Why Buzz Craft
          </h2>
          <p className="text-muted-foreground/70 text-sm md:text-base tracking-wide">
            Performance-led creativity. Proven outcomes.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 md:mb-12">
          {/* Left: Why Copy */}
          <div
            className="flex flex-col justify-center transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '100ms',
            }}
          >
            <h3 className="font-serif text-xl md:text-2xl lg:text-[1.75rem] text-foreground leading-snug mb-4 font-semibold">
              Buzz Craft combines <span className="text-honey">creative storytelling</span> with performance marketing to drive measurable growth.
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
              From content to conversion-focused ads, we build campaigns that look premium, convert consistently, and scale with data-backed decisions.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {trustBadges.map((badge, index) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-3 py-1.5 md:py-2 rounded-full bg-card/60 border border-border/40 text-xs md:text-sm text-muted-foreground transition-all duration-300 hover:border-honey/30 hover:text-foreground"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${300 + index * 50}ms`,
                  }}
                >
                  <badge.icon className="w-3.5 h-3.5 text-honey/80" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div
            className="grid grid-cols-2 gap-3 md:gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '200ms',
            }}
          >
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="group relative p-4 md:p-5 rounded-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/30 transition-all duration-500 hover:border-honey/40 hover:shadow-[0_0_30px_-10px_hsl(var(--honey)/0.2)]"
                style={{
                  transitionDelay: `${250 + index * 80}ms`,
                }}
              >
                {/* Subtle gradient shine overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-honey/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-honey/10 flex items-center justify-center mb-3 group-hover:bg-honey/15 transition-colors duration-300">
                    <metric.icon className="w-4 h-4 md:w-5 md:h-5 text-honey" strokeWidth={1.5} />
                  </div>
                  
                  {/* Number */}
                  <div className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-honey mb-1 tracking-tight">
                    {metric.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm md:text-base text-foreground font-medium mb-0.5">
                    {metric.label}
                  </div>
                  
                  {/* Context */}
                  <div className="text-xs text-muted-foreground/80 leading-snug">
                    {metric.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <span className="w-16 h-px bg-gradient-to-r from-transparent to-honey/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-honey/70" />
        <span className="w-16 h-px bg-gradient-to-l from-transparent to-honey/40" />
      </div>
    </section>
  );
};

export default WhyBuzzCraft;
