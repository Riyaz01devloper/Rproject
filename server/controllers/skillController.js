import Skill from "../models/Skill.js";

// GET ALL SKILLS
export const getSkills = async (req, res) => {
  try {
const skills = await Skill.find({
  user: req.user._id,
}).sort({ createdAt: -1 });
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD SKILL
export const addSkills = async (req, res) => {
  try {
    const { title, level } = req.body;

    if (!title || !level) {
      return res
        .status(400)
        .json({ message: "Title and level are required" });
    }

    const skill = await Skill.create({
      title,
      level,
      progress: 0,
      user:req.user._id,
    });

    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE PROGRESS
export const updateSkillProgress = async (req, res) => {
  try {
    const { progress } = req.body;
    console.log("PARAMS ID:", req.params.id);
console.log("USER ID:", req.user._id);


  const skill = await Skill.findOne({
  _id: req.params.id,
  user: req.user._id,
});
    if (!skill) {
      return res.status(404).json({
        message: "Skill not found",
      });
    }

    skill.progress = progress;

    await skill.save();

    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE SKILL
export const deleteSkill = async (req, res) => {
  try {
const skill = await Skill.findOne({
  _id: req.params.id,
  user: req.user._id,
});
    if (!skill) {
      return res.status(404).json({
        message: "Skill not found",
      });
    }

    await skill.deleteOne();

    res.status(200).json({
      message: "Skill deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};