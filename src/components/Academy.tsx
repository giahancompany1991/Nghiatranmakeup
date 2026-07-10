import React, { useState } from "react";
import { Sparkles, BookOpen, GraduationCap, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AcademyProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function Academy({ onOpenBooking }: AcademyProps) {
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  const courseSyllabus = [
    { day: "Buổi 1", title: "Thấu hiểu làn da & Nhận diện dáng mặt", desc: "Cách xác định undertone da, lựa chọn tone kem nền, che khuyết điểm và tạo khối hiệu chỉnh góc cạnh gương mặt riêng biệt." },
    { day: "Buổi 2", title: "Thiết kế dáng mày & Kỹ thuật kẻ mắt", desc: "Định hình lông mày chuẩn tỷ lệ vàng, kỹ thuật kẻ eyeliner sắc sảo tự nhiên, gắn mi giả phù hợp với từng dáng mắt." },
    { day: "Buổi 3", title: "Hàn Quốc ngọt ngào & Trung Hoa kiêu sa", desc: "Thực hành Layout mọng nước căng bóng chuẩn Hàn hoặc makeup Douyin lấp lánh cuốn hút." },
    { day: "Buổi 4", title: "Thái Lan sang chảnh & Tây Âu quyến rũ", desc: "Thực hành Layout Thái tông đất thời thượng tôn đường nét hoặc Tây Âu sắc sảo, cá tính và thu hút." },
    { day: "Buổi 5", title: "Kiểm tra thực hành & Định hình phong cách", desc: "Tự tay thực hiện một layout hoàn chỉnh theo sở thích dưới sự căn chỉnh, chấm điểm và định hướng phong cách cá nhân từ Nghĩa Trần." }
  ];

  const academyImages = [
    {
      url: "https://i.postimg.cc/WzmSf1YK/6d36364a-33fa-4aa3-b627-852593d587d5.png",
      caption: "Không gian lớp học chuyên nghiệp tại Studio Nghĩa Trần"
    },
    {
      url: "https://i.postimg.cc/wTHhpb5k/559671843-687344824397882-9036169729980894894-n.jpg",
      caption: "Nghĩa Trần kèm cặp chi tiết từng thao tác cho học viên"
    },
    {
      url: "https://i.postimg.cc/0NyY38K4/702176760-865133879952308-5820340469512207403-n.jpg",
      caption: "Thực hành trực tiếp trên mẫu thật chuẩn studio"
    }
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % academyImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="academy" className="py-24 bg-luxury-beige/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-luxury-gold-dark font-bold inline-flex items-center gap-1.5 mb-3">
            <GraduationCap className="w-4 h-4 text-luxury-gold-dark" /> KHÓA HỌC TRANG ĐIỂM CÁ NHÂN
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-luxury-charcoal leading-tight">
            Nghĩa Trần Makeup Studio
          </h2>
          <p className="mt-4 text-sm text-luxury-charcoal/70 leading-relaxed font-sans max-w-2xl mx-auto">
            Hãy ngưng lúng túng mỗi lần chuẩn bị đi tiệc hay gặp gỡ bạn bè. Khóa học Đào tạo Makeup cá nhân 5 buổi giúp bạn thấu hiểu đường nét gương mặt và tự tin tự làm đẹp cho bản thân.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Syllabus details on left (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Premium Action Button */}
            <button
              onClick={() => setIsSyllabusOpen(!isSyllabusOpen)}
              className={`w-full text-left flex items-center justify-between p-5 sm:p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                isSyllabusOpen
                  ? "bg-luxury-charcoal text-white border-luxury-gold shadow-lg"
                  : "bg-white text-luxury-charcoal border-luxury-gold/30 hover:border-luxury-gold hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`p-2.5 rounded-xl transition-colors duration-300 ${isSyllabusOpen ? "bg-luxury-gold text-luxury-charcoal" : "bg-luxury-gold/10 text-luxury-gold-dark"}`}>
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold tracking-wide">
                    Lộ trình học 5 buổi thay đổi bản thân
                  </h3>
                  <p className={`text-[10px] uppercase tracking-wider font-semibold mt-0.5 transition-colors ${isSyllabusOpen ? "text-luxury-gold" : "text-luxury-gold-dark/80"}`}>
                    {isSyllabusOpen ? "Click để đóng lộ trình" : "Bấm để mở lộ trình chi tiết"}
                  </p>
                </div>
              </div>
              
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 shrink-0 ${isSyllabusOpen ? "bg-luxury-gold/20 text-luxury-gold rotate-180" : "bg-luxury-beige text-luxury-gold-dark"}`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Collapsible syllabus contents */}
            <AnimatePresence initial={false}>
              {isSyllabusOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.98 }}
                  animate={{ 
                    opacity: 1, 
                    height: "auto", 
                    scale: 1,
                    transition: {
                      height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.3, delay: 0.05 },
                      scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    height: 0, 
                    scale: 0.98,
                    transition: {
                      height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.3 }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 pt-2">
                    {courseSyllabus.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: index * 0.06 }
                        }}
                        className="bg-white p-5 rounded-xl border border-luxury-nude/40 shadow-sm hover:shadow transition-shadow flex gap-4"
                      >
                        <div className="shrink-0">
                          <span className="inline-flex items-center justify-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-luxury-gold/15 text-luxury-gold-dark rounded">
                            {item.day}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-luxury-charcoal">
                            {item.title}
                          </h4>
                          <p className="text-xs text-luxury-charcoal/65 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hint message when closed */}
            {!isSyllabusOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 justify-center py-4 px-6 rounded-xl bg-luxury-gold/5 border border-luxury-gold/15 text-center animate-[fadeIn_0.5s_ease]"
              >
                <Sparkles className="w-4 h-4 text-luxury-gold animate-pulse shrink-0" />
                <span className="text-xs text-luxury-gold-dark font-medium">
                  Khám phá lộ trình lột xác bản thân để tự tin toả sáng chuẩn thần thái!
                </span>
              </motion.div>
            )}
          </div>

          {/* Editorial image and card on right (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* Custom Generated Classroom Image - Expanded and Animated Slideshow */}
            <div className="relative aspect-[3/2] sm:aspect-[1.4] rounded-3xl overflow-hidden shadow-2xl border border-luxury-gold/30 bg-luxury-charcoal">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImgIndex}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={academyImages[currentImgIndex].url}
                    alt={academyImages[currentImgIndex].caption}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                    <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold">LỚP HỌC TRANG ĐIỂM CÁ NHÂN</p>
                    <p className="text-sm sm:text-base font-serif font-medium mt-1 drop-shadow-md">
                      {academyImages[currentImgIndex].caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation dots */}
              <div className="absolute top-4 right-4 flex gap-1.5 z-20">
                {academyImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImgIndex(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentImgIndex === idx ? "bg-luxury-gold w-4" : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CTA Course Details Card */}
            <div className="bg-luxury-charcoal text-white p-6 rounded-2xl border border-luxury-gold/20 shadow-xl space-y-4">
              <span className="text-[10px] tracking-widest uppercase font-bold text-luxury-gold bg-white/10 px-2.5 py-1 rounded-full border border-white/5 inline-block">
                KHÓA HỌC CÁ NHÂN CHUYÊN SÂU
              </span>
              
              <h4 className="text-lg font-serif text-luxury-beige">Lợi ích sau khóa học:</h4>
              <ul className="space-y-2 text-xs text-luxury-beige/80">
                <li className="flex gap-2 items-start">
                  <span className="text-luxury-gold">✦</span>
                  <span>Tự tin tự trang điểm trong 20 phút cho mọi sự kiện.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-luxury-gold">✦</span>
                  <span>Biết cách chọn mỹ phẩm chuẩn tone da, tiết kiệm tiền mua sai đồ.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-luxury-gold">✦</span>
                  <span>Nhóm học siêu giới hạn (tối đa 3 học viên) để Nghĩa Trần kèm cặp chi tiết.</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-white/50 block font-sans">Thời gian linh hoạt:</span>
                  <span className="text-xs font-semibold text-luxury-gold">Sáng / Chiều / Tối</span>
                </div>
                <div>
                  <span className="text-[10px] text-white/50 block font-sans">Giá ưu đãi:</span>
                  <span className="text-sm font-bold text-white">Liên hệ tư vấn</span>
                </div>
              </div>

              <a
                href="https://zalo.me/0931559307"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-luxury-gold text-luxury-charcoal hover:bg-white text-xs font-bold uppercase tracking-wider transition-colors duration-300 shadow-md text-center"
              >
                Nhận Lộ Trình & Đăng Ký Học Thử
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-luxury-charcoal" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
