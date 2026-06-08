import Skill from "../models/Skill.js"
// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
export const getSkills = async (req, res) =>{
    try{
        const skills=await Skill.find().sort({createdAt: -1})
        res.status(200).json(skills)
    }
        catch(error){
            res.status(500).json({message:error.message})

    }
}

// @desc    Add a new skill
// @route   POST /api/skills
// @access  Public
export const addSkills = async (req, res) =>{
    try{
        const {title,level} = req.body

        if(!title || !level){
            return res.status(400).json({message: "title and level are required"})
        }
        const skill = await Skill.create(
            {title,
            level,
            progres:0,
        
        })
        res.status(201).json(skill)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }

}

// @desc    Update skill progress
// @route   PUT /api/skills/:id
// @access  Public

export const updateSkillProgress = async (req, res) => {
    try{
        const{progress} = req.body

        const skill= await Skill.findById(req.params._id)

        if(!skill){
            return res.status(404).json({message: "Skill not found"})
        }
        skill.progress=progress 
        await skill.save()
        res.status(200).json(skill)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

 
// @desc    Delete a skill
// @route   DELETE /api/skills/:id
// @access  Public

export const DeleteSkill = async (req, res) => {
    try{
        const skill= await Skill.findById(req.params._id)
        if(!skill){
            return res.status(404).json({message:"skill not found"})
        }
        await skill.deleteOne()
        res.status(200).json({message:"skill deleted successfully"})

    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}





