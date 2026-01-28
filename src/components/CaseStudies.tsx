import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";

// Import existing assets for image stacks
import portfolioImg1 from "@/assets/portfolio-1.png";
import portfolioImg2 from "@/assets/portfolio-2.png";
import portfolioImg3 from "@/assets/portfolio-3.png";
import contentShooting from "@/assets/content-shoot.png";
import contentEditing from "@/assets/content-editing.png";
import strategyPlanning from "@/assets/strategy-planning.png";
import strategyBoard from "@/assets/strategy-board.png";
import performanceAnalytics from "@/assets/performance-analytics.png";
import performancePlanning from "@/assets/performance-planning.png";
import influencerCollab from "@/assets/influencer-collab.png";
import influencerCreator from "@/assets/influencer-creator.png";

interface CaseStudy {
  id: number;
  title: string;
  headline: string;
  description: string;
  metrics: { value: string; label: string }[];
  images: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Fashion Route",
    headline: "Driving Visibility & Brand Participation for Fashion Route",
    description:
      "We built a structured social media growth strategy for Fashion Route, a fashion and lifestyle exhibition brand curating showcases for clothing and jewellery labels. Our focus was on consistent visibility, event discovery, and positioning the exhibitions as must-attend platforms for both visitors and brands.\n\nThrough strategic content planning, reels, and promotional storytelling, we strengthened their Instagram presence and amplified awareness around upcoming exhibitions—resulting in increased interest from both audiences and participating brands.",
    metrics: [
      { value: "2.5×", label: "Growth — Increase in Instagram followers within 6 months" },
      { value: "+275%", label: "Visibility — Stronger brand recall and higher participation from fashion labels" },
    ],
    images: [portfolioImg1, contentShooting, strategyPlanning, portfolioImg2, contentEditing, strategyBoard],
  },
  {
    id: 2,
    title: "New Age Customs",
    headline: "Building Brand Awareness & Traffic for New Age Customs",
    description:
      "New Age Customs is a custom sneaker and footwear personalization brand. We built their social media presence entirely from scratch, starting with brand positioning, content direction, and a visibility-first growth strategy.\n\nOur approach focused on high-reach reels, visual storytelling, and curiosity-driven content that directed users to explore the brand further—driving both social discovery and website interest within a short time frame.",
    metrics: [
      { value: "50,000+", label: "Impressions — Instagram reach generated in the first 30 days" },
      { value: "2,000+", label: "Website Impressions — Traffic driven through focused social media execution" },
    ],
    images: [portfolioImg3, performanceAnalytics, influencerCollab, portfolioImg1, performancePlanning, influencerCreator],
  },
  {
    id: 3,
    title: "Fairytale Balloons",
    headline: "Scaling Reach & Bookings for Fairytale Balloons",
    description:
      "Fairytale Balloons is a premium balloon décor brand specialising in event installations for celebrations and special occasions. We implemented a consistent content and promotion strategy designed to increase visibility and convert attention into bookings.\n\nBy combining reels, visual storytelling, and targeted promotions, we helped the brand expand its digital presence and turn Instagram into a reliable discovery channel for new customers.",
    metrics: [
      { value: "70,000+", label: "Impressions — Instagram visibility generated in 4 months" },
      { value: "3×", label: "Increase in Installations — Monthly installs grew from 5–7 to ~20 per month" },
    ],
    images: [contentShooting, portfolioImg2, strategyBoard, contentEditing, portfolioImg3, strategyPlanning],
  },
  {
    id: 4,
    title: "Corporate Events & Experiences",
    headline: "Enhancing Participation & Engagement for Corporate Events",
    description:
      "We've worked with multiple corporate clients across conferences, team-building activities, and corporate gifting experiences. Our role involved strategic planning, content support, and promotion to improve participation and overall event impact.\n\nBy aligning messaging with audience intent and executing well-structured promotion, we helped corporate events achieve stronger engagement and smoother execution across formats.",
    metrics: [
      { value: "Higher", label: "Participation Rates — Improved attendee turnout across events" },
      { value: "Stronger", label: "Engagement — More meaningful interaction through planned promotion" },
    ],
    images: [performanceAnalytics, influencerCreator, portfolioImg1, performancePlanning, influencerCollab, portfolioImg2],
  },
  {
    id: 5,
    title: "Aamaira Studio",
    headline: "Establishing Visual Identity for Aamaira Studio",
    description:
      "Aamaira Studio is a fashion brand where we developed their visual identity and content strategy from the ground up. We focused on showcasing their unique designs through curated content that resonates with their target audience.\n\nOur approach combined aesthetic storytelling with strategic posting schedules to build consistent brand visibility and attract the right customer base.",
    metrics: [
      { value: "Consistent", label: "Brand Identity — Established strong visual recognition" },
      { value: "Growing", label: "Engagement — Steady increase in audience interaction" },
    ],
    images: [strategyPlanning, portfolioImg3, contentShooting, strategyBoard, portfolioImg1, contentEditing],
  },
  {
    id: 6,
    title: "Fairytale Proposals",
    headline: "Creating Emotional Connections for Fairytale Proposals",
    description:
      "Fairytale Proposals is a romantic proposal planning brand creating magical moments. We built their content strategy to capture heartwarming stories and drive enquiries from couples looking to create unforgettable memories.\n\nThrough emotional storytelling and strategic content placement, we helped position the brand as the go-to choice for romantic proposal experiences.",
    metrics: [
      { value: "Increased", label: "Bookings — Higher proposal enquiries and conversions" },
      { value: "Emotional", label: "Connection — Stronger brand affinity through storytelling" },
    ],
    images: [influencerCollab, portfolioImg2, performanceAnalytics, influencerCreator, portfolioImg3, performancePlanning],
  },
];

const ImageStack = ({
  images,
  direction,
  scrollProgress,
}: {
  images: string[];
  direction: "left" | "right";
  scrollProgress: MotionValue<number>;
}) => {
  const shouldReduceMotion = useReducedMotion();
  const parallaxX = useTransform(
    scrollProgress,
    [0, 1],
    direction === "right" ? [40, -40] : [-40, 40]
  );

  const imageSizes = [
    "w-48 h-64 md:w-64 md:h-80",
    "w-36 h-48 md:w-48 md:h-64",
    "w-40 h-52 md:w-56 md:h-72",
    "w-32 h-44 md:w-44 md:h-60",
    "w-36 h-48 md:w-52 md:h-68",
    "w-28 h-40 md:w-40 md:h-56",
  ];

  const imageOffsets = [
    "z-30 translate-y-0",
    "z-20 -translate-y-8 md:-translate-y-12",
    "z-25 translate-y-4 md:translate-y-6",
    "z-15 -translate-y-4 md:-translate-y-8",
    "z-20 translate-y-8 md:translate-y-10",
    "z-10 -translate-y-2 md:-translate-y-4",
  ];

  return (
    <motion.div
      style={{ x: shouldReduceMotion ? 0 : parallaxX }}
      className="relative h-[400px] md:h-[500px] group"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`flex items-center gap-[-20px] md:gap-[-30px] ${
          direction === "left" ? "flex-row-reverse justify-end" : "flex-row justify-start"
        }`}
      >
        {images.slice(0, 6).map((img, index) => (
          <motion.div
            key={index}
            className={`relative rounded-2xl overflow-hidden shadow-lg ${imageSizes[index]} ${imageOffsets[index]} ${
              direction === "left" ? "-ml-8 md:-ml-12" : "-mr-8 md:-mr-12"
            } first:ml-0 first:mr-0 group-hover:shadow-xl transition-shadow duration-300`}
            initial={{ opacity: 0, x: direction === "right" ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: shouldReduceMotion ? 0.1 : 0.6,
              delay: shouldReduceMotion ? 0 : index * 0.06,
              ease: "easeOut",
            }}
          >
            <img
              src={img}
              alt={`Case study visual ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const CaseStudyRow = ({
  study,
  index,
  isReversed,
}: {
  study: CaseStudy;
  index: number;
  isReversed: boolean;
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div ref={rowRef} className="relative py-16 md:py-24 lg:py-32">
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
        <motion.div
          className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--honey)/0.5)]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />
      </div>

      <div
        className={`container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          isReversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Content Side */}
        <motion.div
          className={`space-y-6 md:space-y-8 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
          style={{ y: shouldReduceMotion ? 0 : parallaxY }}
          initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0.1 : 0.7,
            ease: "easeOut",
          }}
        >
          <div className="space-y-4">
            <span className="inline-block text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-primary">
              {study.title}
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight">
              {study.headline}
            </h3>
          </div>

          <div className="space-y-4">
            {study.description.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {study.metrics.map((metric, i) => (
              <motion.div
                key={i}
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                <span className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary">
                  {metric.value}
                </span>
                <p className="text-sm md:text-base text-muted-foreground">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Side */}
        <div className={`${isReversed ? "lg:order-1" : "lg:order-2"} overflow-hidden`}>
          <ImageStack
            images={study.images}
            direction={isReversed ? "left" : "right"}
            scrollProgress={scrollYProgress}
          />
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="relative bg-background overflow-hidden"
    >
      {/* Vertical Timeline Line */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      {/* Section Header */}
      <div className="container mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-12 md:pb-16 text-center relative z-10">
        <motion.span
          className="inline-block text-base md:text-lg font-semibold tracking-[0.2em] uppercase text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Case Studies
        </motion.span>
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Real brands. Real growth.
        </motion.h2>
      </div>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <CaseStudyRow
          key={study.id}
          study={study}
          index={index}
          isReversed={index % 2 !== 0}
        />
      ))}

      {/* Bottom Gradient */}
      <div className="h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default CaseStudies;
