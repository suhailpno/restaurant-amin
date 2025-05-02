import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className="fixed w-full z-50 transition-all duration-500 bg-white shadow-md py-2"
    >
      <div className="container mx-auto px-2 md:px-6">
        <div className="flex justify-between items-center space-x-2 min-h-[56px]">
          {/* Logo */}
          <a href="#" onClick={() => scrollToSection('hero')} className="flex items-center whitespace-nowrap text-primary">
            <span className="font-playfair text-xl font-bold">Al-Amin Food Paradise</span>
          </a>
          {/* Divider for mobile clarity */}
          <div className="hidden xs:block w-px h-8 bg-gray-200 mx-2" />
          {/* Right controls: Order + Menu */}
          <div className="flex items-center space-x-1">
            <a 
              href="#order" 
              onClick={() => scrollToSection('order')}
              className="btn-primary !py-1.5 !px-3 text-sm md:text-lg"
            >
              Order Now
            </a>
            <button 
              onClick={toggleMenu} 
              className="md:hidden p-2 rounded-full bg-gray-100 text-gray-700 ml-1"
              aria-label="Toggle Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10">
            {['about', 'menu', 'gallery', 'location'].map((item) => (
              <a
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize cursor-pointer font-medium text-gray-700 hover:text-primary transition-all duration-200 hover:scale-105"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-black/95 z-50 transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-full bg-white/10 text-white"
            aria-label="Close Menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full space-y-6">
          {['about', 'menu', 'gallery', 'location', 'order'].map((item) => (
            <a
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white text-3xl font-playfair capitalize cursor-pointer hover:text-accent transition-colors py-2 px-6 rounded-lg active:bg-accent/20"
              style={{ minWidth: '180px', textAlign: 'center' }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
