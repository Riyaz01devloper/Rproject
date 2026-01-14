import { NavLink } from "react-router-dom"

function Sidebar({ isOpen }) {

  return (
    <aside
      className={`
        bg-slate-900 text-white
        min-h-screen
        w-64
        fixed md:static
        top-0 left-0
        transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
        transition-transform duration-300
        z-40
      `}
    >
      <div className="p-6 text-lg font-bold border-b border-slate-700">
        Menu
      </div>

      <nav className="flex flex-col gap-4 p-6 text-sm">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "hover:text-blue-400"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/api/skills"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "hover:text-blue-400"
          }
        >
          My Skills
        </NavLink>

        <NavLink
          to="/progress"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "hover:text-blue-400"
          }
        >
          Progress
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "hover:text-blue-400"
          }
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
