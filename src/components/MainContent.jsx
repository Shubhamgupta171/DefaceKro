import React from 'react';

const MainContent = () => {
  return (
    <section className="broken-root"> {/* Changed tag from <main> to <section> */}
      {/* PROFESSIONAL BANNER REMOVED - Major Structural Shift */}
      
      <div className="hacked-text-block">
        <span style={{fontSize: '50px', color: 'red'}}>PAGE HIJACKED</span>
        <p>Your structural integrity has been bypassed.</p>
      </div>

      {/* Structural Noise: Adding 100 empty spans will trigger L1 "Node Count" drift */}
      <div className="noise-floor">
        {Array(100).fill(0).map((_, i) => (
          <span key={i} style={{opacity: 0}}>.</span>
        ))}
      </div>

      {/* Changed H2 to a generic <b> tag */}
      <div className="footer-hack">
        <b>HUB STATUS: OFFLINE</b>
      </div>
    </section>
  );
};

export default MainContent;
