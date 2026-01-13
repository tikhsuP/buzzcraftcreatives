"use client";

import { Instagram, ArrowRight, Mail, FileText, Eye } from "lucide-react";
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

          {/* SEO Keyword Tagline */}
          <p
            className="text-xs sm:text-sm font-semibold text-honey uppercase tracking-[0.2em] mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Social Media Marketing • Content Creation • Brand Strategy • Performance Ads • Google Ads
          </p>

          {/* Headline H1 */}
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            style={{ animationDelay: "0.2s" }}
          >
            We Build Brands That Look{" "}
            <span className="italic text-honey">Premium</span> and Sell Better Online.
          </h1>

          {/* Subhead */}
          <p
            className="text-base md:text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            Buzz Craft helps businesses grow with content, strategy, and performance marketing that drives real results — not vanity metrics.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 px-7 py-4 bg-honey text-background rounded-full font-bold hover:bg-honey-dark glow-honey transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="group flex items-center gap-2 px-6 py-3.5 border-2 border-honey/50 text-foreground rounded-full font-semibold hover:border-honey hover:bg-honey/10 transition-all duration-300"
            >
              <Eye className="w-5 h-5" />
              <span>View Our Work</span>
            </a>
          </div>

          {/* Email CTA */}
          <div
            className="mt-6 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="mailto:Buzzcraftcreatives@gmail.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-honey transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Buzzcraftcreatives@gmail.com</span>
            </a>
          </div>

          {/* Trust indicator */}
          <p
            className="mt-10 text-sm text-muted-foreground animate-fade-in"
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
