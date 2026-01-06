import { useState } from "react";
import { Menu, X, Instagram, Mail } from "lucide-react";
import BeeIcon from "./BeeIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Team", href: "#team" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
      <div className="container-narrow mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <BeeIcon size="md" animated={false} />
            <span className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Buzz Craft
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-muted-foreground hover:text-honey transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://www.instagram.com/buzzcraft.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-honey transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="mailto:Buzzcraftcreatives@gmail.com"
              className="p-2 text-muted-foreground hover:text-honey transition-colors"
              aria-label="Email us"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border/30 animate-fade-in">
          <nav className="container-narrow mx-auto px-5 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-honey py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-border/30">
              <a
                href="https://www.instagram.com/buzzcraft.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-honey"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="mailto:Buzzcraftcreatives@gmail.com"
                className="flex items-center gap-2 text-honey"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
