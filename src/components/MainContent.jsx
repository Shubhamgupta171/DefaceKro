import React from 'react';

/**
 * MainContent - Layer 1 "INFO" Test (Target: 0.3 - 0.49 Composite)
 * 
 * Strategy:
 * 1. Moderate Node Count Drift: 450 nodes (Significant but not a 'bomb').
 * 2. Medium Structural Shift: Changed root from <main> to <section>.
 * 3. Tag Mapping Violation: Converting semantic headings (H2) into Bold (B) tags.
 * 4. Content Neutrality: No L4 keywords to ensure L4 score remains at 0.
 */
const MainContent = () => {
  return (
    <section className="content-frame-v2" id="l1-info-trigger-root">
      {/* 
          L1: CONTAINER SHIFT 
          Changed from <main> to <section> and changed the root ID.
          This registers as a "Moderate Structural Anomaly."
      */}
      
      <div className="header-zone" style={{ padding: '30px', borderBottom: '2px solid #eee' }}>
        <h1 style={{ color: '#333', fontSize: '2rem' }}>Operational Dashboard</h1>
      </div>

      {/* 
          L1: MODERATE NODE COUNT DRIFT 
          Injecting 450 nodes. 
          This creates a ~4x increase in node density compared to a standard baseline.
          It is designed to land the L1 Raw Score in the "Suspicious" 0.7 - 0.85 range.
      */}
      <div className="structural-noise-buffer" aria-hidden="true" style={{ display: 'none' }}>
        {Array.from({ length: 450 }).map((_, i) => (
          <div key={i} className={`drift-node-${i}`}>
            <span />
          </div>
        ))}
      </div>

      <div className="dashboard-grid" style={{ padding: '40px' }}>
        {/* 
            L1: TAG MAPPING VIOLATION
            Changing original H2 (Heading) tags to <b> (Bold) tags.
            This shifts the Importance Weighting of these nodes in the L1 detector.
        */}
        <div className="status-card" style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f5f5f5' }}>
          <b style={{ fontSize: '1.2rem', display: 'block', marginBottom: '8px' }}>
            System Integrity: Verified
          </b>
          <p>Layer 1 Structural monitoring is currently active on this node.</p>
        </div>

        <div className="status-card" style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
          <b style={{ fontSize: '1.2rem', display: 'block', marginBottom: '8px' }}>
            Alert Threshold: Info
          </b>
          <p>Calibration for Composite Score range [0.3 - 0.49] in progress.</p>
        </div>
      </div>

      <footer className="footer-v2" style={{ padding: '20px', textAlign: 'right', fontSize: '12px', color: '#999' }}>
        <span>REFERENCE_ID: SCAN_INFO_L1_049</span>
      </footer>
    </section>
  );
};

export default MainContent;
