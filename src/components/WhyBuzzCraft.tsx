import { Sparkles, BarChart3, Zap, MessageCircle } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";

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

const portfolioImages = [portfolio1, portfolio2, portfolio3];

const WhyBuzzCraft = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Why Buzz Craft?
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
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

        {/* Portfolio Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl aspect-[4/5] group"
            >
              <img
                src={image}
                alt={`Buzz Craft portfolio work ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuzzCraft;
