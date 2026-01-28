import { Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const FloatingContact = () => {
  const isMobile = useIsMobile();
  const phoneNumber = "+919122801777";
  const displayNumber = "+91 9122801777";

  if (isMobile) {
    // Mobile: Bottom-right floating button
    return (
      <a
        href={`tel:${phoneNumber}`}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary via-honey to-honey-dark text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
    );
  }

  // Desktop: Vertical pill on the right side
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 group"
      aria-label="Call us"
    >
      <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-b from-primary via-honey to-honey-dark text-primary-foreground rounded-l-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:pr-6 transition-all duration-300 origin-right">
        <Phone className="w-5 h-5 flex-shrink-0" />
        <span 
          className="font-semibold text-sm whitespace-nowrap [writing-mode:vertical-rl] rotate-180"
        >
          {displayNumber}
        </span>
      </div>
    </a>
  );
};

export default FloatingContact;
