const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-white/90 backdrop-blur shadow">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/AFP-logo-removebg-preview-1.png" alt="AFP Logo" className="w-12 h-12 object-contain drop-shadow-md" />
          <div className="flex flex-col leading-tight">
            <span className="font-playfair text-xl font-bold text-accent">Al-Amin</span>
            <span className="font-playfair text-sm text-[#141413]">Food Paradise</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#enterprise" className="text-[#141413] hover:text-[#141413]/80 transition-colors">Enterprise</a>
          <a href="#pricing" className="text-[#141413] hover:text-[#141413]/80 transition-colors">Pricing</a>
          <a href="#docs" className="text-[#141413] hover:text-[#141413]/80 transition-colors">Docs</a>
          <a href="#faq" className="text-[#141413] hover:text-[#141413]/80 transition-colors">FAQ</a>
        </div>

        <button className="text-[#141413] font-medium hover:text-[#141413]/80 transition-colors">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;