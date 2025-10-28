import heroImage from "@/assets/sky.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="SkyLounge Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-primary mb-6 leading-tight">
          Doživite luksuz.<br />Osjetite atmosferu.
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto font-inter">
          SkyLounge – mjesto gdje svaki trenutak postaje poseban
        </p>
        <button
          onClick={scrollToContact}
          className="btn-primary text-lg px-8 py-4"
        >
          Kontaktirajte nas
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={40} className="text-primary" />
      </div>
    </section>
  );
};

export default Hero;
