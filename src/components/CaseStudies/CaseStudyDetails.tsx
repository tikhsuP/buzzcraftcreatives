import { motion } from "framer-motion";
import type { CaseStudy } from "./types";

interface CaseStudyDetailsProps {
  study: CaseStudy;
  progress: number;
}

const CaseStudyDetails = ({ study, progress }: CaseStudyDetailsProps) => {
  return (
    <motion.div
      className="flex flex-col justify-center h-full px-8 md:px-12 lg:px-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: progress > 0.1 ? 1 : 0, y: progress > 0.1 ? 0 : 30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Tag */}
      <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">
        {study.tag}
      </span>

      {/* Client Logo */}
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-6 border-2 border-primary/20">
        <img
          src={study.clientLogo}
          alt={study.clientName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Headline */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6 leading-tight">
        {study.headline}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-md">
        {study.description}
      </p>

      {/* Metrics */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
        {study.metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: progress > 0.2 + index * 0.1 ? 1 : 0, 
              y: progress > 0.2 + index * 0.1 ? 0 : 20 
            }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-3xl md:text-4xl font-bold text-primary mb-1">
              {metric.value}
            </span>
            <span className="text-sm md:text-base text-muted-foreground">
              {metric.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CaseStudyDetails;
