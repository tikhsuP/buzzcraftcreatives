import { useState } from "react";
import { Menu, X, Instagram, Mail } from "lucide-react";
import BeeIcon from "./BeeIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Process", href: "#process" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-narrow mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <BeeIcon size="sm" animated={false} />
            <span className="font-serif text-xl md:text-2xl font-semibold text-foreground">
              Buzz Craft
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/buzzcraft/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:Buzzcraftcreatives@gmail.com"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email us"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#footer"
              className="px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all duration-300"
            >
              Work With Us
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
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <nav className="container-narrow mx-auto px-5 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-foreground py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <a
                href="https://www.instagram.com/buzzcraft/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="mailto:Buzzcraftcreatives@gmail.com"
                className="flex items-center gap-2 text-foreground"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
            <a
              href="#footer"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 px-5 py-3 text-center font-medium bg-primary text-primary-foreground rounded-full"
            >
              Work With Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
