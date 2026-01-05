import { Sparkles, BarChart3, Zap, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Creative Storytelling",
    description: "Backed by performance data",
  },
  {
    icon: BarChart3,
    title: "Transparent Metrics",
    description: "Honest reporting you can trust",
  },
  {
    icon: Zap,
    title: "Rapid Setup",
    description: "Fast optimization cycles",
  },
  {
    icon: MessageCircle,
    title: "Client-First",
    description: "DMs welcome anytime",
  },
];

const WhyBuzzCraft = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Why Buzz Craft?
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-lavender/20 flex items-center justify-center group-hover:bg-lavender/30 transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuzzCraft;
