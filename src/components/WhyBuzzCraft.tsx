import { useEffect, useRef, useState, useCallback } from "react";
import { TrendingUp, Target, Wallet, Zap, Users, BarChart3, Award, CheckCircle2, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";

// Stats data with clear hierarchy
const metrics = [
  {
    icon: TrendingUp,
    value: "3×",
    label: "Growth",
    sublabel: "Social reach & engagement uplift",
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

// Case study carousel data
const caseStudies = [
  {
    image: portfolio1,
    title: "Fashion Brand Social Growth",
    caption: "3× engagement increase in 60 days",
    alt: "Fashion brand social media campaign results",
  },
  {
    image: portfolio2,
    title: "E-Commerce Performance Ads",
    caption: "₹15L revenue from paid campaigns",
    alt: "E-commerce paid advertising case study",
  },
  {
    image: portfolio3,
    title: "B2B Lead Generation",
    caption: "50K+ qualified leads delivered",
    alt: "B2B lead generation campaign results",
  },
];

const WhyBuzzCraft = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

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

  // Carousel autoplay
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      autoplayRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPaused, nextSlide]);

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
            Why Buzz Craft
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
              Buzz Craft combines{' '}
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
                {/* Icon in muted square */}
                <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center mb-3 group-hover:bg-honey/10 transition-colors duration-300">
                  <metric.icon className="w-4 h-4 text-honey/80" strokeWidth={1.5} />
                </div>
                
                {/* Big Number - accent color */}
                <div className="font-serif text-3xl md:text-4xl font-bold text-honey mb-0.5 tracking-tight leading-none">
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

        {/* Case Study Carousel */}
        <div 
          className="mt-8 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '400ms',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Container */}
          <div className="relative">
            {/* Slides Wrapper */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {caseStudies.map((study, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0"
                  >
                    <div className="relative aspect-[16/9] bg-card/40 rounded-2xl overflow-hidden group">
                      {/* Image with lazy loading */}
                      <img
                        src={study.image}
                        alt={study.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      
                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                      
                      {/* Caption + CTA */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                        <h4 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-1">
                          {study.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {study.caption}
                        </p>
                        <button className="inline-flex items-center gap-1.5 text-xs md:text-sm text-honey font-medium hover:underline underline-offset-4 transition-all group/btn">
                          View case
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-background hover:border-honey/40 transition-all duration-300 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-background hover:border-honey/40 transition-all duration-300 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-honey w-6' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuzzCraft;
