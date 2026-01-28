import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { CaseStudy } from "./types";
import CaseStudyDetails from "./CaseStudyDetails";
import ImageMotionTrack from "./ImageMotionTrack";

interface CaseStudySectionProps {
  study: CaseStudy;
  index: number;
}

const CaseStudySection = ({ study, index }: CaseStudySectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress for animations
  const progress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const progressValue = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const isDetailsLeft = study.detailPosition === 'left';
  const imageDirection = isDetailsLeft ? 'left' : 'right';

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[130vh] w-full"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="sticky top-0 h-screen w-full flex">
        {/* Details Pane - 45% */}
        <motion.div
          className={`w-[45%] h-full bg-background ${
            isDetailsLeft ? 'order-1' : 'order-2'
          }`}
        >
          <CaseStudyDetails study={study} progress={progressValue.get()} />
        </motion.div>

        {/* Image Motion Track - 55% */}
        <div
          className={`w-[55%] h-full relative bg-muted/20 ${
            isDetailsLeft ? 'order-2' : 'order-1'
          }`}
        >
          <ImageMotionTrack
            images={study.images}
            progress={progress}
            direction={imageDirection}
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
