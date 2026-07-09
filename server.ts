import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

// Path to data files
const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");
const BOOKINGS_FILE = path.join(DATA_DIR, "bookings.json");

// Ensure data files exist
function ensureDataFiles() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), "utf-8");
  }
  if (!fs.existsSync(BOOKINGS_FILE)) {
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify([], null, 2), "utf-8");
  }
}

ensureDataFiles();

// Helper to read/write JSON files
function readJSON(file: string) {
  try {
    ensureDataFiles();
    const data = fs.readFileSync(file, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading ${file}:`, err);
    return [];
  }
}

function writeJSON(file: string, data: any) {
  try {
    ensureDataFiles();
    fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error(`Error writing ${file}:`, err);
  }
}

// Middleware
app.use(express.json());

// API Routes
// 1. Leads CRUD
app.get("/api/leads", (req, res) => {
  const leads = readJSON(LEADS_FILE);
  res.json(leads);
});

app.post("/api/leads", (req, res) => {
  const leads = readJSON(LEADS_FILE);
  const newLead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    fullName: req.body.fullName || "Ẩn danh",
    phone: req.body.phone || "",
    serviceType: req.body.serviceType || "other",
    message: req.body.message || "",
    status: "new",
    createdAt: new Date().toISOString(),
  };
  
  leads.push(newLead);
  writeJSON(LEADS_FILE, leads);

  // Simulate sending SMS notification to 0931559307
  console.log(`\n========================================`);
  console.log(`🔔 THÔNG BÁO TỰ ĐỘNG GỬI ĐẾN SĐT 0931559307`);
  console.log(`[Khách Hàng Tư Vấn Mới]`);
  console.log(`Họ tên: ${newLead.fullName}`);
  console.log(`SĐT: ${newLead.phone}`);
  console.log(`Dịch vụ cần tư vấn: ${newLead.serviceType.toUpperCase()}`);
  console.log(`Nội dung: ${newLead.message}`);
  console.log(`========================================\n`);

  res.status(201).json({ success: true, lead: newLead });
});

app.put("/api/leads/:id", (req, res) => {
  const leads = readJSON(LEADS_FILE);
  const { id } = req.params;
  const index = leads.findIndex((l: any) => l.id === id);
  if (index !== -1) {
    leads[index] = { ...leads[index], ...req.body };
    writeJSON(LEADS_FILE, leads);
    res.json(leads[index]);
  } else {
    res.status(404).json({ error: "Lead not found" });
  }
});

app.delete("/api/leads/:id", (req, res) => {
  const leads = readJSON(LEADS_FILE);
  const { id } = req.params;
  const filtered = leads.filter((l: any) => l.id !== id);
  writeJSON(LEADS_FILE, filtered);
  res.json({ success: true });
});

// 2. Bookings CRUD
app.get("/api/bookings", (req, res) => {
  const bookings = readJSON(BOOKINGS_FILE);
  res.json(bookings);
});

app.post("/api/bookings", (req, res) => {
  const bookings = readJSON(BOOKINGS_FILE);
  const newBooking = {
    id: `book_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    fullName: req.body.fullName || "Ẩn danh",
    phone: req.body.phone || "",
    serviceType: req.body.serviceType || "bridal",
    bookingDate: req.body.bookingDate || "",
    bookingTime: req.body.bookingTime || "",
    locationType: req.body.locationType || "studio",
    address: req.body.address || "",
    notes: req.body.notes || "",
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  bookings.push(newBooking);
  writeJSON(BOOKINGS_FILE, bookings);

  // Simulate sending SMS notification to 0931559307
  console.log(`\n========================================`);
  console.log(`🔔 THÔNG BÁO TỰ ĐỘNG GỬI ĐẾN SĐT 0931559307`);
  console.log(`[Yêu Cầu Đặt Lịch Mới]`);
  console.log(`Khách hàng: ${newBooking.fullName}`);
  console.log(`SĐT: ${newBooking.phone}`);
  console.log(`Dịch vụ: ${newBooking.serviceType.toUpperCase()}`);
  console.log(`Thời gian: ${newBooking.bookingDate} lúc ${newBooking.bookingTime}`);
  console.log(`Địa điểm: ${newBooking.locationType === 'home' ? `Tại nhà: ${newBooking.address}` : 'Tại Studio Nghĩa Trần'}`);
  console.log(`Ghi chú: ${newBooking.notes}`);
  console.log(`========================================\n`);

  res.status(201).json({ success: true, booking: newBooking });
});

app.put("/api/bookings/:id", (req, res) => {
  const bookings = readJSON(BOOKINGS_FILE);
  const { id } = req.params;
  const index = bookings.findIndex((b: any) => b.id === id);
  if (index !== -1) {
    bookings[index] = { ...bookings[index], ...req.body };
    writeJSON(BOOKINGS_FILE, bookings);
    res.json(bookings[index]);
  } else {
    res.status(404).json({ error: "Booking not found" });
  }
});

app.delete("/api/bookings/:id", (req, res) => {
  const bookings = readJSON(BOOKINGS_FILE);
  const { id } = req.params;
  const filtered = bookings.filter((b: any) => b.id !== id);
  writeJSON(BOOKINGS_FILE, filtered);
  res.json({ success: true });
});

// Start server helper
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
