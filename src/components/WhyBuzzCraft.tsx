import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";

const keywords = [
  {
    word: "CREATIVE",
    description: "Ideas designed to stop the scroll and build brands",
  },
  {
    word: "FAST",
    description: "Rapid execution, testing, and optimization",
  },
  {
    word: "DATA-DRIVEN",
    description: "Decisions backed by performance metrics, not guesswork",
  },
];

const images = [
  { src: portfolio1, alt: "Buzz Craft creative work showcase" },
  { src: portfolio2, alt: "Buzz Craft team collaboration" },
  { src: portfolio3, alt: "Buzz Craft advertising campaign" },
];

const WhyBuzzCraft = () => {
  return (
    <section className="py-24 md:py-32 bg-lavender/10 overflow-hidden">
      <div className="container-narrow mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Why Buzz Craft?
          </h2>
        </div>

        {/* Words in Motion Layout */}
        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {/* Images Row with Keywords Between */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">
            {images.map((image, index) => (
              <div key={index} className="flex items-center">
                {/* Image */}
                <div className="relative group">
                  <div className="w-64 md:w-72 lg:w-56 xl:w-64 overflow-hidden rounded-2xl shadow-md">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Keyword between images (not after last) */}
                {index < images.length - 1 && (
                  <div className="hidden lg:flex flex-col items-center justify-center px-6 xl:px-10">
                    <span className="font-serif text-2xl xl:text-3xl font-bold text-foreground tracking-tight relative">
                      {keywords[index].word}
                      {/* Animated underline */}
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-lavender to-honey animate-pulse" />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Keywords (shown below images on mobile) */}
          <div className="flex lg:hidden flex-wrap justify-center gap-6 mt-10">
            {keywords.map((keyword) => (
              <span
                key={keyword.word}
                className="font-serif text-xl font-bold text-foreground tracking-tight relative"
              >
                {keyword.word}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-lavender to-honey animate-pulse" />
              </span>
            ))}
          </div>
        </div>

        {/* Supporting Copy */}
        <div
          className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {keywords.map((keyword) => (
            <div key={keyword.word} className="text-center">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {keyword.word}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[40ch] mx-auto">
                {keyword.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuzzCraft;
