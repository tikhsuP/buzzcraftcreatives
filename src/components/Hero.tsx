"use client";

import { Instagram, ArrowRight, Mail } from "lucide-react";
import BeeIcon from "./BeeIcon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-poster.jpg"
          className="w-full h-full object-cover"
          aria-label="Creative marketing showcase video"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
        {/* Subtle grain texture */}
        <div className="absolute inset-0 grain-overlay opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-5 md:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating Bee */}
          <div className="flex justify-center mb-6 animate-fade-up">
            <BeeIcon size="lg" />
          </div>

          {/* Headline */}
          <h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6 animate-fade-up drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            style={{ animationDelay: "0.2s" }}
          >
            Crafting Creativity,
            <br />
            <span className="italic text-honey">One Buzz at a Time</span>
          </h1>

          {/* Subhead */}
          <p
            className="text-lg md:text-xl text-foreground/80 mb-10 tracking-widest uppercase font-medium animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Instagram Ads • Reels • Promotions • Google Ads
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://www.instagram.com/buzzcraft.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3.5 bg-honey text-background rounded-full font-semibold hover:bg-honey-dark glow-honey transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              <span>View Our Instagram</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:Buzzcraftcreatives@gmail.com"
              className="flex items-center gap-2 px-6 py-3.5 text-foreground/70 hover:text-honey transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>

          {/* Trust indicator */}
          <p
            className="mt-12 text-sm text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            No long calls required • DMs welcome for quick replies
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-honey/50 rounded-full flex justify-center animate-bounce">
          <div className="w-1.5 h-3 bg-honey/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
