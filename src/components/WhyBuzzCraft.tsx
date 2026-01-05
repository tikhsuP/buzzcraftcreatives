import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";

const smileData = [
  {
    image: portfolio1,
    alt: "Buzz Craft creative ideas showcase",
    word: "CREATIVE",
    position: "left",
    offset: "mt-12 lg:mt-16", // Lower than center
  },
  {
    image: portfolio2,
    alt: "Buzz Craft fast execution",
    word: "FAST",
    position: "center",
    offset: "mt-0", // Highest point
  },
  {
    image: portfolio3,
    alt: "Buzz Craft data-driven results",
    word: "DATA-DRIVEN",
    position: "right",
    offset: "mt-12 lg:mt-16", // Lower than center
  },
];

// Mobile order: FAST (center) first, then CREATIVE (left), then DATA-DRIVEN (right)
const mobileOrder = [smileData[1], smileData[0], smileData[2]];

const WhyBuzzCraft = () => {
  return (
    <section className="py-28 md:py-36 lg:py-44 bg-lavender/5 overflow-hidden">
      <div className="container-narrow mx-auto px-5 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-20 md:mb-28 animate-fade-up">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-wide">
            Why Buzz Craft
          </h2>
        </div>

        {/* Smile-Shaped Layout - Desktop */}
        <div className="hidden lg:block relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-start justify-center gap-8 xl:gap-12">
            {smileData.map((item, index) => (
              <div
                key={item.word}
                className={`relative flex flex-col items-center ${item.offset}`}
              >
                {/* Image Container */}
                <div className="relative group">
                  <div className="w-52 xl:w-60 overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  
                  {/* Keyword positioned beside/overlapping image */}
                  <div
                    className={`absolute ${
                      index === 0
                        ? "-right-4 top-1/2 -translate-y-1/2 translate-x-1/2"
                        : index === 1
                        ? "left-1/2 -translate-x-1/2 -bottom-6"
                        : "-left-4 top-1/2 -translate-y-1/2 -translate-x-1/2"
                    }`}
                  >
                    <span 
                      className="font-serif text-2xl xl:text-3xl font-bold text-charcoal tracking-tight whitespace-nowrap animate-fade-in"
                      style={{ animationDelay: `${0.3 + index * 0.15}s` }}
                    >
                      {item.word}
                      {/* Accent underline */}
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-lavender to-honey opacity-70" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smile-Shaped Layout - Mobile/Tablet */}
        <div className="lg:hidden flex flex-col items-center gap-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {mobileOrder.map((item, index) => (
            <div key={item.word} className="relative flex flex-col items-center">
              {/* Image */}
              <div className="relative group">
                <div className="w-56 md:w-64 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
              </div>
              
              {/* Keyword below image on mobile */}
              <div className="mt-4 text-center">
                <span className="font-serif text-xl md:text-2xl font-bold text-charcoal tracking-tight relative inline-block">
                  {item.word}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-lavender to-honey opacity-70" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Micro-Copy */}
        <div
          className="mt-20 md:mt-28 text-center animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-[50ch] mx-auto leading-relaxed">
            Creative ideas, fast execution, and data-backed decisions that drive real growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyBuzzCraft;
