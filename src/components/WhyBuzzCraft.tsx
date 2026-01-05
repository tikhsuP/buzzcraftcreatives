import { Sparkles, BarChart3, Zap, MessageCircle } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";

const reasons = [
  { icon: Sparkles, title: "Creative" },
  { icon: BarChart3, title: "Transparent" },
  { icon: Zap, title: "Fast" },
  { icon: MessageCircle, title: "Responsive" },
];

const WhyBuzzCraft = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-narrow mx-auto">
        {/* Header with minimal infographics */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="animate-fade-up">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-2">
              Why Buzz Craft?
            </h2>
            <p className="text-muted-foreground text-lg">Our work speaks louder</p>
          </div>
          
          {/* Minimal horizontal infographics */}
          <div className="flex flex-wrap gap-6 lg:gap-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {reasons.map((reason) => (
              <div key={reason.title} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <reason.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{reason.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Image Grid - Image focused layout */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {/* Large featured image */}
          <div 
            className="col-span-12 lg:col-span-7 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative overflow-hidden rounded-3xl aspect-[4/3] group">
              <img
                src={portfolio1}
                alt="Buzz Craft portfolio - social media content showcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Stacked images on the right */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 lg:gap-6">
            <div 
              className="animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[16/10] group">
                <img
                  src={portfolio2}
                  alt="Buzz Craft portfolio - founders collaboration"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            
            <div 
              className="animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[16/10] group">
                <img
                  src={portfolio3}
                  alt="Buzz Craft portfolio - creative advertising"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuzzCraft;
