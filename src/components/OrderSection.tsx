import { useState, useEffect, useRef } from 'react';
import GlowEffect from './GlowEffect';

const OrderSection = () => {
  const [isHoverFoodpanda, setIsHoverFoodpanda] = useState(false);
  const [isHoverGrabfood, setIsHoverGrabfood] = useState(false);
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

  const trackOrderClick = (platform: string) => {
    console.log(`Order clicked: ${platform}`);
  };

  return (
    <section id="order" className="py-20 px-4 md:px-8 lg:px-0 bg-gradient-to-br from-primary/95 to-primary/80 text-white relative overflow-hidden" ref={sectionRef}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/30 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-accent/30 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-heading text-white text-center mb-12 reveal">
          Order Online
          <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-accent"></span>
        </h2>
        
        <p className="text-center max-w-2xl mx-auto mb-12 text-white/90 text-lg reveal">
          Enjoy our delicious food from the comfort of your home. 
          Order now through our delivery partners for a quick and convenient experience.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          {/* Foodpanda */}
          <a
            href="https://www.foodpanda.sg/restaurant/v6tq/al-amin-food-paradise-holland-village?srsltid=AfmBOooQYO2RnfIXPhV_keZoZgeZnlRI5io5oT9lUl-WS-nCh6YbR-SV"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white/80 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-0 w-40 md:w-56 flex items-center justify-center overflow-hidden hover:scale-105"
            aria-label="Order on Foodpanda"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Foodpanda_logo_since_2017.jpeg"
              alt="Order on Foodpanda"
              className="w-full h-auto object-contain"
              style={{ maxHeight: '120px' }}
            />
          </a>
          {/* GrabFood */}
          <a
            href="https://food.grab.com/sg/en/restaurant/al-amin-food-paradise-holland-drive-delivery/SGDD06828?"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white/80 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-0 w-40 md:w-56 flex items-center justify-center overflow-hidden hover:scale-105"
            aria-label="Order on GrabFood"
          >
            <img
              src="https://i.pinimg.com/736x/6e/9b/95/6e9b95d516082899783cfd05d7629995.jpg"
              alt="Order on GrabFood"
              className="w-full h-auto object-contain"
              style={{ maxHeight: '120px' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
