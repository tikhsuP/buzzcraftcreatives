import serviceInstagram from "@/assets/service-instagram-ads.jpg";
import serviceReels from "@/assets/service-reels.jpg";
import serviceInfluencer from "@/assets/service-influencer.jpg";
import serviceGoogle from "@/assets/service-google-ads.jpg";

const services = [
  {
    id: "instagram-ads",
    title: "Instagram Ads",
    subtitle: "Performance-driven paid social campaigns",
    description:
      "We create and manage Instagram advertising campaigns that focus on creative testing, precise targeting, and ROI tracking to generate consistent leads and sales for growing brands.",
    image: serviceInstagram,
    imageAlt: "Instagram advertising campaign on mobile phone",
  },
  {
    id: "reels-strategy",
    title: "Reels Strategy",
    subtitle: "Short-form content that converts",
    description:
      "Our Reels marketing focuses on strong 3-second hooks, high-retention edits, and conversion-focused content to help brands grow consistently through organic and paid short-form video.",
    image: serviceReels,
    imageAlt: "Content creator filming vertical video",
  },
  {
    id: "influencer-promos",
    title: "Influencer Promos",
    subtitle: "Authentic collaborations that build trust",
    description:
      "Strategic influencer marketing through high-engagement niche accounts to build awareness, grow followers, and create authentic engagement that resonates with your audience.",
    image: serviceInfluencer,
    imageAlt: "Influencer collaboration meeting",
  },
  {
    id: "google-ads",
    title: "Google Ads",
    subtitle: "High-intent leads, measurable ROI",
    description:
      "From Google Search Ads and PPC campaign management to conversion tracking and optimization, we help reduce cost per lead and scale profitable advertising campaigns.",
    image: serviceGoogle,
    imageAlt: "Google Analytics dashboard showing growth",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container-narrow mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">
            What We Create
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Our Services
          </h2>
        </div>

        {/* Services List */}
        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image - Order changes based on index */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    {/* Hover overlay with buzz accent */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-honey opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"
                  }`}
                >
                  <div className="max-w-lg">
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-lg text-honey font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed max-w-[60ch]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
