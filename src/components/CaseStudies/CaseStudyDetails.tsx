import React from "react";
import { motion } from "framer-motion";
import type { CaseStudy } from "./types";

interface CaseStudyDetailsProps {
  study: CaseStudy;
}

function CaseStudyDetails({ study }: CaseStudyDetailsProps) {
  return (
    <div className="flex flex-col justify-center h-full">
      {/* Tag */}
      <span className="inline-block w-fit px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs md:text-sm uppercase tracking-wider font-semibold mb-6">
        {study.tag}
      </span>

      {/* Client Logo + Name */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border border-primary/20 bg-card flex-shrink-0">
          <img
            src={study.clientLogo}
            alt={study.clientName}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-lg md:text-xl font-semibold text-foreground">
          {study.clientName}
        </span>
      </div>

      {/* Headline */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6 leading-tight">
        {study.headline}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-lg">
        {study.description}
      </p>

      {/* Metrics */}
      <div className="flex flex-wrap gap-8 md:gap-12">
        {study.metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <div className="flex items-center gap-2 mb-1">
              {/* Metric icon based on value */}
              {metric.value.includes('×') || metric.value.includes('+') ? (
                <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              )}
              <span className="text-2xl md:text-3xl font-bold text-foreground">
                {metric.value}
              </span>
            </div>
            <span className="text-sm md:text-base text-muted-foreground max-w-[180px]">
              {metric.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudyDetails;
