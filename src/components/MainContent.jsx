import React, { useEffect } from 'react';

/**
 * MainContent - SEO Poisoning Test Version
 */
const MainContent = () => {
  
  // Test: SEO Poisoning - Canonical Change
  useEffect(() => {
    // 1. Create the canonical link element
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = "https://different-site.com"; // The "malicious" canonical URL
    link.id = "test-canonical-link";
    
    // 2. Append it to the <head>
    document.head.appendChild(link);
    
    // Cleanup: Remove it when the component unmounts
    return () => {
      const existingLink = document.getElementById("test-canonical-link");
      if (existingLink) document.head.removeChild(existingLink);
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

      <main style={{ padding: '30px' }}>
        <section style={{ background: '#1b1b1b', color: '#f5f5f5', padding: '25px', borderRadius: '8px' }}>
          <h3>Infrastructure Update Notice</h3>
          <p>This page is now injecting a malicious canonical link into the head.</p>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '20px', borderTop: '4px solid #ff4444' }}>
        <b>SYSTEM STATUS: MAINTENANCE MODE</b>
      </footer>
    </div>
  );
};

export default MainContent;
