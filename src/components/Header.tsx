import React, { useState } from "react";
import { Phone, Calendar, ShieldAlert, LogOut, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface HeaderProps {
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  onOpenBooking: () => void;
}

export default function Header({ isAdminOpen, setIsAdminOpen, onOpenBooking }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-luxury-beige/95 backdrop-blur-md border-b border-luxury-nude/40 shadow-md transition-all duration-300">
      
      {/* Endless Golden Laser Light Beam running across the header bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-luxury-nude/30 overflow-hidden pointer-events-none">
        <div className="absolute top-0 bottom-0 w-[180px] bg-gradient-to-r from-transparent via-luxury-gold via-white to-luxury-gold-dark to-transparent animate-header-run opacity-90" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo with golden glow, artistic monogram seal and responsive hover animation */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              {/* Premium Artistic Crest Emblem */}
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-luxury-gold/50 bg-luxury-charcoal shadow-[0_4px_12px_rgba(0,0,0,0.15)] group-hover:border-luxury-gold transition-all duration-500 overflow-hidden shrink-0 z-10">
                {/* Radial golden background light */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.3)_0%,transparent_70%)]" />
                {/* Golden running sheen */}
                <div className="absolute top-0 -inset-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer-hover" style={{ animationDuration: '1.2s' }} />
                <span className="font-serif text-[15px] text-luxury-gold tracking-[0.05em] font-bold z-10 transition-transform duration-500 group-hover:scale-110">
                  N<span className="text-[12px] text-white/90 italic font-normal -ml-0.5">T</span>
                </span>
              </div>

              {/* Sophisticated Typeface */}
              <div className="flex flex-col text-left">
                <span className="text-base sm:text-lg font-serif font-bold tracking-[0.22em] text-luxury-charcoal leading-tight group-hover:text-luxury-gold-dark transition-all duration-300">
                  NGHĨA TRẦN
                </span>
                <span className="text-[8px] sm:text-[9px] font-sans tracking-[0.38em] uppercase text-luxury-gold-dark font-bold -mt-0.5 group-hover:tracking-[0.42em] transition-all duration-500">
                  MAKEUP
                </span>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold/70 animate-pulse shrink-0 opacity-80 group-hover:scale-125 group-hover:text-luxury-gold transition-all duration-300" />
            </a>
          </div>

          {/* Desktop Navigation with Animated Sliders & Running Shimmers */}
          <nav className="hidden md:flex space-x-5 lg:space-x-7 items-center">
            {[
              { label: "Dịch vụ", href: "#services" },
              { label: "Tác phẩm Makeup", href: "#makeup-portfolio" },
              { label: "Tác phẩm Ảnh", href: "#photography-portfolio" },
              { label: "Gói Cưới", href: "#wedding-special" },
              { label: "Đào Tạo", href: "#academy" },
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
            {/* Admin Console Toggle */}
            <button
              onClick={() => setIsAdminOpen(!isAdminOpen)}
              className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                isAdminOpen
                  ? "bg-red-500/10 text-red-700 border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.15)]"
                  : "bg-luxury-gold/10 text-luxury-gold-dark border-luxury-gold/25 hover:bg-luxury-gold/20"
              }`}
              title="Mở bảng quản lý Đặt Lịch & Leads"
            >
              {isAdminOpen ? (
                <>
                  <LogOut className="w-3.5 h-3.5" /> Thoát Admin
                </>
              ) : (
                <>
                  <ShieldAlert className="w-3.5 h-3.5" /> Admin Panel
                </>
              )}
            </button>

            <a
              href="tel:0931559307"
              className="inline-flex items-center justify-center p-2.5 rounded-full bg-luxury-nude text-luxury-charcoal hover:bg-luxury-gold-dark hover:text-white transition-all border border-luxury-nude/60 shadow-sm hover:shadow-[0_0_12px_rgba(197,168,128,0.3)] active:scale-95"
              title="Gọi hotline tư vấn trực tiếp"
            >
              <Phone className="w-4 h-4 animate-pulse" />
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-luxury-charcoal text-white text-xs font-semibold uppercase tracking-wider hover:bg-luxury-gold-dark hover:text-white transition-all duration-300 shadow-md shadow-luxury-charcoal/10 hover:shadow-[0_4px_15px_rgba(197,168,128,0.3)] cursor-pointer active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 mr-2" /> Đặt Lịch Ngay
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsAdminOpen(!isAdminOpen)}
              className={`p-1.5 rounded-full border text-xs cursor-pointer ${
                isAdminOpen ? "bg-red-500/10 text-red-600 border-red-500/20" : "bg-luxury-gold/10 text-luxury-gold-dark border-luxury-gold/20"
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
            </button>
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
        <div className="md:hidden bg-luxury-beige border-t border-luxury-nude/40 animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-luxury-charcoal hover:bg-luxury-nude hover:text-luxury-gold-dark"
            >
              Dịch vụ
            </a>
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
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-luxury-charcoal text-white text-sm font-semibold uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4 mr-2" /> Đặt Lịch Ngay
              </button>
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
