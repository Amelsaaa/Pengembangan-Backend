const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../data/data.json");

// Fungsi untuk membaca data dari JSON
const readData = () => {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

// Fungsi untuk menulis data ke JSON
const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// GET: Ambil semua barang
exports.getAllBarangs = (req, res) => {
  const barangs = readData();
  res.json(barangs);
};

// GET: Ambil barang berdasarkan ID
exports.getBarangById = (req, res) => {
  const barangs = readData();
  const barang = barangs.find((b) => b.id == req.params.id);
  if (!barang) return res.status(404).json({ message: "Barang not found" });
  res.json(barang);
};

// POST: Tambah barang baru
exports.createBarang = (req, res) => {
  const barangs = readData();
  const newBarang = { id: barangs.length + 1, ...req.body };
  barangs.push(newBarang);
  writeData(barangs);
  res.status(201).json({ message: "Barang created successfully", newBarang });
};

// PUT: Update data barang
exports.updateBarang = (req, res) => {
  let barangs = readData();
  const index = barangs.findIndex((b) => b.id == req.params.id);
  if (index === -1)
    return res.status(404).json({ message: "Barang not found" });

  barangs[index] = { ...barangs[index], ...req.body };
  writeData(barangs);
  res.json({ message: "Barang updated successfully", barang: barangs[index] });
};

// DELETE: Hapus barang berdasarkan ID
exports.deleteBarang = (req, res) => {
  let barangs = readData();
  const newBarangs = barangs.filter((b) => b.id != req.params.id);
  if (barangs.length === newBarangs.length)
    return res.status(404).json({ message: "Barang not found" });

  writeData(newBarangs);
  res.json({ message: "Barang deleted successfully" });
};

// Fungsi untuk update waktu pada data
exports.updateDataWithTimestamp = (req, res) => {
  let barangs = readData();

  // Menggunakan waktu lokal Indonesia
  const currentDate = new Date().toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
  });

  barangs = barangs.map((barang) => ({
    ...barang,
    updateAt: currentDate,
  }));

  writeData(barangs);
  res.json({ message: "Data updated successfully", barangs });
};
