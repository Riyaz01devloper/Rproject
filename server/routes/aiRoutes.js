import express from "express";
import askOllama from "../ai/ollama.js";
import Skill from "../models/Skill.js";

const router = express.Router();
// router.post("/command", async (req,res)=>{
//     try{
//         const{message} =req.body;

//         if(!message) {
//             return res.status(400).json({error:"Message is required"});

//         }
//         const prompt= `
//         You are an AI assistant for a skill tracker app.

// User message:
// "${message}"

// Decide intent and respond ONLY in JSON.

// Possible actions:
// 1. ADD_SKILL (title, level)
// 2. DELETE_SKILL (title)

// Example:
// {
//   "action": "ADD_SKILL",
//   "title": "React",
//   "level": "Beginner"
// }
// `;
// const aiResponse = await askOllama(prompt);

// const command = JSON.parse(aiResponse);

// // add skill
// if(command.action=="ADD SKILL"){
//     const newSkill = await Skill.create({
//         title:command.title,
//         level: command.level|| "Begginer",
//         progress:0,
//     });
// return res.json({
//     message:"Skill added by AI",
//     skill:newSkill,
// });

// }
// if (command.action === "DELETE_SKILL"){
//     const deleted = await Skill.findOneAndDelete({
//         title:command.title,
//     });
//     return res.json({
//         message:"Skill deleted by AI",
//         deleted,
//     });
// }
// res.status(400).json({
//     error:"Unknown action"
// });

//     }
//     catch(error){
//         console.error("AI commmand error:", error);
//         res.status(500).json({error:"AI command failed"});
//     }
// });
// router.post("/command", async (req, res) => {
//   console.log("BODY RECEIVED:", req.body); // 👈 ADD THIS

//   try {
//     const { message } = req.body;

//     if (!message) {
//       return res.status(400).json({ error: "Message is required" });
//     }

//     res.json({ message: "Message received correctly" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "AI command failed" });
//   }
// });


router.post("/command", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const prompt = `
You are an AI assistant for a skill tracker app.

User message:
"${message}"

Decide intent and respond ONLY in JSON.

Possible actions:
1. ADD_SKILL (title, level)
2. DELETE_SKILL (title)

Example responses:
{
  "action": "ADD_SKILL",
  "title": "React",
  "level": "Beginner"
}

OR

{
  "action": "DELETE_SKILL",
  "title": "JavaScript"
}
`;

    const aiText = await askOllama(prompt);

    console.log("AI RAW RESPONSE:", aiText);

    const command = JSON.parse(aiText);

    // ADD SKILL
    if (command.action === "ADD_SKILL") {
      const newSkill = await Skill.create({
        title: command.title,
        level: command.level || "Beginner",
        progress: 0,
      });

      return res.json({
        message: "Skill added by AI",
        skill: newSkill,
      });
    }

    // DELETE SKILL
    if (command.action === "DELETE_SKILL") {
      await Skill.findOneAndDelete({ title: command.title });

      return res.json({
        message: `Skill "${command.title}" deleted by AI`,
      });
    }

    res.status(400).json({ error: "Unknown AI action" });

  } catch (error) {
    console.error("AI COMMAND ERROR:", error);
    res.status(500).json({ error: "AI command failed" });
  }
});

export default router;
