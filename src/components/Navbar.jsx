import React from "react";

/**
 * 🛡️ Navbar Component
 * Designed to reside inside `<div className="main-layout">`.
 * Uses `sticky top-0` to remain fixed at the top of the main content area
 * without overlapping the left Sidebar.
 */
const Navbar = () => {
  return (
    <nav className="top-navbar sticky top-0 h-16 z-40 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800 flex items-center justify-between px-8 transition-all">
      <div className="flex items-center space-x-4">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          Main Console
        </span>
      </div>

      <ul className="flex items-center space-x-8 font-semibold text-sm text-slate-300 tracking-wide">
        <li>
          <a href="#home" className="hover:text-indigo-400 transition-colors py-2 border-b-2 border-transparent hover:border-indigo-500">
            HOME
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-indigo-400 transition-colors py-2 border-b-2 border-transparent hover:border-indigo-500">
            ABOUT ME
          </a>
        </li>
        <li>
          <a href="#admin" className="hover:text-indigo-400 transition-colors py-2 border-b-2 border-transparent hover:border-indigo-500">
            ADMIN Panel
          </a>
        </li>
        <li>
          <a href="#api" className="hover:text-indigo-400 transition-colors py-2 border-b-2 border-transparent hover:border-indigo-500">
            API Status
          </a>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        <a 
          href="#register" 
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 font-bold text-white text-sm shadow-lg shadow-indigo-600/30 hover:opacity-95 transition-all"
        >
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
