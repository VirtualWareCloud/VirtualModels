const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// === CREATE FOLDERS IF MISSING ===
if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");
if (!fs.existsSync("profiles")) fs.mkdirSync("profiles");

// === MIDDLEWARE ===
app.use(express.static("public")); // serve static HTML files
app.use(express.urlencoded({ extended: true }));

// === MULTER CONFIG FOR FILE UPLOADS ===
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// === ROUTES ===

// Serve the registration page at "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "model-registration.html"));
});

// Handle the form POST request
app.post("/register", upload.single("profileImage"), (req, res) => {
  const { fullName, email, bio } = req.body;
  const imagePath = req.file ? req.file.path : "No image uploaded";

  // Sanitize filename
  const safeName = fullName.replace(/[^\w\s]/gi, "").replace(/\s+/g, "_");

  const profileContent = `Name: ${fullName}
Email: ${email}
Bio: ${bio}
Image File: ${imagePath}
Submitted: ${new Date().toISOString()}
`;

  const filePath = `profiles/${safeName}_${Date.now()}.txt`;
  fs.writeFileSync(filePath, profileContent);

  res.send(`<h2>✅ Profile submitted successfully!</h2><p><a href="/">Back to registration</a></p>`);
});

// === START SERVER ===
app.listen(port, () => {
  console.log(`🚀 Virtual Models server running at http://localhost:${port}`);
});
