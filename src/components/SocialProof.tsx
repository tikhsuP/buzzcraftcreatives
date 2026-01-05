import { Instagram, MessageCircle, ArrowRight } from "lucide-react";
import BeeIcon from "./BeeIcon";

const SocialProof = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center animate-fade-up">
          {/* Header */}
          <div className="flex justify-center mb-4">
            <BeeIcon size="md" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Follow the Buzz
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            See our latest work, behind-the-scenes, and creative inspiration
          </p>

          {/* Instagram CTA Card */}
          <div className="max-w-lg mx-auto">
            <a
              href="https://www.instagram.com/buzzcraft/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 bg-gradient-to-br from-card to-cream-dark rounded-3xl shadow-card hover:shadow-elevated transition-all duration-500 border border-border hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Instagram className="w-10 h-10 text-foreground" />
                <span className="font-serif text-2xl font-semibold text-foreground">
                  @buzzcraft
                </span>
              </div>
              <p className="text-muted-foreground mb-6">
                Creative performance marketing in your feed
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium group">
                <span>Join the Buzz on Instagram</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          {/* DM CTA */}
          <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <MessageCircle className="w-5 h-5" />
            <span>DM us for quick queries — we reply fast!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
