import { TrendingUp, Target, Wallet, ArrowUpRight, Quote } from "lucide-react";
import BeeIcon from "./BeeIcon";
import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    icon: TrendingUp,
    value: "3×",
    label: "Social Media Growth",
    sublabel: "for multiple brands in 60–90 days",
  },
  {
    icon: Target,
    value: "100,000+",
    label: "Leads Generated",
    sublabel: "across combined campaigns",
  },
  {
    icon: Wallet,
    value: "₹25L+",
    label: "Revenue Driven",
    sublabel: "through paid ads & conversion strategy",
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

const Results = () => {
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
      className="px-5 md:px-8 lg:px-16 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 bg-card text-foreground relative overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <span className="w-12 h-px bg-gradient-to-r from-transparent to-honey/30" />
        <span className="w-2 h-2 rounded-full bg-honey/60" />
        <span className="w-12 h-px bg-gradient-to-l from-transparent to-honey/30" />
      </div>
      
      {/* Subtle accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-honey/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-honey/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Results That Speak Section */}
        <div 
          className="text-center mb-12 md:mb-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <div className="flex justify-center mb-3">
            <div className="p-2 bg-honey/20 rounded-full">
              <BeeIcon size="sm" />
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">
            Results That Speak
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
            Real metrics from real campaigns. No vanity numbers.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="text-center p-8 md:p-10 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-border/30 transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${150 + index * 100}ms`,
              }}
            >
              <metric.icon className="w-10 h-10 mx-auto mb-5 text-honey" />
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-honey mb-3">
                {metric.value}
              </div>
              <div className="text-lg md:text-xl font-semibold text-foreground mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-muted-foreground">{metric.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div 
          className="text-center mb-10 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '400ms',
          }}
        >
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Trusted by Growing Brands
          </h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-6 md:p-8 rounded-2xl bg-secondary/50 border border-border/30 transition-all duration-700 hover:border-honey/30"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${500 + index * 100}ms`,
              }}
            >
              <Quote className="w-8 h-8 text-honey/30 mb-4" />
              <blockquote className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-honey">— {testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
