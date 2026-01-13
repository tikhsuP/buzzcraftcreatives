import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 md:py-20 lg:py-24 bg-secondary relative overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <span className="w-16 h-px bg-gradient-to-r from-transparent to-honey/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-honey/70" />
        <span className="w-16 h-px bg-gradient-to-l from-transparent to-honey/40" />
      </div>
      
      {/* Subtle background accents */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-72 h-72 bg-honey/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-64 h-64 bg-honey/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-5 md:px-8 relative z-10">
        {/* Section Heading */}
        <div 
          className={`text-center mb-8 md:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Why Buzz Craft
          </h2>
        </div>

        {/* Content */}
        <div
          className="text-center transition-all duration-700"
          style={{ 
            transitionDelay: '200ms',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-4">
            Buzz Craft blends <span className="text-honey font-semibold">creative storytelling</span> + <span className="text-honey font-semibold">performance strategy</span> to help brands grow faster.
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From content to ads, we build campaigns that look premium, convert better, and scale consistently.
          </p>
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
