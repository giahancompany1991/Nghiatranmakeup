import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Heart, Camera, Car, Shirt, GraduationCap, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServiceGridProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function ServiceGrid({ onOpenBooking }: ServiceGridProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "makeup" | "rentals" | "academy">("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);


  const categories = [
    { id: "makeup", label: "Makeup & Photography", targetId: "makeup-portfolio" },
    { id: "rentals", label: "Cho Thuê Cưới Hỏi", targetId: "wedding-special" },
    { id: "academy", label: "Đào Tạo Học Viên", targetId: "academy" },
  ];

  const services = [
    {
      id: "bridal",
      category: "makeup",
      title: "Trang Điểm Cô Dâu",
      subtitle: "Bridal Makeup Artistry",
      icon: <Heart className="w-4 h-4 text-rose-400" />,
      image: "https://i.postimg.cc/k5gYwgh6/705939190-869958172803212-3999919736120007021-n.jpg",
      btnText: "Xem Chi Tiết"
    },
    {
      id: "party",
      category: "makeup",
      title: "Makeup Tiệc & Sự Kiện",
      subtitle: "VIP Party & Event Makeup",
      icon: <Sparkles className="w-4 h-4 text-amber-400" />,
      image: "https://i.postimg.cc/15KZYLX9/653405630-813589101773453-3046577335027418579-n.jpg",
      btnText: "Xem Chi Tiết"
    },
    {
      id: "concept",
      category: "makeup",
      title: "Combo Chụp Ảnh & Concept",
      subtitle: "Concept Portrait Makeup",
      icon: <Camera className="w-4 h-4 text-sky-400" />,
      image: "https://i.postimg.cc/TPsLStQx/476145796-496467826818917-2129807948651930105-n.jpg",
      btnText: "Xem Chi Tiết"
    },
    {
      id: "wedding-photo",
      category: "makeup",
      title: "Chụp Ảnh Cưới Phóng Sự",
      subtitle: "Wedding Day Photography",
      icon: <Camera className="w-4 h-4 text-emerald-400" />,
      image: "https://i.postimg.cc/tC1xdQ5X/736314272-900544986411197-9164697215918425671-n.jpg",
      btnText: "Xem Chi Tiết"
    },
    {
      id: "car-rental",
      category: "rentals",
      title: "Thuê Xe Hoa & Quả Cưới",
      subtitle: "Luxury Car & Gift Trays",
      icon: <Car className="w-4 h-4 text-indigo-400" />,
      image: "https://i.postimg.cc/J4dSgJZz/cho-thue-xe-cuoi-bmw-mui-tran-quy-nhon.png",
      btnText: "Xem Chi Tiết"
    },
    {
      id: "attire-rental",
      category: "rentals",
      title: "Thuê Váy Cưới & Vest Thiết Kế",
      subtitle: "Luxury Gowns & Suits Rental",
      icon: <Shirt className="w-4 h-4 text-fuchsia-400" />,
      image: "https://i.postimg.cc/jSPn9Hmy/498320331-573120289153670-2523296540126269653-n.jpg",
      btnText: "Xem Chi Tiết"
    },
    {
      id: "personal-academy",
      category: "academy",
      title: "Đào Tạo Học Viên Makeup",
      subtitle: "Personal Makeup Studio",
      icon: <GraduationCap className="w-4 h-4 text-yellow-400" />,
      image: "https://i.postimg.cc/wTHhpb5k/559671843-687344824397882-9036169729980894894-n.jpg",
      btnText: "Xem Chi Tiết"
    }
  ];

  const getTargetSectionId = (id: string) => {
    switch (id) {
      case "bridal":
      case "party":
        return "makeup-portfolio";
      case "concept":
      case "wedding-photo":
        return "photography-portfolio";
      case "car-rental":
      case "attire-rental":
        return "wedding-special";
      case "personal-academy":
        return "academy";
      default:
        return "services";
    }
  };

  // Filter services
  const filtered = activeCategory === "all" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  // Handle scroll progress and arrow states
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;

    // Check if we can scroll left / right
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate percentage based on scroll progress
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(progress);

    // Calculate active dot index
    const cardWidth = window.innerWidth < 640 ? 280 : 320;
    const cardWidthWithGap = cardWidth + 24;
    const index = Math.round(scrollLeft / cardWidthWithGap);
    setActiveIndex(Math.min(Math.max(index, 0), filtered.length - 1));
  };

  // Scroll function for manual navigation buttons
  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = window.innerWidth < 640 ? 280 : 320;
    const cardWidthWithGap = cardWidth + 24;

    const currentScroll = container.scrollLeft;
    const targetScroll = direction === "left" 
      ? currentScroll - cardWidthWithGap 
      : currentScroll + cardWidthWithGap;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth"
    });
  };

  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = window.innerWidth < 640 ? 280 : 320;
    const cardWidthWithGap = cardWidth + 24;

    container.scrollTo({
      left: index * cardWidthWithGap,
      behavior: "smooth"
    });
  };

  // Gentle automatic sliding transition (pauses when hovered/touched)
  useEffect(() => {
    if (filtered.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;
      const maxScroll = scrollWidth - clientWidth;

      if (scrollLeft >= maxScroll - 15) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const cardWidth = window.innerWidth < 640 ? 280 : 320;
        const cardWidthWithGap = cardWidth + 24;
        container.scrollTo({ left: scrollLeft + cardWidthWithGap, behavior: "smooth" });
      }
    }, 3000); // Transitions every 3 seconds to be faster as requested

    return () => clearInterval(interval);
  }, [filtered, isHovered]);

  // Handle manual scroll listener setup and window resize
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      // Initialize states after DOM is ready
      const timer = setTimeout(handleScroll, 100);
      return () => {
        container.removeEventListener("scroll", handleScroll);
        clearTimeout(timer);
      };
    }
  }, [filtered]);

  // Bind resize event
  useEffect(() => {
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("resize", handleScroll);
    };
  }, [filtered]);

  return (
    <section id="services" className="py-24 bg-luxury-charcoal text-white relative overflow-hidden border-t border-luxury-gold/15">
      {/* Dynamic light effects in background */}
      <div className="absolute top-1/3 left-[-15%] w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-15%] w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Header with luxurious dynamic entry and light flare */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-6 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-luxury-gold mb-4 relative overflow-hidden group/badge"
          >
            {/* Ambient light sweep inside badge */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">
              Khám Phá Đặc Quyền
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, letterSpacing: "0.05em", filter: "blur(5px)" }}
            whileInView={{ opacity: 1, letterSpacing: "0.15em", filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-serif font-light text-luxury-beige uppercase leading-tight tracking-[0.1em]"
          >
            DỊCH VỤ TỪ NGHĨA TRẦN
          </motion.h2>

          <div className="relative mt-5 h-[2px] w-48 mx-auto bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent">
            <motion.div 
              animate={{ x: [-96, 96] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
              className="absolute top-0 left-1/2 w-4 h-full bg-luxury-gold rounded-full blur-xs"
            />
          </div>
        </div>

        {/* Category filtering buttons - premium style */}
        <div className="flex flex-wrap justify-center gap-2 px-6 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id as any);
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({ left: 0, behavior: "auto" });
                }
                const targetElement = document.getElementById(cat.targetId);
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className={`px-5 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase border transition-all duration-300 cursor-pointer active:scale-95 ${
                activeCategory === cat.id
                  ? "bg-luxury-gold text-luxury-charcoal border-luxury-gold shadow-[0_4px_15px_rgba(212,175,55,0.3)]"
                  : "bg-white/5 text-luxury-beige/80 border-white/10 hover:bg-white/10 hover:border-luxury-gold/30 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Scrolling Showcase Wrapper */}
        <div className="relative px-4 sm:px-12 xl:px-16">
          
          {/* Navigation Control Buttons (Hidden on mobile for cleaner card viewing) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-6 z-40 hidden md:block">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border border-luxury-gold text-luxury-gold bg-luxury-charcoal/95 backdrop-blur-md hover:bg-luxury-gold hover:text-luxury-charcoal hover:scale-110 shadow-lg cursor-pointer transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-6 z-40 hidden md:block">
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border border-luxury-gold text-luxury-gold bg-luxury-charcoal/95 backdrop-blur-md hover:bg-luxury-gold hover:text-luxury-charcoal hover:scale-110 shadow-lg cursor-pointer transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Horizontal Snap-To-Scroll Container with scrollbar hidden */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-2 py-4 scroll-smooth"
          >
            {filtered.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  const targetId = getTargetSectionId(service.id);
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="flex-shrink-0 w-[270px] xs:w-[290px] sm:w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 hover:border-luxury-gold/60 shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:shadow-[0_20px_45px_rgba(212,175,55,0.15)] group relative bg-black/40 snap-start cursor-pointer"
              >
                {/* Portrait Visual Image - fully optimized and fitted without distortion */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-[1200ms] ease-out opacity-85 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Gradient Light/Shadow Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Elegant Golden Border Inset Frame */}
                <div className="absolute inset-3 border border-luxury-gold/15 rounded-xl pointer-events-none group-hover:border-luxury-gold/50 transition-colors duration-500 z-20" />

                {/* Floating Elements / Category Badge */}
                <div className="absolute top-6 left-6 z-30">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm text-luxury-gold shadow-md">
                    {service.icon}
                    <span className="text-[9px] uppercase tracking-widest font-bold">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="absolute bottom-6 left-6 right-6 z-30 space-y-3">
                  <p className="text-[10px] text-luxury-gold uppercase tracking-[0.25em] font-medium opacity-90 group-hover:opacity-100 group-hover:tracking-[0.3em] transition-all duration-500">
                    {service.subtitle}
                  </p>

                  <h3 className="text-lg sm:text-xl font-serif font-light text-white tracking-wide leading-snug group-hover:text-luxury-beige transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Luxurious expansion line */}
                  <div className="h-[1px] bg-gradient-to-r from-luxury-gold/60 to-transparent w-12 group-hover:w-full transition-all duration-700 ease-out" />

                  {/* CTA button with micro animation */}
                  <div className="pt-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-beige group-hover:text-luxury-gold transition-colors duration-300">
                    <span>{service.btnText}</span>
                    <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>

                {/* Top-Right Corner Premium Accents */}
                <div className="absolute top-6 right-6 z-20 w-1.5 h-1.5 rounded-full bg-luxury-gold/30 group-hover:bg-luxury-gold transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Premium Minimalist Indicator Dots */}
          {filtered.length > 1 && (
            <div className="flex justify-center items-center gap-2.5 mt-8 pb-4 animate-[fadeIn_0.5s_ease]">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToCard(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    activeIndex === i 
                      ? "w-8 bg-luxury-gold shadow-[0_0_8px_rgba(197,168,128,0.5)]" 
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
