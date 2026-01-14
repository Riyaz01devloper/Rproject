function Navbar({ onToggleSidebar }) {
  return (
    <div className="h-14 bg-slate-800 text-white flex items-center px-4 gap-4">
      {/* Hamburger button */}
      <button
        onClick={onToggleSidebar}
        className="md:hidden focus:outline-none"
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>

      <h1 className="font-semibold text-lg">
        AI Tracker & Guide
      </h1>
    </div>
  )
}

export default Navbar
