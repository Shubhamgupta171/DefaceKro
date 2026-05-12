import React from 'react';

/**
 * MainContent - Calibrated Layer 1 Drift (Target: 0.3 - 0.49 INFO)
 * 
 * Strategy to hit the "INFO" range:
 * 1. Node Count Calibration: 220 nodes (Mid-point between 'Clean' and 'Suspicious' tests).
 * 2. Structural Hash Mismatch: Changing the root tag to <div> to ensure a TED penalty.
 * 3. Attribute Anomaly: Introducing a unique ID 'l1-calibration-zone' to trigger attribute drift.
 * 4. Tag Mapping: Keeping <h1> but nesting the main body in a <section> wrapper.
 */
const MainContent = () => {
  return (
    // L1: STRUCTURAL SHIFT - Using <div> to differ from previous <main>/<section> tests
    <div className="main-wrapper-info" id="l1-calibration-zone">
      
      <header className="page-header" style={{ padding: '25px', borderBottom: '1px solid #e0e0e0' }}>
        <h1 style={{ fontSize: '26px', color: '#333' }}>System Intelligence Dashboard</h1>
      </header>

      {/* 
          CALIBRATED NODE COUNT DRIFT 
          Using 220 nodes. This is a moderate structural load.
          It should push the L1 Raw Score above the 80% mark, 
          which (if the fusion weight is stable) should land the Composite between 0.3 and 0.49.
      */}
      <div className="l1-drift-buffer" aria-hidden="true" style={{ opacity: 0, height: 0 }}>
        {Array.from({ length: 220 }).map((_, i) => (
          <span key={i} className="drift-segment">calibration_data_v3</span>
        ))}
      </div>

      <section className="layout-body" style={{ padding: '35px' }}>
        <div className="info-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          
          <div className="data-card" style={{ padding: '20px', backgroundColor: '#fafafa', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>L1 Metric Analysis</h2>
            <p style={{ color: '#555' }}>
              Targeting structural drift parity for "INFO" level alerts.
            </p>
          </div>

          <div className="data-card" style={{ padding: '20px', backgroundColor: '#fafafa', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Fusion Calibration</h2>
            <p style={{ color: '#555' }}>
              Verifying weight contributions for L1-only detection cycles.
            </p>
          </div>

        </div>
      </section>

      <footer className="calibration-footer" style={{ marginTop: '30px', padding: '20px', borderTop: '1px solid #eee', textAlign: 'center' }}>
        <div style={{ fontSize: '12px', color: '#aaa', letterSpacing: '1px' }}>
          ALERT_TARGET: INFO_0.3_0.49 | SIG: V3_CALIBRATED
        </div>
      </footer>
    </div>
  );
};

export default MainContent;
