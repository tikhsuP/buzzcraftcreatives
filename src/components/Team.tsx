import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import harshImage from "@/assets/team-harsh.jpg";
import yahviImage from "@/assets/team-yahvi.jpg";
import nitinImage from "@/assets/team-nitin.jpg";
import shreyaImage from "@/assets/team-shreya.png";
import roopaliImage from "@/assets/team-roopali.jpg";

const teamMembers = [
  {
    name: "Yahvi Patel",
    title: "Co-Founder & Creative Director",
    description: "Yahvi leads the creative direction at BuzzCraftCreatives, focusing on content storytelling, brand visuals, and social media strategies built for modern audiences.",
    image: yahviImage,
    alt: "Yahvi Patel – Co-Founder & Creative Director at BuzzCraftCreatives",
  },
  {
    name: "Harsh Bhalla",
    title: "Co-Founder & Performance Marketing Lead",
    description: "Harsh specializes in performance marketing across Meta and Google Ads, building campaigns designed for qualified leads, conversions, and measurable ROI.",
    image: harshImage,
    alt: "Harsh Bhalla – Co-Founder & Performance Marketing Lead at BuzzCraftCreatives",
  },
  {
    name: "Nitin Kumar",
    title: "Operations & Client Success Head",
    description: "Nitin manages execution, timelines, and smooth delivery across client projects, ensuring high-quality work and reliable coordination.",
    image: nitinImage,
    alt: "Nitin Kumar – Operations & Client Success Head at BuzzCraftCreatives",
  },
  {
    name: "Shreya Saxena",
    title: "Client Onboarding & Relationship Management",
    description: "Shreya handles client onboarding and relationship management, ensuring smooth transitions and ongoing communication.",
    image: shreyaImage,
    alt: "Shreya Saxena – Client Onboarding & Relationship Management at BuzzCraftCreatives",
  },
  {
    name: "Roopali Khale",
    title: "Events & Brand Partnerships Director",
    description: "Roopali leads event marketing and partnerships, supporting brand launches, collaborations, and promotional campaigns.",
    image: roopaliImage,
    alt: "Roopali Khale – Events & Brand Partnerships Director at BuzzCraftCreatives",
  },
];

// Duplicate for seamless loop (desktop only)
const duplicatedMembers = [...teamMembers, ...teamMembers];

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => (
  <article className="flex flex-col items-center text-center group">
    {/* Circular Avatar */}
    <div className="relative mb-3">
      <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-honey/40 shadow-lg shadow-honey/10">
        {member.image ? (
          <img
            src={member.image}
            alt={member.alt}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <span className="font-serif text-xl font-bold text-honey">
              {member.name.split(" ").map((n) => n[0]).join("")}
            </span>
          </div>
        )}
      </div>
    </div>

    {/* Name */}
    <h3 className="font-serif text-sm md:text-xl font-bold text-foreground mb-1">
      {member.name}
    </h3>

    {/* Title */}
    <p className="text-[10px] md:text-sm text-honey font-medium mb-1 md:mb-2 leading-tight px-1">
      {member.title}
    </p>

    {/* Description - hidden on mobile for cleaner 2x2 grid */}
    <p className="hidden md:block text-xs md:text-sm text-muted-foreground leading-relaxed max-w-[240px]">
      {member.description}
    </p>
  </article>
);

const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useIsMobile();

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

        {/* Mobile: Static 2x2 Grid */}
        {isMobile ? (
          <div
            className={`grid grid-cols-2 gap-6 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {teamMembers.slice(0, 4).map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
            {/* 5th member centered below */}
            <div className="col-span-2 flex justify-center">
              <div className="w-1/2">
                <TeamMemberCard member={teamMembers[4]} />
              </div>
            </div>
          </div>
        ) : (
          /* Desktop: Marquee Animation */
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
                  style={{ width: "220px" }}
                >
                  {/* Circular Avatar */}
                  <div className="relative mb-4">
                    <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-honey/40 shadow-lg shadow-honey/10 group-hover:border-honey/70 group-hover:shadow-honey/20 transition-all duration-300">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.alt}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-secondary flex items-center justify-center">
                          <span className="font-serif text-2xl md:text-3xl font-bold text-honey">
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
                  <h3 className="font-serif text-lg md:text-xl font-bold text-foreground mb-1 whitespace-nowrap">
                    {member.name}
                  </h3>

                  {/* Title */}
                  <p className="text-xs md:text-sm text-honey font-medium mb-2">
                    {member.title}
                  </p>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-[240px]">
                    {member.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
