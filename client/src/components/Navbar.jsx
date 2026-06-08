import { useState } from "react";
function Navbar({ onToggleSidebar }) {
const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 dark:text-white shadow px-4 py-3 flex items-center justify-between">
      
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className=" text-2xl font-bold z-50"
        >
          ☰
        </button>

        <h1 className="text-xl font-semibold">AI Tracker</h1>
      </div>
      <button
  onClick={() => {
    setDarkMode(!darkMode);

    document.documentElement.classList.toggle("dark");
  }}
  className="px-3 py-2 rounded-lg bg-gray-200"
>
  {darkMode ? "☀️" : "🌙"}
</button>

    </header>
  );
}

export default Navbar;
