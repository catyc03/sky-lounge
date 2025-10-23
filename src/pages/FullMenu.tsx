import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const allMenuItems = [{
  name: "Afrika Queen",
  category: "premium",
  price: "10 KM"
}, {
  name: "Black Nana",
  category: "premium",
  price: "10 KM"
}, {
  name: "Grape Mint",
  category: "classic",
  price: "10 KM"
}, {
  name: "Peach",
  category: "classic",
  price: "10 KM"
}, {
  name: "Moskva / Lubenica",
  category: "classic",
  price: "10 KM"
}, {
  name: "Swiss Bonbon",
  category: "classic",
  price: "10 KM"
}, {
  name: "Menta",
  category: "classic",
  price: "10 KM"
}, {
  name: "Cola",
  category: "classic",
  price: "10 KM"
}, {
  name: "Blue Ice",
  category: "classic",
  price: "10 KM"
}, {
  name: "Limun",
  category: "classic",
  price: "10 KM"
}, {
  name: "Ananas",
  category: "classic",
  price: "10 KM"
}, {
  name: "Love 66",
  category: "classic",
  price: "10 KM"
}, {
  name: "Joker",
  category: "classic",
  price: "10 KM"
}, {
  name: "Double Melon",
  category: "classic",
  price: "10 KM"
}, {
  name: "Keks",
  category: "classic",
  price: "10 KM"
}, {
  name: "Limeta",
  category: "classic",
  price: "10 KM"
}, {
  name: "Cherry",
  category: "classic",
  price: "10 KM"
}, {
  name: "Jagoda",
  category: "classic",
  price: "10 KM"
}];
const FullMenu = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-inter">
            <ArrowLeft size={20} />
            Nazad na početnu
          </Link>

          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Kompletan SkyLounge Menu
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-inter">
              Svi naši premium i classic okusi, pažljivo pripremljeni za savršeno iskustvo
            </p>
          </div>

          {/* Premium Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-8 text-center">
              Premium Okusi
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allMenuItems.filter(item => item.category === "premium").map((item, index) => <div key={index} className="menu-card group" style={{
              animationDelay: `${index * 0.05}s`
            }}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-playfair font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">
                          Premium
                        </span>
                      </div>
                      <p className="text-2xl font-playfair font-bold text-primary">
                        {item.price}
                      </p>
                    </div>
                  </div>)}
            </div>
          </div>

          {/* Classic Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-8 text-center">
              Classic Okusi
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allMenuItems.filter(item => item.category === "classic").map((item, index) => <div key={index} className="menu-card group" style={{
              animationDelay: `${index * 0.05}s`
            }}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-playfair font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-xs px-2 py-1 rounded bg-secondary/20 text-secondary">
                          Classic
                        </span>
                      </div>
                      <p className="text-2xl font-playfair font-bold text-primary">
                        {item.price}
                      </p>
                    </div>
                  </div>)}
            </div>
          </div>

          
        </div>
      </section>

      <Footer />
    </div>;
};
export default FullMenu;