import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageMotionTrackProps {
  images: string[];
  direction: 'left' | 'right';
}

function ImageMotionTrack({ images, direction }: ImageMotionTrackProps) {
  // Distribute images into 3 columns
  const columns = [
    [images[0], images[3]],
    [images[1], images[4]],
    [images[2], images[5]],
  ];

  // Column heights for masonry effect
  const columnConfigs = [
    { marginTop: '8%', animationDirection: 'up' as const },
    { marginTop: '-5%', animationDirection: 'down' as const },
    { marginTop: '12%', animationDirection: 'up' as const },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center gap-4 px-4">
      {columns.map((columnImages, colIndex) => (
        <ImageColumn
          key={colIndex}
          images={columnImages}
          config={columnConfigs[colIndex]}
          columnIndex={colIndex}
        />
      ))}
    </div>
  );
}

interface ImageColumnProps {
  images: string[];
  config: { marginTop: string; animationDirection: 'up' | 'down' };
  columnIndex: number;
}

function ImageColumn({ images, config, columnIndex }: ImageColumnProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000 + columnIndex * 500); // Stagger timing per column

    return () => clearInterval(interval);
  }, [images.length, columnIndex]);

  const yDirection = config.animationDirection === 'up' ? -20 : 20;

  return (
    <div 
      className="flex flex-col gap-4 w-[30%]"
      style={{ marginTop: config.marginTop }}
    >
      {images.map((image, index) => (
        <motion.div
          key={`${image}-${index}`}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          style={{
            aspectRatio: index === 0 ? '3/4' : '4/5',
          }}
          initial={{ opacity: 0.6, y: yDirection }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: currentIndex === index ? 1.02 : 1,
          }}
          transition={{ 
            duration: 0.9, 
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.15
          }}
        >
          <motion.img
            src={image}
            alt={`Case study visual`}
            className="w-full h-full object-cover"
            loading="lazy"
            animate={{
              scale: currentIndex === index ? 1.05 : 1,
            }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </motion.div>
      ))}
    </div>
  );
}

export default ImageMotionTrack;
