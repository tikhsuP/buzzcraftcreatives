import { useEffect, useState } from "react";
import BeeIcon from "./BeeIcon";

const CursorBee = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-[100] transition-all duration-200 ease-out"
      style={{
        left: position.x + 20,
        top: position.y - 10,
        opacity: isVisible ? 1 : 0,
        transform: `scale(${isVisible ? 1 : 0.5})`,
      }}
    >
      <div className="animate-float">
        <BeeIcon size="sm" />
      </div>
    </div>
  );
};

export default CursorBee;
