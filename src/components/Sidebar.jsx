import React from "react";

/**
 * 🛡️ Sidebar Component & L4 Defacement Test Suite
 * Fixed on the left from top-0 to bottom-0 (width: 20rem / 320px).
 * Contains structural access status tables and L4 semantic hidden payloads.
 */
const Sidebar = () => {
  return (
    <aside className="flat-sidebar-hacked fixed top-0 left-0 bottom-0 w-80 bg-slate-950 border-r border-slate-800 p-6 overflow-y-auto z-50 flex flex-col space-y-6 shadow-2xl">
      {/* Brand Header */}
      <div className="flex items-center space-x-3 pb-6 border-b border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/30">
          ⚡
        </div>
        <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          ApexCloud
        </span>
      </div>

      {/* System Status Heading Widget */}
      <div className="p-4 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl text-center">
        <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500 mb-1 block">Network Status</span>
        <h1 className="text-2xl font-black tracking-wider text-red-500 animate-pulse font-mono">
          SYSTEM UP
        </h1>
      </div>

      {/* Access Permission Table */}
      <div className="rounded-2xl border border-slate-800 overflow-hidden shadow-lg bg-black">
        <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between font-mono text-xs text-slate-400 uppercase font-bold">
          <span>Module Access Logs</span>
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
        </div>
        <table className="w-full text-slate-200 text-sm font-mono text-left">
          <tbody className="divide-y divide-slate-800/60">
            <tr className="hover:bg-slate-900/50 transition-colors">
              <td className="p-3 border-l-4 border-emerald-500">ACCESS Accepted</td>
            </tr>
            <tr className="hover:bg-slate-900/50 transition-colors">
              <td className="p-3 border-l-4 border-red-500 text-red-400 font-bold">ACCESS Rejected</td>
            </tr>
            <tr className="hover:bg-slate-900/50 transition-colors">
              <td className="p-3 border-l-4 border-amber-500 text-amber-400">ACCESS Not avopdo</td>
            </tr>
            <tr className="hover:bg-slate-900/50 transition-colors bg-red-950/20">
              <td className="p-3 border-l-4 border-red-600 text-red-500 font-extrabold animate-pulse">ACCESS DENIED</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* System Navigation Links */}
      <div className="space-y-2 pt-2 border-t border-slate-800 text-sm font-medium text-slate-400">
        <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-500">Core Services</div>
        <a href="#dash" className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-slate-900 hover:text-white transition-colors">
          <span>📊</span><span>Analytics Engine</span>
        </a>
        <a href="#waf" className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-slate-900 hover:text-white transition-colors">
          <span>🛡️</span><span>WAF Firewall</span>
        </a>
        <a href="#logs" className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-slate-900 hover:text-white transition-colors">
          <span>📜</span><span>Audit Trails (WORM)</span>
        </a>
        <a href="#settings" className="flex items-center space-x-3 px-3 py-2.5 rounded-xl hover:bg-slate-900 hover:text-white transition-colors">
          <span>⚙️</span><span>Tenant Configuration</span>
        </a>
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

      <div className="mt-auto pt-4 border-t border-slate-800 text-center text-xs text-slate-600">
        <span>CyberShield Sensor L4 v2.1</span>
      </div>
    </aside>
  );
};

export default Sidebar;
