import { useState, useEffect } from "react";
import SkillCard from "../components/Skillcard";
import AddSkill from "../components/AddSkill";
import ProgressChart from "../components/ProgressChart";
import OverallProgressPie from "../components/OverallProgressPie";
import API from "../services/api";  



function Dashboard({ skills, setSkills }) {
  const [loading, setLoading] = useState(true);
  const [aiAdvice,setAiAdvice] = useState("");
  const [aiLoading, setAiLoading]= useState(false);

  const[aiCommand , setAiCommand] = useState("");
  const[aiResult,setAiResult] = useState("");



  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await API.get("/api/skills");
        setSkills(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, [setSkills]);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading skills...
      </div>
    );
  }

  // ✅ called from AddSkill
  const addSkill = (newSkill) => {
    setSkills((prev) => [...prev, newSkill]);
  };

  const removeSkill = async (id) => {
    try {
      await API.delete(`/api/skills/${id}`);
      setSkills((prev) => prev.filter((skill) => skill._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const getAiAdvice = async () => {
    try {
      setAiLoading(true);
      setAiAdvice("");

      const res = await API.post("/api/ai/skill-advice", {
        skills,
      });
      setAiAdvice(res.data.advice);
    } catch (error) {
      console.error("AI advice error:", error);
      setAiAdvice("AI could not generate advice right now.");
    } finally {
      setAiLoading(false);
    }
  };

  const sendAiCommand = async () => {
  try {
    if (!aiCommand.trim()) return;

    setAiResult("Thinking...");

    const res = await API.post("/api/ai/command", {
      message: aiCommand,
    });

    setAiResult(res.data.message || "Done");
    if (res.data.skill) {
      setSkills(prev => [...prev, res.data.skill]);
    }

    setAiCommand("");
  } catch (error) {
    console.error(error);
    setAiResult("AI failed to process command");
  }
};

  



  const updateProgress = async (id, newProgress) =>  {
    try {
      const res = await API.put(`/api/skills/${id}`, {
        progress: newProgress,
      });

      setSkills((prev) =>
        prev.map((skill) =>
          skill._id === id ? res.data : skill
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const overallProgress =
    skills.length === 0
      ? 0
      : Math.round(
          skills.reduce((sum, s) => sum + s.progress, 0) /
            skills.length
        );

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-gray-100">
      <main className="p-4 md:p-8 max-w-7xl w-full">

        {/* Overall Progress */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Overall Progress
          </h3>
          <p className="text-3xl font-bold text-blue-600">
            {overallProgress}%
          </p>
          <div className="mt-4 w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-500 rounded-full transition-all"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <OverallProgressPie value={overallProgress} />
          <ProgressChart skills={skills} />
        </div>

        <AddSkill onAdd={addSkill} /> 

        
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold"> Ai skill advisor  </h2>
<button 
onClick={getAiAdvice}
disabled = {aiLoading}
className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"

>
  {aiLoading ? "Thinking..." : "Get AI advice"}
</button>

{aiAdvice && ( 
  <div className="mt-4 p-4 bg-gray-100 rounded-lg text-gray-800 whitespace-pre-line"> 
    {aiAdvice}
     </div>
)}

          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm mb-6">
          <h2 className="text-xl font-bold mb-2"> Ai command center
            <input 
            value={aiCommand} 
            onChange={(e) => setAiCommand(e.target.value)}
            placeholder="e.g. Add React skill or Delete JavaScript"
            className="w-full border rounded-lg px-4 py-2 mb-3"
            />
            <button 
            onClick={sendAiCommand} 
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            
            >Run AI Command</button>
            {aiResult && (
              <p className="mt-3 text-gray-700">{aiResult}</p>
            )}
          </h2>

        </div>





        <h2 className="text-2xl font-bold mb-6">My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.length === 0 && (
            <p className="text-gray-500">No skills added yet.</p>
          )}

          {skills.map((skill) => (
            <SkillCard
              key={skill._id}
              title={skill.title}
              level={skill.level}
              progress={skill.progress}
              onDelete={() => removeSkill(skill._id)}
              onIncrease={() =>
                updateProgress(
                  skill._id,
                  Math.min(skill.progress + 5, 100)
                )
              }
              onDecrease={() =>
                updateProgress(
                  skill._id,
                  Math.max(skill.progress - 5, 0)
                )
              }
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

