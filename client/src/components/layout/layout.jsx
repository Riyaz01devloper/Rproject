import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import API from "../../services/api";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await API.get("/api/skills");
        setSkills(res.data || []);
      } catch (err) {
        console.error(err);
        setSkills([]);
      }
    };

    fetchSkills();
  }, []);

  const addSkill = (skill) => {
    setSkills((prev) => [...prev, skill]);
  };

  const removeSkill = (id) => {
    setSkills((prev) =>
      prev.filter((skill) => skill._id !== id)
    );
  };

  const increaseProgress = (id) => {
    setSkills((prev) =>
      prev.map((skill) =>
        skill._id === id
          ? {
              ...skill,
              progress: Math.min(
                skill.progress + 5,
                100
              ),
            }
          : skill
      )
    );
  };

  const decreaseProgress = (id) => {
    setSkills((prev) =>
      prev.map((skill) =>
        skill._id === id
          ? {
              ...skill,
              progress: Math.max(
                skill.progress - 5,
                0
              ),
            }
          : skill
      )
    );
  };

  const safeSkills = Array.isArray(skills)
    ? skills
    : [];

  const overallProgress =
    safeSkills.length === 0
      ? 0
      : Math.round(
          safeSkills.reduce(
            (sum, s) => sum + (s.progress || 0),
            0
          ) / safeSkills.length
        );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar
        onToggleSidebar={() =>
          setIsSidebarOpen((prev) => !prev)
        }
      />

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

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