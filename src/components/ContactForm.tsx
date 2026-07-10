import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, X, Calendar, Map, CheckCircle2, Compass, Layers, Navigation } from "lucide-react";
import { ServiceType } from "../types";

interface ContactFormProps {
  isBookingOpen: boolean;
  setIsBookingOpen: (open: boolean) => void;
  defaultService?: string;
}

export default function ContactForm({ isBookingOpen, setIsBookingOpen, defaultService = "Trang Điểm Cô Dâu" }: ContactFormProps) {
  // Inline Lead Form State
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadService, setLeadService] = useState<ServiceType>("bridal");
  const [leadMessage, setLeadMessage] = useState("");
  const [isLeadSubmitting, setIsLeadSubmitting] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);

  // Modal Booking Form State
  const [bookName, setBookName] = useState("");
  const [bookPhone, setBookPhone] = useState("");
  const [bookService, setBookService] = useState(defaultService);
  const [bookDate, setBookDate] = useState("");
  const [bookTime, setBookTime] = useState("");
  const [bookLoc, setBookLoc] = useState<"home" | "studio">("studio");
  const [bookAddress, setBookAddress] = useState("");
  const [bookNotes, setBookNotes] = useState("");
  const [isBookSubmitting, setIsBookSubmitting] = useState(false);
  const [bookSuccess, setBookSuccess] = useState(false);

  // Map 3D Controls State
  const [mapViewMode, setMapViewMode] = useState<"3d" | "flat">("3d");
  const [showCoverage, setShowCoverage] = useState(true);

  // Submit Lead Form
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadPhone) {
      alert("Vui lòng điền họ tên và số điện thoại.");
      return;
    }

    setIsLeadSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: leadName,
          phone: leadPhone,
          serviceType: leadService,
          message: leadMessage,
        }),
      });

      if (res.ok) {
        let leadData = { fullName: leadName, serviceType: leadService };
        try {
          const data = await res.clone().json();
          if (data && data.lead) {
            leadData = data.lead;
          }
        } catch (e) {
          console.error("Error reading lead response json", e);
        }
        window.dispatchEvent(new CustomEvent("app:lead-submitted", { detail: { lead: leadData } }));

        setLeadSuccess(true);
        setLeadName("");
        setLeadPhone("");
        setLeadMessage("");
        setTimeout(() => setLeadSuccess(false), 8000);
      } else {
        alert("Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại.");
      }
    } catch (err) {
      console.error(err);
      alert("Không thể kết nối đến máy chủ.");
    } finally {
      setIsLeadSubmitting(false);
    }
  };

  // Submit Booking Form
  const handleBookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookName || !bookPhone || !bookDate || !bookTime) {
      alert("Vui lòng điền đầy đủ các thông tin bắt buộc (*)");
      return;
    }

    setIsBookSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: bookName,
          phone: bookPhone,
          serviceType: bookService,
          bookingDate: bookDate,
          bookingTime: bookTime,
          locationType: bookLoc,
          address: bookLoc === "home" ? bookAddress : "Tại Studio",
          notes: bookNotes,
        }),
      });

      if (res.ok) {
        let bookingData = { fullName: bookName, bookingTime: bookTime };
        try {
          const data = await res.clone().json();
          if (data && data.booking) {
            bookingData = data.booking;
          }
        } catch (e) {
          console.error("Error reading booking response json", e);
        }
        window.dispatchEvent(new CustomEvent("app:booking-submitted", { detail: { booking: bookingData } }));

        setBookSuccess(true);
        setBookName("");
        setBookPhone("");
        setBookDate("");
        setBookTime("");
        setBookAddress("");
        setBookNotes("");
        setTimeout(() => {
          setBookSuccess(false);
          setIsBookingOpen(false);
        }, 4000);
      } else {
        alert("Có lỗi xảy ra khi đặt lịch. Vui lòng thử lại.");
      }
    } catch (err) {
      console.error(err);
      alert("Không thể kết nối đến máy chủ.");
    } finally {
      setIsBookSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-luxury-beige relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact details & Map on left */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-luxury-gold-dark font-semibold inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Đồng hành cùng bạn
              </span>
              <h2 className="text-3xl font-serif font-light text-luxury-charcoal leading-tight">
                Liên Hệ Với <br />
                <span className="font-serif italic font-normal text-luxury-gold-dark">Nghĩa Trần Makeup</span>
              </h2>
              <p className="text-xs sm:text-sm text-luxury-charcoal/75 leading-relaxed font-sans">
                Chúng tôi sẵn sàng lắng nghe mọi ý tưởng, băn khoăn của bạn để vẽ nên một diện mạo kiều diễm nhất cho ngày trọng đại của bạn.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white p-4 rounded-xl border border-luxury-nude/40 justify-between">
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-full bg-luxury-beige text-luxury-gold-dark shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-luxury-charcoal/50">Địa chỉ Studio</h4>
                    <p className="text-sm font-semibold text-luxury-charcoal mt-1">Đường tỉnh 787A, Lộc Giang - Gần KCN Thành Thành Công Trảng Bàng - Tây Ninh</p>
                    <p className="text-xs text-luxury-charcoal/60 mt-0.5">(Hỗ trợ làm dịch vụ tại tiệm & Phục vụ tận nhà khách hàng)</p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Đường+tỉnh+787A,+Lộc+Giang,+Trảng+Bàng,+Tây+Ninh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#4285F4] hover:bg-[#357ae8] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all active:scale-95 shrink-0 mt-2 sm:mt-0"
                  title="Chỉ đường qua Google Maps"
                >
                  <Navigation className="w-3.5 h-3.5 fill-current" />
                  Chỉ đường ↗
                </a>
              </div>

              <a
                href="tel:0931559307"
                className="flex gap-4 items-start bg-white p-4 rounded-xl border border-luxury-nude/40 hover:bg-luxury-nude/10 transition-colors"
              >
                <div className="p-2.5 rounded-full bg-luxury-beige text-luxury-gold-dark shrink-0">
                  <Phone className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-luxury-charcoal/50">Hotline Đặt lịch</h4>
                  <p className="text-sm font-bold text-luxury-gold-dark mt-1">0931 559 307</p>
                  <p className="text-xs text-luxury-charcoal/60 mt-0.5">Hỗ trợ 24/7 qua cuộc gọi hoặc tin nhắn SMS</p>
                </div>
              </a>
            </div>

            {/* Styled Map Container - High-fidelity 3D Interactive Map */}
            <div className="rounded-2xl overflow-hidden border border-luxury-nude bg-[#100f0e] text-white p-5 sm:p-6 shadow-xl relative space-y-4 group">
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-mono tracking-wider text-luxury-nude/80 uppercase">
                    Bản đồ Trực quan 3D
                  </span>
                </div>
                
                {/* View Toggles */}
                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10 text-[10px] font-sans">
                  <button 
                    type="button"
                    onClick={() => setMapViewMode("3d")}
                    className={`px-2 py-1 rounded transition-colors cursor-pointer ${mapViewMode === "3d" ? "bg-luxury-gold text-luxury-charcoal font-bold" : "text-white/60 hover:text-white"}`}
                  >
                    Góc nhìn 3D
                  </button>
                  <button 
                    type="button"
                    onClick={() => setMapViewMode("flat")}
                    className={`px-2 py-1 rounded transition-colors cursor-pointer ${mapViewMode === "flat" ? "bg-luxury-gold text-luxury-charcoal font-bold" : "text-white/60 hover:text-white"}`}
                  >
                    Bản đồ phẳng
                  </button>
                </div>
              </div>

              {/* Map Canvas / Perspective Wrapper */}
              <div className="relative w-full aspect-[16/10] bg-luxury-charcoal/40 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center [perspective:1000px]">
                {/* Subtle grid pattern background */}
                <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

                {/* The 3D Map Board */}
                <div 
                  className={`relative w-[85%] h-[80%] bg-[#1c1a18] rounded-xl border border-luxury-gold/20 p-4 transition-all duration-700 ease-out [transform-style:preserve-3d] ${
                    mapViewMode === "3d" 
                      ? "[transform:rotateX(55deg)_rotateZ(-30deg)] group-hover:[transform:rotateX(45deg)_rotateZ(-20deg)_translateY(-8px)] shadow-[0_25px_60px_rgba(197,168,128,0.15)]" 
                      : "[transform:none] shadow-md"
                  }`}
                >
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none opacity-[0.06]">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={i} className="border-[0.5px] border-luxury-gold" />
                    ))}
                  </div>

                  {/* Rivers / Waterway Element */}
                  <div className="absolute inset-x-0 top-1/4 h-3 bg-gradient-to-r from-blue-950/40 via-blue-900/20 to-blue-950/40 border-y border-blue-900/10 blur-[1px] [transform:skewY(-15deg)] pointer-events-none" />

                  {/* Main Road Route (Đường tỉnh 787A - Golden Glowing Tubing) */}
                  <div className="absolute inset-y-0 left-1/3 w-3 bg-gradient-to-b from-luxury-gold/5 via-luxury-gold/25 to-luxury-gold/5 border-x border-luxury-gold/20 blur-[0.5px] [transform:rotate(15deg)] pointer-events-none">
                    {/* Glowing path animator */}
                    <div className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-luxury-gold/50 to-transparent animate-pulse top-10" />
                  </div>

                  {/* Landmark: KCN Thành Thành Công */}
                  <div className={`absolute top-8 right-4 text-right transition-all duration-500 [transform-style:preserve-3d] ${mapViewMode === "3d" ? "[transform:rotateX(-55deg)_rotateY(0deg)_rotateZ(30deg)]" : ""}`}>
                    <span className="text-[8px] tracking-wider text-white/40 block">LANDMARK</span>
                    <span className="text-[10px] font-semibold text-luxury-nude/90">KCN Thành Thành Công</span>
                  </div>

                  {/* Landmark: Trảng Bàng */}
                  <div className={`absolute bottom-6 left-6 text-left transition-all duration-500 [transform-style:preserve-3d] ${mapViewMode === "3d" ? "[transform:rotateX(-55deg)_rotateY(0deg)_rotateZ(30deg)]" : ""}`}>
                    <span className="text-[8px] tracking-wider text-white/40 block">VÙNG BẢN ĐỒ</span>
                    <span className="text-[10px] font-semibold text-luxury-nude/90">Trảng Bàng, Tây Ninh</span>
                  </div>

                  {/* Service Coverage Area Indicator */}
                  {showCoverage && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-luxury-gold/5 border border-dashed border-luxury-gold/30 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-[8px] tracking-widest text-luxury-gold font-bold uppercase pointer-events-none opacity-60">
                        Hỗ Trợ Tận Nhà (15km)
                      </span>
                    </div>
                  )}

                  {/* Vertical coordinate laser beam */}
                  {mapViewMode === "3d" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-20 bg-gradient-to-t from-luxury-gold to-transparent w-[1px] pointer-events-none bottom-1/2 opacity-70" />
                  )}

                  {/* Core Location Ring */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="absolute -inset-4 rounded-full bg-luxury-gold/20 border border-luxury-gold/40 animate-ping opacity-60" />
                    
                    {/* The Main 3D Pin Icon (standing tall or staying flat) */}
                    <div 
                      className={`relative flex items-center justify-center transition-all duration-500 origin-bottom ${
                        mapViewMode === "3d" 
                          ? "[transform:rotateX(-55deg)_rotateY(0deg)_rotateZ(30deg)_translateY(-14px)]" 
                          : ""
                      }`}
                    >
                      {/* Floating pin head with shadow */}
                      <div className="bg-luxury-charcoal text-luxury-gold border border-luxury-gold rounded-full p-2 shadow-[0_10px_20px_rgba(0,0,0,0.6)] animate-bounce relative z-20">
                        <MapPin className="w-4 h-4 fill-luxury-gold/10" />
                      </div>
                      
                      {/* Pin vertical projection leg */}
                      {mapViewMode === "3d" && (
                        <div className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 w-[1px] h-[14px] bg-luxury-gold z-10" />
                      )}
                      
                      {/* Anchor shadow on the board */}
                      <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-2.5 h-1 bg-black/60 rounded-full blur-[1px] z-0" />
                    </div>
                  </div>
                </div>

                {/* Compass HUD decoration */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 px-2 py-1 rounded text-[8px] tracking-wider text-white/70 font-mono">
                  <Compass className="w-3 h-3 text-luxury-gold animate-[spin_12s_linear_infinite]" />
                  <span>N 11.0268° / E 106.2731°</span>
                </div>

                {/* Layer Control Hud */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                  <button 
                    type="button"
                    onClick={() => setShowCoverage(!showCoverage)}
                    className={`flex items-center gap-1 bg-black/60 backdrop-blur-sm border px-2.5 py-1 rounded text-[8px] tracking-wider font-mono transition-all cursor-pointer ${showCoverage ? "border-luxury-gold text-luxury-gold font-bold" : "border-white/10 text-white/70"}`}
                  >
                    <Layers className="w-2.5 h-2.5" />
                    <span>Lớp Phục Vụ</span>
                  </button>
                </div>
              </div>

              {/* Bottom Address Info & Map Redirection Button */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <h5 className="text-xs font-semibold text-luxury-gold">Nghĩa Trần Bridal Studio</h5>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Đường tỉnh 787A, Lộc Giang, Trảng Bàng, Tây Ninh
                  </p>
                  <p className="text-[10px] text-white/50">
                    Phục vụ làm dịch vụ tại tiệm &amp; tận nơi cho quý khách hàng
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Đường+tỉnh+787A,+Lộc+Giang,+Trảng+Bàng,+Tây+Ninh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4285F4] hover:bg-white hover:text-[#4285F4] text-white px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider inline-flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5 fill-current animate-pulse" />
                  Chỉ đường Google Maps ↗
                </a>
              </div>
            </div>
          </div>

          {/* Lead Capture form on right */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-luxury-nude shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-full blur-2xl" />
              
              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-luxury-charcoal">Yêu Cầu Tư Vấn Dịch Vụ</h3>
                  <p className="text-xs text-luxury-charcoal/50 mt-1 font-sans">
                    Nghĩa Trần sẽ liên hệ tư vấn trực tiếp và gửi báo giá ưu đãi 10% đến SĐT của bạn.
                  </p>
                </div>

                {leadSuccess ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3 animate-fade-in">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                    <h4 className="text-base font-bold text-emerald-800">Gửi Yêu Cầu Thành Công!</h4>
                    <p className="text-xs text-emerald-700 leading-relaxed">
                      Cảm ơn bạn đã quan tâm. Thông báo đã được chuyển thẳng đến Nghĩa Trần qua SĐT <strong>0931559307</strong>. Chúng tôi sẽ gọi lại tư vấn cho bạn ngay lập tức!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-luxury-charcoal/70 block mb-1">
                          Họ và tên của bạn <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          placeholder="Nguyễn Văn A"
                          className="w-full px-4 py-3 rounded-lg border border-luxury-nude focus:ring-1 focus:ring-luxury-gold-dark focus:border-luxury-gold-dark text-xs sm:text-sm bg-luxury-beige/20 text-luxury-charcoal focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-luxury-charcoal/70 block mb-1">
                          Số điện thoại nhận tư vấn <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={leadPhone}
                          onChange={(e) => setLeadPhone(e.target.value)}
                          placeholder="09xx xxx xxx"
                          className="w-full px-4 py-3 rounded-lg border border-luxury-nude focus:ring-1 focus:ring-luxury-gold-dark focus:border-luxury-gold-dark text-xs sm:text-sm bg-luxury-beige/20 text-luxury-charcoal focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-luxury-charcoal/70 block mb-1">
                        Dịch vụ bạn quan tâm nhất
                      </label>
                      <select
                        value={leadService}
                        onChange={(e) => setLeadService(e.target.value as ServiceType)}
                        className="w-full px-4 py-3 rounded-lg border border-luxury-nude focus:ring-1 focus:ring-luxury-gold-dark focus:border-luxury-gold-dark text-xs sm:text-sm bg-luxury-beige/20 text-luxury-charcoal focus:outline-none"
                      >
                        <option value="bridal">Trang Điểm Cô Dâu (Bridal)</option>
                        <option value="party">Trang Điểm Tiệc & Sự Kiện (Event)</option>
                        <option value="concept">Combo Ảnh Cá Nhân & Concept (Photo + Makeup)</option>
                        <option value="academy">Đào Tạo Makeup Cá Nhân (5 Buổi)</option>
                        <option value="other">Yêu cầu tư vấn khác</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-luxury-charcoal/70 block mb-1">
                        Ghi chú thêm về yêu cầu của bạn (nếu có)
                      </label>
                      <textarea
                        rows={4}
                        value={leadMessage}
                        onChange={(e) => setLeadMessage(e.target.value)}
                        placeholder="Ví dụ: Ngày cưới dự kiến của em là 20/12, cần make tại nhà ở Quận 2..."
                        className="w-full px-4 py-3 rounded-lg border border-luxury-nude focus:ring-1 focus:ring-luxury-gold-dark focus:border-luxury-gold-dark text-xs sm:text-sm bg-luxury-beige/20 text-luxury-charcoal focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLeadSubmitting}
                      className="w-full inline-flex items-center justify-center py-4 rounded-xl bg-luxury-charcoal hover:bg-luxury-gold text-white text-xs font-bold uppercase tracking-widest transition-colors duration-300 shadow-md cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5 mr-2" />
                      {isLeadSubmitting ? "Đang gửi thông tin..." : "Gửi Yêu Cầu Tư Vấn - Nhận Ưu Đãi 10%"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* GLOBAL BOOKING SCHEDULER MODAL */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsBookingOpen(false)}
          />

          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all w-full max-w-lg border border-luxury-nude animate-scale-up">
              
              {/* Close Button */}
              <button
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-full text-luxury-charcoal/50 hover:bg-luxury-beige hover:text-luxury-charcoal transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Header info */}
                <div className="flex items-center gap-2.5 pb-4 border-b border-luxury-nude">
                  <div className="p-2 bg-luxury-gold/15 text-luxury-gold-dark rounded-xl">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-luxury-charcoal">Đăng Ký Đặt Lịch Làm Đẹp</h3>
                    <p className="text-xs text-luxury-charcoal/55 font-sans">Nhanh chóng, tiện lợi, cam kết đúng giờ</p>
                  </div>
                </div>

                {bookSuccess ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 animate-bounce" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-emerald-800">Đặt Lịch Thành Công!</h4>
                      <p className="text-xs text-emerald-700 max-w-xs mx-auto">
                        Thông báo đặt lịch đã tự động gửi đến SĐT của Nghĩa Trần (0931559307). Chúng tôi sẽ liên hệ sớm nhất để xác nhận!
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleBookSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider font-bold text-luxury-charcoal/60 block mb-1">
                          Họ và tên <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={bookName}
                          onChange={(e) => setBookName(e.target.value)}
                          placeholder="Họ tên của bạn"
                          className="w-full px-3 py-2 rounded-lg border border-luxury-nude focus:ring-1 focus:ring-luxury-gold-dark focus:border-luxury-gold-dark text-xs bg-luxury-beige/10 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider font-bold text-luxury-charcoal/60 block mb-1">
                          Số điện thoại <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={bookPhone}
                          onChange={(e) => setBookPhone(e.target.value)}
                          placeholder="Số điện thoại"
                          className="w-full px-3 py-2 rounded-lg border border-luxury-nude focus:ring-1 focus:ring-luxury-gold-dark focus:border-luxury-gold-dark text-xs bg-luxury-beige/10 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider font-bold text-luxury-charcoal/60 block mb-1">
                        Dịch vụ lựa chọn
                      </label>
                      <select
                        value={bookService}
                        onChange={(e) => setBookService(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-lg border border-luxury-nude focus:ring-1 focus:ring-luxury-gold-dark focus:border-luxury-gold-dark text-xs bg-luxury-beige/10 focus:outline-none text-luxury-charcoal"
                      >
                        <option value="Trang Điểm Cô Dâu">Trang Điểm Cô Dâu (Bridal)</option>
                        <option value="Trang Điểm Tiệc & Sự Kiện">Trang Điểm Tiệc & Sự Kiện (Event)</option>
                        <option value="Combo Ảnh Cá Nhân & Concept">Combo Ảnh Cá Nhân & Concept (Photo + Makeup)</option>
                        <option value="Combo Wedding Special Trọn Gói">Combo Wedding Special Trọn Gói</option>
                        <option value="Khóa học Đào tạo Makeup Cá nhân">Khóa học Đào tạo Makeup Cá nhân</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider font-bold text-luxury-charcoal/60 block mb-1">
                          Ngày làm dịch vụ <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="date"
                          required
                          value={bookDate}
                          onChange={(e) => setBookDate(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-luxury-nude focus:ring-1 focus:ring-luxury-gold-dark focus:border-luxury-gold-dark text-xs bg-luxury-beige/10 focus:outline-none text-luxury-charcoal"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider font-bold text-luxury-charcoal/60 block mb-1">
                          Giờ hẹn <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="time"
                          required
                          value={bookTime}
                          onChange={(e) => setBookTime(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-luxury-nude focus:ring-1 focus:ring-luxury-gold-dark focus:border-luxury-gold-dark text-xs bg-luxury-beige/10 focus:outline-none text-luxury-charcoal"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider font-bold text-luxury-charcoal/60 block mb-1">
                        Địa điểm làm dịch vụ
                      </label>
                      <div className="flex gap-4 mt-1">
                        <label className="flex items-center text-xs gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="bookLoc"
                            checked={bookLoc === "studio"}
                            onChange={() => setBookLoc("studio")}
                            className="text-luxury-gold-dark focus:ring-0"
                          />
                          <span>Tại Studio (Đường tỉnh 787A, Lộc Giang)</span>
                        </label>
                        <label className="flex items-center text-xs gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="bookLoc"
                            checked={bookLoc === "home"}
                            onChange={() => setBookLoc("home")}
                            className="text-luxury-gold-dark focus:ring-0"
                          />
                          <span>Tại nhà riêng / Khách sạn</span>
                        </label>
                      </div>
                    </div>

                    {bookLoc === "home" && (
                      <div className="animate-fade-in">
                        <label className="text-[10px] uppercase tracking-wider font-bold text-luxury-charcoal/60 block mb-1">
                          Địa chỉ chi tiết của bạn <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={bookAddress}
                          onChange={(e) => setBookAddress(e.target.value)}
                          placeholder="Số nhà, Tên đường, Quận/Huyện..."
                          className="w-full px-3 py-2 rounded-lg border border-luxury-nude focus:ring-1 focus:ring-luxury-gold-dark focus:border-luxury-gold-dark text-xs bg-luxury-beige/10 focus:outline-none"
                        />
                      </div>
                    )}

                    <div>
                      <label className="text-[10px] uppercase tracking-wider font-bold text-luxury-charcoal/60 block mb-1">
                        Ghi chú thêm về layout hoặc mong muốn đặc biệt
                      </label>
                      <textarea
                        rows={2}
                        value={bookNotes}
                        onChange={(e) => setBookNotes(e.target.value)}
                        placeholder="Chi tiết yêu cầu..."
                        className="w-full px-3 py-2 rounded-lg border border-luxury-nude focus:ring-1 focus:ring-luxury-gold-dark focus:border-luxury-gold-dark text-xs bg-luxury-beige/10 focus:outline-none resize-none"
                      />
                    </div>

                    <div className="pt-2 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setIsBookingOpen(false)}
                        className="flex-1 px-4 py-3 rounded-xl border border-luxury-nude text-luxury-charcoal/70 hover:bg-luxury-beige text-xs font-bold uppercase tracking-wider transition-colors duration-300"
                      >
                        Hủy bỏ
                      </button>
                      <button
                        type="submit"
                        disabled={isBookSubmitting}
                        className="flex-1 px-4 py-3 rounded-xl bg-luxury-charcoal hover:bg-luxury-gold text-white text-xs font-bold uppercase tracking-wider transition-colors duration-300 disabled:opacity-50"
                      >
                        {isBookSubmitting ? "Đang gửi..." : "Xác nhận đặt lịch"}
                      </button>
                    </div>

                  </form>
                )}

              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
