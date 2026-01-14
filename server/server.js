import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import aiRoutes from "./routes/aiRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
// import {model} from "./ai/ollama.js";
import  askOllama  from "./ai/ollama.js";


dotenv.config();

// Connect to database
connectDB();

const app = express();

/* ================= MIDDLEWARE ================= */

// Parse JSON
app.use(express.json());

// CORS (only once)
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// Logger (BEFORE routes)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

/* ================= ROUTES ================= */

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Skills routes
app.use("/api/skills", skillRoutes);
app.use("/api/ai", aiRoutes);


// ✅ AI TEST ROUTE (POST ONLY)
// import { model } from "./ai/gemini.js";


app.post("/api/ai/test", async (req, res) => {
  try {
    const reply = await askOllama(
      "Say hello in one short sentence"
    );

    res.json({ reply });
  } catch (error) {
    console.error("Ollama error:", error);
    res.status(500).json({ error: "Ollama AI request failed" });
  }
});

// import { askOllama } from "./ai/ollama.js";

app.post("/api/ai/skill-advice", async (req, res) => {
  try {
    const { skills } = req.body;

    if (!skills || skills.length === 0) {
      return res.json({
        advice: "No skills found. Start by adding some skills first.",
      });
    }

    const skillText = skills
      .map(
        (s) => `${s.title} (${s.level}) - ${s.progress}%`
      )
      .join(", ");

    const prompt = `
You are a career mentor.
Here are my skills:
${skillText}

Give short advice:
1. Strengths
2. Weaknesses
3. What to learn next
`;

    const advice = await askOllama(prompt);

    res.json({ advice });
  } catch (error) {
    console.error("AI Skill Advice error:", error);
    res.status(500).json({ error: "AI advice failed" });
  }
});



/* ================= SERVER ================= */

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
