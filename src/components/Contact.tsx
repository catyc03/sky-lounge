import { MapPin, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Contact & Location
          </h2>
          <p className="text-lg text-foreground/80 font-inter">
            Posjetite nas i doživite luksuz premium shisha bara
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <div className="contact-card">
              <MapPin className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                Adresa
              </h3>
              <p className="text-foreground/80 font-inter">
                Prijedorska ulica<br />
                Sanski Most, Bosna i Hercegovina
              </p>
            </div>

            <div className="contact-card">
              <Clock className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                Radno Vrijeme
              </h3>
              <p className="text-foreground/80 font-inter">
                Svaki dan<br />
                06:00 - 12:00 h
              </p>
            </div>

            <div className="contact-card">
              <Instagram className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                Instagram
              </h3>
              <a
                href="https://www.instagram.com/skyloungesl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-inter"
              >
                @skyloungesl
              </a>
            </div>

            <a
              href="https://www.instagram.com/skyloungesl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 w-full justify-center"
            >
              <Instagram size={20} />
              Instagram Instant Booking
            </a>
          </div>

          <div className="animate-fade-in">
            <div className="rounded-lg overflow-hidden shadow-2xl h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.8!2d16.659906325942693!3d44.7668603414278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ2JzAwLjciTiAxNsKwMzknMzUuNyJF!5e0!3m2!1sen!2sba!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
