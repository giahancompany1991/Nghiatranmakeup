import React from "react";
import { Heart, Check, Gift, Sparkles, ArrowRight, ShieldCheck, Stars } from "lucide-react";
import { motion } from "motion/react";

interface WeddingSpecialProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function WeddingSpecial({ onOpenBooking }: WeddingSpecialProps) {
  const packageItems = [
    { 
      title: "Váy Cưới Cao Cấp (Bridal Gown)", 
      desc: "1 Váy cưới dòng luxury được tuyển chọn kỹ lưỡng, đo may vừa vặn cơ thể nàng dâu.",
      num: "01"
    },
    { 
      title: "Vest Chú Rể Lịch Lãm (Groom Suit)", 
      desc: "1 Bộ Vest chú rể phong cách Hàn Quốc/Ý chuẩn form, tôn lên nét nam tính, thanh lịch.",
      num: "02"
    },
    { 
      title: "Áo Dài Cặp Đôi & Bưng Quả", 
      desc: "Cung cấp Áo dài cho cô dâu chú rể và trọn bộ đồng phục áo dài cho đội bưng quả (nam/nữ).",
      num: "03"
    },
    { 
      title: "Trang Điểm Ngày Cưới (Bridal Makeup)", 
      desc: "2 Lần trang điểm ngày cưới chính (lúc rước dâu và tiệc tối) do trực tiếp Nghĩa Trần thực hiện.",
      num: "04"
    },
    { 
      title: "Xe Hoa & Mâm Quả Trọn Gói", 
      desc: "Hỗ trợ trang trí xe hoa rước dâu sang trọng và chuẩn bị mâm quả cưới đầy đủ nghi lễ văn hóa.",
      num: "05"
    },
    { 
      title: "Chụp Ảnh Ngày Cưới (Wedding Photo)", 
      desc: "Ghi lại mọi khoảnh khắc thiêng liêng từ lúc trang điểm, làm lễ gia tiên đến hết tiệc tối mừng hỷ.",
      num: "06"
    }
  ];

  return (
    <section id="wedding-special" className="py-24 bg-gradient-to-b from-white to-luxury-beige/40 relative overflow-hidden">
      
      {/* Decorative luxury radial background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-luxury-gold/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-rose-200/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative luxury geometric line pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, #D4AF37 1.5px, transparent 1.5px)`, backgroundSize: "24px 24px" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.25em] text-luxury-gold-dark font-extrabold inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/20"
          >
            <Stars className="w-3.5 h-3.5 text-luxury-gold-dark animate-spin-slow" /> GÓI CƯỚI ĐẶC BIỆT CHUYÊN NGHIỆP
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-luxury-charcoal leading-tight tracking-wide"
          >
            Combo Wedding Special
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base font-serif italic text-luxury-gold-dark/90 tracking-widest max-w-xl mx-auto"
          >
            Món Quà Trọn Vẹn Cho Ngày Hạnh Phúc Thăng Hoa
          </motion.p>
          <div className="h-[1.5px] bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent w-44 mx-auto my-3" />
        </div>

        {/* Container Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: List of premium items styled as cards with numbers (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base text-luxury-charcoal/85 leading-relaxed font-sans max-w-2xl border-l-2 border-luxury-gold pl-4 italic"
            >
              Hiểu được sự lo toan, lúng túng và mệt mỏi của các cặp đôi trên hành trình chuẩn bị cho ngày trọng đại, Nghĩa Trần thiết kế giải pháp <strong>Combo Cưới Trọn Gói</strong> giúp sẻ chia gánh nặng, lo chu toàn từ trang phục, trang điểm đến hình ảnh nghệ thuật độc bản.
            </motion.p>

            {/* Structured modern grid list */}
            <div className="grid sm:grid-cols-2 gap-5">
              {packageItems.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.02, translateY: -3 }}
                  className="group relative flex gap-4 items-start bg-white hover:bg-luxury-charcoal p-5 rounded-2xl border border-luxury-gold/15 hover:border-luxury-gold shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Subtle hover background accent lines */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-luxury-gold/5 rounded-full transition-transform duration-500 group-hover:scale-150 group-hover:bg-luxury-gold/10" />
                  
                  {/* Premium customized gold number marker */}
                  <span className="text-xl font-serif font-black tracking-tighter text-luxury-gold/30 group-hover:text-luxury-gold/80 transition-colors duration-300 leading-none shrink-0 mt-0.5 font-mono">
                    {item.num}
                  </span>

                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-luxury-charcoal group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-xs text-luxury-charcoal/65 group-hover:text-luxury-beige/70 transition-colors duration-300 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: High-End Elegant Pricing and CTA Card (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative h-full flex flex-col justify-between">
              
              {/* Premium Luxury Golden Flowing Border Glow (Dynamic Accent Frame) */}
              <div className="absolute inset-0 border border-luxury-gold/30 rounded-3xl translate-x-3.5 translate-y-3.5 pointer-events-none z-0 hidden sm:block" />
              
              <div className="relative h-full flex flex-col justify-between bg-luxury-charcoal text-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-luxury-gold/30 overflow-hidden z-10">
                
                {/* Visual Glow Layer inside Card */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-luxury-gold/15 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />

                {/* Card Top Section */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-luxury-gold bg-white/10 px-3 py-1.5 rounded-full border border-white/5 inline-flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-luxury-gold" /> COMBO TIẾT KIỆM TỐI ƯU
                    </span>
                    <Heart className="w-4 h-4 text-rose-400 fill-current animate-pulse shrink-0" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-serif text-luxury-beige">Gói Cưới Hoàn Hảo</h3>
                    <p className="text-xs text-luxury-beige/50">Mọi sự chuẩn bị tốt nhất dành riêng cho ngày vui của bạn</p>
                  </div>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
                    Sự thấu hiểu và sẻ chia từ Nghĩa Trần Makeup & Photography. Đồng hành chu toàn trọn vẹn từng khoảnh khắc, không phát sinh chi phí ẩn.
                  </p>
                </div>

                {/* Pricing / Benefit Highlights Section */}
                <div className="py-6 my-6 border-y border-white/10 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-luxury-gold font-bold block">BÁO GIÁ ĐẶC BIỆT</span>
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-3xl sm:text-4xl font-serif font-semibold text-luxury-beige">Chi Phí Tối Ưu</span>
                      <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Tiết kiệm 30%</span>
                    </div>
                    <span className="text-[10px] text-white/40 block font-sans">Giá trọn gói ưu đãi hơn so với đặt từng dịch vụ riêng lẻ</span>
                  </div>

                  {/* High trust mini badges */}
                  <div className="grid grid-cols-2 gap-3.5 pt-2">
                    <div className="flex items-center gap-2 text-[11px] text-white/80">
                      <ShieldCheck className="w-4 h-4 text-luxury-gold shrink-0" />
                      <span>Cam kết không phát sinh</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-white/80">
                      <Gift className="w-4 h-4 text-luxury-gold shrink-0" />
                      <span>Quà tặng đi kèm</span>
                    </div>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="space-y-4">
                  <a
                    href="https://zalo.me/0931559307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-4 rounded-xl bg-gradient-to-r from-luxury-gold to-luxury-gold-dark hover:from-white hover:to-white text-luxury-charcoal text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_10px_25px_rgba(212,175,55,0.25)] hover:shadow-white/10 cursor-pointer text-center group"
                  >
                    Đăng Ký Nhận Tư Vấn Chi Tiết
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>

                  <div className="text-center">
                    <a
                      href="https://zalo.me/0931559307"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-luxury-gold hover:text-white hover:underline tracking-wider inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Hỏi nhanh trực tiếp qua Zalo:</span>
                      <strong className="text-luxury-beige group-hover:text-white font-semibold">0931.559.307</strong>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
