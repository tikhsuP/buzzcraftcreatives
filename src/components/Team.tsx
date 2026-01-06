import { useEffect, useRef, useState } from "react";
import harshImage from "@/assets/team-harsh.jpg";
import yahviImage from "@/assets/team-yahvi.jpg";

const teamMembers = [
  {
    name: "Yahvi Patel",
    title: "Co-Founder & Creative Lead",
    bio: "Yahvi is a creative storyteller and digital marketing expert known for building highly engaging social content and brand experiences. She drives the creative direction at Buzz Craft.",
    image: yahviImage,
    alt: "Yahvi Patel – Co-Founder & Creative Lead at Buzz Craft",
  },
  {
    name: "Harsh Bhalla",
    title: "Co-Founder & PPC Specialist",
    bio: "Harsh is a performance marketing specialist with a strong background in growth strategy and results-driven campaigns. He combines creative intuition with analytical insight.",
    image: harshImage,
    alt: "Harsh Bhalla – Co-Founder at Buzz Craft",
  },
];

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Meet the Team
          </h2>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 justify-center">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className={`bg-card rounded-2xl p-6 md:p-7 lg:p-8 shadow-soft border border-border/50 
                hover:shadow-card hover:-translate-y-1 transition-all duration-300 ease-out
                flex flex-col ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Portrait Image */}
              <div className="w-full aspect-[4/5] mb-5 md:mb-6 overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">
                {member.name}
              </h3>

              {/* Title with accent underline */}
              <p className="text-sm md:text-base text-honey font-medium mb-4 pb-3 border-b border-honey/30">
                {member.title}
              </p>

              {/* Bio */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed flex-grow">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
