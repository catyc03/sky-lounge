import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/slylogo.jpg";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="SkyLounge Logo" className="h-12 w-12 rounded-full object-cover" />
              <span className="text-2xl font-playfair font-bold text-primary">SkyLounge</span>
            </div>
            <p className="text-foreground/70 font-inter">
              Premium shisha experience u srcu Sanskog Mosta.<br />
              Luksuz, kvalitet i nezaboravna atmosfera.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-playfair font-semibold text-primary mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button onClick={() => scrollToSection("home")} className="block text-foreground/70 hover:text-primary transition-colors font-inter">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="block text-foreground/70 hover:text-primary transition-colors font-inter">
                About
              </button>
              <button onClick={() => scrollToSection("menu")} className="block text-foreground/70 hover:text-primary transition-colors font-inter">
                Menu
              </button>
              <button onClick={() => scrollToSection("gallery")} className="block text-foreground/70 hover:text-primary transition-colors font-inter">
                Gallery
              </button>
              <button onClick={() => scrollToSection("booking")} className="block text-foreground/70 hover:text-primary transition-colors font-inter">
                Reservations
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-playfair font-semibold text-primary mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/skyloungesl"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-foreground/60 text-sm font-inter">
            © 2025 SkyLounge. All rights reserved. Premium Shisha Experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
