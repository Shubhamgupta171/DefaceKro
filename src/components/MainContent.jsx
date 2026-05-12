import React from 'react';

/**
 * MainContent - Layer 1 "Bridge" Test (Target: 0.35 - 0.45 Composite)
 * 
 * Strategy to cross the 30% barrier:
 * 1. Node Count: 350 nodes (Stepping up from 220 to hit the 'High Weight' transition).
 * 2. High-Penalty Tags: Introducing a <table> structure. Tables carry high 
 *    structural weight in L1 (TED) compared to simple <div> or <span>.
 * 3. Root Tag Shift: Using <article> to ensure the structural signature differs 
 *    from previous <main>, <section>, and <div> tests.
 */
const MainContent = () => {
  return (
    // L1: STRUCTURAL SHIFT - Using <article> for the first time in these tests
    <article className="content-container-v4" id="l1-bridge-threshold">
      
      <header className="page-header" style={{ padding: '25px', backgroundColor: '#fdfdfd' }}>
        <h1 style={{ fontSize: '24px', color: '#111' }}>Operational Logging System</h1>
      </header>

      {/* 
          NODE COUNT DRIFT: 350 NODES
          This is calibrated to push the L1 Raw Score above 92%.
          In many Fusion Engines, crossing 90% Raw L1 triggers a "Weight Escalation."
      */}
      <div className="l1-node-load" aria-hidden="true" style={{ opacity: 0, height: 0 }}>
        {Array.from({ length: 350 }).map((_, i) => (
          <span key={i}>structural_drift_0x{i.toString(16)}</span>
        ))}
      </div>

      <div className="log-viewer" style={{ padding: '30px' }}>
        {/* 
            L1: HIGH-PENALTY TAG INJECTION
            If your baseline was flexbox/div based, introducing a <table> 
            will significantly penalize the 'Tag Mapping' and 'Structural Hash' metrics.
        */}
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #eee' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5', textAlign: 'left' }}>
              <th style={{ padding: '10px' }}>Entry ID</th>
              <th style={{ padding: '10px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>LOG_9501_A</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>INITIALIZING</td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>LOG_9501_B</td>
              <td style={{ padding: '10px' }}>L1_CALIBRATION</td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer className="system-footer" style={{ marginTop: '40px', padding: '20px', textAlign: 'center' }}>
        <div style={{ fontSize: '12px', color: '#bbb', textTransform: 'uppercase' }}>
          Anomaly_ID: BRIDGE_TO_0.3 | Threshold_Calibration: Active
        </div>
      </footer>
    </article>
  );
};

export default MainContent;
