import React, { useRef } from "react";
import type { CaseStudy } from "./types";
import CaseStudySection from "./CaseStudySection";

// Fashion Route Images
import fashionRoute1 from "@/assets/case-fashion-route-1.png";
import fashionRoute2 from "@/assets/case-fashion-route-2.png";
import fashionRoute3 from "@/assets/case-fashion-route-3.png";
import fashionRoute4 from "@/assets/case-fashion-route-4.png";
import fashionRoute5 from "@/assets/case-fashion-route-5.png";
import fashionRoute6 from "@/assets/case-fashion-route-6.png";

// Client logo
import fashionRouteLogo from "@/assets/client-fashion-route.png";

const caseStudies: CaseStudy[] = [
  {
    id: "fashion-route",
    tag: "Reels Growth",
    clientName: "Fashion Route",
    clientLogo: fashionRouteLogo,
    headline: "Driving Visibility & Brand Participation for Fashion Route",
    description: "A fashion and lifestyle exhibition brand curating showcases for clothing and jewellery labels. We focused on building consistent Instagram visibility to attract visitors, participating brands, and industry attention.",
    metrics: [
      { value: "2.5×", label: "Growth in Instagram followers in 6 months" },
      { value: "Higher", label: "Brand Participation for exhibitions" }
    ],
    images: [
      fashionRoute1,
      fashionRoute2,
      fashionRoute3,
      fashionRoute4,
      fashionRoute5,
      fashionRoute6
    ],
    detailPosition: 'left'
  }
];

function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="case-studies" className="relative bg-card/30">
      {/* Section Header */}
      <div className="container mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-primary/50" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
            <span className="text-primary">CASE</span>
            <span className="text-foreground">STUDIES</span>
          </h2>
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          Deep dives into how we helped brands grow with content, strategy, and performance marketing.
        </p>
      </div>

      {/* Case Studies Container */}
      <div ref={containerRef}>
        {caseStudies.map((study, index) => (
          <CaseStudySection key={study.id} study={study} index={index} />
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;
