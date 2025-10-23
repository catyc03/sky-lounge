import { Sparkles, Wine, Star } from "lucide-react";
import shishaImage from "@/assets/shishasky.jpg";
const About = () => {
  return <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary">
              Premium Experience
            </h2>
            <div className="space-y-4 text-foreground/90 text-lg leading-relaxed font-inter">
              <p>
                Dobrodošli u SkyLounge – mjesto gdje se svaki trenutak pretvara u doživljaj. 
                U srcu Sanskog Mosta stvorili smo prostor koji odiše elegancijom, toplinom i 
                jedinstvenom atmosferom. Uz premium shisha okuse, sofisticiran ambijent i 
                pažljivo birane detalje, SkyLounge je idealno mjesto za opuštanje, druženje 
                i uživanje u posebnim trenucima.
              </p>
              <p>
                Doživite spoj modernog dizajna, luksuza i autentične shisha tradicije – 
                iskustvo koje se ne zaboravlja.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="feature-card">
                <Sparkles className="text-primary mx-auto mb-2" size={32} />
                <p className="text-3xl font-playfair font-bold text-primary mb-1">20+</p>
                <p className="text-sm text-muted-foreground"> Okusa</p>
              </div>
              <div className="feature-card">
                <Wine className="text-secondary mx-auto mb-2" size={32} />
                <p className="text-3xl font-playfair font-bold text-primary mb-1">100%</p>
                <p className="text-sm text-muted-foreground">Kvalitet</p>
              </div>
              <div className="feature-card">
                <Sparkles className="text-primary mx-auto mb-2" size={32} />
                <p className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-1">VIP</p>
                <p className="text-sm text-muted-foreground">Experience</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <img src={shishaImage} alt="Premium Shisha Setup" className="rounded-lg shadow-2xl w-full h-[600px] object-cover" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;