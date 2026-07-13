import React from "react";
import { Calendar, ArrowRight, Sparkles, Phone } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  // Use the requested custom image path
  const heroImage = "https://i.postimg.cc/pTvwZCv5/hinh-Nghia.jpg";

  return (
    <section className="relative min-h-[85vh] bg-luxury-charcoal text-white overflow-hidden py-12 md:py-20 flex items-center">
      
      {/* Decorative ambient radial gold glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] bg-luxury-gold/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-15%] w-[400px] h-[400px] bg-luxury-gold/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Clean typography and description - perfectly readable */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8 text-left order-2 lg:order-1">
            
            {/* Elegant Accent Badge with hover glowing and animated border */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-luxury-gold/25 via-white/5 to-luxury-gold/5 border border-luxury-gold/40 text-[10px] sm:text-xs text-luxury-gold tracking-[0.18em] uppercase font-bold shadow-[0_4px_25px_rgba(197,168,128,0.25)] backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold animate-spin" style={{ animationDuration: "6s" }} />
              <span>TRANG ĐIỂM - CHỤP HÌNH - DỊCH VỤ CƯỚI TRỌN GÓI</span>
            </motion.div>

            {/* Headline with bespoke typography spacing and beautiful text gradient effect */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-wide leading-[1.15] text-luxury-beige"
              >
                ĐÁNH THỨC VẺ ĐẸP <br className="hidden sm:block" />
                <span className="font-serif italic font-normal bg-gradient-to-r from-luxury-gold via-luxury-gold-dark to-luxury-gold bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(197,168,128,0.15)]">Rạng Rỡ Độc Bản</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-xs sm:text-sm font-serif text-luxury-nude tracking-[0.25em] uppercase font-medium"
              >
                Premium Makeup & Bridal Studio
              </motion.p>
            </div>

            {/* Redesigned Introduction paragraph encompassing Makeup, Photography, and All-In-One Services */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-sm sm:text-base text-luxury-beige/85 font-sans leading-relaxed max-w-xl"
            >
              Dù là ngày cưới trọng đại, sự kiện tiệc tối sang trọng, những khung hình nghệ thuật theo yêu cầu hay layout <span className="text-luxury-gold font-semibold">trang điểm cá nhân</span> thời thượng – Nghĩa Trần & Team luôn sẵn sàng đồng hành cùng bạn. Với kỹ thuật trang điểm nền Glass-Skin mỏng mướt bền đẹp suốt 12H và dịch vụ chụp ảnh chuyên nghiệp, chúng tôi cam kết tôn vinh vẻ ngoài độc bản, giúp bạn tự tin tỏa sáng rạng ngời trong mọi khoảnh khắc!
            </motion.p>

            {/* Decorative partition line */}
            <div className="h-px bg-gradient-to-r from-luxury-gold/50 to-transparent w-full max-w-md animate-pulse" />

            {/* Call-to-action buttons with Phone connection */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="https://zalo.me/0931559307"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-luxury-gold text-luxury-charcoal text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-luxury-charcoal active:scale-98 transition-all duration-300 shadow-lg shadow-luxury-gold/25 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Đặt Lịch Ngay
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="tel:0931559307"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-luxury-gold/40 text-luxury-gold hover:text-white hover:border-white text-xs font-bold uppercase tracking-widest bg-white/5 hover:bg-white/10 active:scale-98 transition-all duration-300 shadow-md group cursor-pointer"
              >
                <Phone className="w-4 h-4 mr-2.5 text-luxury-gold animate-bounce group-hover:text-white" />
                Hotline: 0931 559 307
              </a>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Dual Image Display with Staggered Premium Frames & Ambient Glowing Auras */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center w-full">
            <div className="flex flex-row items-center gap-4 sm:gap-6 w-full max-w-[500px] py-6">
              
              {/* Left Image (Existing) with floating motion */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: -16 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="relative w-1/2 aspect-[3/4] group"
              >
                {/* Luminous glow effect behind the image container */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-luxury-gold/35 via-transparent to-luxury-gold/15 opacity-40 blur-2xl rounded-full group-hover:opacity-75 transition-opacity duration-700 animate-pulse pointer-events-none z-0" style={{ animationDuration: "4s" }} />

                {/* Back Gold offset decorative frame */}
                <div className="absolute inset-0 border border-luxury-gold/30 rounded-2xl translate-x-2.5 translate-y-2.5 pointer-events-none z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
                
                {/* Main Image container */}
                <div className="w-full h-full bg-luxury-charcoal rounded-2xl border border-luxury-gold/40 p-1.5 sm:p-2 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.85)] overflow-hidden relative z-20 group hover:border-luxury-gold transition-colors duration-500">
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <img
                      src={heroImage}
                      alt="Nghĩa Trần Makeup"
                      className="w-full h-full object-cover object-center transition-transform duration-[1.8s] ease-out group-hover:scale-108"
                      referrerPolicy="no-referrer"
                    />
                    {/* Glamorous golden-overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-luxury-gold/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>

              {/* Right Image (New Requested Image) with staggered floating motion */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 16 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="relative w-1/2 aspect-[3/4] group"
              >
                {/* Luminous glow effect behind the image container */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-luxury-gold/35 via-transparent to-luxury-gold/15 opacity-40 blur-2xl rounded-full group-hover:opacity-75 transition-opacity duration-700 animate-pulse pointer-events-none z-0" style={{ animationDuration: "5s" }} />

                {/* Back Gold offset decorative frame */}
                <div className="absolute inset-0 border border-luxury-gold/30 rounded-2xl -translate-x-2.5 translate-y-2.5 pointer-events-none z-10 transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />
                
                {/* Main Image container */}
                <div className="w-full h-full bg-luxury-charcoal rounded-2xl border border-luxury-gold/40 p-1.5 sm:p-2 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.85)] overflow-hidden relative z-20 group hover:border-luxury-gold transition-colors duration-500">
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <img
                      src="https://i.postimg.cc/0NyY38K4/702176760-865133879952308-5820340469512207403-n.jpg"
                      alt="Nghĩa Trần Bridal Layout"
                      className="w-full h-full object-cover object-center transition-transform duration-[1.8s] ease-out group-hover:scale-108"
                      referrerPolicy="no-referrer"
                    />
                    {/* Glamorous golden-overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-luxury-gold/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* Elegant bottom section divider fade to luxury-beige */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-luxury-beige to-transparent pointer-events-none" />
    </section>
  );
}
