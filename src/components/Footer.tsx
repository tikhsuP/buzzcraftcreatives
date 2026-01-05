import { useState } from "react";
import { Instagram, Mail, Send, Check } from "lucide-react";
import BeeIcon from "./BeeIcon";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    note: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", brand: "", note: "" });
    }, 3000);
  };

  const services = [
    "Instagram Ads",
    "Reels Strategy",
    "Influencer Promos",
    "Google Ads",
  ];

  return (
    <footer id="footer" className="bg-foreground text-background">
      <div className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div>
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-1.5 bg-background/10 rounded-full">
                  <BeeIcon size="sm" />
                </div>
                <span className="font-serif text-2xl font-semibold">
                  Buzz Craft
                </span>
              </div>

              <p className="text-background/70 text-lg mb-8 max-w-md">
                Creative performance marketing that transforms scrollers into loyal customers.
              </p>

              {/* Services */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-background/50 uppercase tracking-wider mb-4">
                  Services
                </h3>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service}>
                      <a
                        href="#services"
                        className="text-background/80 hover:text-background transition-colors"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Links */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/buzzcraft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-background/80 hover:text-background transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@buzzcraft</span>
                </a>
                <a
                  href="mailto:Buzzcraftcreatives@gmail.com"
                  className="inline-flex items-center gap-2 text-background/80 hover:text-background transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Buzzcraftcreatives@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6">
                Let's Create Together
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/40 focus:outline-none focus:border-background/50 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/40 focus:outline-none focus:border-background/50 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Brand / Company"
                  value={formData.brand}
                  onChange={(e) =>
                    setFormData({ ...formData, brand: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/40 focus:outline-none focus:border-background/50 transition-colors"
                />
                <textarea
                  placeholder="Tell us about your project (max 250 characters)"
                  maxLength={250}
                  rows={3}
                  value={formData.note}
                  onChange={(e) =>
                    setFormData({ ...formData, note: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/40 focus:outline-none focus:border-background/50 transition-colors resize-none"
                />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-background/40">
                    {formData.note.length}/250
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-honey text-foreground rounded-full font-medium hover:bg-honey-dark transition-colors disabled:opacity-70 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitted ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-background/50">
                Thanks — we'll reply within 48 hours. DMs welcome for faster replies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 py-6">
        <div className="container-narrow mx-auto px-5 md:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>© {new Date().getFullYear()} Buzz Craft. All rights reserved.</p>
            <p>Crafting creativity, one buzz at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
