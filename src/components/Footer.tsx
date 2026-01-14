import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const services = [
    "Content Creation",
    "Performance Marketing",
    "Influencer Campaigns",
    "Strategy & Analytics",
  ];

  return (
    <footer id="footer" className="bg-charcoal-light text-foreground">
      <div className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Logo - Text Only */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-2xl font-bold text-foreground">
                Buzz Craft
              </span>
            </div>

            <p className="text-muted-foreground text-lg mb-2 max-w-md">
              Creative performance marketing that transforms scrollers into loyal customers.
            </p>
            <p className="text-honey text-sm font-medium mb-8">
              Buzzcraftcreatives.com
            </p>

            {/* Services */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                Services
              </h3>
              <ul className="flex flex-wrap justify-center gap-4">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-foreground/80 hover:text-honey transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="https://www.instagram.com/buzzcraft.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-honey hover:text-honey-glow transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@buzzcraft.official</span>
              </a>
              <a
                href="mailto:Buzzcraftcreatives@gmail.com"
                className="inline-flex items-center gap-2 text-honey hover:text-honey-glow transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Buzzcraftcreatives@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30 py-6">
        <div className="container-narrow mx-auto px-5 md:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Buzz Craft. All rights reserved.</p>
            <p>Crafting creativity, one buzz at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
