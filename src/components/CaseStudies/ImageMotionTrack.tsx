import React from "react";
import { motion } from "framer-motion";

interface ImageMotionTrackProps {
  images: string[];
  direction: 'left' | 'right';
}

function ImageMotionTrack({ images, direction }: ImageMotionTrackProps) {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];
  
  // Group images into layout pattern: 1 large, 2 stacked, 1 large, 2 stacked...
  const createImageGroups = (imgs: string[]) => {
    const groups: { type: 'large' | 'stacked'; images: string[] }[] = [];
    let i = 0;
    while (i < imgs.length) {
      // Large image
      if (i < imgs.length) {
        groups.push({ type: 'large', images: [imgs[i]] });
        i++;
      }
      // 2 stacked images
      if (i < imgs.length) {
        const stacked = [imgs[i]];
        i++;
        if (i < imgs.length) {
          stacked.push(imgs[i]);
          i++;
        }
        groups.push({ type: 'stacked', images: stacked });
      }
    }
    return groups;
  };

  const imageGroups = createImageGroups(duplicatedImages);
  
  // Animation direction
  const animateX = direction === 'left' 
    ? ['0%', '-50%'] 
    : ['-50%', '0%'];

  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        className="flex items-center gap-6 md:gap-8 h-full absolute"
        animate={{ x: animateX }}
        transition={{
          x: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        style={{ 
          willChange: 'transform',
        }}
      >
        {imageGroups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className={`flex-shrink-0 h-[85%] ${
              group.type === 'large' ? 'w-[280px] md:w-[320px]' : 'w-[200px] md:w-[240px]'
            }`}
          >
            {group.type === 'large' ? (
              <LargeImage src={group.images[0]} index={groupIndex} />
            ) : (
              <StackedImages images={group.images} index={groupIndex} />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function LargeImage({ src, index }: { src: string; index: number }) {
  return (
    <motion.div
      className="w-full h-full rounded-2xl overflow-hidden shadow-2xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={src}
        alt={`Case study visual`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </motion.div>
  );
}

function StackedImages({ images, index }: { images: string[]; index: number }) {
  return (
    <div className="flex flex-col gap-5 md:gap-6 h-full">
      {images.map((src, imgIndex) => (
        <motion.div
          key={imgIndex}
          className="flex-1 rounded-2xl overflow-hidden shadow-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={src}
            alt={`Case study visual`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </motion.div>
      ))}
    </div>
  );
}

export default ImageMotionTrack;
