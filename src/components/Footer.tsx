import { Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-narrow mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="Sai Rakesh Interiors" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
              Creating beautiful, functional spaces that reflect your unique
              story and enhance your everyday life.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-3 bg-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-3 bg-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "Portfolio", "About", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Interior Design",
                "Space Planning",
                "Consultation",
                "Renovation",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Sai Rakesh Interiors. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
