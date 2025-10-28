import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/slylogo.jpg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SkyLounge Logo" className="h-12 w-12 rounded-full object-cover" />
            <span className="text-2xl font-playfair font-bold text-primary">SkyLounge</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection("menu")} className="nav-link">
              Menu
            </button>
            <button onClick={() => scrollToSection("gallery")} className="nav-link">
              Gallery
            </button>
            <button onClick={() => scrollToSection("contact")} className="nav-link">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 animate-fade-in bg-background/95 backdrop-blur-md rounded-lg px-4">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left nav-link">
              About
            </button>
            <button onClick={() => scrollToSection("menu")} className="block w-full text-left nav-link">
              Menu
            </button>
            <button onClick={() => scrollToSection("gallery")} className="block w-full text-left nav-link">
              Gallery
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left nav-link">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
