import React from "react";
import { motion } from "framer-motion";
import type { CaseStudy } from "./types";
import CaseStudyDetails from "./CaseStudyDetails";
import ImageMotionTrack from "./ImageMotionTrack";

interface CaseStudySectionProps {
  study: CaseStudy;
  index: number;
}

function CaseStudySection({ study, index }: CaseStudySectionProps) {
  const isDetailsLeft = study.detailPosition === 'left';
  const imageDirection = isDetailsLeft ? 'left' : 'right';

  return (
    <section
      className="relative min-h-screen w-full py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-8 h-full">
        <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center min-h-[80vh] ${
          isDetailsLeft ? '' : 'lg:flex-row-reverse'
        }`}>
          {/* Details Pane - 45% */}
          <motion.div
            className="w-full lg:w-[45%]"
            initial={{ opacity: 0, x: isDetailsLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <CaseStudyDetails study={study} />
          </motion.div>

          {/* Image Motion Track - 55% */}
          <motion.div
            className="w-full lg:w-[55%] h-[500px] md:h-[600px] lg:h-[700px] relative"
            initial={{ opacity: 0, x: isDetailsLeft ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <ImageMotionTrack
              images={study.images}
              direction={imageDirection}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudySection;
