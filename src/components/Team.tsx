import { useEffect, useRef, useState } from "react";
import harshImage from "@/assets/team-harsh.jpg";
import yahviImage from "@/assets/team-yahvi.jpg";

const teamMembers = [
  {
    name: "Yahvi Patel",
    title: "Co-Founder & Creative Director",
    bio: "Drives the creative direction and brand vision at Buzz Craft.",
    image: yahviImage,
    alt: "Yahvi Patel – Co-Founder & Creative Director at Buzz Craft",
  },
  {
    name: "Harsh Bhalla",
    title: "Co-Founder & Performance Marketing Lead",
    subtitle: "PPC + Paid Social",
    bio: "Leads performance marketing with a focus on ROI-driven campaigns.",
    image: harshImage,
    alt: "Harsh Bhalla – Co-Founder & Performance Marketing Lead at Buzz Craft",
  },
  {
    name: "Nitin Kumar",
    title: "Operations & Client Success Head",
    bio: "Ensures seamless operations and exceptional client experiences.",
    image: null,
    alt: "Nitin Kumar – Operations & Client Success Head at Buzz Craft",
  },
  {
    name: "Shreya Saxena",
    title: "Marketing & Growth Lead",
    bio: "Spearheads marketing initiatives and growth strategies.",
    image: null,
    alt: "Shreya Saxena – Marketing & Growth Lead at Buzz Craft",
  },
  {
    name: "Roopali Khale",
    title: "Events & Brand Partnerships Director",
    bio: "Manages brand partnerships and event marketing campaigns.",
    image: null,
    alt: "Roopali Khale – Events & Brand Partnerships Director at Buzz Craft",
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
      { threshold: 0.1 }
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
        <span className="w-12 h-px bg-gradient-to-r from-transparent to-honey/30" />
        <span className="w-2 h-2 rounded-full bg-honey/60" />
        <span className="w-12 h-px bg-gradient-to-l from-transparent to-honey/30" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Meet the Team
          </h2>
        </div>

        {/* Team Grid - Responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className={`bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/30 
                hover:shadow-glow hover:-translate-y-1 transition-all duration-300 ease-out
                flex flex-col text-center ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Avatar / Initials */}
              <div className="w-24 h-24 mx-auto mb-5 overflow-hidden rounded-full border-2 border-honey/30">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-honey">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>

              {/* Name */}
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-1">
                {member.name}
              </h3>

              {/* Title */}
              <p className="text-sm md:text-base text-honey font-semibold mb-1">
                {member.title}
              </p>

              {/* Subtitle if exists */}
              {member.subtitle && (
                <p className="text-xs text-muted-foreground mb-3">
                  ({member.subtitle})
                </p>
              )}

              {/* Bio */}
              <p className="text-muted-foreground text-sm leading-relaxed mt-auto pt-3 border-t border-border/30">
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
