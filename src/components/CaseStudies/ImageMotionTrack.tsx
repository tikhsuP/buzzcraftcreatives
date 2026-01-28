import { motion, useTransform, MotionValue } from "framer-motion";

interface ImageMotionTrackProps {
  images: string[];
  progress: MotionValue<number>;
  direction: 'left' | 'right';
}

const ImageMotionTrack = ({ images, progress, direction }: ImageMotionTrackProps) => {
  // Different sizes for visual variety
  const imageSizes = [
    { width: 280, height: 380, zIndex: 3 },
    { width: 220, height: 300, zIndex: 2 },
    { width: 260, height: 350, zIndex: 4 },
    { width: 200, height: 280, zIndex: 1 },
    { width: 240, height: 320, zIndex: 3 },
    { width: 220, height: 290, zIndex: 2 },
  ];

  // Vertical offsets for ribbon-like stacking
  const verticalOffsets = [-40, 20, -20, 40, 0, -30];

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        {images.map((image, index) => {
          const size = imageSizes[index % imageSizes.length];
          const vOffset = verticalOffsets[index % verticalOffsets.length];
          
          // Calculate position based on scroll progress
          // Each image enters at different progress points
          const imageStartProgress = index * 0.12;
          const imageEndProgress = imageStartProgress + 0.5;
          
          // Transform for horizontal movement
          const startX = direction === 'left' ? 140 : -140;
          const endX = direction === 'left' ? -100 : 100;
          
          const x = useTransform(
            progress,
            [imageStartProgress, imageEndProgress],
            [startX, endX]
          );
          
          const opacity = useTransform(
            progress,
            [imageStartProgress, imageStartProgress + 0.1, imageEndProgress - 0.1, imageEndProgress],
            [0, 1, 1, 0]
          );

          // Horizontal spread for overlapping ribbon effect
          const baseLeft = direction === 'left' 
            ? `${20 + index * 12}%`
            : `${60 - index * 12}%`;

          return (
            <motion.div
              key={index}
              className="absolute rounded-2xl overflow-hidden shadow-2xl"
              style={{
                width: size.width,
                height: size.height,
                zIndex: size.zIndex,
                top: `calc(50% + ${vOffset}px)`,
                left: baseLeft,
                transform: 'translateY(-50%)',
                x,
                opacity,
              }}
            >
              <img
                src={image}
                alt={`Case study visual ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageMotionTrack;
