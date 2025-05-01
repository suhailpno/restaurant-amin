
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background pattern with improved styling */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-[#EFF3FF]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, #E2E8F3 2px, transparent 2px)`,
          backgroundSize: '48px 48px',
          opacity: 0.5
        }}></div>
      </div>

      {/* Animated floating circles */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-white border-2 border-gray-200 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-white border-2 border-gray-200 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-white border-2 border-gray-200 animate-float" style={{ animationDelay: "2s" }}></div>
      
      {/* Larger decorative elements */}
      <div className="absolute top-1/2 left-[15%] w-24 h-24 rounded-full bg-highlight/20 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-[20%] w-32 h-32 rounded-full bg-[#A3D8FF]/20 blur-3xl"></div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          {/* Badge above heading */}
          <div className="mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
            <span className="text-sm font-medium text-primary/80">Trusted by hundreds of companies</span>
          </div>
          
          <h1 className="text-[86px] leading-[1] font-bold tracking-[-0.03em] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] to-[#1EAEDB]">
            Save time &<br />money on AWS
          </h1>
          
          <div className="max-w-[660px] mx-auto mb-12">
            <p className="text-xl text-primary/70 leading-relaxed">
              Savings, visibility, and infrastructure guardrails.
              <br />
              One automated platform for cloud excellence.
            </p>
          </div>

          <div className="flex gap-4 mb-16">
            <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-primary font-medium px-6 py-6 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Book a demo
            </Button>
            
            <Button variant="outline" size="lg" className="border-gray-300 font-medium px-6 py-6 rounded-lg text-lg hover:bg-gray-100/50 transition-all">
              See how it works
            </Button>
          </div>

          <div className="max-w-[900px] mx-auto relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F2FF44]/30 to-[#A3D8FF]/30 rounded-xl blur-md"></div>
            <div className="relative rounded-xl border-4 border-white/80 shadow-2xl overflow-hidden">
              <img 
                src="https://antimetal.com/images/hero/preview.png" 
                alt="Antimetal Demo Preview" 
                className="w-full h-auto"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
