import React from "react";
import { Heart, Check, Gift } from "lucide-react";

interface WeddingSpecialProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function WeddingSpecial({ onOpenBooking }: WeddingSpecialProps) {
  const packageItems = [
    { title: "Váy Cưới Cao Cấp (Bridal Gown)", desc: "1 Váy cưới dòng luxury được tuyển chọn kỹ lưỡng, đo may vừa vặn cơ thể nàng dâu." },
    { title: "Vest Chú Rể Lịch Lãm (Groom Suit)", desc: "1 Bộ Vest chú rể phong cách Hàn Quốc/Ý chuẩn form, tôn lên nét nam tính, thanh lịch." },
    { title: "Áo Dài Cặp Đôi & Bưng Quả", desc: "Cung cấp Áo dài cho cô dâu chú rể và trọn bộ đồng phục áo dài cho đội bưng quả (nam/nữ)." },
    { title: "Trang Điểm Ngày Cưới (Bridal Makeup)", desc: "2 Lần trang điểm ngày cưới chính (lúc rước dâu và tiệc tối) do trực tiếp Nghĩa Trần thực hiện." },
    { title: "Xe Hoa & Mâm Quả Trọn Gói", desc: "Hỗ trợ trang trí xe hoa rước dâu sang trọng và chuẩn bị mâm quả cưới đầy đủ nghi lễ văn hóa." },
    { title: "Chụp Ảnh Ngày Cưới (Wedding Photo)", desc: "Ghi lại mọi khoảnh khắc thiêng liêng từ lúc trang điểm, làm lễ gia tiên đến hết tiệc tối mừng hỷ." }
  ];

  return (
    <section id="wedding-special" className="py-20 bg-white relative overflow-hidden">
      
      {/* Decorative gold background circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Information column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-luxury-gold-dark font-semibold inline-flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-luxury-gold text-luxury-gold animate-pulse" /> Gói Cưới Đặc Biệt
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-luxury-charcoal leading-tight">
                Combo Wedding Special <br />
                <span className="font-serif italic font-normal text-luxury-gold-dark">Món Quà Trọn Vẹn Cho Ngày Hạnh Phúc</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-luxury-charcoal/70 leading-relaxed font-sans">
              Hiểu được sự lo toan, lúng túng và mệt mỏi của cặp đôi trong hành trình chuẩn bị ngày trọng đại, Nghĩa Trần thiết kế giải pháp **Combo Cưới Trọn Gói**. Chúng tôi sẻ chia mọi gánh nặng, lo chu toàn từ trang phục, trang điểm đến hình ảnh nghệ thuật, để bạn thảnh thơi tận hưởng trọn vẹn từng giây phút thiêng liêng.
            </p>

            {/* List of included products */}
            <div className="grid sm:grid-cols-2 gap-4">
              {packageItems.map((item, i) => (
                <div key={i} className="flex gap-3 items-start bg-luxury-beige/40 p-4 rounded-xl border border-luxury-nude/40">
                  <div className="p-1 rounded-full bg-luxury-gold/10 text-luxury-gold-dark shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-luxury-charcoal">{item.title}</h4>
                    <p className="text-xs text-luxury-charcoal/60 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card column */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Styled Border Frame */}
              <div className="absolute inset-0 border border-luxury-gold/30 rounded-2xl translate-x-3 translate-y-3 pointer-events-none" />
              
              <div className="relative bg-luxury-charcoal text-white rounded-2xl p-6 md:p-8 shadow-2xl border border-luxury-gold/20 overflow-hidden">
                {/* Background soft glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/10 rounded-full blur-2xl" />
                
                <div className="relative z-10 space-y-5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif text-luxury-beige">Gói Cưới Hoàn Hảo</h3>
                    <p className="text-xs text-luxury-nude/60 mt-1">Sự thấu hiểu & sẻ chia từ Nghĩa Trần</p>
                  </div>

                  <p className="text-xs text-luxury-beige/70 leading-relaxed">
                    Giải pháp tối ưu hóa ngân sách và thời gian. Nghĩa Trần đồng hành cùng bạn chu toàn trọn vẹn mọi khâu từ trang phục, makeup đến lưu giữ khoảnh khắc.
                  </p>

                  <div className="pt-4 border-t border-white/10 space-y-1">
                    <span className="text-[9px] uppercase text-luxury-gold tracking-widest block font-medium">Báo giá chi tiết ưu đãi</span>
                    <p className="text-xl md:text-2xl font-serif font-bold text-luxury-beige">
                      Tối Ưu Hoàn Hảo Chi Phí
                    </p>
                    <span className="text-[10px] text-white/50 block font-sans">Tiết kiệm hơn 30% so với đặt dịch vụ riêng lẻ</span>
                  </div>

                  <a
                    href="https://zalo.me/0931559307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-luxury-gold text-luxury-charcoal text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-luxury-charcoal transition-colors duration-300 shadow-lg shadow-luxury-gold/10 cursor-pointer text-center"
                  >
                    Đăng Ký Tư Vấn Gói Cưới
                  </a>

                  <div className="text-center pt-2">
                    <a
                      href="https://zalo.me/0931559307"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-luxury-gold hover:underline tracking-wider inline-flex items-center gap-1"
                    >
                      Hỏi nhanh qua Zalo: 0931.559.307
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
