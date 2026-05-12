import React from 'react';

/**
 * MainContent - Defaced Version (Layer 1 Simulation)
 * Triggers: 
 * 1. Container Tag Shift (<main> -> <section>)
 * 2. Node Count Drift (+120 hidden elements)
 * 3. Tag Mapping Violation (<h2> -> <b>)
 * 4. Attribute Anomaly (className/ID changes)
 */
const MainContent = () => {
  return (
    <section className="broken-root" id="layer1-drift-container">
      {/* L1.1: STRUCTURAL SHIFT - Changed root tag from <main> to <section> */}
      
      <div className="hacked-hero-block" style={{ backgroundColor: '#000', color: '#ff0000', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '72px', fontWeight: '900', letterSpacing: '-2px', margin: '0' }}>
          PAGE DEFACED
        </h1>
        <p style={{ color: '#fff', fontSize: '1.2rem', marginTop: '10px', opacity: 0.8 }}>
          Structural Integrity has been compromised.
        </p>
      </div>

      {/* 
          L1.2: NODE COUNT DRIFT 
          Injecting 120 hidden nodes to trigger L1 'Node Count' anomaly detection.
          Most L1 detectors trigger when node count shifts by >10% or absolute >100.
      */}
      <div className="structural-noise-floor" aria-hidden="true" style={{ display: 'none' }}>
        {Array(120).fill(0).map((_, i) => (
          <span key={i} id={`drift-node-${i}`}>drift_anomaly_v1</span>
        ))}
      </div>

      <div className="hacked-body" style={{ padding: '40px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.1rem', color: '#333' }}>
          This content replaces the original professional banner and layout.
        </p>

        {/* 
            L1.3: TAG MAPPING VIOLATION 
            Original: <h2 className="status-title">System Status</h2>
            Hacked:   <b className="status-hack">...</b> 
            (Changes the semantic Importance Weighting of the element)
        */}
        <div className="footer-hack" style={{ marginTop: '80px', borderTop: '3px solid red', paddingTop: '20px' }}>
          <b style={{ fontSize: '28px', color: '#ff0000' }}>HUB STATUS: OFFLINE</b>
          <p style={{ fontSize: '14px', color: '#666' }}>L1 Detector: DOM_DRIFT_DETECTED</p>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
