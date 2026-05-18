import React from "react";

/**
 * 🛡️ Sidebar Component & L4 Defacement Test Suite (Matching Target Screenshot UI)
 * Implements `.logo-container`, `.sidebar-nav`, `.video-container`, `.icon-grid`,
 * and `.sidebar-bottom` precisely as specified in the UI design system.
 */
const Sidebar = () => {
  return (
    <aside className="sidebar select-none">
      {/* 1. Logo Container */}
      <div className="logo-container">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold flex items-center justify-center mr-2.5 shadow-md">
          ⚡
        </div>
        <span className="logo-text">ApexCloud</span>
      </div>

      {/* 2. Sidebar Navigation */}
      <div className="sidebar-nav mt-3">
        <a href="#home" className="sidebar-nav-item active">
          <span className="sidebar-nav-icon">📊</span>
          <span>Dashboard Overview</span>
        </a>
        <a href="#workloads" className="sidebar-nav-item">
          <span className="sidebar-nav-icon">⚡</span>
          <span>Compute Workloads</span>
        </a>
        <a href="#security" className="sidebar-nav-item">
          <span className="sidebar-nav-icon">🛡️</span>
          <span>Security Sensors</span>
        </a>
        <a href="#audit" className="sidebar-nav-item">
          <span className="sidebar-nav-icon">📜</span>
          <span>WORM Evidence</span>
        </a>
      </div>

      {/* 3. L4 Defacement Access Table & Heading (SYSTEM UP) */}
      <div className="flat-sidebar-hacked my-6 px-5 font-mono">
        <center className="mb-3 bg-red-500/10 py-1.5 rounded-xl border border-red-500/20 shadow-inner">
          <h1 style={{ color: "red", fontSize: "1.1rem", fontWeight: 800 }} className="tracking-widest animate-pulse">
            SYSTEM UP
          </h1>
        </center>
        <table border={1} style={{ width: "100%", color: "white", background: "#090d16", fontSize: "0.75rem" }} className="rounded-xl overflow-hidden shadow-lg border border-slate-800 text-center">
          <tbody className="divide-y divide-slate-800/80 font-semibold tracking-wide">
            <tr className="hover:bg-slate-900/50 transition-colors"><td className="p-2 border-l-4 border-emerald-500">ACCESS Accepted</td></tr>
            <tr className="hover:bg-slate-900/50 transition-colors"><td className="p-2 border-l-4 border-red-500 text-red-400">ACCESS Rejected</td></tr>
            <tr className="hover:bg-slate-900/50 transition-colors"><td className="p-2 border-l-4 border-amber-500 text-amber-400">ACCESS Not avopdo</td></tr>
            <tr className="hover:bg-slate-900/50 bg-red-950/30 text-red-500 font-extrabold"><td className="p-2 border-l-4 border-red-600 animate-pulse">ACCESS DENIED</td></tr>
          </tbody>
        </table>
      </div>

      {/* 4. Video Media Container */}
      <div className="video-container">
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=80" 
          className="thumbnail" 
          alt="Cluster Feed" 
        />
        <div className="video-overlay">
          <div className="video-author-logo flex items-center justify-center font-bold text-[10px] text-slate-950">⚡</div>
          <span className="video-title">Node Stream</span>
          <div className="play-button">▶</div>
        </div>
      </div>

      {/* 5. Icon Grid */}
      <div className="icon-grid mt-4">
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80" alt="Server 1" />
        <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=150&auto=format&fit=crop&q=80" alt="Server 2" />
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=150&auto=format&fit=crop&q=80" alt="Server 3" />
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&auto=format&fit=crop&q=80" alt="Server 4" />
      </div>

      {/* ==================== LAYER 4 TEST CASES ==================== */}
      {/* Uncomment ONE of the below div blocks at a time to test L4   */}

      {/* 1. Trigger: defacement_manifesto_detected */}
      {/*
      <div style={{ display: "block", visibility: "hidden", height: 0 }}>
        we have taken control this site has been seized your security means nothing message to the world we are legion we do not forgive government corruption operation liberated we have taken control this site has been seized
      </div>
      */}

      {/* 2. Trigger: hacktivist_defacement */}
      {/*
      <div style={{ display: "block", visibility: "hidden", height: 0 }}>
        hacked by you have been hacked 0wned by your security is a joke we are anonymous pwned by expect us
      </div>
      */}

      {/* 3. Trigger: offensive_content */}
      {/*
      <div style={{ display: "block", visibility: "hidden", height: 0 }}>
        death to kill all gas the nuke the infidel scum racial cleansing eat shit death to kill all
      </div>
      */}

      {/* 4. Trigger: seo_spam_match (Tier 3) */}
      {/*
      <div style={{ display: "block", visibility: "hidden", height: 0 }}>
        buy cialis cheap viagra pills online without prescription online casino betting bonus crypto trading double your bitcoin
      </div>
      */}

      {/* 5. Trigger: Bot Score (Impacts classifier but no hard trigger by itself) */}
      {/*
      <div style={{ display: "block", visibility: "hidden", height: 0 }}>
        under construction coming soon check back later site is temporarily unavailable
      </div>
      */}

      {/* 6. Sidebar Bottom Status Alert */}
      <div className="sidebar-bottom mt-auto">
        <div className="alert-title">
          <span className="mr-1.5 font-bold">⚠️</span>
          <span>Shield L4 Sensor</span>
        </div>
        <div className="alert-message">Real-time NLP classification & DOM obfuscation check active.</div>
      </div>
    </aside>
  );
};

export default Sidebar;
