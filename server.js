const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "*",
    methods: "GET,POST",
}));

app.use(express.json());

// DB connection
mongoose.connect("mongodb+srv://Uju:Whid0000@cluster0.6wrsodb.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
 .catch(err => console.error("MongoDB connection error:", err));

// User model
const User = mongoose.model("User", {
  name: String,
  email: { type: String, unique: true },
  password: String,
});

app.post("/api/users/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: "Email already exists!" });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Create new user
    await User.create({ name, email, password: hashed });

    res.json({ message: "Account created ✔" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(4000, () => console.log("Auth server running on port 4000"));


//https://chatgpt.com/gg/v/693255cb41048192b082643db019b862?token=P8p_sel98oPyHKoDVU83bg

//https://chatgpt.com/share/69325660-d04c-800b-8d34-3dc0c79f9189