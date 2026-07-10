import React, { useState, useEffect } from "react";
import { Users, Calendar, Trash2, Check, RefreshCw, Search, ArrowUpDown, Clock, CheckCircle2, XCircle, AlertCircle, FileSpreadsheet, Lock, Eye, EyeOff } from "lucide-react";
import { Lead, Booking } from "../types";

export default function AdminPanel() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [activeTab, setActiveTab] = useState<"bookings" | "leads">("bookings");
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("admin_authenticated") === "true";
  });
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Nghia@19101991") {
      setIsAuthenticated(true);
      setErrorMsg("");
      sessionStorage.setItem("admin_authenticated", "true");
    } else {
      setErrorMsg("Mật khẩu không chính xác. Vui lòng thử lại!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    sessionStorage.removeItem("admin_authenticated");
  };

  const fetchData = async () => {
    if (!isAuthenticated) return;
    setIsLoading(true);
    try {
      const [leadsRes, bookingsRes] = await Promise.all([
        fetch("/api/leads"),
        fetch("/api/bookings")
      ]);
      if (leadsRes.ok && bookingsRes.ok) {
        const leadsData = await leadsRes.json();
        const bookingsData = await bookingsRes.json();
        
        // Sort by newest first
        setLeads(leadsData.sort((a: Lead, b: Lead) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
        setBookings(bookingsData.sort((a: Booking, b: Booking) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
      }
    } catch (err) {
      console.error("Failed to fetch admin data", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const handleUpdateLeadStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateBookingStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa khách hàng tư vấn này?")) return;
    try {
      const res = await fetch(`/api/leads/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteBooking = async (id: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa lịch hẹn này?")) return;
    try {
      const res = await fetch(`/api/bookings/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredBookings = bookings.filter(b => 
    b.fullName.toLowerCase().includes(searchQuery.toLowerCase()) || 
    b.phone.includes(searchQuery) ||
    b.serviceType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredLeads = leads.filter(l => 
    l.fullName.toLowerCase().includes(searchQuery.toLowerCase()) || 
    l.phone.includes(searchQuery) ||
    l.serviceType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Stats
  const totalLeads = leads.length;
  const totalBookings = bookings.length;
  const pendingBookings = bookings.filter(b => b.status === "pending").length;
  const newLeads = leads.filter(l => l.status === "new").length;

  const translateService = (serv: string) => {
    switch (serv) {
      case "bridal": return "Trang điểm Cô Dâu";
      case "party": return "Trang điểm Đi Tiệc";
      case "concept": return "Combo Chụp ảnh Concept";
      case "academy": return "Đào tạo Makeup";
      default: return serv;
    }
  };

  if (!isAuthenticated) {
    return (
      <section className="py-16 bg-luxury-beige/30 border-t border-luxury-nude animate-fade-in">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-3xl border border-luxury-nude p-8 sm:p-10 shadow-xl relative overflow-hidden">
            {/* Visual background decoration */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-luxury-gold/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="text-center space-y-3 mb-8 relative z-10">
              <div className="w-14 h-14 bg-luxury-charcoal text-luxury-gold rounded-2xl flex items-center justify-center mx-auto shadow-md">
                <Lock className="w-6 h-6 text-luxury-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-luxury-charcoal uppercase tracking-widest pt-2">
                Nghĩa Trần Admin
              </h3>
              <p className="text-xs text-luxury-charcoal/60 max-w-xs mx-auto leading-relaxed">
                Vui lòng nhập mật khẩu quản trị viên để mở khóa danh sách khách hàng và lịch hẹn đặt trước.
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-5 relative z-10">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest font-bold text-luxury-charcoal/70 block">
                  Mật khẩu truy cập
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu..."
                    className="w-full pl-4 pr-10 py-3 rounded-xl border border-luxury-nude text-xs bg-luxury-beige/10 text-luxury-charcoal focus:outline-none focus:ring-1 focus:ring-luxury-gold focus:border-luxury-gold"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-luxury-charcoal/40 hover:text-luxury-charcoal/80 p-1 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errorMsg && (
                  <p className="text-[10px] text-red-500 font-semibold flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errorMsg}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-luxury-charcoal hover:bg-luxury-gold text-white hover:text-luxury-charcoal text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer"
              >
                Xác Nhận Truy Cập
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white border-t border-luxury-nude animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-8 border-b border-luxury-nude mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs bg-red-100 text-red-800 font-semibold px-2.5 py-1 rounded-md mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" /> ADMIN CONSOLE
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-luxury-charcoal">
              Bảng Quản Lý Đặt Lịch & Tư Vấn
            </h2>
            <p className="text-xs text-luxury-charcoal/60 mt-1 font-sans">
              Theo dõi trực tiếp cuộc gọi từ nút tư vấn, đặt lịch, và các KPI về leads của Nghĩa Trần Makeup.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={fetchData}
              disabled={isLoading}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg border border-luxury-nude hover:bg-luxury-beige transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} /> Tải Lại Dữ Liệu
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg border border-red-200 text-red-700 hover:bg-red-50 transition-colors cursor-pointer"
            >
              Đăng Xuất
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-luxury-beige/30 p-5 rounded-xl border border-luxury-nude/60">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-luxury-charcoal/60 uppercase">Tổng Lịch Hẹn</span>
              <Calendar className="w-4 h-4 text-luxury-gold-dark" />
            </div>
            <p className="text-3xl font-serif font-bold text-luxury-charcoal mt-2">{totalBookings}</p>
            <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full mt-2 inline-block font-semibold">
              {pendingBookings} Đang chờ duyệt
            </span>
          </div>

          <div className="bg-luxury-beige/30 p-5 rounded-xl border border-luxury-nude/60">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-luxury-charcoal/60 uppercase">Tổng Khách Tư Vấn</span>
              <Users className="w-4 h-4 text-luxury-gold-dark" />
            </div>
            <p className="text-3xl font-serif font-bold text-luxury-charcoal mt-2">{totalLeads}</p>
            <span className="text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full mt-2 inline-block font-semibold">
              {newLeads} Yêu cầu tư vấn mới
            </span>
          </div>

          <div className="bg-luxury-beige/30 p-5 rounded-xl border border-luxury-nude/60">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-luxury-charcoal/60 uppercase">Zalo / SĐT Trực Tiếp</span>
              <span className="text-lg">📱</span>
            </div>
            <p className="text-3xl font-serif font-bold text-luxury-charcoal mt-2">Active</p>
            <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-2 inline-block font-semibold">
              Gửi SMS tự động về 0931559307
            </span>
          </div>

          <div className="bg-luxury-beige/30 p-5 rounded-xl border border-luxury-nude/60">
            <div className="flex justify-between items-start">
              <span className="text-xs font-semibold text-luxury-charcoal/60 uppercase">Tỷ Lệ Đặt Lịch (CVR)</span>
              <span className="text-lg">📈</span>
            </div>
            <p className="text-3xl font-serif font-bold text-luxury-charcoal mt-2">
              {totalLeads + totalBookings > 0 ? `${Math.round((totalBookings / (totalLeads + totalBookings)) * 100)}%` : "0%"}
            </p>
            <span className="text-[10px] text-luxury-charcoal/50 block mt-2">Tính trên tổng data đăng ký</span>
          </div>
        </div>

        {/* Filters and Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex rounded-lg bg-luxury-beige/50 p-1 border border-luxury-nude/60 w-fit shrink-0">
            <button
              onClick={() => setActiveTab("bookings")}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-colors cursor-pointer ${
                activeTab === "bookings" ? "bg-luxury-charcoal text-white" : "text-luxury-charcoal hover:text-luxury-gold-dark"
              }`}
            >
              Danh sách đặt lịch ({filteredBookings.length})
            </button>
            <button
              onClick={() => setActiveTab("leads")}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-colors cursor-pointer ${
                activeTab === "leads" ? "bg-luxury-charcoal text-white" : "text-luxury-charcoal hover:text-luxury-gold-dark"
              }`}
            >
              Khách tư vấn (Leads) ({filteredLeads.length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm tên, SĐT, dịch vụ..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-luxury-nude text-xs bg-luxury-beige/20 text-luxury-charcoal focus:outline-none focus:ring-1 focus:ring-luxury-gold"
            />
            <Search className="w-3.5 h-3.5 text-luxury-charcoal/40 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl border border-luxury-nude/70 overflow-hidden shadow-sm">
          {isLoading ? (
            <div className="py-12 text-center text-xs text-luxury-charcoal/50">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto text-luxury-gold-dark mb-2" /> Đang tải dữ liệu...
            </div>
          ) : activeTab === "bookings" ? (
            /* Bookings Table */
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-luxury-beige/30 border-b border-luxury-nude/40 text-luxury-charcoal/60 uppercase font-semibold">
                    <th className="p-4">Khách Hàng</th>
                    <th className="p-4">Dịch Vụ</th>
                    <th className="p-4">Ngày Hẹn / Giờ</th>
                    <th className="p-4">Địa Điểm</th>
                    <th className="p-4">Trạng Thái</th>
                    <th className="p-4">Ghi Chú</th>
                    <th className="p-4 text-center">Hành Động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-luxury-nude/30">
                  {filteredBookings.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-luxury-charcoal/50 font-sans italic">
                        Không có lịch hẹn nào trùng khớp.
                      </td>
                    </tr>
                  ) : (
                    filteredBookings.map((b) => (
                      <tr key={b.id} className="hover:bg-luxury-beige/10 transition-colors">
                        <td className="p-4">
                          <div className="font-semibold text-luxury-charcoal">{b.fullName}</div>
                          <div className="text-[10px] text-luxury-charcoal/60 font-mono mt-0.5">{b.phone}</div>
                        </td>
                        <td className="p-4">
                          <span className="font-medium text-luxury-charcoal">{translateService(b.serviceType)}</span>
                        </td>
                        <td className="p-4">
                          <div className="font-semibold">{b.bookingDate}</div>
                          <div className="text-[10px] text-luxury-charcoal/60 mt-0.5">{b.bookingTime}</div>
                        </td>
                        <td className="p-4">
                          {b.locationType === "studio" ? (
                            <span className="inline-flex items-center gap-1 text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-semibold">
                              Tại Studio
                            </span>
                          ) : (
                            <div className="max-w-[150px] truncate" title={b.address}>
                              <span className="text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-semibold block w-fit mb-0.5">Tại nhà</span>
                              <span className="text-[10px] text-luxury-charcoal/70">{b.address}</span>
                            </div>
                          )}
                        </td>
                        <td className="p-4">
                          <select
                            value={b.status}
                            onChange={(e) => handleUpdateBookingStatus(b.id, e.target.value)}
                            className={`px-2 py-1 rounded text-[10px] font-semibold focus:outline-none cursor-pointer border ${
                              b.status === "pending" ? "bg-amber-50 text-amber-700 border-amber-200" :
                              b.status === "confirmed" ? "bg-blue-50 text-blue-700 border-blue-200" :
                              b.status === "completed" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                              "bg-red-50 text-red-700 border-red-200"
                            }`}
                          >
                            <option value="pending">Chờ xác nhận</option>
                            <option value="confirmed">Đã xác nhận</option>
                            <option value="completed">Đã hoàn thành</option>
                            <option value="cancelled">Hủy lịch</option>
                          </select>
                        </td>
                        <td className="p-4 max-w-[150px] truncate" title={b.notes}>
                          <span className="text-[11px] text-luxury-charcoal/70 italic">{b.notes || "Không"}</span>
                        </td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() => handleDeleteBooking(b.id)}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-full transition-colors cursor-pointer"
                            title="Xóa lịch hẹn"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            /* Leads Table */
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-luxury-beige/30 border-b border-luxury-nude/40 text-luxury-charcoal/60 uppercase font-semibold">
                    <th className="p-4">Khách Tư Vấn</th>
                    <th className="p-4">Dịch Vụ Quan Tâm</th>
                    <th className="p-4">Ngày Nhận Leads</th>
                    <th className="p-4">Nội Dung Yêu Cầu / Tin nhắn</th>
                    <th className="p-4">Trạng Thái</th>
                    <th className="p-4 text-center">Hành Động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-luxury-nude/30">
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-luxury-charcoal/50 font-sans italic">
                        Không có yêu cầu tư vấn nào trùng khớp.
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((l) => (
                      <tr key={l.id} className="hover:bg-luxury-beige/10 transition-colors">
                        <td className="p-4">
                          <div className="font-semibold text-luxury-charcoal">{l.fullName}</div>
                          <div className="text-[10px] text-luxury-charcoal/60 font-mono mt-0.5">{l.phone}</div>
                        </td>
                        <td className="p-4">
                          <span className="font-medium text-luxury-charcoal">{translateService(l.serviceType)}</span>
                        </td>
                        <td className="p-4">
                          <div className="font-semibold">{new Date(l.createdAt).toLocaleDateString("vi-VN")}</div>
                          <div className="text-[10px] text-luxury-charcoal/60 mt-0.5">{new Date(l.createdAt).toLocaleTimeString("vi-VN")}</div>
                        </td>
                        <td className="p-4 max-w-[200px] truncate" title={l.message}>
                          <span className="text-[11px] text-luxury-charcoal/70">{l.message || "Không có ghi chú"}</span>
                        </td>
                        <td className="p-4">
                          <select
                            value={l.status}
                            onChange={(e) => handleUpdateLeadStatus(l.id, e.target.value)}
                            className={`px-2 py-1 rounded text-[10px] font-semibold focus:outline-none cursor-pointer border ${
                              l.status === "new" ? "bg-rose-50 text-rose-700 border-rose-200" :
                              l.status === "contacted" ? "bg-indigo-50 text-indigo-700 border-indigo-200" :
                              l.status === "completed" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                              "bg-red-50 text-red-700 border-red-200"
                            }`}
                          >
                            <option value="new">Lead Mới</option>
                            <option value="contacted">Đã Liên Hệ</option>
                            <option value="completed">Chốt Hẹn</option>
                            <option value="cancelled">Hủy Bỏ</option>
                          </select>
                        </td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() => handleDeleteLead(l.id)}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-full transition-colors cursor-pointer"
                            title="Xóa Lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
