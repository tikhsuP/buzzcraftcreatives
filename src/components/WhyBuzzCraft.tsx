import { useEffect, useRef, useState } from "react";
import { TrendingUp, Target, Wallet, Quote } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "3×",
    label: "Social Growth",
    sublabel: "for multiple brands",
  },
  {
    icon: Target,
    value: "100,000+",
    label: "Leads Generated",
    sublabel: "across campaigns",
  },
  {
    icon: Wallet,
    value: "₹25L+",
    label: "Revenue Driven",
    sublabel: "via performance marketing",
  },
];

const testimonials = [
  {
    quote: "Buzz Craft helped us improve our content quality and brought consistent leads through Instagram ads.",
    author: "Fashion Route",
  },
  {
    quote: "Our Reels started performing better within weeks — engagement and inquiries both increased.",
    author: "Fairytale Decors",
  },
  {
    quote: "The team understood our brand quickly and executed campaigns that actually converted.",
    author: "New Age Customs",
  },
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
      className="py-16 md:py-20 lg:py-24 bg-secondary relative overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <span className="w-16 h-px bg-gradient-to-r from-transparent to-honey/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-honey/70" />
        <span className="w-16 h-px bg-gradient-to-l from-transparent to-honey/40" />
      </div>
      
      {/* Subtle background accents */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-honey/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-honey/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
        {/* Section Heading */}
        <div 
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Why Buzz Craft
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
            And what we've delivered
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 md:mb-20">
          {/* Left: Why Copy */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '100ms',
            }}
          >
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-6">
              Buzz Craft blends <span className="text-honey font-semibold">creative storytelling</span> with{" "}
              <span className="text-honey font-semibold">performance strategy</span> to help brands grow faster.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We build content and ad campaigns that look premium, convert better, and scale consistently — backed by data, not guesswork.
            </p>
          </div>

          {/* Right: Metrics */}
          <div
            className="grid grid-cols-1 gap-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '200ms',
            }}
          >
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="flex items-center gap-5 p-5 md:p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/30 transition-all duration-500"
                style={{
                  transitionDelay: `${250 + index * 100}ms`,
                }}
              >
                <div className="w-14 h-14 rounded-xl bg-honey/10 flex items-center justify-center flex-shrink-0">
                  <metric.icon className="w-7 h-7 text-honey" />
                </div>
                <div>
                  <div className="font-serif text-3xl md:text-4xl font-bold text-honey">
                    {metric.value}
                  </div>
                  <div className="text-sm md:text-base text-foreground font-medium">
                    {metric.label}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {metric.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div
          className="transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '400ms',
          }}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Trusted by Growing Brands
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="relative p-6 md:p-8 rounded-2xl bg-card/50 border border-border/30 transition-all duration-500 hover:border-honey/30"
                style={{
                  transitionDelay: `${500 + index * 100}ms`,
                }}
              >
                <Quote className="w-8 h-8 text-honey/30 mb-4" />
                <blockquote className="text-foreground/90 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <span className="font-semibold text-honey">— {testimonial.author}</span>
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
