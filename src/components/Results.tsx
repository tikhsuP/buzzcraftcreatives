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
    <section id="results" className="section-padding bg-foreground text-background relative overflow-hidden">
      {/* Subtle accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-honey/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-lavender/10 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex justify-center mb-4">
            <div className="p-2 bg-background/10 rounded-full">
              <BeeIcon size="sm" />
            </div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Results That Speak
          </h2>
          <p className="text-background/70 text-lg max-w-xl mx-auto">
            Real metrics from real campaigns. No vanity numbers.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="text-center p-8 rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <metric.icon className="w-8 h-8 mx-auto mb-4 text-honey" />
              <div className="font-serif text-5xl md:text-6xl font-bold text-background mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-medium text-background mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-background/60">{metric.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="p-6 rounded-xl bg-background/5 border border-background/10 animate-fade-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <blockquote className="text-background/90 mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <span className="text-sm text-background/60">— {testimonial.author}</span>
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
