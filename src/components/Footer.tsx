import React from "react";
import { MessageSquare, Heart, MapPin, Phone, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-charcoal text-luxury-beige/90 pt-16 pb-8 border-t border-luxury-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Layout */}
        <div className="grid md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Logo Column (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <img
                src="https://i.postimg.cc/WzmSf1YK/6d36364a-33fa-4aa3-b627-852593d587d5.png"
                alt="Nghĩa Trần Makeup & Studio"
                className="w-12 h-12 rounded-full border border-luxury-gold/30 object-cover shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-semibold tracking-[0.15em] text-white leading-none">
                  NGHIA TRAN
                </span>
                <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-luxury-gold font-medium mt-1">
                  Makeup & Bridal
                </span>
              </div>
            </a>
            <p className="text-xs text-luxury-beige/60 leading-relaxed font-sans max-w-sm">
              Đánh thức vẻ đẹp rạng rỡ của chính bạn bằng mỹ phẩm high-end chính hãng và kỹ thuật trang điểm nền mịn màng, bền màu suốt 12 giờ.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.facebook.com/share/1CuYEhoAN7/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://zalo.me/0931559307"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-serif font-bold text-white tracking-wider uppercase">Dịch Vụ Chính</h4>
            <ul className="space-y-2.5 text-xs text-luxury-beige/70">
              <li><a href="#services" className="hover:text-luxury-gold transition-colors">Trang điểm Cô Dâu (Bridal)</a></li>
              <li><a href="#services" className="hover:text-luxury-gold transition-colors">Trang điểm Tiệc & Sự Kiện (VIP)</a></li>
              <li><a href="#services" className="hover:text-luxury-gold transition-colors">Combo Chụp Ảnh & Makeup Concept</a></li>
              <li><a href="#wedding-special" className="hover:text-luxury-gold transition-colors">Combo Wedding Special Trọn Gói</a></li>
            </ul>
          </div>

          {/* Training Academy Column (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-serif font-bold text-white tracking-wider uppercase">Học Viện Đào Tạo</h4>
            <ul className="space-y-2.5 text-xs text-luxury-beige/70">
              <li><a href="#academy" className="hover:text-luxury-gold transition-colors">Khóa Đào Tạo Cá Nhân (5 Buổi)</a></li>
              <li><a href="#academy" className="hover:text-luxury-gold transition-colors">Layout Makeup Hàn Quốc / Douyin</a></li>
              <li><a href="#academy" className="hover:text-luxury-gold transition-colors">Layout Makeup Thái Lan / Tây Âu</a></li>
              <li><a href="#contact" className="hover:text-luxury-gold transition-colors">Đăng Ký Học Thử Miễn Phí</a></li>
            </ul>
          </div>

          {/* Quick Contact Column (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-serif font-bold text-white tracking-wider uppercase">Hỗ Trợ</h4>
            <ul className="space-y-2.5 text-xs text-luxury-beige/70">
              <li><a href="#contact" className="hover:text-luxury-gold transition-colors">Bản Đồ Studio</a></li>
              <li><a href="tel:0931559307" className="text-luxury-gold font-semibold">Hotline: 0931559307</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-luxury-beige/50 font-sans">
          <p>© 2026 Nghĩa Trần Makeup & Bridal. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Thiết kế tinh tế bằng tình yêu <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> từ Nghĩa Trần
          </p>
        </div>

      </div>
    </footer>
  );
}
