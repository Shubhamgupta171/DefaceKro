import React from 'react';
import { Skull } from 'lucide-react'; // Changed icon

const Sidebar = () => {
  return (
    <div className="modified-sidebar-flat"> {/* Changed from <aside> */}
      <div className="hacked-logo">
        <Skull size={50} color="red" />
        <span>HACKED</span>
      </div>
      
      {/* Structural Shift: Navigation links removed, flat buttons added */}
      <nav className="flat-nav">
        <button>X</button>
        <button>X</button>
        <button>X</button>
      </nav>

      {/* Massive change: Removed iframe and replaced with structural noise */}
      <div className="noise-container">
        {Array(50).fill(0).map((_, i) => (
          <span key={i} className="dot">.</span>
        ))}
      </div>

      <div className="sidebar-footer-new">
        <div className="alert-red">
          CRITICAL STRUCTURAL FAILURE
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
