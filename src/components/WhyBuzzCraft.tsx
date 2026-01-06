import { useEffect, useRef, useState } from "react";
import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";

const smileData = [
  {
    image: portfolio1,
    alt: "Buzz Craft creative ideas showcase",
    word: "CREATIVE",
  },
  {
    image: portfolio2,
    alt: "Buzz Craft fast execution",
    word: "FAST",
  },
  {
    image: portfolio3,
    alt: "Buzz Craft data-driven results",
    word: "DATA-DRIVEN",
  },
];

// Mobile order: FAST (center) first, then CREATIVE (left), then DATA-DRIVEN (right)
const mobileOrder = [smileData[1], smileData[0], smileData[2]];

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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 bg-secondary overflow-hidden relative">
      {/* Top divider - visual transition from Services */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <span className="w-16 h-px bg-gradient-to-r from-transparent to-honey/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-honey/70" />
        <span className="w-16 h-px bg-gradient-to-l from-transparent to-honey/40" />
      </div>
      
      {/* Wide container - 90% width */}
      <div className="w-[90%] max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className={`text-center mb-8 md:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wide">
            Why Buzz Craft
          </h2>
        </div>

        {/* Desktop Layout - Three columns */}
        <div className="hidden lg:block">
          <div className="flex items-start justify-center gap-6 xl:gap-8">
            {smileData.map((item, index) => {
              // Create smile curve: left and right are lower than center
              const offsetClass = index === 1 ? "mt-0" : "mt-10";
              const delay = 150 + index * 150;
              
              return (
                <div
                  key={item.word}
                  className={`flex flex-col items-center ${offsetClass} transition-all duration-700`}
                  style={{ 
                    transitionDelay: `${delay}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                  }}
                >
                  {/* Image Container - Larger size */}
                  <div className="relative group mb-4">
                    <div className="w-64 xl:w-80 overflow-hidden rounded-2xl shadow-card border border-border/30">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    {/* Subtle hover glow */}
                    <div className="absolute inset-0 rounded-2xl bg-honey/0 group-hover:bg-honey/10 transition-colors duration-500" />
                  </div>
                  
                  {/* Keyword - tight spacing below image */}
                  <div 
                    className="text-center transition-all duration-500"
                    style={{ 
                      transitionDelay: `${delay + 200}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(15px)'
                    }}
                  >
                    <span className="font-serif text-2xl xl:text-3xl font-bold text-foreground tracking-tight relative inline-block">
                      {item.word}
                      {/* Accent underline */}
                      <span className="absolute -bottom-1 left-0 w-full h-1 bg-honey opacity-80 rounded-full" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Layout - Stacked */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          {mobileOrder.map((item, index) => {
            const delay = 150 + index * 150;
            
            return (
              <div 
                key={item.word} 
                className="flex flex-col items-center transition-all duration-700 w-full"
                style={{ 
                  transitionDelay: `${delay}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
                {/* Image - 90% width on mobile */}
                <div className="relative group mb-3 w-[85%] max-w-xs md:max-w-sm">
                  <div className="w-full overflow-hidden rounded-2xl shadow-card border border-border/30">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>
                </div>
                
                {/* Keyword below image */}
                <div 
                  className="text-center transition-all duration-500"
                  style={{ 
                    transitionDelay: `${delay + 200}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(15px)'
                  }}
                >
                  <span className="font-serif text-xl md:text-2xl font-bold text-foreground tracking-tight relative inline-block">
                    {item.word}
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-honey opacity-80 rounded-full" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Micro-Copy */}
        <div
          className="mt-10 md:mt-12 text-center transition-all duration-700"
          style={{ 
            transitionDelay: '600ms',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <p className="font-serif text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Creative ideas, fast execution, and data-backed decisions that drive real growth.
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
