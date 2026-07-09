import React from "react";
import { Play } from "lucide-react";
import { motion } from "motion/react";

export default function BeforeAfter() {
  return (
    <section id="before-after" className="py-24 bg-gradient-to-b from-white via-luxury-beige/10 to-white relative overflow-hidden border-t border-b border-luxury-gold/15">
      
      {/* Decorative premium elements */}
      <div className="absolute top-1/3 left-[-10%] w-[450px] h-[450px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-[-10%] w-[450px] h-[450px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Styled elegantly matching ServiceGrid & MakeupPortfolio */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-luxury-gold/5 border border-luxury-gold/20 text-luxury-gold-dark mb-4"
          >
            <Play className="w-3 h-3 fill-luxury-gold-dark animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold">
              VIDEO KHÁCH HÀNG TẠI NGHĨA TRẦN
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-luxury-charcoal tracking-[0.12em] uppercase leading-tight"
          >
            Nét Cọ Thực Tế & Sự Khác Biệt
          </motion.h2>

          <div className="relative my-6 h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-luxury-gold-dark/40 to-transparent" />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm text-luxury-charcoal/60 leading-relaxed font-sans max-w-xl mx-auto"
          >
            Chiêm ngưỡng quy trình biến hóa nhan sắc chân thực, lớp nền mướt mịn tự nhiên qua những thước phim thực tế tại Studio.
          </motion.p>
        </div>

        {/* Centered Cinematic Video Player */}
        <div className="flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full max-w-[340px]">
              {/* Luxury outer glowing frame border */}
              <div className="absolute inset-0 border border-luxury-gold/30 rounded-[2.5rem] translate-x-3 translate-y-3 pointer-events-none" />
              
              {/* Main smartphone frame model */}
              <div className="w-full aspect-[9/16] rounded-[2.5rem] p-3.5 bg-luxury-charcoal border-[6px] border-luxury-charcoal shadow-2xl relative overflow-hidden group">
                {/* Simulated Phone Notch */}
                <div className="absolute top-0 inset-x-0 h-4 bg-luxury-charcoal flex justify-center items-center z-20">
                  <div className="w-24 h-3.5 bg-black rounded-b-xl" />
                </div>
                
                {/* Screen Content */}
                <div className="w-full h-full rounded-[1.8rem] overflow-hidden bg-black relative">
                  <iframe
                    src="https://www.youtube.com/embed/UvmFYTcs5hw"
                    title="Nghĩa Trần Makeup Video"
                    className="w-full h-full border-0 absolute inset-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Micro subtitle */}
            <p className="mt-6 text-[11px] uppercase tracking-widest text-luxury-gold-dark font-semibold inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              Góc Quay Cận Cảnh Không Qua Chỉnh Sửa
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
