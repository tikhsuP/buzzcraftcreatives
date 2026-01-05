import { ClipboardCheck, Palette, Rocket, TrendingUp } from "lucide-react";
import processBg from "@/assets/process-bg.jpg";

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Audit & Strategy",
    description: "Deep dive into your brand and goals",
  },
  {
    icon: Palette,
    number: "02",
    title: "Creative Setup",
    description: "Crafting scroll-stopping content",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & Optimize",
    description: "Data-driven campaign execution",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Scale What Works",
    description: "Double down on winning creatives",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={processBg}
          alt="Process background"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-cream-dark/90" />
      </div>

      <div className="container-narrow mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple. Transparent. Results-focused.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card */}
                <div className="bg-card rounded-2xl p-6 shadow-soft relative z-10 h-full hover:shadow-card transition-shadow duration-300">
                  {/* Number badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-honey rounded-full flex items-center justify-center font-serif font-bold text-sm text-foreground shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
