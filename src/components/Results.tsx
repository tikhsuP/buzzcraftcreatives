import { TrendingUp, Target, Users, ArrowUpRight } from "lucide-react";
import BeeIcon from "./BeeIcon";

const metrics = [
  {
    icon: TrendingUp,
    value: "3×",
    label: "Engagement Growth",
    sublabel: "in 30 days",
  },
  {
    icon: Target,
    value: "40%",
    label: "Lower Cost Per Lead",
    sublabel: "average reduction",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Leads Generated",
    sublabel: "for our clients",
  },
];

const testimonials = [
  {
    quote: "Consistent inbound leads via Reels. Best ROI we've seen.",
    author: "Fashion Brand",
    result: "3× engagement",
  },
  {
    quote: "They understand creative that converts. Period.",
    author: "E-commerce Store",
    result: "40% lower CAC",
  },
  {
    quote: "DM response time is incredible. True partners.",
    author: "Personal Brand",
    result: "50K+ reach",
  },
];

const Results = () => {
  return (
    <section id="results" className="px-5 md:px-8 lg:px-16 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 bg-card text-foreground relative overflow-hidden">
      {/* Top divider - visual transition */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <span className="w-12 h-px bg-gradient-to-r from-transparent to-honey/30" />
        <span className="w-2 h-2 rounded-full bg-honey/60" />
        <span className="w-12 h-px bg-gradient-to-l from-transparent to-honey/30" />
      </div>
      
      {/* Subtle accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-honey/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-honey/5 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 animate-fade-up">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="text-center p-8 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-border/30 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <metric.icon className="w-8 h-8 mx-auto mb-4 text-honey" />
              <div className="font-serif text-5xl md:text-6xl font-bold text-honey mb-2">
                {metric.value}
              </div>
              <div className="text-lg md:text-xl font-semibold text-foreground mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-muted-foreground">{metric.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="p-6 rounded-xl bg-secondary/50 border border-border/30 animate-fade-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <blockquote className="text-foreground/90 mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">— {testimonial.author}</span>
                <span className="flex items-center gap-1 text-xs font-medium text-honey">
                  <ArrowUpRight className="w-3 h-3" />
                  {testimonial.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
