import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Zap, 
  CheckCircle2, 
  XCircle, 
  Compass, 
  ArrowRight,
  BookOpenCheck,
  Play,
  Pause,
  AlertTriangle,
  Lightbulb,
  Heart,
  Droplet,
  Eye,
  Scissors
} from "lucide-react";

// Makeup Tip Extended Data Structure for High Visual Appeal
interface MakeupTip {
  id: string;
  title: string;
  category: "skin" | "eyes" | "lips" | "skincare";
  categoryLabel: string;
  summary: string;
  difficulty: "Dễ" | "Trung bình" | "Chuyên sâu";
  steps: string[];
  secretKey: string;
  duration: string;
  illustrationUrl: string;
  mistake: string;
  doText: string;
  dontText: string;
  accentColor: string; // for custom gradient highlights
}

const MAKEUP_TIPS: MakeupTip[] = [
  {
    id: "tip-1",
    title: "Bí quyết lớp nền mỏng nhẹ như sương, bền suốt 12h",
    category: "skin",
    categoryLabel: "Lớp nền & Da",
    summary: "Cách xử lý nền không bị mốc (cakey), không xuống tông và giữ được độ mướt tự nhiên nhất.",
    difficulty: "Trung bình",
    secretKey: "Áp dụng kỹ thuật 'Damp Beauty Sponge + Set Spray Layering'",
    duration: "5-7 phút",
    steps: [
      "Cấp ẩm sâu với toner dạng vỗ, đợi 2 phút cho da hấp thụ hoàn toàn.",
      "Thoa kem lót kiềm dầu vùng chữ T và kem lót dưỡng ẩm vùng má.",
      "Xịt xịt khóa nền trực tiếp lên bông mút trang điểm ẩm đã vắt kiệt nước.",
      "Dặm nhẹ đều kem nền từ trong ra ngoài mặt, tránh miết tay sát da.",
      "Phủ phấn bột không màu siêu mịn vùng chữ T bằng cọ tơ lớn.",
      "Xịt khóa nền cố định lần cuối theo hình chữ X và T cách mặt 20cm."
    ],
    illustrationUrl: "https://i.postimg.cc/FzJKWTj7/nen-mong-nhe.jpg",
    mistake: "Tán kem nền quá dày bằng tay miết sát da, gây mốc và lộ nếp nhăn cơ mặt.",
    doText: "Dùng bông mút ẩm đã xịt khóa nền, vỗ nhẹ liên tục theo chiều vuông góc.",
    dontText: "Miết bông mút kéo lê trên da làm trôi đi lớp kem lót kiềm dầu bảo vệ bên dưới.",
    accentColor: "from-amber-500/20 to-orange-600/10"
  },
  {
    id: "tip-2",
    title: "Kỹ thuật che quầng thâm mắt sâu không lo bị đọng rãnh",
    category: "skin",
    categoryLabel: "Lớp nền & Da",
    summary: "Che quầng thâm hiệu quả nhờ nguyên lý triệt sắc mà không cần đắp nhiều kem concealer dày.",
    difficulty: "Dễ",
    secretKey: "Sử dụng tông cam/hồng đào để triệt sắc xanh quầng thâm trước",
    duration: "3 phút",
    steps: [
      "Thoa kem dưỡng mắt mỏng nhẹ làm mềm mượt da vùng mắt nhạy cảm.",
      "Dùng chấm son cam đào hoặc concealer triệt sắc cam lên vùng thâm xanh.",
      "Đợi 30 giây cho lớp triệt sắc se lại rồi dặm kem che khuyết điểm.",
      "Dặm nhẹ phấn phủ nén hạt siêu nhỏ để cố định viền mắt cả ngày."
    ],
    illustrationUrl: "https://i.postimg.cc/mhfg07wS/bong-mat.jpg",
    mistake: "Sử dụng kem che khuyết điểm quá sáng đắp chồng lên quầng mắt thâm đen, tạo vệt xám xịt.",
    doText: "Tán một lớp mỏng triệt sắc cam đào mỏng, để se lại rồi mới dặm concealer tiệp màu da.",
    dontText: "Phủ quá nhiều phấn nén dày sát bọng mắt dưới, dễ làm lộ nếp nhăn li ti khi cười.",
    accentColor: "from-rose-500/20 to-amber-500/10"
  },
  {
    id: "tip-3",
    title: "Vẽ eyeliner tự nhiên chuẩn 'Clean Girl' hack mắt to tròn",
    category: "eyes",
    categoryLabel: "Trang điểm Mắt",
    summary: "Dành cho các bạn mí lót hoặc mắt một mí, tạo chiều sâu tự nhiên không lo bị già.",
    difficulty: "Trung bình",
    secretKey: "Kẻ eyeliner bằng phấn mắt nâu đen sát chân mi thay vì bút dạ đen đậm",
    duration: "4 phút",
    steps: [
      "Dùng cọ vát xéo ẩm thấm một chút xịt khóa nền rồi lấy phấn mắt tối màu.",
      "Nhìn xuống gương vẽ một đường siêu mảnh bám sát rạt theo chân mi.",
      "Kéo dài đuôi mắt ngang ra nhẹ nhàng khoảng 2-3mm, hơi hất nhẹ phần đuôi.",
      "Dùng cọ tăm bông sạch tán nhẹ phần rìa trên tạo hiệu ứng khói mờ."
    ],
    illustrationUrl: "https://i.postimg.cc/5t1f5xPr/Cach-ke-eyeliner-tu-nhien-toa-sang.jpg",
    mistake: "Vẽ đường eyeliner đen kịt, quá to bản và vểnh đuôi quá dốc khiến mắt bị dữ và già đi.",
    doText: "Dùng cọ vát xéo ẩm dặm phấn nâu đậm kéo ngang đuôi mắt 2-3mm mảnh như sợi tơ.",
    dontText: "Kẻ đuôi mắt khi nhắm chặt mắt, khiến đường kẻ bị gãy và lệch tông khi mở mắt.",
    accentColor: "from-purple-500/20 to-indigo-600/10"
  },
  {
    id: "tip-4",
    title: "Khắc phục lông mày thưa thớt, tạo dáng phẩy sợi tự nhiên",
    category: "eyes",
    categoryLabel: "Trang điểm Mắt",
    summary: "Lông mày sắc nét nhưng vẫn giữ được sợi tơ mềm mại, không bị cứng hay quá đậm.",
    difficulty: "Trung bình",
    secretKey: "Định hình dáng mày bằng gel trong suốt trước khi phẩy sợi bằng bút lông",
    duration: "5 phút",
    steps: [
      "Dùng cọ chải gel định hình sợi lông mày hướng ngược lên trên thật tơi.",
      "Dùng bút lông vẽ mày siêu mảnh phẩy từng sợi ở khoảng thưa.",
      "Phẩy đậm từ 2/3 thân tới đuôi mày, giữ phần đầu thật nhạt.",
      "Dùng ngón tay ấn nhẹ nét vẽ ngay sau khi phẩy giúp mực bám tiệp tự nhiên."
    ],
    illustrationUrl: "https://i.postimg.cc/dDPVzGBR/khac-phuc-chan-may-thua-thot-Copy.jpg",
    mistake: "Tô kín bưng toàn bộ khuôn mày bằng chì đậm, tạo cảm giác lông mày cứng đơ như vẽ tranh cát.",
    doText: "Dùng gel chuốt tơ đứng sợi trước, phẩy sợi thanh mảnh bám theo hướng mọc của lông mày.",
    dontText: "Vẽ nét đậm ở phần đầu lông mày. Phần đầu luôn luôn phải nhạt và tơi để giữ nét thanh tú.",
    accentColor: "from-emerald-500/20 to-teal-600/10"
  },
  {
    id: "tip-5",
    title: "Cách đánh son ombre căng mọng, mờ viền môi quyến rũ",
    category: "lips",
    categoryLabel: "Bầu môi quyến rũ",
    summary: "Tạo cảm giác môi căng đầy tự nhiên, che mờ viền môi thâm sạm cực tốt.",
    difficulty: "Dễ",
    secretKey: "Sử dụng cọ tán son hoặc ngón áp út cùng một chút concealer viền môi",
    duration: "3 phút",
    steps: [
      "Thoa son dưỡng trước 10 phút, sau đó dùng khăn giấy lau bớt lớp dưỡng bóng dư.",
      "Dùng một chút kem nền dặm nhẹ lên viền môi làm mờ sắc tố thâm tự nhiên.",
      "Thoa son màu nude hoặc hồng đất làm lớp lót nhẹ nhàng cho toàn bộ bầu môi.",
      "Chấm màu son đậm hơn vào lòng môi trong rồi tán di nhẹ ra ngoài."
    ],
    illustrationUrl: "https://i.postimg.cc/MX2ph1DD/bo-moi-mong.jpg",
    mistake: "Thoa son trực tiếp từ thỏi son lên môi rồi mím chặt môi mạnh, phá hỏng hiệu ứng chuyển sắc mềm mại.",
    doText: "Dùng cọ tơi nhỏ tán nhạt từ viền môi, dặm màu đậm tăng dần ở lòng môi trong.",
    dontText: "Thoa son màu quá đậm sát mép viền môi mà không tán mờ nhạt, tạo ranh giới cứng ngắc.",
    accentColor: "from-pink-500/20 to-rose-600/10"
  },
  {
    id: "tip-6",
    title: "Quy trình chuẩn bị da (Skin Prep) 5 phút chuẩn makeup chuyên nghiệp",
    category: "skincare",
    categoryLabel: "Dưỡng & Chuẩn Bị Da",
    summary: "Bí mật đằng sau lớp trang điểm mịn như nhung chính là bước massage làm dịu da tức thì.",
    difficulty: "Dễ",
    secretKey: "Làm mát da tức thì và dưỡng ẩm sâu bằng gel-cream mỏng nhẹ",
    duration: "5 phút",
    steps: [
      "Dùng bông thấm nước hoa hồng lau dịu mát nhẹ toàn bộ khuôn mặt.",
      "Thoa một lớp serum cấp nước chứa Hyaluronic Acid (HA) khi da còn ẩm.",
      "Sử dụng kem dưỡng ẩm dạng gel-cream massage nâng cơ mặt nhẹ nhàng.",
      "Chờ 1 phút cho da hơi ẩm dính nhẹ rồi mới bắt đầu đánh lớp nền.",
      "Dùng khăn giấy thấm bớt lượng dầu thừa ở vùng cánh mũi trước khi bôi phấn."
    ],
    illustrationUrl: "https://i.postimg.cc/5t0pHzBB/thu-tu-skin.jpg",
    mistake: "Bôi kem dưỡng siêu dày, nhờn rít rồi đánh nền ngay lập tức, khiến kem nền bị trượt và loang lổ.",
    doText: "Massage kem dưỡng mỏng nhẹ cho đến khi da ráo mịn, hơi dính dính nhẹ tay thì mới bắt đầu dặm nền.",
    dontText: "Bỏ qua bước cấp nước khiến tế bào biểu bì da khô ráp hút hết độ ẩm của kem nền gây mốc mủ.",
    accentColor: "from-cyan-500/20 to-blue-600/10"
  }
];

export default function MakeupTips() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const tabContainerRef = useRef<HTMLDivElement>(null);

  // Auto progression for active visual slides
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MAKEUP_TIPS.length);
    }, 8500); // 8.5s for rich reading time
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeTip = MAKEUP_TIPS[currentIndex];

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % MAKEUP_TIPS.length);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + MAKEUP_TIPS.length) % MAKEUP_TIPS.length);
  };

  const handleSelectTip = (index: number) => {
    setIsPlaying(false);
    setCurrentIndex(index);
  };

  // Center active category element inside the top visual menu bar
  useEffect(() => {
    if (tabContainerRef.current) {
      const activeElement = tabContainerRef.current.children[currentIndex] as HTMLElement;
      if (activeElement) {
        tabContainerRef.current.scrollTo({
          left: activeElement.offsetLeft - tabContainerRef.current.offsetWidth / 2 + activeElement.offsetWidth / 2,
          behavior: "smooth"
        });
      }
    }
  }, [currentIndex]);

  return (
    <section id="makeup-tips" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Luxury artistic background graphics */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#f3eae1]/30 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#eadecd]/25 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#f4ebd9]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title with high aesthetic fashion-editorial font hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-luxury-gold-dark font-extrabold inline-flex items-center gap-2 bg-[#f4eade]/60 px-5 py-2 rounded-full border border-[#ede1d1]/80 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold-dark animate-pulse" />
            Cẩm Nang & Bí Quyết Độc Quyền
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-serif text-luxury-charcoal mt-5 font-bold leading-tight"
          >
            Sơ Đồ Thực Hành & Bí Quyết <br />
            <span className="text-luxury-gold-dark italic font-normal font-serif">Trang Điểm Cá Nhân Nghệ Thuật</span>
          </motion.h2>
          <div className="w-20 h-[1.5px] bg-luxury-gold mx-auto mt-6 mb-5" />
          <p className="text-sm sm:text-base text-luxury-charcoal/80 leading-relaxed font-sans max-w-2xl mx-auto">
            Khám phá quy trình trang điểm trực quan, so sánh trực diện sai lầm thường gặp và giải pháp chuẩn xác giúp bạn thăng hạng nhan sắc tự nhiên ngay lập tức.
          </p>
        </div>

        {/* Artistic Interactive Slider Navigation */}
        <div className="relative mb-14 max-w-5xl mx-auto">
          
          {/* Autoplay play/pause controller */}
          <div className="absolute -top-12 right-4 flex items-center gap-2 z-10">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[10px] uppercase tracking-widest font-bold text-luxury-charcoal hover:bg-[#FAF8F5] transition-all shadow-md border border-luxury-nude/40 cursor-pointer active:scale-95"
            >
              {isPlaying ? (
                <>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Đang Trình Chiếu</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-luxury-gold-dark fill-luxury-gold-dark/25" />
                  <span>Tự Động Chạy</span>
                </>
              )}
            </button>
          </div>

          {/* Luxury Horizontal Navigation Track */}
          <div 
            ref={tabContainerRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-5 pt-2 no-scrollbar scroll-smooth snap-x touch-pan-x px-6 sm:px-10"
            style={{ scrollbarWidth: "none" }}
          >
            {MAKEUP_TIPS.map((tip, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={tip.id}
                  onClick={() => handleSelectTip(idx)}
                  className={`snap-center shrink-0 px-6 py-4.5 rounded-2xl border text-left transition-all duration-500 cursor-pointer relative overflow-hidden min-w-[260px] sm:min-w-[300px] max-w-[320px] ${
                    isActive 
                      ? "bg-luxury-charcoal text-white border-luxury-charcoal shadow-xl scale-102" 
                      : "bg-white text-luxury-charcoal border-luxury-nude/30 hover:border-luxury-gold/50 hover:bg-[#FAF8F5]/30 shadow-xs"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className={`text-[9px] uppercase font-bold tracking-widest ${isActive ? "text-luxury-gold" : "text-luxury-gold-dark"}`}>
                      Cẩm nang 0{idx + 1}
                    </span>
                    {isActive && (
                      <span className="flex h-1.5 w-1.5 rounded-full bg-luxury-gold animate-ping" />
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-serif font-bold mt-2.5 leading-snug line-clamp-1">
                    {tip.title}
                  </h4>
                  <p className={`text-[10px] font-sans mt-1 ${isActive ? "text-white/60" : "text-luxury-charcoal/50"}`}>
                    {tip.categoryLabel} • {tip.duration}
                  </p>
                  
                  {/* Dynamic tiny timer progress line below the active tab */}
                  {isActive && isPlaying && (
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 8.5, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-[3px] bg-luxury-gold"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Navigation Arrows for high physical controls feel */}
          <div className="hidden lg:flex justify-between items-center absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none px-2 z-10">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white text-luxury-charcoal shadow-lg border border-luxury-nude/40 flex items-center justify-center hover:bg-luxury-beige pointer-events-auto cursor-pointer -translate-x-8 hover:scale-110 active:scale-90 transition-all duration-300"
              aria-label="Previous tip"
            >
              <ChevronLeft className="w-5 h-5 text-luxury-charcoal" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white text-luxury-charcoal shadow-lg border border-luxury-nude/40 flex items-center justify-center hover:bg-luxury-beige pointer-events-auto cursor-pointer translate-x-8 hover:scale-110 active:scale-90 transition-all duration-300"
              aria-label="Next tip"
            >
              <ChevronRight className="w-5 h-5 text-luxury-charcoal" />
            </button>
          </div>
        </div>

        {/* Cinematic Re-designed Visual Stage (Splitscreen Concept) */}
        <div className="bg-white rounded-3xl border border-luxury-nude/40 shadow-2xl overflow-hidden relative min-h-[550px]">
          
          {/* Grid visual design accents */}
          <div className="absolute inset-0 bg-[radial-gradient(#eadecd_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTip.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-12 relative z-10"
            >
              
              {/* LEFT COLUMN: Artistic Visual Info & Side portrait (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-luxury-nude/30 flex flex-col justify-between space-y-8 bg-[#FCFAF7]/40">
                
                <div className="space-y-6">
                  {/* Category and Quick Info */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-luxury-charcoal text-white">
                      {activeTip.categoryLabel}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-luxury-gold/15 text-luxury-gold-dark border border-luxury-gold/20">
                      Độ khó: {activeTip.difficulty}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white text-luxury-charcoal/80 border border-luxury-nude/40">
                      Thời lượng: {activeTip.duration}
                    </span>
                  </div>

                  {/* Main Title */}
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-serif text-luxury-charcoal font-bold tracking-tight leading-tight">
                      {activeTip.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-luxury-charcoal/70 leading-relaxed font-sans">
                      {activeTip.summary}
                    </p>
                  </div>

                  {/* High Aesthetic Image & Highlight Card overlapping */}
                  <div className="relative rounded-2xl overflow-hidden shadow-lg h-56 group">
                    <img 
                      src={activeTip.illustrationUrl} 
                      alt={activeTip.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Embedded Golden Quote Box */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-luxury-gold/30 shadow-lg flex items-start gap-2">
                      <Lightbulb className="w-4.5 h-4.5 text-luxury-gold-dark shrink-0 mt-0.5 fill-luxury-gold/10" />
                      <div>
                        <p className="text-[9px] uppercase font-bold text-luxury-gold-dark tracking-widest">Bí kíp cốt lõi</p>
                        <p className="text-[11px] text-luxury-charcoal font-bold mt-0.5 leading-snug">
                          {activeTip.secretKey}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DO & DON'T Visual Split Column (Highly visual contrast) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-emerald-50/50 p-4.5 rounded-2xl border border-emerald-100 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-[10px] uppercase tracking-wider mb-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100 shrink-0" />
                      <span>NÊN LÀM</span>
                    </div>
                    <p className="text-[11px] text-emerald-950 font-sans leading-relaxed">
                      {activeTip.doText}
                    </p>
                  </div>

                  <div className="bg-rose-50/40 p-4.5 rounded-2xl border border-rose-100 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5 text-rose-800 font-bold text-[10px] uppercase tracking-wider mb-2">
                      <XCircle className="w-4 h-4 text-rose-600 fill-rose-100 shrink-0" />
                      <span>SAI LẦM TRÁNH</span>
                    </div>
                    <p className="text-[11px] text-rose-950 font-sans leading-relaxed">
                      {activeTip.dontText}
                    </p>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Interactive step diagram with dynamic running indicators (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpenCheck className="w-5 h-5 text-luxury-gold-dark" />
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-luxury-charcoal">
                        Sơ đồ quy trình thực hành chuẩn hóa
                      </h4>
                    </div>
                    <span className="text-[11px] text-luxury-charcoal/50 font-sans font-medium hidden sm:inline">
                      Bấm vào từng bước để theo dõi
                    </span>
                  </div>

                  {/* SƠ ĐỒ CHẠY HÌNH NGANG DẠNG THỜI TRANG (Desktop: Horizontal Timeline / Mobile: Vertical List) */}
                  <div className="relative">
                    
                    {/* DESKTOP LAYOUT: Horizontal Scroll Flow */}
                    <div className="hidden lg:block relative">
                      {/* Behind gradient line helper for steps connector */}
                      <div className="absolute top-[40px] left-10 right-10 h-[2px] bg-gradient-to-r from-luxury-gold/5 via-luxury-gold/45 to-[#f4eade] z-0" />

                      <div className="overflow-x-auto -mx-6 px-6 sm:-mx-10 sm:px-10 pb-6 pt-2 no-scrollbar scroll-smooth touch-pan-x">
                        <div className="flex gap-6 sm:gap-8 min-w-max">
                          {activeTip.steps.map((step, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9, x: 20 }}
                              animate={{ opacity: 1, scale: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: idx * 0.08 }}
                              className="w-[240px] sm:w-[280px] shrink-0 flex flex-col items-center text-center space-y-4 group/step relative z-10"
                            >
                              {/* Step visual circle badge */}
                              <div className="relative">
                                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#eadecd] group-hover/step:border-luxury-gold-dark group-hover/step:bg-[#fbf9f6] flex items-center justify-center shadow-md relative transition-all duration-300 group-hover/step:scale-110">
                                  <div className="absolute inset-0 rounded-full border border-luxury-gold-dark/25 animate-ping opacity-0 group-hover/step:opacity-100 duration-1000" />
                                  <span className="text-sm font-serif font-black text-luxury-charcoal group-hover/step:text-luxury-gold-dark">
                                    0{idx + 1}
                                  </span>
                                </div>
                                <span className="absolute -bottom-1 -right-1 w-5.5 h-5.5 rounded-full bg-luxury-gold-dark text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                                  ✓
                                </span>
                              </div>

                              {/* Stylized Bubble Content Step Card */}
                              <div className="bg-gradient-to-b from-white to-[#FAF8F5] group-hover/step:from-[#FAF8F5] group-hover/step:to-[#f3eae1]/20 p-5.5 sm:p-6 rounded-2xl border border-[#ede1d1]/70 shadow-xs relative transition-all duration-300 w-full min-h-[165px] flex flex-col justify-start text-left group-hover/step:shadow-md group-hover/step:-translate-y-1 group-hover/step:border-luxury-gold/40">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-luxury-gold-dark">
                                    Bước 0{idx + 1}
                                  </span>
                                  <Compass className="w-3.5 h-3.5 text-luxury-gold-dark/30 group-hover/step:text-luxury-gold-dark/70 transition-colors" />
                                </div>
                                <p className="text-xs text-luxury-charcoal/85 leading-relaxed font-sans">
                                  {step}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* MOBILE & TABLET LAYOUT: Vertical Timeline Flow */}
                    <div className="block lg:hidden space-y-5 relative">
                      {/* Vertical line helper for mobile timeline */}
                      <div className="absolute top-6 bottom-6 left-[22px] w-[1.5px] bg-gradient-to-b from-luxury-gold-dark/40 via-luxury-gold/20 to-transparent z-0" />

                      {activeTip.steps.map((step, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className="flex gap-4 items-start relative z-10 pl-1"
                        >
                          {/* Circle indicator */}
                          <div className="shrink-0 relative">
                            <div className="w-11 h-11 rounded-full bg-white border border-[#eadecd] flex items-center justify-center font-serif font-bold text-xs text-luxury-charcoal shadow-sm">
                              0{idx + 1}
                            </div>
                            <span className="absolute -bottom-0.5 -right-0.5 w-4.5 h-4.5 rounded-full bg-luxury-gold-dark text-white text-[8px] font-bold flex items-center justify-center border border-white">
                              ✓
                            </span>
                          </div>

                          {/* Content Bubble */}
                          <div className="flex-1 bg-gradient-to-b from-white to-[#FAF8F5] p-4.5 rounded-2xl border border-[#ede1d1]/75 shadow-xs">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[9px] font-extrabold uppercase tracking-widest text-luxury-gold-dark">
                                Bước 0{idx + 1}
                              </span>
                              <Compass className="w-3.5 h-3.5 text-luxury-gold-dark/30" />
                            </div>
                            <p className="text-xs text-luxury-charcoal/85 leading-relaxed font-sans">
                              {step}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Common Mistake Warning Banner with warning icon */}
                <div className="bg-amber-500/5 p-4.5 rounded-2xl border border-amber-500/15 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 fill-amber-500/10 animate-bounce" />
                  <div>
                    <h5 className="text-[10px] uppercase font-bold tracking-widest text-amber-800">Sai lầm thường gặp nhất cần tránh:</h5>
                    <p className="text-xs text-luxury-charcoal/85 mt-1 leading-relaxed font-sans">
                      {activeTip.mistake}
                    </p>
                  </div>
                </div>

                {/* Bottom interactive action triggers */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-luxury-nude/20">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-sans text-luxury-charcoal/50">
                      Cẩm nang hướng dẫn trang điểm cá nhân Nghĩa Trần Studio.
                    </span>
                  </div>
                  <a
                    href="https://zalo.me/0931559307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-luxury-gold-dark font-extrabold tracking-wider uppercase hover:underline transition-all"
                  >
                    Cần tư vấn trực tiếp về lớp học cá nhân <ArrowRight className="w-4 h-4 animate-pulse" />
                  </a>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
