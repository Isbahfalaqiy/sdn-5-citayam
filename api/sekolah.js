const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  try {
    // Ambil path file JSON di folder public
    const filePath = path.join(process.cwd(), "public", "sekolah.json");
    const jsonData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(jsonData);

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Gagal membaca data" });
  }
};
