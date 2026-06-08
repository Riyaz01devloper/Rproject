import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import Skill from "../models/Skill.js";
import { gemini } from "../ai/gemini.js";

const router = express.Router();

// AI Command Center (without Gemini)
router.post("/command", protect, async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const text = message.toLowerCase().trim();

    // ADD SKILL
    if (text.startsWith("add ")) {
      const title = message.replace(/add/i, "").trim();

      const newSkill = await Skill.create({
        title,
        level: "Beginner",
        progress: 0,
        user: req.user._id,
      });

      return res.json({
        message: `${title} added successfully`,
        skill: newSkill,
      });
    }

    // DELETE SKILL
    if (text.startsWith("delete ")) {
      const title = message.replace(/delete/i, "").trim();

      const deletedSkill = await Skill.findOneAndDelete({
        title,
        user: req.user._id,
      });

      if (!deletedSkill) {
        return res.status(404).json({
          message: "Skill not found",
        });
      }

      return res.json({
        message: `${title} deleted successfully`,
      });
    }

    return res.status(400).json({
      message:
        'Use commands like "add python" or "delete react"',
    });

  } catch (error) {
    console.error("COMMAND ERROR:", error);

    res.status(500).json({
      error: "Command failed",
    });
  }
});
// Generate AI Engineer Roadmap
router.post("/roadmap", protect, async (req, res) => {
  try {
    const prompt = `
Create a detailed 6 month roadmap to become an AI Engineer.

Include:
- DSA
- Web Development
- Machine Learning
- Deep Learning
- AI Projects
- Resume Building
- Interview Preparation

Keep it practical and beginner friendly.
`;

    const roadmap = await gemini(prompt);

    res.json({ roadmap });

  } catch (error) {
    console.error("ROADMAP ERROR:", error);

    res.status(500).json({
      error: "Roadmap generation failed",
    });
  }
});

export default router;