
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Skills from "./pages/Skills";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";

function App() {
  const [skills, setSkills] = useState([]);

  const deleteSkill = (skillId) => {
    setSkills(skills.filter((skill) => skill._id !== skillId));
  };
  // const increaseProgress = (skillId) => {
  //   setSkills(
  //     skills.map((skill) =>
  //       skill._id === skillId ? { ...skill, progress: skill.progress + 1 } : skill
  //     )
  //   );
  // };

  // const decreaseProgress = (skillId) => {
  //   setSkills(
  //     skills.map((skill) =>
  //       skill._id === skillId ? { ...skill, progress: skill.progress - 1 } : skill
  //     )
  //   );
  // };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
         <Route index element={<Navigate to="dashboard" />} /> 
        <Route 
         path="dashboard" element = { <Dashboard
         skills={skills}
       setSkills={setSkills} 
          /> } 
          /> 
       <Route
  path="/api/skills"
  element={
    <Skills
      skills={skills}
      onDelete={deleteSkill}
       setSkills={setSkills} 
      // onIncrease={increaseProgress}
      // onDecrease={decreaseProgress}

    />
  }
/>

        <Route path="progress" element={<Progress />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;

