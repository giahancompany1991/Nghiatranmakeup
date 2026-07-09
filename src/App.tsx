import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServiceGrid from "./components/ServiceGrid";
import BeforeAfter from "./components/BeforeAfter";
import MakeupPortfolio from "./components/MakeupPortfolio";
import PhotographyPortfolio from "./components/PhotographyPortfolio";
import WeddingSpecial from "./components/WeddingSpecial";
import Academy from "./components/Academy";
import CustomerFeedback from "./components/CustomerFeedback";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AdminPanel from "./components/AdminPanel";
import { MessageCircle, PhoneCall, Calendar, X, Check, BellRing } from "lucide-react";

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Trang Điểm Cô Dâu");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  // Setup Event listener on window to listen to mock SMS submissions for toast alerts
  useEffect(() => {
    const handleLeadSubmitted = (e: Event) => {
      const customEvent = e as CustomEvent;
      const lead = customEvent.detail?.lead;
      if (lead) {
        setNotificationMsg(`🔔 Đã tự động gửi SMS đến 0931559307: Khách hàng "${lead.fullName}" đăng ký tư vấn ${String(lead.serviceType).toUpperCase()}!`);
        setShowNotification(true);
      }
    };

    const handleBookingSubmitted = (e: Event) => {
      const customEvent = e as CustomEvent;
      const booking = customEvent.detail?.booking;
      if (booking) {
        setNotificationMsg(`🔔 Đã tự động gửi SMS đến 0931559307: Lịch hẹn mới từ "${booking.fullName}" lúc ${booking.bookingTime}!`);
        setShowNotification(true);
      }
    };

    window.addEventListener("app:lead-submitted", handleLeadSubmitted);
    window.addEventListener("app:booking-submitted", handleBookingSubmitted);

    return () => {
      window.removeEventListener("app:lead-submitted", handleLeadSubmitted);
      window.removeEventListener("app:booking-submitted", handleBookingSubmitted);
    };
  }, []);

  // Auto-dismiss notification after 6 seconds
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <div className="relative min-h-screen flex flex-col bg-luxury-beige selection:bg-luxury-gold/30">
      
      {/* Header */}
      <Header
        isAdminOpen={isAdminOpen}
        setIsAdminOpen={setIsAdminOpen}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* Render Admin Panel at the top if enabled */}
        {isAdminOpen && <AdminPanel />}

        {/* Hero Banner */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Primary Services Grid */}
        <ServiceGrid onOpenBooking={handleOpenBooking} />

        {/* Interactive Before & After Slider */}
        <BeforeAfter />

        {/* Separate section for makeup works */}
        <MakeupPortfolio onOpenBooking={handleOpenBooking} />

        {/* Separate section for photography works */}
        <PhotographyPortfolio onOpenBooking={handleOpenBooking} />

        {/* Special Wedding Package Details */}
        <WeddingSpecial onOpenBooking={handleOpenBooking} />

        {/* Personal Makeup Academy Course */}
        <Academy onOpenBooking={handleOpenBooking} />

        {/* Customer Feedbacks */}
        <CustomerFeedback />

        {/* Inline Leads Form & Maps Locator */}
        <ContactForm
          isBookingOpen={isBookingOpen}
          setIsBookingOpen={setIsBookingOpen}
          defaultService={selectedService}
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* STICKY PERSISTENT MOBILE FLOATING WIDGETS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 sm:gap-4 select-none">
        
        {/* Floating Call Hotline */}
        <a
          href="tel:0931559307"
          className="w-12 h-12 sm:w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-emerald-600 active:scale-95 transition-all duration-300 relative group"
          title="Gọi điện đặt lịch trực tiếp"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" />
          <PhoneCall className="w-5 h-5 sm:w-6 h-6 z-10" />
          <span className="absolute right-14 bg-luxury-charcoal/90 text-white text-[10px] px-2.5 py-1.5 rounded-md font-sans hidden group-hover:block whitespace-nowrap tracking-wide border border-white/10">
            Gọi Hotline: 0931 559 307
          </span>
        </a>

        {/* Floating Zalo Chat Button */}
        <a
          href="https://zalo.me/0931559307"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 h-14 bg-sky-500 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-sky-600 active:scale-95 transition-all duration-300 relative group"
          title="Chat tư vấn qua Zalo"
        >
          <span className="absolute inset-0 rounded-full bg-sky-500/40 animate-ping [animation-delay:0.5s]" />
          <MessageCircle className="w-5 h-5 sm:w-6 h-6 z-10" />
          <span className="absolute right-14 bg-luxury-charcoal/90 text-white text-[10px] px-2.5 py-1.5 rounded-md font-sans hidden group-hover:block whitespace-nowrap tracking-wide border border-white/10">
            Chat Zalo: 0931.559.307
          </span>
        </a>

        {/* Quick Booking Button */}
        <button
          onClick={() => handleOpenBooking()}
          className="w-12 h-12 sm:w-14 h-14 bg-luxury-charcoal text-luxury-gold rounded-full flex items-center justify-center shadow-xl hover:bg-luxury-gold hover:text-luxury-charcoal active:scale-95 transition-all duration-300 relative group cursor-pointer border border-luxury-gold/30"
          title="Đặt lịch hẹn làm đẹp"
        >
          <Calendar className="w-5 h-5 sm:w-6 h-6" />
          <span className="absolute right-14 bg-luxury-charcoal/90 text-white text-[10px] px-2.5 py-1.5 rounded-md font-sans hidden group-hover:block whitespace-nowrap tracking-wide border border-white/10">
            Đặt Lịch Ngay
          </span>
        </button>

      </div>

      {/* AUTOMATED SMS LOG TOAST NOTIFICATION */}
      {showNotification && (
        <div className="fixed top-24 right-4 z-50 max-w-sm w-full bg-luxury-charcoal text-white rounded-xl shadow-2xl border border-luxury-gold/30 p-4 animate-slide-in flex gap-3.5 items-start">
          <div className="p-2 bg-luxury-gold/15 text-luxury-gold rounded-lg shrink-0">
            <BellRing className="w-5 h-5 animate-bounce" />
          </div>
          <div className="flex-grow space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold tracking-widest text-luxury-gold uppercase">HỆ THỐNG TỰ ĐỘNG</span>
              <button onClick={() => setShowNotification(false)} className="text-white/40 hover:text-white">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-luxury-beige/95 leading-relaxed font-sans font-medium">{notificationMsg}</p>
            <span className="text-[9px] text-white/40 block font-mono">Simulated SMS sent successfully to 0931559307</span>
          </div>
        </div>
      )}

    </div>
  );
}
