import express from 'express'
import{
    getSkills,
    addSkills,
    updateSkillProgress,
    DeleteSkill

} from '../controllers/skillController.js'

const router = express.Router()

// get all skills 
router.get("/", getSkills)

// add a new skill
router.post("/", addSkills)

// update skill progress
router.put("/:_id", updateSkillProgress)

// delete a skill
router.delete("/:_id", DeleteSkill)

export default router


