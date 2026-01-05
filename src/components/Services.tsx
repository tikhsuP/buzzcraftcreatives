import { Instagram, Film, Users, Search } from "lucide-react";
import BeeIcon from "./BeeIcon";

const services = [
  {
    icon: Instagram,
    title: "Instagram Ads",
    description:
      "We offer Instagram ads management services for businesses looking to generate leads and sales through paid social. Our team runs performance-driven Instagram advertising campaigns, including Story Ads, Carousel Ads, and Feed Ads, with continuous creative testing, audience targeting, and ROI tracking to maximize results.",
    keywords: ["Story Ads", "Carousel Ads", "Feed Ads", "ROI Tracking"],
  },
  {
    icon: Film,
    title: "Reels Strategy",
    description:
      "We offer Instagram Reels marketing and strategy designed to increase reach, engagement, and brand visibility. Our short-form video marketing approach focuses on strong 3-second hooks, high-retention edits, and conversion-focused content to help brands grow consistently through Reels.",
    keywords: ["Short-Form Video", "High Retention", "3-Second Hooks"],
  },
  {
    icon: Users,
    title: "Influencer Promos",
    description:
      "We offer influencer marketing and Instagram page promotion services through high-engagement niche accounts. Our influencer collaborations and shoutout campaigns help brands build awareness, grow followers, and create authentic engagement.",
    keywords: ["Shoutout Campaigns", "Niche Accounts", "Authentic Engagement"],
  },
  {
    icon: Search,
    title: "Google Ads",
    description:
      "We offer Google Ads management services for businesses seeking high-intent leads and measurable ROI. From Google Search Ads and PPC campaign management to conversion tracking and optimization, we help reduce cost per lead and scale profitable advertising campaigns.",
    keywords: ["PPC Management", "Search Ads", "Conversion Tracking"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-cream-dark relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 grain-overlay" />

      <div className="container-narrow mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex justify-center mb-4">
            <BeeIcon size="md" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            What We Create
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Performance-driven creative solutions that turn scrollers into customers
          </p>
        </div>

        {/* Services Grid - Instagram-style cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-lavender/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-foreground" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2">
                  {service.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
