function Navbar({ onToggleSidebar }) {
  return (
    <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
      
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="md:hidden text-2xl font-bold z-50"
        >
          ☰
        </button>

        <h1 className="text-xl font-semibold">AI Tracker</h1>
      </div>

    </header>
  );
}

export default Navbar;
