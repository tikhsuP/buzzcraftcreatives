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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className="py-28 md:py-36 lg:py-44 bg-lavender/5 overflow-hidden">
      <div className="container-narrow mx-auto px-5 md:px-8">
        {/* Section Heading */}
        <div className={`text-center mb-24 md:mb-32 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-wide">
            Why Buzz Craft
          </h2>
        </div>

        {/* Smile-Shaped Layout - Desktop */}
        <div className="hidden lg:block">
          <div className="flex items-start justify-center gap-12 xl:gap-16">
            {smileData.map((item, index) => {
              // Create smile curve: left and right are lower than center
              const offsetClass = index === 1 ? "mt-0" : "mt-14 xl:mt-18";
              const delay = 200 + index * 200; // Staggered delay: 200ms, 400ms, 600ms
              
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
                  {/* Image Container */}
                  <div className="relative group mb-6">
                    <div className="w-44 xl:w-48 overflow-hidden rounded-2xl shadow-md">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                  
                  {/* Keyword - positioned clearly below image */}
                  <div 
                    className="text-center transition-all duration-500"
                    style={{ 
                      transitionDelay: `${delay + 300}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(15px)'
                    }}
                  >
                    <span className="font-serif text-xl xl:text-2xl font-bold text-charcoal tracking-tight relative inline-block">
                      {item.word}
                      {/* Accent underline */}
                      <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-lavender to-honey opacity-70" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Smile-Shaped Layout - Mobile/Tablet */}
        <div className="lg:hidden flex flex-col items-center gap-12">
          {mobileOrder.map((item, index) => {
            const delay = 200 + index * 200;
            
            return (
              <div 
                key={item.word} 
                className="flex flex-col items-center transition-all duration-700"
                style={{ 
                  transitionDelay: `${delay}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
                {/* Image */}
                <div className="relative group mb-5">
                  <div className="w-48 md:w-52 overflow-hidden rounded-2xl shadow-md">
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
                    transitionDelay: `${delay + 300}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(15px)'
                  }}
                >
                  <span className="font-serif text-lg md:text-xl font-bold text-charcoal tracking-tight relative inline-block">
                    {item.word}
                    <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-lavender to-honey opacity-70" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Micro-Copy */}
        <div
          className="mt-24 md:mt-32 text-center transition-all duration-700"
          style={{ 
            transitionDelay: '800ms',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-[50ch] mx-auto leading-relaxed">
            Creative ideas, fast execution, and data-backed decisions that drive real growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyBuzzCraft;
