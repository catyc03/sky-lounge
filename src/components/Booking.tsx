import { useState } from "react";
import { toast } from "sonner";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    guests: "2",
    date: "",
    time: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Redirect to Instagram DM
    toast.info("Preusmjeravanje na Instagram za rezervaciju...");
    setTimeout(() => {
      window.open("https://www.instagram.com/skyloungesl", "_blank");
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Book a Table
          </h2>
          <p className="text-lg text-foreground/80 font-inter">
            Rezervišite svoj sto i uživajte u premium SkyLounge iskustvu
          </p>
        </div>

        <form onSubmit={handleSubmit} className="booking-form animate-fade-in">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="form-label">
                Ime i Prezime *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Vaše ime"
                className="form-input"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="guests" className="form-label">
                  Broj Osoba *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="form-input"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "osoba" : "osobe"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="form-label">
                  Datum *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="time" className="form-label">
                Vrijeme *
              </label>
              <input
                type="time"
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="notes" className="form-label">
                Posebne Želje
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Imate li posebne zahtjeve ili želje?"
                rows={4}
                className="form-input resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full text-lg py-4">
              Rezerviši Sada
            </button>

            <p className="text-center text-sm text-muted-foreground font-inter">
              Klikom na dugme bićete preusmjereni na Instagram za brzu rezervaciju
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
