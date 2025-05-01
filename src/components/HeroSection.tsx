import { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    alt: "Traditional spicy curry dish"
  },
  {
    url: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    alt: "Aromatic rice with herbs and spices"
  },
  {
    url: "https://as2.ftcdn.net/v2/jpg/04/18/22/51/1000_F_418225186_OCtaNADfMMtBWBwTTOTJYcyjuRMQIqjW.jpg",
    alt: "Delicious biryani with aromatic spices and herbs"
  },
  {
    url: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    alt: "Freshly baked naan bread"
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image Carousel with Enhanced Transitions */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              currentSlide === index 
                ? 'opacity-100 scale-100 blur-0' 
                : 'opacity-0 scale-105 blur-sm'
            } ${isTransitioning ? 'transitioning' : ''}`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transform transition-all duration-1000 ease-in-out"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Enhanced Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-black/50 z-10 transition-opacity duration-1000"></div>
          </div>
        ))}
      </div>
      
      {/* Content with Enhanced Styling and Animations */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Decorative Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        {/* Enhanced Single Line Title */}
        <div className="relative">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-playfair mb-6 drop-shadow-2xl animate-fade-in">
            <span className="inline-block relative group">
              <span className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-primary/30 blur-lg"></span>
              <span className="relative inline-block text-glow animate-float bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent animate-gradient-x [text-shadow:_0_0_8px_rgba(255,255,255,0.8)]">
                Al-Amin Food Paradise
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></span>
            </span>
          </h1>
          
          {/* Decorative Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-100 to-white mx-auto my-6 rounded-full transform scale-x-0 animate-scale-in" style={{ animationDelay: "0.8s" }}></div>
          
          <p className="text-xl md:text-2xl mb-10 drop-shadow-lg animate-fade-in relative" style={{ animationDelay: "1s" }}>
            <span className="absolute -inset-1 bg-gradient-to-r from-yellow-100/20 to-white/20 blur-lg rounded-lg"></span>
            <span className="relative inline-block px-6 py-2">
              <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent font-bold tracking-wide animate-gradient-x-subtle [text-shadow:_0_0_6px_rgba(255,255,255,0.8)]">
                A Taste of Tradition in Every Bite
              </span>
            </span>
          </p>
          
          <a 
            href="#order"
            className="btn-primary text-lg px-12 py-4 rounded-full hover:scale-110 animate-fade-in relative overflow-hidden group font-bold"
            style={{ animationDelay: "1.2s" }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-100/20 to-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative flex items-center justify-center gap-2">
              <span className="bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent animate-gradient-x [text-shadow:_0_0_4px_rgba(255,255,255,0.8)]">Order Now</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform text-yellow-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
      
      {/* Enhanced Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setIsTransitioning(false);
              }, 1000);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              currentSlide === index 
                ? 'bg-gradient-to-r from-yellow-100 to-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-secondary/95 to-secondary overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative pt-28 pb-16 px-4 md:px-6 z-10">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand and description */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-playfair text-3xl font-bold text-accent">Al-Amin</span>
                <span className="font-playfair text-xl ml-2 text-white/90">Food Paradise</span>
              </div>
              <div className="h-1 w-20 bg-accent mt-2 rounded-full"></div>
            </div>
            
            <p className="text-gray-300 text-lg">
              Authentic Indian and Singaporean cuisine since 2005. Experience the rich flavors crafted 
              with care and served with love.
            </p>
            
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-accent hover:text-secondary p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-accent hover:text-secondary p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-accent hover:text-secondary p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-playfair font-bold text-2xl text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="group flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 transform transition-transform group-hover:scale-125"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">About Us</span>
                </a>
              </li>
              <li>
                <a href="#menu" className="group flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 transform transition-transform group-hover:scale-125"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Menu</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="group flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 transform transition-transform group-hover:scale-125"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Gallery</span>
                </a>
              </li>
              <li>
                <a href="#location" className="group flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 transform transition-transform group-hover:scale-125"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Location</span>
                </a>
              </li>
              <li>
                <a href="#order" className="group flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 transform transition-transform group-hover:scale-125"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Order Online</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Details */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-playfair font-bold text-2xl text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  47 Holland Dr<br />
                  #01-377<br />
                  Singapore 270047
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+6591655269" className="text-gray-300 hover:text-white transition-colors">+65 9165 5269</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@alaminfood.sg" className="text-gray-300 hover:text-white transition-colors">info@alaminfood.sg</a>
              </li>
            </ul>
            <div className="pt-2">
              <a 
                href="https://www.google.com/maps/place/Al-Amin+Food+Paradise/@1.3086811,103.7924029,17z/data=!3m1!4b1!4m6!3m5!1s0x31da1a69f9d8c12f:0x9b7187f076f8937f!8m2!3d1.3086811!4d103.7924029!16s%2Fg%2F11f0w_4f02?entry=ttu"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-accent/90 hover:bg-accent text-secondary px-4 py-2 rounded-lg transition-colors duration-300 mt-2 shadow"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright and payment methods */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">&copy; {currentYear} Al-Amin Food Paradise. All rights reserved.</p>
            
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-xs text-gray-400">We accept:</span>
              <div className="flex space-x-2">
                <div className="bg-white/90 h-6 w-10 rounded"></div>
                <div className="bg-white/90 h-6 w-10 rounded"></div>
                <div className="bg-white/90 h-6 w-10 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HeroSection;
