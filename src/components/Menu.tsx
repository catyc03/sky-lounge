import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Afrika Queen", category: "premium", price: "10 KM" },
  { name: "Black Nana", category: "premium", price: "10 KM" },
  { name: "Grape Mint", category: "classic", price: "10 KM" },
  { name: "Peach", category: "classic", price: "10 KM" },
  { name: "Moskva / Lubenica", category: "classic", price: "10 KM" },
  { name: "Swiss Bonbon", category: "classic", price: "10 KM" },
  { name: "Menta", category: "classic", price: "10 KM" },
  { name: "Cola", category: "classic", price: "10 KM" },
  { name: "Blue Ice", category: "classic", price: "10 KM" },
  { name: "Limun", category: "classic", price: "10 KM" },
  { name: "Ananas", category: "classic", price: "10 KM" },
  { name: "Love 66", category: "classic", price: "10 KM" },
  { name: "Joker", category: "classic", price: "10 KM" },
  { name: "Double Melon", category: "classic", price: "10 KM" },
  { name: "Keks", category: "classic", price: "10 KM" },
  { name: "Limeta", category: "classic", price: "10 KM" },
  { name: "Cherry", category: "classic", price: "10 KM" },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            SkyLounge Menu
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-inter">
            Odaberite svoj savršeni okus - svaka shisha je priprema sa pažnjom i Premium kvalitetom
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`category-btn ${activeCategory === "all" ? "active" : ""}`}
          >
            Svi Okusi
          </button>
          <button
            onClick={() => setActiveCategory("premium")}
            className={`category-btn ${activeCategory === "premium" ? "active" : ""}`}
          >
            Premium
          </button>
          <button
            onClick={() => setActiveCategory("classic")}
            className={`category-btn ${activeCategory === "classic" ? "active" : ""}`}
          >
            Classic
          </button>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="menu-card group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      item.category === "premium"
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary/20 text-secondary"
                    }`}
                  >
                    {item.category === "premium" ? "Premium" : "Classic"}
                  </span>
                </div>
                <p className="text-2xl font-playfair font-bold text-primary">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-foreground/70 mb-6 font-inter">
            Svi naši premium okusi su dostupni i sa ice opcijom za dodatnu osvježavnost
          </p>
          <Link
            to="/menu"
            className="btn-primary inline-block"
          >
            Pogledaj cijeli meni
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
