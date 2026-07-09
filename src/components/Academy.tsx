import React from "react";
import { Sparkles, Calendar, BookOpen, GraduationCap, ArrowRight } from "lucide-react";

interface AcademyProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function Academy({ onOpenBooking }: AcademyProps) {
  const courseSyllabus = [
    { day: "Buổi 1", title: "Thấu hiểu làn da & Nhận diện dáng mặt", desc: "Cách xác định undertone da, lựa chọn tone kem nền, che khuyết điểm và tạo khối hiệu chỉnh góc cạnh gương mặt riêng biệt." },
    { day: "Buổi 2", title: "Thiết kế dáng mày & Kỹ thuật kẻ mắt", desc: "Định hình lông mày chuẩn tỷ lệ vàng, kỹ thuật kẻ eyeliner sắc sảo tự nhiên, gắn mi giả phù hợp với từng dáng mắt." },
    { day: "Buổi 3", title: "Hàn Quốc ngọt ngào & Trung Hoa kiêu sa", desc: "Thực hành Layout mọng nước căng bóng chuẩn Hàn hoặc makeup Douyin lấp lánh cuốn hút." },
    { day: "Buổi 4", title: "Thái Lan sang chảnh & Tây Âu quyến rũ", desc: "Thực hành Layout Thái tông đất thời thượng tôn đường nét hoặc Tây Âu sắc sảo, cá tính và thu hút." },
    { day: "Buổi 5", title: "Kiểm tra thực hành & Định hình phong cách", desc: "Tự tay thực hiện một layout hoàn chỉnh theo sở thích dưới sự căn chỉnh, chấm điểm và định hướng phong cách cá nhân từ Nghĩa Trần." }
  ];

  // Use the exact custom-generated image path
  const academyImage = "/src/assets/images/makeup_academy_lesson_1783590229916.jpg";

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
            <div className="flex items-center gap-2 pb-4 border-b border-luxury-nude/60">
              <BookOpen className="w-5 h-5 text-luxury-gold-dark" />
              <h3 className="text-lg font-serif font-semibold text-luxury-charcoal">Lộ trình học 5 buổi thay đổi bản thân</h3>
            </div>

            <div className="space-y-4">
              {courseSyllabus.map((item, index) => (
                <div
                  key={index}
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
                </div>
              ))}
            </div>
          </div>

          {/* Editorial image and card on right (5 cols) */}
          <div className="lg:col-span-5 space-y-6 sticky top-24">
            
            {/* Custom Generated Classroom Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-luxury-nude bg-luxury-charcoal">
              <img
                src={academyImage}
                alt="Nghĩa Trần Makeup Lesson"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-serif italic text-luxury-gold">Không gian học tập chuẩn Studio</p>
                <p className="text-sm font-semibold mt-0.5">Nghĩa Trần Makeup & Studio</p>
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
