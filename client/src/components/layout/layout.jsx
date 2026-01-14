import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import API from "../../services/api";


function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ✅ FIX 1: skills must start as an ARRAY
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await API.get("/api/skills");
        setSkills(res.data || []); // ✅ safety fallback
      } catch (err) {
        console.error(err);
        setSkills([]); // ✅ never undefined
      }
    };
    fetchSkills();
  }, []);

  // ✅ FIX 2: safe add
  const addSkill = (skill) => {
    setSkills((prev) => [...prev, skill]);
  };

  // ✅ FIX 3: safe delete
  const removeSkill = (id) => {
    setSkills((prev) => prev.filter((skill) => skill._id !== id));
  };

  // ✅ FIX 4: progress handlers
  const increaseProgress = (id) => {
    setSkills((prev) =>
      prev.map((skill) =>
        skill._id === id
          ? { ...skill, progress: Math.min(skill.progress + 5, 100) }
          : skill
      )
    );
  };

  const decreaseProgress = (id) => {
    setSkills((prev) =>
      prev.map((skill) =>
        skill._id === id
          ? { ...skill, progress: Math.max(skill.progress - 5, 0) }
          : skill
      )
    );
  };

  // ✅ FIX 5: correct overallProgress logic
  const overallProgress =
    skills.length === 0
      ? 0
      : Math.round(
          skills.reduce((sum, s) => sum + s.progress, 0) / skills.length
        );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onToggleSidebar={() => setIsSidebarOpen((p) => !p)} />

      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />

        <main className="flex-1 p-4 md:p-8 max-w-7xl">
          <Outlet
            context={{
              skills,
              addSkill,
              removeSkill,
              increaseProgress,
              decreaseProgress,
              overallProgress,
            }}
          />
        </main>
      </div>
    </div>
  );
}

export default Layout;
