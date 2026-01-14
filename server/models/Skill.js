import mongoose from "mongoose"
const skillSchema = new mongoose.Schema(
    {
        title: {
            type:String,
            required:true,
            trim:true,
        },
        level: {
            type:String,
            required:true,
        enum:['Beginner', 'Intermediate', 'Advanced'],
        },
        progress:{
            type:Number,
            default:0,
            min:0,
            max:100,

        },

},
{timestamps:true,}
)
const Skill = mongoose.model("Skill", skillSchema)
export default Skill
