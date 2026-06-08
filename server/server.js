import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import aiRoutes from "./routes/aiRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { gemini } from "./ai/gemini.js";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// Load environment variables FIRST
dotenv.config();


connectDB();

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(express.json());

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://rproject-git-main-riyaz-maliks-projects.vercel.app",
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type",  "Authorization",],
//     credentials: true,
//   })
// );
app.use(cors());
// Request logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

/* ================= ROUTES ================= */

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Main Routes
app.use("/api/skills", skillRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/auth", authRoutes);

/* ================= GEMINI TEST ================= */

app.post("/api/ai/test", async (req, res) => {
  try {
    const result = await model.generateContent(
      "Say hello in one short sentence"
    );

    const reply = result.response.text();

    res.json({ reply });
  } catch (error) {
    console.error("Gemini error:", error);

    res.status(500).json({
      error: "Gemini request failed",
    });
  }
});

/* ================= AI SKILL ADVICE ================= */
app.post("/api/ai/skill-advice", async (req, res) => {
  try {
    const { skills } = req.body;

    if (!skills.length) {
      return res.json({
        advice: "Add some skills first."
      });
    }

    const avg =
      skills.reduce((a, b) => a + b.progress, 0) /
      skills.length;

    let advice = "";

    if (avg < 30) {
      advice =
        "Focus on consistency. Increase progress in your existing skills.";
    } else if (avg < 70) {
      advice =
        "Good progress. Start building projects with your skills.";
    } else {
      advice =
        "Strong progress. Focus on internships, open source and advanced topics.";
    }

    res.json({ advice });

  } catch (error) {
    res.status(500).json({
      error: "Advice failed",
    });
  }
});
// app.post("/api/ai/skill-advice", async (req, res) => {
//   try {
//     const { skills } = req.body;

//     if (!skills || skills.length === 0) {
//       return res.json({
//         advice:
//           "No skills found. Start by adding some skills first.",
//       });
//     }

//     const skillText = skills
//       .map(
//         (s) =>
//           `${s.title} (${s.level}) - ${s.progress || 0}%`
//       )
//       .join(", ");

//     const prompt = `
// You are a career mentor.

// Here are my skills:
// ${skillText}

// Give short advice:
// 1. Strengths
// 2. Weaknesses
// 3. What to learn next
// `;

//     // const result = await model.generateContent(prompt);

//     // const advice = result.response.text();
//     const advice = await gemini(prompt);

//     res.json({ advice });
//   } catch (error) {
//     console.error("Gemini advice error:", error);

//     res.status(500).json({
//       error: "AI advice failed",
//     });
//   }
// });

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});