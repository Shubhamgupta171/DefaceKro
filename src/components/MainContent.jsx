import React from 'react';

/**
 * MainContent - Mild Layer 1 Drift (Target: 0.3 - 0.49 INFO Verdict)
 * 
 * Adjustments to lower the score:
 * 1. Reduced Node Count: From 450 -> 75 (Decreases statistical drift).
 * 2. Original Root Tag: Restored <main> to match typical baseline structure.
 * 3. Semantic Consistency: Restored <h2> tags to reduce mapping violations.
 * 4. Attribute Stability: Using standard classes/IDs to minimize anomaly weighting.
 */
const MainContent = () => {
  return (
    // L1: RESTORED ROOT (Using <main> instead of <section> to lower drift)
    <main className="main-content" id="primary-content-area">
      
      <header className="page-header" style={{ padding: '20px', borderBottom: '1px solid #ddd' }}>
        <h1 style={{ fontSize: '24px' }}>System Administration</h1>
      </header>

      {/* 
          L1: REDUCED NODE COUNT DRIFT 
          Lowered from 450 nodes to 75 nodes. 
          This is a minor drift (~75% increase over a typical baseline), 
          which should push the L1 Raw Score down to the 45% - 55% range.
      */}
      <div className="minor-structural-drift" aria-hidden="true" style={{ opacity: 0, height: 0 }}>
        {Array.from({ length: 75 }).map((_, i) => (
          <span key={i} className="soft-drift-point">.</span>
        ))}
      </div>

      <div className="dashboard-layout" style={{ display: 'flex', gap: '20px', padding: '30px' }}>
        {/* 
            L1: RESTORED TAG MAPPING 
            Using <h2> as expected in the baseline instead of generic <b> tags.
        */}
        <section className="info-card" style={{ flex: 1, padding: '15px', border: '1px solid #eee' }}>
          <h2 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>Resource Usage</h2>
          <p style={{ color: '#666', fontSize: '14px' }}>
            CPU and Memory metrics are within normal operational parameters.
          </p>
        </section>

        <section className="info-card" style={{ flex: 1, padding: '15px', border: '1px solid #eee' }}>
          <h2 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>Security Status</h2>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Layer 1 structural validation is currently in 'Passive' mode.
          </p>
        </section>
      </div>

      <footer className="page-footer" style={{ marginTop: '20px', padding: '20px', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <div style={{ fontSize: '12px', color: '#888' }}>
          SESSION_REF: 9501ADE5 | CALIBRATION: MILD_DRIFT
        </div>
      </footer>
    </main>
  );
};

export default MainContent;
