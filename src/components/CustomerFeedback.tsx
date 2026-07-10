import React, { useState } from "react";
import { MessageSquare, Sparkles, Star, Send, Plus, X, Heart, Smile, Image, Mic, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Review {
  id: string;
  sender: string;
  role: string;
  avatar: string;
  time: string;
  platform: "Zalo" | "Messenger";
  category: "bridal" | "party" | "academy";
  messages: string[];
}

export default function CustomerFeedback() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "1",
      sender: "Huyền Trang",
      role: "Cô dâu tháng 5",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
      time: "Hôm qua lúc 21:30",
      platform: "Zalo",
      category: "bridal",
      messages: [
        "Chị Nghĩa ơiii bộ ảnh phóng sự cưới của em nhận được rồi mng khen quá trời quá đất luôn 😍 Lớp makeup thì xuất sắc dã man ạ.",
        "Em mồ hôi đầm đìa nguyên ngày rước dâu từ sáng sớm tới tối mịt ăn uống bét nhè mà nền vẫn bền, mướt rượt không mốc tẹo nào luôn chị ơi. Ai cũng hỏi địa chỉ makeup hihi. Cảm ơn chị nhìu nhìu lắm ạ! ❤️"
      ]
    },
    {
      id: "2",
      sender: "Phương Thảo",
      role: "Học viên cá nhân",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100",
      time: "Thứ 3 lúc 14:15",
      platform: "Messenger",
      category: "academy",
      messages: [
        "Hôm nay đi ăn cưới tự tay họa mặt ai cũng hỏi thuê thợ ở đâu làm em sướng rơn người 😂",
        "Biết ơn khóa học 5 buổi của chị Nghĩa Trần thực sự truyền cảm hứng làm đẹp bản thân cho em luôn á! Giờ em tự kẻ eyeliner bén ngót trong 2 phút rùi chị iu ơi 🤩"
      ]
    },
    {
      id: "3",
      sender: "Minh Thư",
      role: "Dự tiệc VIP",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
      time: "02/07/2026",
      platform: "Zalo",
      category: "party",
      messages: [
        "Layout đi tiệc tối qua sịn sò lắm chị ạ! Nhẹ mặt mà chụp đèn flash không bị loá tí nào. Thợ nhà mình đến siêu đúng giờ luôn, 10 điểm chu đáo."
      ]
    }
  ]);

  const [activeFilter, setActiveFilter] = useState<"all" | "bridal" | "party" | "academy">("all");
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Form States
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newPlatform, setNewPlatform] = useState<"Zalo" | "Messenger">("Zalo");
  const [newCategory, setNewCategory] = useState<"bridal" | "party" | "academy">("bridal");
  const [newMessage, setNewMessage] = useState("");
  const [avatarIndex, setAvatarIndex] = useState(0);

  const mockAvatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100"
  ];

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newMessage) return;

    const newReview: Review = {
      id: Date.now().toString(),
      sender: newName,
      role: newRole || "Khách hàng yêu quý",
      avatar: mockAvatars[avatarIndex],
      time: "Vừa xong",
      platform: newPlatform,
      category: newCategory,
      messages: [newMessage]
    };

    setReviews([newReview, ...reviews]);
    
    // Reset Form
    setNewName("");
    setNewRole("");
    setNewMessage("");
    setIsFormOpen(false);
  };

  const filteredReviews = activeFilter === "all" 
    ? reviews 
    : reviews.filter(r => r.category === activeFilter);

  return (
    <section id="feedback" className="py-24 bg-gradient-to-b from-luxury-beige/10 via-luxury-nude/15 to-luxury-beige/10 relative overflow-hidden">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-luxury-gold-dark/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title & Introduction */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-luxury-gold-dark font-semibold inline-flex items-center gap-2 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-luxury-gold animate-pulse" /> 
            Phản Hồi Thật - Trải Nghiệm Thật
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-luxury-charcoal tracking-tight">
            Khách Hàng Nói Gì Về Chị Nghĩa Trần?
          </h2>
          <div className="w-16 h-[2px] bg-luxury-gold/40 mx-auto mt-4 mb-4" />
          <p className="text-sm text-luxury-charcoal/70 font-sans leading-relaxed">
            Những tin nhắn Zalo và Messenger đầy ắp niềm vui từ cô dâu, khách tiệc và học viên chính là minh chứng rõ nét nhất cho tâm huyết và tay nghề của chị Nghĩa Trần.
          </p>
        </div>

        {/* Filter Tabs & Add Feedback Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 border-b border-luxury-nude/40 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "Tất cả" },
              { id: "bridal", label: "Cô dâu rạng rỡ" },
              { id: "party", label: "Makeup đi tiệc" },
              { id: "academy", label: "Học viên khoá học" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  activeFilter === tab.id
                    ? "bg-luxury-charcoal text-white shadow-md border border-luxury-charcoal"
                    : "bg-white text-luxury-charcoal hover:bg-luxury-beige border border-luxury-nude/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-luxury-gold/90 text-white text-xs font-semibold hover:bg-luxury-gold-dark transition-all duration-300 shadow-md active:scale-95 border border-luxury-gold"
          >
            <Plus className="w-3.5 h-3.5" /> Gửi phản hồi của bạn
          </button>
        </div>

        {/* Dynamic Reviews Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((chat) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={chat.id}
                className="bg-white rounded-3xl border border-luxury-nude/50 shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300 group"
              >
                {/* Simulated Smartphone Status Bar (Top notch feeling) */}
                <div className="bg-[#f0ede6]/70 px-5 pt-2 pb-1 flex justify-between items-center text-[10px] font-mono text-luxury-charcoal/40 select-none border-b border-luxury-nude/20">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.13 19.58 10.53 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                    </svg>
                    <span>LTE</span>
                    <div className="w-5 h-2.5 border border-luxury-charcoal/30 rounded-sm p-[1px] flex items-center">
                      <div className="h-full w-4 bg-luxury-charcoal/50 rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* Chat App Header */}
                <div className={`px-5 py-4 border-b border-luxury-nude/30 flex items-center justify-between ${
                  chat.platform === "Zalo" ? "bg-[#0084FF]/5" : "bg-[#A107FF]/5"
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={chat.avatar}
                        alt={chat.sender}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-bold text-luxury-charcoal leading-tight group-hover:text-luxury-gold transition-colors">{chat.sender}</h4>
                        <span className="text-[10px] bg-luxury-nude/40 text-luxury-charcoal/70 px-1.5 py-0.5 rounded-full scale-90">
                          {chat.role}
                        </span>
                      </div>
                      <span className="text-[10px] text-luxury-charcoal/40 inline-flex items-center gap-1 mt-0.5">
                        {chat.platform === "Zalo" ? "Ứng dụng Zalo" : "Messenger"} • Hoạt động 5 phút trước
                      </span>
                    </div>
                  </div>
                  
                  {/* Rating Stars Badge */}
                  <div className="flex text-amber-400 gap-0.5 bg-amber-500/5 px-2 py-1 rounded-full border border-amber-400/10">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Messenger/Zalo Wallpaper chat body */}
                <div className="p-5 flex-1 bg-[#F4F3EF] space-y-4 flex flex-col justify-end min-h-[250px] relative">
                  {/* Subtle watermarked grid background representing genuine mobile application */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

                  <div className="text-center relative z-10">
                    <span className="text-[9px] bg-black/5 text-luxury-charcoal/50 px-3 py-1 rounded-full font-mono">
                      {chat.time}
                    </span>
                  </div>

                  {chat.messages.map((msg, i) => (
                    <div key={i} className="flex items-start gap-2 relative z-10 animate-fade-in">
                      <img
                        src={chat.avatar}
                        alt={chat.sender}
                        className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5 shadow-xs border border-white"
                        referrerPolicy="no-referrer"
                      />
                      {/* Message Bubble */}
                      <div className={`max-w-[80%] p-3.5 rounded-2xl shadow-xs text-xs leading-relaxed ${
                        chat.platform === "Messenger" 
                          ? "bg-gradient-to-tr from-[#006AFF] via-[#8F14FF] to-[#D61E5A] text-white rounded-tl-none font-sans" 
                          : "bg-white text-luxury-charcoal rounded-tl-none border border-black/5"
                      }`}>
                        {msg}
                      </div>
                    </div>
                  ))}

                  {/* Simulated reply bubble from admin (Nghĩa Trần) */}
                  <div className="flex justify-end gap-2 relative z-10 mt-2">
                    <div className="max-w-[75%] bg-[#E4E2DC] text-luxury-charcoal p-3 rounded-2xl rounded-tr-none text-xs leading-relaxed font-sans shadow-2xs">
                      Cảm ơn bạn yêu dấu rất nhiều ạ! Chúc bạn luôn rạng rỡ và hạnh phúc nhé! ❤️ Nhớ ghé studio của chị tiếp nha.
                    </div>
                    <img
                      src="https://i.postimg.cc/pTvwZCv5/hinh-Nghia.jpg"
                      alt="Nghĩa Trần"
                      className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5 border border-luxury-gold/50 shadow-xs"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Simulated Bottom Message Input Bar */}
                <div className="bg-white px-4 py-3 border-t border-luxury-nude/30 flex items-center justify-between gap-3 text-luxury-charcoal/40">
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4 cursor-pointer hover:text-luxury-gold transition-colors" />
                    <Image className="w-4 h-4 cursor-pointer hover:text-luxury-gold transition-colors" />
                    <Mic className="w-4 h-4 cursor-pointer hover:text-luxury-gold transition-colors" />
                  </div>
                  <div className="flex-1 bg-luxury-beige/40 rounded-full px-3.5 py-1.5 text-[11px] text-luxury-charcoal/60 border border-luxury-nude/20 flex items-center justify-between">
                    <span>Đã nhận phản hồi</span>
                    <Smile className="w-4 h-4 text-luxury-charcoal/30" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] text-emerald-500 font-semibold">Đã xem</span>
                    <span className="text-emerald-500 text-[10px]">✓✓</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Review Stats Widget */}
        <div className="mt-16 bg-white/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-luxury-nude/40 shadow-md max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-around gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-4xl sm:text-5xl font-serif font-bold text-luxury-charcoal">4.9</span>
              <div>
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-luxury-charcoal/50 font-medium">Hơn 500+ lượt đánh giá hài lòng</span>
              </div>
            </div>
            <p className="text-xs text-luxury-charcoal/60">Điểm số trung bình dựa trên tất cả trải nghiệm thực tế</p>
          </div>

          <div className="w-[1px] h-12 bg-luxury-nude/50 hidden md:block" />

          <div className="space-y-2 max-w-xs">
            <h5 className="text-xs font-bold uppercase tracking-wider text-luxury-gold-dark">Hài Lòng Tuyệt Đối</h5>
            <p className="text-xs text-luxury-charcoal/70 leading-relaxed">
              <strong>98% Cô dâu</strong> phản hồi vô cùng yêu thích lớp nền siêu bền và nét môi căng mướt mà chị Nghĩa Trần thiết kế riêng.
            </p>
          </div>

          <div className="w-[1px] h-12 bg-luxury-nude/50 hidden md:block" />

          <div className="space-y-2 max-w-xs">
            <h5 className="text-xs font-bold uppercase tracking-wider text-luxury-gold-dark">Học Viên Thành Tài</h5>
            <p className="text-xs text-luxury-charcoal/70 leading-relaxed">
              <strong>100% Học viên</strong> cá nhân tự tin tự tay trang điểm hoàn hảo sau khoá học 5 buổi học chi tiết.
            </p>
          </div>
        </div>

      </div>

      {/* Write Feedback Modal Form */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-luxury-nude/50 relative z-10 overflow-hidden"
            >
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-5 right-5 text-luxury-charcoal/50 hover:text-luxury-charcoal p-1.5 rounded-full hover:bg-luxury-beige transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Chia sẻ khoảnh khắc
                </span>
                <h3 className="text-xl font-serif text-luxury-charcoal font-medium mt-1">
                  Gửi Phản Hồi Của Bạn Cho Chị Nghĩa
                </h3>
                <p className="text-xs text-luxury-charcoal/60 mt-1">
                  Đóng góp ý kiến quý báu của bạn để lan tỏa niềm vui làm đẹp cùng Nghĩa Trần.
                </p>
              </div>

              <form onSubmit={handleAddReview} className="space-y-4">
                
                {/* Select avatar */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-luxury-charcoal/70 mb-2">
                    Chọn Ảnh Đại Diện Thử Nghiệm
                  </label>
                  <div className="flex gap-2.5">
                    {mockAvatars.map((url, index) => (
                      <button
                        type="button"
                        key={index}
                        onClick={() => setAvatarIndex(index)}
                        className={`relative rounded-full overflow-hidden w-10 h-10 border-2 transition-all duration-300 ${
                          avatarIndex === index ? "border-luxury-gold scale-110 shadow-sm" : "border-transparent opacity-60"
                        }`}
                      >
                        <img src={url} alt="mock avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Role */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-luxury-charcoal/70 mb-1.5">
                      Tên của bạn <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="VD: Hải Đường"
                      className="w-full bg-luxury-beige/30 border border-luxury-nude/40 rounded-xl px-3.5 py-2.5 text-xs text-luxury-charcoal focus:outline-none focus:border-luxury-gold transition-colors font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-luxury-charcoal/70 mb-1.5">
                      Vai trò / Dịp
                    </label>
                    <input
                      type="text"
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      placeholder="VD: Cô dâu tháng 7, Khách tiệc..."
                      className="w-full bg-luxury-beige/30 border border-luxury-nude/40 rounded-xl px-3.5 py-2.5 text-xs text-luxury-charcoal focus:outline-none focus:border-luxury-gold transition-colors font-sans"
                    />
                  </div>
                </div>

                {/* Platform & Category selection */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-luxury-charcoal/70 mb-1.5">
                      Ứng Dụng Chat
                    </label>
                    <select
                      value={newPlatform}
                      onChange={(e) => setNewPlatform(e.target.value as any)}
                      className="w-full bg-luxury-beige/30 border border-luxury-nude/40 rounded-xl px-3.5 py-2.5 text-xs text-luxury-charcoal focus:outline-none focus:border-luxury-gold transition-colors font-sans cursor-pointer"
                    >
                      <option value="Zalo">Zalo</option>
                      <option value="Messenger">Messenger</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-luxury-charcoal/70 mb-1.5">
                      Phân Loại Dịch Vụ
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full bg-luxury-beige/30 border border-luxury-nude/40 rounded-xl px-3.5 py-2.5 text-xs text-luxury-charcoal focus:outline-none focus:border-luxury-gold transition-colors font-sans cursor-pointer"
                    >
                      <option value="bridal">Cô dâu</option>
                      <option value="party">Makeup đi tiệc</option>
                      <option value="academy">Khóa học trang điểm</option>
                    </select>
                  </div>
                </div>

                {/* Message Content */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-luxury-charcoal/70 mb-1.5">
                    Nội dung tin nhắn feedback <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Nhập cảm nhận chân thực của bạn gửi đến chị Nghĩa Trần nhé..."
                    className="w-full bg-luxury-beige/30 border border-luxury-nude/40 rounded-xl px-3.5 py-2.5 text-xs text-luxury-charcoal focus:outline-none focus:border-luxury-gold transition-colors font-sans resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-luxury-charcoal text-white text-xs font-semibold hover:bg-luxury-gold-dark hover:text-white transition-all duration-300 shadow-md active:scale-98"
                  >
                    <Send className="w-3.5 h-3.5" /> Gửi Tin Nhắn Phản Hồi Ngay
                  </button>
                </div>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

