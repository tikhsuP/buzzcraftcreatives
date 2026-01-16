import { useState } from "react";
import { Instagram, Mail, ArrowRight, Send } from "lucide-react";
const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const services = [{
    name: "Content Creation",
    href: "#services"
  }, {
    name: "Performance Marketing",
    href: "#services"
  }, {
    name: "Influencer Campaigns",
    href: "#services"
  }, {
    name: "Strategy & Analytics",
    href: "#services"
  }];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Encode and redirect to Instagram DM or mailto
    const subject = encodeURIComponent("Quote Request from Website");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    window.location.href = `mailto:Buzzcraftcreatives@gmail.com?subject=${subject}&body=${body}`;
  };
  return <footer id="footer" className="bg-background text-foreground">
      {/* Pre-Footer CTA Band */}
      <div className="relative py-16 md:py-20 overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />
        
        {/* Subtle glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-honey/[0.03] rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-5 md:px-8">
          <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-card via-card to-muted/10 border border-honey/20 shadow-lg overflow-hidden">
            {/* Gold glow border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-honey/5 via-transparent to-honey/5 pointer-events-none" />
            
            <div className="relative text-center">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Ready to grow with <span className="text-honey">BuzzCraftCreatives</span>?
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Get a content + ads plan built to generate leads, not just likes.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a href="https://www.instagram.com/buzzcraftcreatives/" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-honey text-background rounded-full font-bold hover:bg-honey-dark transition-all duration-300">
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://www.instagram.com/buzzcraft.official/" target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-honey/40 text-honey rounded-full font-bold hover:bg-honey/10 transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                  <span>DM Us on Instagram</span>
                </a>
              </div>
              
              {/* Microcopy */}
              <p className="text-sm text-muted-foreground/70">
                We reply within 24–48 hours. For quick answers, DM us.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      {/* Main Footer */}
      <div className="py-12 md:py-16 bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            
            {/* Column 1 - Brand */}
            <div className="lg:col-span-1">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                BuzzCraftCreatives
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Creative performance marketing for brands that want real growth.
              </p>
              <a href="https://buzzcraftcreatives.com" className="text-honey text-sm font-medium hover:text-honey-glow transition-colors">
                Buzzcraftcreatives.com
              </a>
            </div>

            {/* Column 2 - Services */}
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-5">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map(service => <li key={service.name}>
                    <a href={service.href} className="text-foreground/80 hover:text-honey transition-colors text-sm">
                      {service.name}
                    </a>
                  </li>)}
              </ul>
            </div>

            {/* Column 3 - Contact */}
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-5">
                Contact
              </h4>
              <div className="space-y-4">
                <a href="https://www.instagram.com/buzzcraft.official/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/80 hover:text-honey transition-colors text-sm">
                  <Instagram className="w-4 h-4 text-honey" />
                  <span>@buzzcraft.official</span>
                </a>
                <a href="mailto:Buzzcraftcreatives@gmail.com" className="flex items-center gap-2 text-foreground/80 hover:text-honey transition-colors text-sm">
                  <Mail className="w-4 h-4 text-honey" />
                  <span>Buzzcraftcreatives@gmail.com</span>
                </a>
                <p className="text-xs text-muted-foreground/60 mt-3">
                  DMs welcome for faster replies.
                </p>
              </div>
            </div>

            {/* Column 4 - Mini Form */}
            
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="py-5 bg-charcoal border-t border-border/20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground/60">
            <p>© 2026 BuzzCraftCreatives.com — All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-honey transition-colors">Privacy</a>
              <span className="text-border/50">•</span>
              <a href="#" className="hover:text-honey transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;