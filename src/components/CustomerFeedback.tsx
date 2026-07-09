import React from "react";
import { MessageSquare, Sparkles, Star } from "lucide-react";

export default function CustomerFeedback() {
  const reviews = [
    {
      id: "1",
      sender: "Huyền Trang (Cô dâu tháng 5)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
      time: "Hôm qua lúc 21:30",
      platform: "Zalo",
      messages: [
        "Anh Nghĩa ơiii bộ ảnh phóng sự cưới của em nhận được rồi mng khen quá trời quá đất luôn 😍 Lớp makeup thì xuất sắc dã man ạ.",
        "Em mồ hôi đầm đìa nguyên ngày rước dâu từ sáng sớm tới tối mịt ăn uống bét nhè mà nền vẫn bền, mướt rượt không mốc tẹo nào luôn anh ơi. Ai cũng hỏi địa chỉ makeup hihi. Cảm ơn anh nhìu nhìu lắm ạ! ❤️"
      ]
    },
    {
      id: "2",
      sender: "Phương Thảo (Học viên cá nhân)",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100",
      time: "Thứ 3 lúc 14:15",
      platform: "Messenger",
      messages: [
        "Hôm nay đi ăn cưới tự tay họa mặt ai cũng hỏi thuê thợ ở đâu làm em sướng rơn người 😂",
        "Biết ơn khóa học 5 buổi của anh Nghĩa Trần thực sự truyền cảm hứng làm đẹp bản thân cho em luôn á! Giờ em tự kẻ eyeliner bén ngót trong 2 phút rùi anh iu ơi 🤩"
      ]
    },
    {
      id: "3",
      sender: "Minh Thư (Dự tiệc VIP)",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
      time: "02/07/2026",
      platform: "Zalo",
      messages: [
        "Layout đi tiệc tối qua sịn sò lắm anh ạ! Nhẹ mặt mà chụp đèn flash không bị loá tí nào. Thợ nhà mình đến siêu đúng giờ luôn, 10 điểm chu đáo."
      ]
    }
  ];

  return (
    <section id="feedback" className="py-20 bg-luxury-nude/20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-luxury-gold-dark font-semibold inline-flex items-center gap-1.5 mb-2">
            <MessageSquare className="w-3.5 h-3.5" /> Khách hàng nói gì về Nghĩa Trần
          </span>
          <h2 className="text-3xl font-serif font-medium text-luxury-charcoal">
            Phản Hồi Thực Tế Từ Khách Hàng
          </h2>
          <p className="text-xs sm:text-sm text-luxury-charcoal/60 mt-3 font-sans">
            Những lời cảm ơn chân thành từ tin nhắn Zalo & Messenger chính là động lực to lớn nhất để Nghĩa Trần hoàn thiện tay nghề mỗi ngày.
          </p>
        </div>

        {/* Chat Feedbacks Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((chat) => (
            <div
              key={chat.id}
              className="bg-white rounded-2xl border border-luxury-nude/65 shadow-md overflow-hidden flex flex-col h-full"
            >
              {/* Chat Window Header */}
              <div className="bg-luxury-beige/60 px-5 py-3.5 border-b border-luxury-nude/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={chat.avatar}
                    alt={chat.sender}
                    className="w-9 h-9 rounded-full object-cover border border-luxury-gold/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-luxury-charcoal leading-tight">{chat.sender}</h4>
                    <span className="text-[10px] text-luxury-charcoal/50 inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Vừa hoạt động • {chat.platform}
                    </span>
                  </div>
                </div>
                
                {/* 5-Star Rating Badge */}
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Chat Message Window Body */}
              <div className="p-5 flex-1 bg-[#F5F5F3] space-y-4 flex flex-col justify-end min-h-[220px]">
                <div className="text-center">
                  <span className="text-[9px] bg-black/5 text-luxury-charcoal/50 px-2.5 py-0.5 rounded-full font-mono">
                    {chat.time}
                  </span>
                </div>

                {chat.messages.map((msg, i) => (
                  <div key={i} className="flex items-end gap-2 animate-fade-in">
                    <img
                      src={chat.avatar}
                      alt={chat.sender}
                      className="w-6 h-6 rounded-full object-cover shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="max-w-[85%] bg-white p-3 rounded-2xl rounded-bl-none border border-black/5 text-xs text-luxury-charcoal leading-relaxed shadow-sm">
                      {msg}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Bottom Send Indicator */}
              <div className="bg-white px-4 py-3.5 border-t border-luxury-nude/40 text-[10px] text-luxury-charcoal/40 flex justify-between items-center font-sans">
                <span>Đã trả lời từ Nghĩa Trần Makeup</span>
                <span className="text-luxury-gold-dark font-semibold">✓ Đã xem</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom review stats badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-center text-xs text-luxury-charcoal/70">
          <div className="flex items-center gap-1.5">
            <span className="text-luxury-gold">★</span>
            <span className="font-semibold text-luxury-charcoal">4.9 / 5.0</span>
            <span className="text-luxury-charcoal/50">(Hơn 500+ khách hàng đánh giá)</span>
          </div>
          <span className="text-luxury-nude hidden sm:inline">|</span>
          <div>
            <span className="font-semibold text-luxury-charcoal">98% Cô dâu</span>
            <span className="text-luxury-charcoal/50"> hài lòng tuyệt đối với lớp nền</span>
          </div>
        </div>

      </div>
    </section>
  );
}
