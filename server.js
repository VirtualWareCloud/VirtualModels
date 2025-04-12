const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// Setup storage for images
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Create upload folder if not exists
if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");
if (!fs.existsSync("profiles")) fs.mkdirSync("profiles");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/register", upload.single("profileImage"), (req, res) => {
  const { fullName, email, bio } = req.body;
  const imagePath = req.file.path;

  const content = `Name: ${fullName}\nEmail: ${email}\nBio: ${bio}\nImage: ${imagePath}`;
  const filename = `profiles/${fullName.replace(/\s/g, "_")}_${Date.now()}.txt`;

  fs.writeFileSync(filename, content);
  res.send("Profile registered successfully!");
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
