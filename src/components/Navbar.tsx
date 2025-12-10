import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage) {
      e.preventDefault();
      navigate("/" + href);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled || !isHomePage
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3 sm:py-4"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="container-narrow mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Sai Rakesh Interiors"
              className={`h-10 sm:h-12 md:h-14 w-auto transition-all duration-300 ${
                isScrolled || !isHomePage ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70 ${
                  isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button
              variant={isScrolled || !isHomePage ? "elegant" : "hero"}
              size="sm"
              className="ml-4"
              onClick={(e) => {
                if (!isHomePage) {
                  e.preventDefault();
                  navigate("/#contact");
                }
              }}
              asChild
            >
              <a href="#contact">Contact</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg py-6 px-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleNavClick(e, link.href);
                  }}
                  className="text-foreground text-lg font-medium py-2 border-b border-border"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                variant="elegant" 
                className="mt-4 w-full" 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (!isHomePage) {
                    navigate("/#contact");
                  }
                }}
                asChild
              >
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
