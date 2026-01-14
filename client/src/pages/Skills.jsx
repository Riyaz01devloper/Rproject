import React from "react";
import SkillCard from "../components/Skillcard";

function Skills({ skills }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Skills</h2>

      {!skills || skills.length === 0 ? (
        <p className="text-gray-500">No skills added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard
              key={skill._id}
              title={skill.title}
              level={skill.level}
              progress={skill.progress}
              readOnly={true}   // 🔒 read only
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Skills;

