import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-secondary/95 to-secondary/80 overflow-hidden text-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative pt-12 pb-8 px-4 md:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 text-center md:text-left items-start">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img src="https://i.postimg.cc/rK648xSD/AFP-logo-removebg-preview-1.png" alt="AFP Logo" className="w-36 h-36 mx-auto md:mx-0 object-contain drop-shadow-lg animate-glow" />
            <div className="flex flex-col items-center md:items-start">
              <span className="font-playfair text-3xl font-bold text-accent">Al-Amin</span>
              <span className="font-playfair text-xl text-white/90">Food Paradise</span>
            </div>
            <div className="h-1 w-20 bg-accent mt-2 rounded-full mx-auto md:mx-0"></div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-playfair font-bold text-2xl text-white mb-2">Quick Links</h4>
            <ul className="space-y-2 text-base">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-accent transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-accent transition-colors">Location</a></li>
              <li><a href="#order" className="hover:text-accent transition-colors">Order Online</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h4 className="font-playfair font-bold text-2xl text-white mb-2">Contact & Social</h4>
            <ul className="space-y-2 text-base mb-2">
              <li className="flex items-center gap-2 justify-center md:justify-end">
                <MapPin className="h-5 w-5 text-accent" />
                <a
                  href="https://www.google.com/maps/place/Al-Amin+Food+Paradise/@1.3086811,103.7924029,17z/data=!3m1!4b1!4m6!3m5!1s0x31da1a69f9d8c12f:0x9b7187f076f8937f!8m2!3d1.3086811!4d103.7924029!16s%2Fg%2F11f0w_4f02?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  47 Holland Dr, #01-377, Singapore 270047
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-end">
                <Phone className="h-5 w-5 text-accent" />
                <a
                  href="https://wa.me/6591655269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  +65 9165 5269
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 justify-center md:justify-end">
              <a href="https://www.facebook.com/alaminfoodparadisesg" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white/10 hover:bg-accent hover:text-secondary p-3 rounded-full transition-all duration-300 hover:scale-110"><Facebook className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/alaminfoodparadise/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white/10 hover:bg-accent hover:text-secondary p-3 rounded-full transition-all duration-300 hover:scale-110"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.tiktok.com/@alaminfoodparadise" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="bg-white/10 hover:bg-accent hover:text-secondary p-3 rounded-full transition-all duration-300 hover:scale-110"><svg className="h-5 w-5" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M28.5 10.5c-2.5 0-4.5-2-4.5-4.5h-4v17c0 1.1-.9 2-2 2s-2-.9-2-2v-7h4v-4h-4c-3.3 0-6 2.7-6 6v5c0 3.3 2.7 6 6 6s6-2.7 6-6V14.5c1.2 1.1 2.8 1.8 4.5 1.8v-5.8z" /></svg></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 pt-8 mt-8 border-t border-white/10">
          <p className="text-gray-400 text-center md:text-left text-sm">&copy; {currentYear} Al-Amin Food Paradise. All rights reserved.</p>
        </div>
      </div>
      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 32px 8px rgba(255,255,255,0.5); }
          50% { box-shadow: 0 0 64px 16px rgba(255,255,255,0.9); }
        }
        .animate-glow {
          animation: glow 2s infinite alternate;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
