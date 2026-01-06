import { useEffect, useRef, useState } from "react";
import harshImage from "@/assets/team-harsh.jpg";
import yahviImage from "@/assets/team-yahvi.jpg";

const teamMembers = [
  {
    name: "Yahvi Patel",
    title: "Co-Founder & Creative Lead, Buzz Craft",
    bio: "Yahvi is a creative storyteller and digital marketing expert known for building highly engaging social content and brand experiences. With a strong presence as a digital creator and a talent for relatable, attention-grabbing campaigns, Yahvi drives the creative direction at Buzz Craft and helps clients connect deeply with audiences across Instagram and emerging platforms.",
    image: yahviImage,
    alt: "Yahvi Patel – Co-Founder & Creative Lead at Buzz Craft",
    direction: "left" as const,
  },
  {
    name: "Harsh Bhalla",
    title: "Co-Founder & PPC Specialist, Buzz Craft",
    bio: "Harsh is a performance marketing specialist and co-founder of Buzz Craft with a strong background in growth strategy, digital storytelling, and results-driven campaigns. He combines creative intuition with analytical insight to help brands scale through Instagram Ads, Reels, Google PPC, and data-driven marketing.",
    image: harshImage,
    alt: "Harsh Bhalla – Co-Founder at Buzz Craft",
    direction: "right" as const,
  },
];

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="px-5 md:px-8 lg:px-16 pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20 bg-background relative"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        <span className="w-12 h-px bg-gradient-to-r from-transparent to-charcoal/20" />
        <span className="w-2 h-2 rounded-full bg-honey/60" />
        <span className="w-12 h-px bg-gradient-to-l from-transparent to-charcoal/20" />
      </div>

      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Meet the Team
          </h2>
        </div>

        {/* Team Members */}
        <div className="space-y-10 md:space-y-16">
          {teamMembers.map((member, index) => (
            <div key={member.name}>
              <article
                data-index={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-14 items-center transition-all duration-700 ease-out ${
                  visibleItems[index]
                    ? "opacity-100 translate-x-0"
                    : member.direction === "left"
                    ? "opacity-0 -translate-x-8"
                    : "opacity-0 translate-x-8"
                }`}
              >
                {/* Image - order changes based on direction */}
                <div
                  className={`${
                    member.direction === "right" ? "md:order-2" : ""
                  } flex justify-center md:justify-${
                    member.direction === "right" ? "end" : "start"
                  }`}
                >
                  <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                    <img
                      src={member.image}
                      alt={member.alt}
                      className="w-full h-full object-cover rounded-2xl shadow-card"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div
                  className={`${
                    member.direction === "right" ? "md:order-1 md:text-right" : ""
                  } text-center md:text-left`}
                >
                  <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="font-serif text-sm md:text-base text-honey font-medium mb-3 md:mb-4">
                    {member.title}
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0 md:max-w-none">
                    {member.bio}
                  </p>
                </div>
              </article>

              {/* Divider between members */}
              {index < teamMembers.length - 1 && (
                <div className="flex justify-center mt-10 md:mt-16">
                  <span className="w-24 h-px bg-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
