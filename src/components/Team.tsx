import { useEffect, useRef, useState } from "react";
import harshImage from "@/assets/team-harsh.jpg";
import yahviImage from "@/assets/team-yahvi.jpg";

const teamMembers = [
  {
    name: "Yahvi Patel",
    title: "Co-Founder & Creative Director",
    description: "Creative storytelling and brand content execution",
    image: yahviImage,
    alt: "Yahvi Patel – Co-Founder & Creative Director at Buzz Craft",
  },
  {
    name: "Harsh Bhalla",
    title: "Co-Founder & Performance Marketing Lead",
    description: "Paid media strategy across Meta & Google Ads",
    image: harshImage,
    alt: "Harsh Bhalla – Co-Founder & Performance Marketing Lead at Buzz Craft",
  },
  {
    name: "Nitin Kumar",
    title: "Operations & Client Success Head",
    description: "Smooth execution, delivery, and client coordination",
    image: null,
    alt: "Nitin Kumar – Operations & Client Success Head at Buzz Craft",
  },
  {
    name: "Shreya Saxena",
    title: "Marketing & Growth Lead",
    description: "Social strategy, engagement, and brand growth",
    image: null,
    alt: "Shreya Saxena – Marketing & Growth Lead at Buzz Craft",
  },
  {
    name: "Roopali Khale",
    title: "Events & Brand Partnerships Director",
    description: "Event campaigns and influencer collaborations",
    image: null,
    alt: "Roopali Khale – Events & Brand Partnerships Director at Buzz Craft",
  },
];

// Duplicate for seamless loop
const duplicatedMembers = [...teamMembers, ...teamMembers];

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

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
      className="px-5 md:px-8 lg:px-16 pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20 bg-background relative overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        <span className="w-12 h-px bg-gradient-to-r from-transparent to-honey/30" />
        <span className="w-2 h-2 rounded-full bg-honey/60" />
        <span className="w-12 h-px bg-gradient-to-l from-transparent to-honey/30" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Meet the Team
          </h2>
        </div>

        {/* Marquee Container */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Fade Left */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          {/* Gradient Fade Right */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div
            ref={marqueeRef}
            className={`flex gap-8 md:gap-10 lg:gap-12 py-4 ${
              isVisible ? "animate-marquee" : ""
            }`}
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {duplicatedMembers.map((member, index) => (
              <article
                key={`${member.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center text-center group"
                style={{ width: "160px" }}
              >
                {/* Circular Avatar */}
                <div className="relative mb-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-honey/40 shadow-lg shadow-honey/10 group-hover:border-honey/70 group-hover:shadow-honey/20 transition-all duration-300">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.alt}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary flex items-center justify-center">
                        <span className="font-serif text-xl md:text-2xl font-bold text-honey">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Subtle glow ring on hover */}
                  <div className="absolute inset-0 rounded-full bg-honey/0 group-hover:bg-honey/5 transition-all duration-300" />
                </div>

                {/* Name */}
                <h3 className="font-serif text-base md:text-lg font-bold text-foreground mb-1 whitespace-nowrap">
                  {member.name}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-muted-foreground leading-snug max-w-[140px] md:max-w-[160px]">
                  {member.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
