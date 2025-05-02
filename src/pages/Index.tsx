import { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MenuSection from '../components/MenuSection';
import USPSection from '../components/USPSection';
import OrderSection from '../components/OrderSection';
import GallerySection from '../components/GallerySection';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Enhanced scroll reveal animation with more fluid transitions and higher threshold
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Add staggered animation for child elements with improved timing
            const childElements = entry.target.querySelectorAll('.stagger');
            childElements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, 120 * index); // Slightly faster staggering for more snappy feel
            });
          }
        });
      },
      { 
        threshold: 0.18, // Slightly higher threshold for earlier animation trigger
        rootMargin: '0px 0px -40px 0px' // Show animations slightly earlier
      }
    );
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => observer.observe(element));
    
    // Initialize staggered elements with enhanced initial state
    const staggerElements = document.querySelectorAll('.stagger');
    staggerElements.forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(18px)'; // Slightly less initial offset for subtler animation
      (el as HTMLElement).style.transition = 'opacity 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // More sophisticated easing
    });
    
    // Enhanced smooth scrolling for anchor links with easing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            // Add a small delay for any menu closing animations
            setTimeout(() => {
              window.scrollTo({
                top: (targetEl as HTMLElement).offsetTop - 70, // Account for fixed header
                behavior: 'smooth'
              });
            }, 50);
          }
        }
      });
    });
    
    return () => {
      revealElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  useEffect(() => {
    const scriptId = 'elfsight-platform-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-surface overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      {/* Instagram Feed Section */}
      <section id="instagram-feed" className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-softYellow/40 text-center">
        <h2 className="section-heading text-center mb-8 reveal">
          Follow Us On Instagram
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-accent"></span>
        </h2>
        <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto reveal">
          See our latest dishes, behind-the-scenes, and more! Tag us <span className="font-semibold text-accent">@alaminfoodparadise</span> for a chance to be featured.
        </p>
        {/* Instagram Feed Widget Embed (Elfsight) */}
        <div className="flex justify-center">
          <div className="elfsight-app-b07bf319-7c14-4d71-a2f9-f2265bfb5cbd w-full max-w-3xl min-h-[420px] rounded-xl shadow-lg bg-white/80"></div>
        </div>
        <div className="mt-6">
          <a
            href="https://www.instagram.com/alaminfoodparadise/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-primary transition-colors text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5a6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5zm6.5 1.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0z"/></svg>
            @alaminfoodparadise
          </a>
        </div>
      </section>
      <USPSection />
      <OrderSection />
      <GallerySection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
