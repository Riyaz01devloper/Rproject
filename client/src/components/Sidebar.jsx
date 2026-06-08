import { NavLink } from "react-router-dom"

function Sidebar({ isOpen,setIsOpen }) {

  return (
   <aside
  className={`
    fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 dark:text-white shadow-lg
    transform transition-transform duration-300 z-40

    ${isOpen ? "translate-x-0" : "-translate-x-full"}

    
  `}
>
      <div className="p-6 text-lg font-bold border-b border-slate-700">
        Menu
      </div>
     

      <nav className="flex flex-col gap-4 p-6 text-base">
        <NavLink
          to="/dashboard"
          onClick={() => setIsOpen(false)}

          className={({ isActive }) =>
            isActive ? "text-blue-400" : "hover:text-blue-400"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/skills"
          onClick={() => setIsOpen(false)}

          className={({ isActive }) =>
            isActive ? "text-blue-400" : "hover:text-blue-400"
          }
        >
          My Skills
        </NavLink>

        <NavLink
          to="/progress"
          onClick={() => setIsOpen(false)}

          className={({ isActive }) =>
            isActive ? "text-blue-400" : "hover:text-blue-400"
          }
        >
          Progress
        </NavLink>
        <NavLink
  to="/profile"
  onClick={() => setIsOpen(false)}

  className={({ isActive }) =>
    isActive ? "text-blue-400" : "hover:text-blue-400"
  }
>
  Profile
</NavLink>

        {/* <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "hover:text-blue-400"
          }
        >
          Settings
        </NavLink> */}
      </nav>
    </aside>
  )
}

export default Sidebar
