import React, { useState } from "react";
import { Phone, Calendar, Sparkles, ChevronDown, Facebook } from "lucide-react";
import { motion } from "motion/react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const dropdownServices = [
    { label: "Trang Điểm Chuyên Nghiệp", href: "#makeup-portfolio" },
    { label: "Dịch Vụ Chụp Ảnh", href: "#photography-portfolio" },
    { label: "Gói Cưới & Xe Hoa/Váy", href: "#wedding-special" },
    { label: "Khóa Học Trang Điểm", href: "#academy" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-luxury-beige/95 backdrop-blur-md border-b border-luxury-nude/40 shadow-md transition-all duration-300 overflow-hidden">
      
      {/* Premium Ambient Light Sweep running across the entire header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 w-[40%] h-full bg-gradient-to-r from-transparent via-white/50 via-luxury-gold/15 to-transparent opacity-75 animate-header-shimmer" />
      </div>

      {/* Endless Golden Laser Light Beam running across the header bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-luxury-nude/30 overflow-hidden pointer-events-none">
        <div className="absolute top-0 bottom-0 w-[180px] bg-gradient-to-r from-transparent via-luxury-gold via-white to-luxury-gold-dark to-transparent animate-header-run opacity-90" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo with golden glow, artistic monogram seal and responsive hover animation */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3.5 group">
              {/* Premium Dual-Ring Artistic Crest Emblem with the new logo and micro shimmer */}
              <div className="relative flex items-center justify-center w-11 h-11 rounded-full border border-luxury-gold/80 bg-luxury-charcoal p-[2px] shadow-[0_4px_15px_rgba(0,0,0,0.15)] group-hover:border-luxury-gold-dark transition-all duration-500 shrink-0 z-10">
                <div className="w-full h-full rounded-full overflow-hidden border border-white/10">
                  <img
                    src="https://i.postimg.cc/WzmSf1YK/6d36364a-33fa-4aa3-b627-852593d587d5.png"
                    alt="Nghĩa Trần Makeup & Studio"
                    className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-115"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating subtle shine sweep across emblem on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out pointer-events-none rounded-full" />
              </div>

              {/* Sophisticated Editorial Logo Lockup with Elegant Spacing and Line Accents */}
              <div className="flex flex-col text-left pl-3 border-l border-luxury-gold/30">
                <div className="flex items-baseline gap-1">
                  <span className="text-base sm:text-lg font-serif font-light tracking-[0.2em] text-luxury-charcoal uppercase leading-none transition-colors duration-500 group-hover:text-luxury-gold-dark">
                    Nghĩa
                  </span>
                  <span className="text-base sm:text-lg font-serif font-bold tracking-[0.2em] text-luxury-gold-dark uppercase leading-none transition-colors duration-500 group-hover:text-luxury-charcoal">
                    Trần
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <div className="h-[1px] bg-luxury-gold/40 w-2.5 transition-all duration-500 group-hover:w-4" />
                  <span className="text-[7.5px] sm:text-[8.5px] font-sans tracking-[0.45em] uppercase text-luxury-gold-dark font-extrabold leading-none transition-all duration-500 group-hover:text-luxury-charcoal">
                    MAKEUP
                  </span>
                  <div className="h-[1px] bg-luxury-gold/40 w-2.5 transition-all duration-500 group-hover:w-4" />
                </div>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold/70 animate-pulse shrink-0 opacity-80 group-hover:scale-125 group-hover:text-luxury-gold transition-all duration-300" />
            </a>
          </div>

          {/* Desktop Navigation with Animated Sliders & Running Shimmers */}
          <nav className="hidden md:flex space-x-5 lg:space-x-7 items-center relative z-50">
            {/* Elegant Dropdown "Dịch vụ" Menu */}
            <div className="relative">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="relative text-[11px] lg:text-[13px] font-bold text-luxury-charcoal/80 hover:text-luxury-gold-dark transition-colors py-2 px-1 flex items-center gap-1 group uppercase tracking-wider cursor-pointer"
              >
                <span className="relative z-10">Dịch vụ</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
                {/* Underline slider */}
                <span className={`absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-luxury-gold to-luxury-gold-dark transition-all duration-300 ease-out ${isServicesDropdownOpen ? "w-full" : "w-0 group-hover:w-full"}`} />
              </button>

              {/* Absolute Dropdown Menu list */}
              {isServicesDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsServicesDropdownOpen(false)} />
                  <div className="absolute top-full left-0 mt-2.5 w-60 bg-white/95 backdrop-blur-md rounded-xl border border-luxury-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.15)] py-2 z-50 animate-[fadeIn_0.2s_ease-out]">
                    <div className="absolute top-[-6px] left-6 w-3 h-3 bg-white border-t border-l border-luxury-gold/30 rotate-45" />
                    {dropdownServices.map((sub, sIdx) => (
                      <a
                        key={sIdx}
                        href={sub.href}
                        onClick={(e) => {
                          setIsServicesDropdownOpen(false);
                          const target = document.getElementById(sub.href.substring(1));
                          if (target) {
                            e.preventDefault();
                            target.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }}
                        className="block px-5 py-3 text-[11px] font-bold text-luxury-charcoal hover:bg-luxury-gold/10 hover:text-luxury-gold-dark transition-all uppercase tracking-wider border-b border-luxury-nude/15 last:border-0"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>

            {[
              { label: "Tác phẩm Makeup", href: "#makeup-portfolio" },
              { label: "Tác phẩm Ảnh", href: "#photography-portfolio" },
              { label: "Gói Cưới", href: "#wedding-special" },
              { label: "Đào Tạo", href: "#academy" },
              { label: "Bí quyết", href: "#makeup-tips" },
              { label: "Video", href: "#before-after" },
              { label: "Liên Hệ", href: "#contact" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative text-[11px] lg:text-[13px] font-bold text-luxury-charcoal/80 hover:text-luxury-gold-dark transition-colors py-2 px-1 group uppercase tracking-wider overflow-hidden"
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Spark light sweep effect inside individual menu item during hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-luxury-gold/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-0" />
                
                {/* Glowing sparkling dot centered underneath hovered item */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-luxury-gold rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_#C5A880]" />
                
                {/* Underline slider */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-luxury-gold to-luxury-gold-dark group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="https://www.facebook.com/share/1CuYEhoAN7/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2.5 rounded-full bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all border border-[#1877F2]/20 shadow-sm hover:shadow-[0_0_12px_rgba(24,119,242,0.3)] active:scale-95"
              title="Liên kết trang Facebook"
            >
              <Facebook className="w-4 h-4 fill-current" />
            </a>

            <a
              href="tel:0931559307"
              className="inline-flex items-center justify-center p-2.5 rounded-full bg-luxury-nude text-luxury-charcoal hover:bg-luxury-gold-dark hover:text-white transition-all border border-luxury-nude/60 shadow-sm hover:shadow-[0_0_12px_rgba(197,168,128,0.3)] active:scale-95"
              title="Gọi hotline tư vấn trực tiếp"
            >
              <Phone className="w-4 h-4 animate-pulse" />
            </a>

            <a
              href="https://zalo.me/0931559307"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-luxury-charcoal text-white text-xs font-semibold uppercase tracking-wider hover:bg-luxury-gold-dark hover:text-white transition-all duration-300 shadow-md shadow-luxury-charcoal/10 hover:shadow-[0_4px_15px_rgba(197,168,128,0.3)] cursor-pointer active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 mr-2" /> Đặt Lịch Ngay
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-3">

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-luxury-charcoal hover:text-luxury-gold-dark focus:outline-none cursor-pointer"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-luxury-beige border-t border-luxury-nude/40 animate-fade-in max-h-[85vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {/* Mobile Dropdown for Dịch vụ */}
            <div className="border-b border-luxury-nude/15 pb-1">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-bold text-luxury-charcoal hover:bg-luxury-nude hover:text-luxury-gold-dark cursor-pointer"
              >
                <span>Dịch vụ</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isServicesDropdownOpen && (
                <div className="pl-6 pr-3 py-1 space-y-1 bg-white/30 rounded-lg mt-1 mb-2">
                  {dropdownServices.map((sub, sIdx) => (
                    <a
                      key={sIdx}
                      href={sub.href}
                      onClick={(e) => {
                        setIsServicesDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                        const target = document.getElementById(sub.href.substring(1));
                        if (target) {
                          e.preventDefault();
                          target.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-luxury-charcoal/80 hover:text-luxury-gold-dark hover:bg-luxury-nude"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#makeup-portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-luxury-charcoal hover:bg-luxury-nude hover:text-luxury-gold-dark"
            >
              Tác phẩm Makeup
            </a>
            <a
              href="#photography-portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-luxury-charcoal hover:bg-luxury-nude hover:text-luxury-gold-dark"
            >
              Tác phẩm Ảnh
            </a>
            <a
              href="#wedding-special"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-luxury-charcoal hover:bg-luxury-nude hover:text-luxury-gold-dark"
            >
              Gói Cưới
            </a>
            <a
              href="#academy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-luxury-charcoal hover:bg-luxury-nude hover:text-luxury-gold-dark"
            >
              Đào Tạo
            </a>
            <a
              href="#makeup-tips"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-luxury-charcoal hover:bg-luxury-nude hover:text-luxury-gold-dark"
            >
              Bí Quyết Makeup
            </a>
            <a
              href="#before-after"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-luxury-charcoal hover:bg-luxury-nude hover:text-luxury-gold-dark"
            >
              Video
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-luxury-charcoal hover:bg-luxury-nude hover:text-luxury-gold-dark"
            >
              Liên Hệ
            </a>
            <div className="pt-4 pb-2 border-t border-luxury-nude/40 flex flex-col gap-2 px-3">
              <a
                href="https://zalo.me/0931559307"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-luxury-charcoal text-white text-sm font-semibold uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4 mr-2" /> Đặt Lịch Ngay
              </a>
              <a
                href="https://www.facebook.com/share/1CuYEhoAN7/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-[#1877F2] text-white text-sm font-medium shadow-sm active:scale-95 transition-all"
              >
                <Facebook className="w-4 h-4 mr-2 fill-current" /> Facebook Nghĩa Trần
              </a>
              <a
                href="tel:0931559307"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-luxury-nude text-luxury-charcoal text-sm font-medium border border-luxury-nude/60"
              >
                <Phone className="w-4 h-4 mr-2" /> Gọi điện: 0931 559 307
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
