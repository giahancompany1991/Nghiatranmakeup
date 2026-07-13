import React, { useState, useRef } from "react";
import { Camera, Plus, Image, Sparkles, Filter, Trash2, Heart, ExternalLink, X, Compass, Calendar, User } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

interface PhotoWork {
  id: string;
  title: string;
  category: "pre-wedding" | "wedding-day" | "concept" | "outdoor";
  imageUrl: string;
  location: string;
  date: string;
  photographer: string;
}

interface PhotoWorkCardProps {
  key?: React.Key;
  work: PhotoWork;
  likesCount: number;
  isLiked: boolean;
  onLike: (id: string, e: React.MouseEvent) => void;
  onClick: () => void;
}

function PhotoWorkCard({ work, likesCount, isLiked, onLike, onClick }: PhotoWorkCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth parallax scroll mapping: shift background image vertically inside the card
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-luxury-charcoal border border-luxury-nude cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
    >
      {/* Photo with Parallax effect inside a clipped container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.img
          src={work.imageUrl}
          alt={work.title}
          style={{ y, scale: 1.16 }}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.22]"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Elegance Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-luxury-charcoal/30 to-transparent opacity-85 pointer-events-none" />

      {/* Action Floating Buttons - Top Right */}
      <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <button
          onClick={(e) => onLike(work.id, e)}
          className={`p-2 rounded-full border backdrop-blur-md shadow-md transition-all ${
            isLiked
              ? "bg-rose-500 border-rose-500 text-white"
              : "bg-white/10 border-white/20 text-white hover:bg-white/20"
          }`}
          title="Yêu thích tác phẩm"
        >
          <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-current" : ""}`} />
        </button>
      </div>

      {/* Category pill label - Top Left */}
      {work.id !== "1" && (
        <div className="absolute top-4 left-4 z-10">
          <span className="text-[9px] uppercase font-bold tracking-widest bg-luxury-charcoal/80 text-luxury-gold border border-luxury-gold/30 px-3 py-1 rounded-full backdrop-blur-sm">
            {work.category === "pre-wedding" && "Pre-Wedding"}
            {work.category === "wedding-day" && "Phóng sự cưới"}
            {work.category === "concept" && "Concept cá nhân"}
            {work.category === "outdoor" && "Ngoại cảnh"}
          </span>
        </div>
      )}

      {/* Content bottom wrapper */}
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 z-10 pointer-events-none">
        <h3 className="text-lg font-serif font-medium text-white group-hover:text-luxury-gold transition-colors duration-300">
          {work.title}
        </h3>
        
        {/* Quick Info */}
        <div className="flex items-center gap-4 text-[10px] text-white/70">
          {work.location && (
            <span className="flex items-center gap-1">
              <Compass className="w-3 h-3 text-luxury-gold" />
              {work.location}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Heart className="w-3 h-3 text-rose-400 fill-rose-400/30" />
            {likesCount} lượt thích
          </span>
        </div>

        {/* Micro-interaction line */}
        <div className="h-0.5 bg-luxury-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Fullscreen icon indicator */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="p-3.5 rounded-full bg-luxury-gold/90 text-luxury-charcoal shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

interface PhotographyPortfolioProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function PhotographyPortfolio({ onOpenBooking }: PhotographyPortfolioProps) {
  // Pre-populated high-end photography works
  const [works, setWorks] = useState<PhotoWork[]>([
    {
      id: "1",
      title: "Khoảnh khắc Gia Đình",
      category: "pre-wedding",
      imageUrl: "https://i.postimg.cc/Jz1D51k8/Hinh-anh-348.jpg",
      location: "",
      date: "Tháng 5, 2026",
      photographer: "Nghĩa Trần & Team"
    },
    {
      id: "2",
      title: "Nét Thơ Ngày Báo Hỷ",
      category: "wedding-day",
      imageUrl: "https://i.postimg.cc/ncyc1cbR/Hinh-anh-347.jpg",
      location: "",
      date: "Tháng 4, 2026",
      photographer: "Nghĩa Trần"
    },
    {
      id: "3",
      title: "Concept Chân Dung High-Fashion",
      category: "concept",
      imageUrl: "https://i.postimg.cc/TPsLStQx/476145796-496467826818917-2129807948651930105-n.jpg",
      location: "Studio Nghĩa Trần",
      date: "Tháng 6, 2026",
      photographer: "Nghĩa Trần"
    },
    {
      id: "4",
      title: "Một góc nhìn",
      category: "outdoor",
      imageUrl: "https://i.postimg.cc/0yDK3YFX/509485410-602686522863713-3520174682138036356-n.jpg",
      location: "",
      date: "Tháng 3, 2026",
      photographer: "Nghĩa Trần & Team"
    },
    {
      id: "5",
      title: "Năng động tuổi trẻ",
      category: "outdoor",
      imageUrl: "https://i.postimg.cc/QttgQCmc/Hinh-anh-355.jpg",
      location: "",
      date: "Tháng 6, 2026",
      photographer: "Nghĩa Trần & Team"
    },
    {
      id: "6",
      title: "Cổ tích giữa đời thực",
      category: "pre-wedding",
      imageUrl: "https://i.postimg.cc/8cmRRvWc/Hinh-anh-352.jpg",
      location: "Phim trường Paris, TP.HCM",
      date: "Tháng 2, 2026",
      photographer: "Nghĩa Trần"
    }
  ]);

  const [activeTab, setActiveTab] = useState<"all" | "pre-wedding" | "wedding-day" | "concept" | "outdoor">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoWork | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>({
    "1": 48,
    "2": 32,
    "3": 56,
    "4": 74,
    "5": 41,
    "6": 89
  });
  const [likedByUser, setLikedByUser] = useState<Record<string, boolean>>({});

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

  const filteredWorks = works;

  return (
    <section id="photography-portfolio" className="py-24 bg-luxury-beige relative overflow-hidden">
      
      {/* Decorative luxury elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-luxury-gold-dark font-bold inline-flex items-center gap-1.5 mb-3">
            <Camera className="w-3.5 h-3.5 text-luxury-gold-dark" /> DỊCH VỤ CHỤP ẢNH CỦA NGHĨA TRẦN
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-luxury-charcoal tracking-widest leading-tight uppercase">
            Khoảnh Khắc Trọn Vẹn
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent w-48 mx-auto my-5" />
          <p className="text-xs sm:text-sm text-luxury-charcoal/70 leading-relaxed font-sans max-w-xl mx-auto">
            Mỗi góc máy ghi lại trọn vẹn câu chuyện tình yêu bằng tất cả tâm huyết, gu thẩm mỹ hiện đại và cảm xúc chân thật nhất.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <PhotoWorkCard
              key={work.id}
              work={work}
              likesCount={likes[work.id] || 0}
              isLiked={!!likedByUser[work.id]}
              onLike={handleLike}
              onClick={() => setSelectedPhoto(work)}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredWorks.length === 0 && (
          <div className="text-center py-16 bg-white/40 rounded-2xl border border-dashed border-luxury-nude/80">
            <Image className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-500 font-medium">Chưa có tác phẩm nào thuộc danh mục này.</p>
          </div>
        )}

      </div>

      {/* LIGHTBOX MODAL */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-[fadeIn_0.2s_ease]"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative bg-luxury-charcoal rounded-2xl border border-white/10 max-w-5xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Trigger Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-luxury-gold hover:text-luxury-charcoal transition-colors shadow-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Visual Frame left */}
            <div className="md:w-3/5 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain max-h-[50vh] md:max-h-[80vh]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Information panel right */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-white bg-luxury-charcoal">
              
              <div className="space-y-6">
                
                {/* Category tag */}
                {selectedPhoto.id !== "1" && (
                  <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold bg-luxury-gold/10 border border-luxury-gold/30 px-3 py-1 rounded-full">
                    {selectedPhoto.category === "pre-wedding" && "Pre-Wedding Style"}
                    {selectedPhoto.category === "wedding-day" && "Phóng Sự Ngày Cưới"}
                    {selectedPhoto.category === "concept" && "Concept Cá Nhân"}
                    {selectedPhoto.category === "outdoor" && "Chụp Ngoại Cảnh"}
                  </span>
                )}

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-serif text-luxury-beige leading-tight">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-xs text-luxury-nude/60">Tác phẩm nhiếp ảnh độc quyền bởi Nghĩa Trần</p>
                </div>

                {/* Metadata List */}
                <div className="space-y-3.5 border-y border-white/10 py-5">
                  {selectedPhoto.location && (
                    <div className="flex items-center gap-3 text-xs">
                      <Compass className="w-4 h-4 text-luxury-gold shrink-0" />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-white/40">Địa điểm</p>
                        <p className="text-white font-medium mt-0.5">{selectedPhoto.location}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 text-xs">
                    <Calendar className="w-4 h-4 text-luxury-gold shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/40">Thời gian chụp</p>
                      <p className="text-white font-medium mt-0.5">{selectedPhoto.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <User className="w-4 h-4 text-luxury-gold shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/40">Nhiếp ảnh gia</p>
                      <p className="text-white font-medium mt-0.5">{selectedPhoto.photographer}</p>
                    </div>
                  </div>
                </div>

                {/* Social interactive like counter */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/60">
                    Bạn thích tác phẩm nghệ thuật này chứ?
                  </span>
                  <button
                    onClick={(e) => handleLike(selectedPhoto.id, e)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold transition-all ${
                      likedByUser[selectedPhoto.id]
                        ? "bg-rose-500 border-rose-500 text-white"
                        : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${likedByUser[selectedPhoto.id] ? "fill-current" : ""}`} />
                    {likes[selectedPhoto.id] || 0} Thích
                  </button>
                </div>

              </div>

              {/* Direct Booking CTA */}
              <div className="pt-8">
                <a
                  href="https://zalo.me/0931559307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-luxury-gold text-luxury-charcoal text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-lg text-center cursor-pointer font-sans"
                >
                  <Camera className="w-3.5 h-3.5 mr-2 text-luxury-charcoal" />
                  Đăng ký nhận báo giá chụp gói này
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
