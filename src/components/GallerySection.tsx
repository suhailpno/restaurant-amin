import { useState, useEffect, useRef } from 'react';

const galleryImages = [
  {
    id: 1,
    url: "https://as2.ftcdn.net/v2/jpg/04/18/22/51/1000_F_418225186_OCtaNADfMMtBWBwTTOTJYcyjuRMQIqjW.jpg",
    alt: "Chicken Briyani - Fragrant basmati rice cooked with marinated chicken and aromatic spices",
  },
  {
    id: 2,
    url: "https://as2.ftcdn.net/v2/jpg/09/31/10/69/1000_F_931106955_Sfxxki9r9wgQncILNdKhkdV2pErfeeDN.jpg",
    alt: "Mutton Briyani - Traditional rice dish with tender mutton pieces and signature spice blend",
  },
  {
    id: 3,
    url: "https://as1.ftcdn.net/v2/jpg/05/17/97/04/1000_F_517970489_ug6mzjOFZvEChlqqXZeF27XjUtcXQ6HK.jpg",
    alt: "Fish Briyani - Flavorful rice cooked with marinated fish and traditional herbs",
  },
  {
    id: 4,
    url: "https://madhurasrecipe.com/wp-content/uploads/2023/03/Veg-Biryani-Featured.jpg",
    alt: "Vegetable Briyani - Aromatic rice with seasonal vegetables and special spice blend",
  },
  {
    id: 5,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMozkkZv6pQonP3nn1BlXT2uLTWJxeshxYA&s",
    alt: "Tandoori Chicken - Chicken marinated in yogurt and spices, cooked in a tandoor",
  },
  {
    id: 6,
    url: "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--600x600.jpg",
    alt: "Butter Chicken - Tender chicken pieces in a rich tomato, butter and cream sauce",
  },
  {
    id: 7,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH1KsxtYmHBHm-coLW7g2mTa-HHUhck-I6WQ&s",
    alt: "Palak Paneer - Cottage cheese cubes in a creamy spinach gravy",
  },
  {
    id: 8,
    url: "https://media.istockphoto.com/id/1143530040/photo/indian-naan-bread-with-garlic-butter-on-wooden-table.jpg?s=612x612&w=0&k=20&c=71SgbJtnfiHUiud1oGxnhiZsx5nuivWwZt8DlIk8hi0=",
    alt: "Garlic Naan - Soft flatbread topped with garlic and butter, baked in tandoor",
  },
  {
    id: 9,
    url: "https://www.shutterstock.com/image-photo/deliciously-spiced-chicken-tikka-kabab-600nw-2495838045.jpg",
    alt: "Chicken Tikka - Boneless chicken pieces marinated and grilled to perfection",
  },
  {
    id: 10,
    url: "https://media.istockphoto.com/id/1365859011/photo/drink-mango-lassi-in-two-glasses-on-rustic-concrete-table-with-fresh-ripe-cut-manfo-from-above.jpg?s=612x612&w=0&k=20&c=uHnr_0raQDe2sgUYHdP5GSa2raaj3ILG4m1cmFHtVJA=",
    alt: "Mango Lassi - Refreshing yogurt drink with sweet mango pulp",
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => observer.observe(element));
    
    return () => {
      revealElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight' && selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex].id);
    } else if (e.key === 'ArrowLeft' && selectedImage !== null) {
      const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex].id);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 lg:px-0 bg-white" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-12 reveal">Our Food Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`relative aspect-square cursor-pointer overflow-hidden rounded-lg reveal group ${
                index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(image.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-end justify-start p-4">
                <span className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{image.alt}</span>
              </div>
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button 
            className="absolute top-6 right-6 text-white text-xl p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            ✕
          </button>
          
          <div className="max-w-5xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            {galleryImages.map((image) => (
              selectedImage === image.id && (
                <div key={image.id} className="text-center">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  />
                  <p className="text-white text-lg mt-4">{image.alt}</p>
                </div>
              )
            ))}
            
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <button 
                className="bg-white/10 hover:bg-white/20 p-4 rounded-full text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
                  const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                  setSelectedImage(galleryImages[prevIndex].id);
                }}
                aria-label="Previous image"
              >
                &lt;
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <button 
                className="bg-white/10 hover:bg-white/20 p-4 rounded-full text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
                  const nextIndex = (currentIndex + 1) % galleryImages.length;
                  setSelectedImage(galleryImages[nextIndex].id);
                }}
                aria-label="Next image"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
