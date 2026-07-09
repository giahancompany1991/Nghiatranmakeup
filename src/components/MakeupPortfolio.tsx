import React, { useState } from "react";
import { Sparkles, Plus, Image, Heart, Trash2, ExternalLink, X, Brush, Calendar, User, Eye, CheckCircle } from "lucide-react";

interface MakeupWork {
  id: string;
  title: string;
  style: "bridal" | "party" | "douyin-korean" | "editorial";
  imageUrl: string;
  clientName: string;
  skinType: string;
  layoutDetails: string;
  makeupArtist: string;
  date: string;
}

interface MakeupPortfolioProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function MakeupPortfolio({ onOpenBooking }: MakeupPortfolioProps) {
  const [works, setWorks] = useState<MakeupWork[]>([
    {
      id: "m1",
      title: "Mộng Mơ",
      style: "bridal",
      imageUrl: "https://i.postimg.cc/wTHhpb5k/559671843-687344824397882-9036169729980894894-n.jpg",
      clientName: "",
      skinType: "Da hỗn hợp thiên dầu",
      layoutDetails: "Tone cam đào sữa sang trọng, mi tơ tự nhiên, lớp nền mỏng nhẹ phủ sương satin bền màu suốt lễ cưới.",
      makeupArtist: "Nghĩa Trần",
      date: "Tháng 5, 2026"
    },
    {
      id: "m2",
      title: "Makeup Douyin Sắc Sảo Cuốn Hút",
      style: "douyin-korean",
      imageUrl: "https://i.postimg.cc/rmYDWD6g/476309146-497540830044950-2099165603954240241-n.jpg",
      clientName: "",
      skinType: "Da thường",
      layoutDetails: "Điểm nhấn nhũ mắt kim cương bắt sáng đỉnh cao, bọng mắt cười aegyo-sal tự nhiên cùng dáng eyeliner bay sắc sảo.",
      makeupArtist: "Nghĩa Trần",
      date: "Tháng 6, 2026"
    },
    {
      id: "m3",
      title: "Tone Tây Party Trầm Ấm Sang Chảnh",
      style: "party",
      imageUrl: "https://i.postimg.cc/zXGntDmX/493522783-559795773819455-5517464629639396013-n.jpg",
      clientName: "",
      skinType: "Da khô",
      layoutDetails: "Tone nâu tây nude quyến rũ kết hợp tạo khối 3D sắc nét, bờ môi căng mọng đầy đặn cuốn hút mọi ánh nhìn.",
      makeupArtist: "Nghĩa Trần",
      date: "Tháng 6, 2026"
    },
    {
      id: "m4",
      title: "Cô Dâu Trong Trẻo Chuẩn Hàn Quốc",
      style: "bridal",
      imageUrl: "https://i.postimg.cc/GtGhzycq/491411916-548716064927426-1026433512304934493-n.jpg",
      clientName: "",
      skinType: "Da dầu nhẹ",
      layoutDetails: "Lớp nền Glass-Skin mướt mát, má hồng đào phớt ngọt ngào, tạo cảm giác tinh khiết rạng ngời cho nàng dâu.",
      makeupArtist: "Nghĩa Trần",
      date: "Tháng 4, 2026"
    },
    {
      id: "m5",
      title: "Editorial Makeup Sáng Tạo Nghệ Thuật",
      style: "editorial",
      imageUrl: "https://i.postimg.cc/WzgbSk2w/487858731-537329739399392-1628424394994226140-n.jpg",
      clientName: "",
      skinType: "Da thường",
      layoutDetails: "Sự kết hợp phá cách của gam màu nghệ thuật trên bầu mắt, hiệu ứng bóng mướt tinh tế dành cho chụp ảnh thời trang.",
      makeupArtist: "Nghĩa Trần",
      date: "Tháng 3, 2026"
    },
    {
      id: "m6",
      title: "Layout Đi Tiệc Ngọt Ngào Thanh Lịch",
      style: "party",
      imageUrl: "https://i.postimg.cc/15KZYLX9/653405630-813589101773453-3046577335027418579-n.jpg",
      clientName: "",
      skinType: "Da nhạy cảm",
      layoutDetails: "Tone hồng trà nhẹ nhàng thanh lịch, che khuyết điểm mỏng nhẹ tuyệt đối, nhấn hàng mi cong trẻ trung.",
      makeupArtist: "Nghĩa Trần",
      date: "Tháng 5, 2026"
    }
  ]);

  const [activeTab, setActiveTab] = useState<"all" | "bridal" | "party" | "douyin-korean" | "editorial">("all");
  const [selectedWork, setSelectedWork] = useState<MakeupWork | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>({
    "m1": 128,
    "m2": 95,
    "m3": 76,
    "m4": 114,
    "m5": 62,
    "m6": 83
  });
  const [likedByUser, setLikedByUser] = useState<Record<string, boolean>>({});

  // Add new work states
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newStyle, setNewStyle] = useState<"bridal" | "party" | "douyin-korean" | "editorial">("bridal");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newClientName, setNewClientName] = useState("");
  const [newSkinType, setNewSkinType] = useState("");
  const [newLayoutDetails, setNewLayoutDetails] = useState("");
  const [newMakeupArtist, setNewMakeupArtist] = useState("Nghĩa Trần");
  const [newDate, setNewDate] = useState("");
  const [formError, setFormError] = useState("");

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (likedByUser[id]) {
      setLikes(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setLikedByUser(prev => ({ ...prev, [id]: false }));
    } else {
      setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setLikedByUser(prev => ({ ...prev, [id]: true }));
    }
  };

  const handleAddMakeupWork = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      setFormError("Vui lòng điền tiêu đề layout makeup");
      return;
    }

    const fallbackImages = [
      "https://images.unsplash.com/photo-1522337241531-97f334585174?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507504038482-76210214dae1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800"
    ];

    const finalImage = newImageUrl.trim() || fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
    const finalClient = newClientName.trim() || "Khách Hàng Nghĩa Trần Studio";
    const finalSkinType = newSkinType.trim() || "Da thường / Mọi loại da";
    const finalLayoutDetails = newLayoutDetails.trim() || "Nền mỏng nhẹ như sương, bền mịn rạng rỡ 12H phong cách hiện đại.";
    const finalDate = newDate.trim() || "Tháng " + (new Date().getMonth() + 1) + ", " + new Date().getFullYear();

    const newWork: MakeupWork = {
      id: "makeup_" + Date.now().toString(),
      title: newTitle,
      style: newStyle,
      imageUrl: finalImage,
      clientName: finalClient,
      skinType: finalSkinType,
      layoutDetails: finalLayoutDetails,
      makeupArtist: newMakeupArtist,
      date: finalDate
    };

    setWorks([newWork, ...works]);
    setLikes(prev => ({ ...prev, [newWork.id]: Math.floor(Math.random() * 20) + 5 }));

    // Reset form fields
    setNewTitle("");
    setNewImageUrl("");
    setNewClientName("");
    setNewSkinType("");
    setNewLayoutDetails("");
    setNewMakeupArtist("Nghĩa Trần");
    setNewDate("");
    setFormError("");
    setShowAddForm(false);
  };

  const handleDeleteWork = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWorks(works.filter(w => w.id !== id));
  };

  const filteredWorks = works;

  return (
    <section id="makeup-portfolio" className="py-24 bg-white relative overflow-hidden border-t border-luxury-gold/15">
      
      {/* Visual Ambient Orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-luxury-nude/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold-dark font-semibold inline-flex items-center gap-1.5 mb-3">
            <Brush className="w-3.5 h-3.5 text-luxury-gold-dark animate-spin" style={{ animationDuration: '6s' }} /> DỊCH VỤ MAKEUP
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-luxury-charcoal tracking-[0.15em] leading-tight uppercase">
            HÌNH ẢNH KHÁCH HÀNG MAKEUP TẠI NGHĨA TRẦN
          </h2>
          <div className="relative my-6 h-[2px] w-32 mx-auto bg-gradient-to-r from-transparent via-luxury-gold-dark/40 to-transparent" />
          <p className="text-xs sm:text-sm text-luxury-charcoal/60 leading-relaxed font-sans max-w-lg mx-auto tracking-wide">
            Hình ảnh chân thực từ những nàng dâu rạng rỡ và khách hàng cao cấp tin tưởng gửi gắm nhan sắc cho Nghĩa Trần Studio.
          </p>
        </div>

        {/* Filters and Action Buttons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-6 mb-12 border-b border-luxury-nude pb-6">
          
          {/* Trigger Add Form Button */}
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-luxury-gold hover:bg-luxury-charcoal hover:text-white text-luxury-charcoal text-xs font-bold uppercase tracking-widest transition-all shadow-md group active:scale-95 cursor-pointer"
          >
            <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
            Thêm Mới
          </button>
        </div>

        {/* Interactive Add Form */}
        {showAddForm && (
          <div className="bg-luxury-beige/40 rounded-2xl p-6 sm:p-8 border border-luxury-nude shadow-xl mb-12 animate-[fadeIn_0.3s_ease]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-luxury-charcoal inline-flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-luxury-gold" /> Thêm Tác Phẩm Trang Điểm Thực Tế
              </h3>
              <button
                onClick={() => setShowAddForm(false)}
                className="p-1.5 rounded-full bg-white text-gray-500 hover:bg-gray-100 transition-colors shadow-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddMakeupWork} className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-luxury-charcoal mb-1.5">
                    Tên Layout Makeup <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Ví dụ: Layout Cô Dâu Satin Tone Hồng Khô"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold text-sm text-luxury-charcoal bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-luxury-charcoal mb-1.5">
                    Nhóm Layout <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={newStyle}
                    onChange={(e) => setNewStyle(e.target.value as any)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold text-sm text-luxury-charcoal bg-white"
                  >
                    <option value="bridal">Trang Điểm Cô Dâu (Bridal)</option>
                    <option value="party">Trang Điểm Đi Tiệc (Party/Event)</option>
                    <option value="douyin-korean">Douyin / Hàn Quốc ngọt ngào</option>
                    <option value="editorial">Mỹ thuật / Concept thời trang</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-luxury-charcoal mb-1.5">
                    Link ảnh layout thực tế
                  </label>
                  <input
                    type="url"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    placeholder="Dán URL hình ảnh chất lượng cao"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold text-sm text-luxury-charcoal bg-white"
                  />
                  <p className="text-[10px] text-gray-400 mt-1">Sử dụng liên kết ảnh từ Imgur, Postimages, Unsplash,...</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-luxury-charcoal mb-1.5">
                    Tên Khách Hàng / Model
                  </label>
                  <input
                    type="text"
                    value={newClientName}
                    onChange={(e) => setNewClientName(e.target.value)}
                    placeholder="Ví dụ: Chị Diệu Vy"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold text-sm text-luxury-charcoal bg-white"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-luxury-charcoal mb-1.5">
                    Nhận Diện Đặc Điểm Da
                  </label>
                  <input
                    type="text"
                    value={newSkinType}
                    onChange={(e) => setNewSkinType(e.target.value)}
                    placeholder="Ví dụ: Da hỗn hợp nhạy cảm, dễ xuống tone"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold text-sm text-luxury-charcoal bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-luxury-charcoal mb-1.5">
                    Mô Tả Kỹ Thuật & Mỹ Phẩm Điểm Nhấn
                  </label>
                  <textarea
                    rows={3}
                    value={newLayoutDetails}
                    onChange={(e) => setNewLayoutDetails(e.target.value)}
                    placeholder="Ví dụ: Nền che phủ cao mỏng mịn, màu mắt nhũ bắt sáng, gắn mi giả từng cụm rần tự nhiên, giữ tone bền 12H."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold text-sm text-luxury-charcoal bg-white resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-luxury-charcoal mb-1.5">
                      Chuyên Viên Makeup
                    </label>
                    <input
                      type="text"
                      value={newMakeupArtist}
                      onChange={(e) => setNewMakeupArtist(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold text-sm text-luxury-charcoal bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-luxury-charcoal mb-1.5">
                      Thời Gian Thực Hiện
                    </label>
                    <input
                      type="text"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      placeholder="Ví dụ: Tháng 7, 2026"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold text-sm text-luxury-charcoal bg-white"
                    />
                  </div>
                </div>
              </div>

              {formError && (
                <div className="col-span-full text-xs text-rose-500 font-semibold bg-rose-50 p-3 rounded-xl border border-rose-100">
                  ⚠️ {formError}
                </div>
              )}

              <div className="col-span-full flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-100 text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-luxury-charcoal text-white hover:bg-luxury-gold hover:text-luxury-charcoal text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  Lưu Tác Phẩm Makeup
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Makeup Masterpieces Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedWork(work)}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-luxury-charcoal border border-luxury-nude/40 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Layout Photo */}
              <img
                src={work.imageUrl}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Sophisticated Dark Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85" />

              {/* Administrative Delete & Like Controls - Top Right */}
              <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <button
                  onClick={(e) => handleLike(work.id, e)}
                  className={`p-2 rounded-full border backdrop-blur-md shadow-md transition-all ${
                    likedByUser[work.id]
                      ? "bg-rose-500 border-rose-500 text-white"
                      : "bg-white/10 border-white/20 text-white hover:bg-white/25"
                  }`}
                  title="Thả tim layout này"
                >
                  <Heart className={`w-3.5 h-3.5 ${likedByUser[work.id] ? "fill-current" : ""}`} />
                </button>
                <button
                  onClick={(e) => handleDeleteWork(work.id, e)}
                  className="p-2 rounded-full bg-black/60 hover:bg-rose-600 border border-white/10 text-white backdrop-blur-md shadow-md transition-all"
                  title="Xóa layout này"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Style Category badge label - Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[9px] uppercase font-bold tracking-widest bg-luxury-charcoal/80 text-luxury-gold border border-luxury-gold/30 px-3.5 py-1 rounded-full backdrop-blur-sm">
                  {work.style === "bridal" && "Cô dâu"}
                  {work.style === "party" && "Đi tiệc / Event"}
                  {work.style === "douyin-korean" && "Douyin / Hàn Quốc"}
                  {work.style === "editorial" && "Mỹ thuật / Concept"}
                </span>
              </div>

              {/* Text metadata bottom panel */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 space-y-2.5 z-10">
                {work.clientName && (
                  <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-semibold font-sans">
                    Khách: {work.clientName}
                  </p>
                )}
                <h3 className="text-lg sm:text-xl font-serif font-medium text-white group-hover:text-luxury-gold transition-colors duration-300">
                  {work.title}
                </h3>
                
                <p className="text-xs text-white/70 line-clamp-2 font-sans leading-relaxed">
                  {work.layoutDetails}
                </p>

                {/* Bottom stat row */}
                <div className="flex items-center justify-between text-[10px] text-white/50 pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <Brush className="w-3 h-3 text-luxury-gold" />
                    MUA: {work.makeupArtist}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-white/80">
                    <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                    {likes[work.id] || 0} yêu thích
                  </span>
                </div>
              </div>

              {/* Eye Indicator Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-3.5 rounded-full bg-luxury-gold text-luxury-charcoal shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state placeholder */}
        {filteredWorks.length === 0 && (
          <div className="text-center py-16 bg-luxury-beige/30 rounded-2xl border border-dashed border-luxury-nude">
            <Image className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-500 font-medium">Chưa có tác phẩm makeup nào thuộc danh mục này.</p>
            <button
              onClick={() => { setShowAddForm(true); }}
              className="text-xs text-luxury-gold-dark font-bold underline mt-2 uppercase tracking-wider block mx-auto"
            >
              Thêm tác phẩm đầu tiên
            </button>
          </div>
        )}

      </div>

      {/* RICH INTERACTIVE LIGHTBOX */}
      {selectedWork && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-[fadeIn_0.2s_ease]"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="relative bg-luxury-charcoal rounded-3xl border border-white/10 max-w-5xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Lightbox Trigger */}
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-luxury-gold hover:text-luxury-charcoal transition-colors shadow-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image Screen */}
            <div className="md:w-3/5 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
              <img
                src={selectedWork.imageUrl}
                alt={selectedWork.title}
                className="w-full h-full object-contain max-h-[50vh] md:max-h-[80vh]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Information Details Sheet */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-white bg-luxury-charcoal">
              
              <div className="space-y-6">
                
                {/* Category Badge pill */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold bg-luxury-gold/10 border border-luxury-gold/30 px-3 py-1 rounded-full">
                    {selectedWork.style === "bridal" && "Bridal Layout"}
                    {selectedWork.style === "party" && "VIP Party Makeup"}
                    {selectedWork.style === "douyin-korean" && "Trend Douyin & Korean"}
                    {selectedWork.style === "editorial" && "Concept Editorial"}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Cam kết nền 12H
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-serif text-luxury-beige leading-tight">
                    {selectedWork.title}
                  </h3>
                  <p className="text-xs text-luxury-nude">Phong cách trang điểm đỉnh cao thiết kế bởi Nghĩa Trần</p>
                </div>

                {/* Technical Specifications list */}
                <div className="space-y-4 border-y border-white/10 py-5">
                  {selectedWork.clientName && (
                    <div className="flex items-start gap-3.5 text-xs">
                      <User className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-white/40">Tên Khách Hàng</p>
                        <p className="text-white font-medium mt-0.5">{selectedWork.clientName}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3.5 text-xs">
                    <Sparkles className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/40">Nhận diện làn da</p>
                      <p className="text-white font-medium mt-0.5">{selectedWork.skinType}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-xs">
                    <Brush className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/40">Kỹ thuật & Mỹ phẩm điểm nhấn</p>
                      <p className="text-white/85 font-medium mt-1 leading-relaxed">{selectedWork.layoutDetails}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2.5 text-xs">
                      <Brush className="w-3.5 h-3.5 text-luxury-gold" />
                      <span className="text-white/80">MUA: {selectedWork.makeupArtist}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs">
                      <Calendar className="w-3.5 h-3.5 text-luxury-gold" />
                      <span className="text-white/80">{selectedWork.date}</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Like action inside sheet */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/60">Bạn yêu thích vẻ đẹp cuốn hút này?</span>
                  <button
                    onClick={(e) => handleLike(selectedWork.id, e)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold transition-all ${
                      likedByUser[selectedWork.id]
                        ? "bg-rose-500 border-rose-500 text-white"
                        : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${likedByUser[selectedWork.id] ? "fill-current" : ""}`} />
                    {likes[selectedWork.id] || 0} Thích
                  </button>
                </div>

              </div>

              {/* Layout Booking trigger CTA */}
              <div className="pt-8">
                <a
                  href="https://zalo.me/0931559307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-luxury-gold hover:bg-white text-luxury-charcoal text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg text-center cursor-pointer"
                >
                  <Brush className="w-3.5 h-3.5 mr-2 text-luxury-charcoal" />
                  Đăng ký layout makeup này ngay
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
