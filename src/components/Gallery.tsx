import skyImage from "@/assets/sky.jpg";
import shishaImage from "@/assets/shishasky.jpg";

const Gallery = () => {
  const images = [
    { src: skyImage, alt: "SkyLounge Interior" },
    { src: shishaImage, alt: "Premium Shisha Setup" },
    { src: skyImage, alt: "Luxury Seating" },
    { src: shishaImage, alt: "Shisha Details" },
  ];

  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Gallery
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-inter">
            Doživite luksuz SkyLounge atmosfere - svaki detalj govori o kvalitetu
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item group overflow-hidden rounded-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <p className="text-primary text-xl font-playfair font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
