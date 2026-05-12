import React from 'react';

/**
 * MainContent - Pure Layer 1 (Structural) Stress Test
 * 
 * Goal: Force a High L1 Raw Score while keeping L4 (Semantic) at 0%.
 * 
 * Structural Triggers:
 * 1. Node Count Anomaly: 1,500+ hidden elements (Maximum statistical drift).
 * 2. Tree Depth Violation: 4-level deep nesting to break Tree Edit Distance (TED).
 * 3. Tag Mapping Violation: Using non-semantic, nested <ul>/<li> structures.
 * 4. Content Neutrality: Zero "Hacked" or "Pwned" keywords to avoid L4 alerts.
 */
const MainContent = () => {
  return (
    <div className="system-update-container" id="structural-stress-root">
      {/* 
          L1.1: ROOT RE-PARENTING 
          Deeply nesting the entire content to shift the DOM depth indices.
          This significantly penalizes the structural hash.
      */}
      <div className="container-layer-alpha">
        <div className="container-layer-beta">
          <div className="container-layer-gamma">
            
            <header className="update-header" style={{ borderBottom: '1px solid #ccc', padding: '20px' }}>
              <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#444' }}>
                SYSTEM VALIDATION: ACTIVE
              </span>
            </header>

            {/* 
                L1.2: MASSIVE NODE COUNT DRIFT
                Adding 1,500 hidden elements to force the Node Count metric to its absolute limit.
                This will drive the Raw L1 Score toward 100% based on distribution density.
            */}
            <div className="node-matrix-noise" aria-hidden="true" style={{ visibility: 'hidden', height: 0 }}>
              {Array.from({ length: 1500 }).map((_, i) => (
                <ul key={i} style={{ margin: 0, padding: 0 }}>
                  <li id={`node-idx-${i}`}>
                    <div className="node-wrapper">
                      <span className="point-0">.</span>
                      <span className="point-1">.</span>
                      <div className="sub-point" />
                    </div>
                  </li>
                </ul>
              ))}
            </div>

            {/* 
                L1.3: TAG MAPPING VIOLATION
                Replacing standard semantic paragraphs with complex nested spans 
                to break the expected tag mapping in the L1 detector.
            */}
            <section className="content-zone" style={{ padding: '40px' }}>
              <div className="data-row">
                <span className="key" style={{ fontWeight: '600' }}>Process_Mode: </span>
                <span className="val">Structural_Only_Test</span>
              </div>
              <div className="data-row">
                <span className="key" style={{ fontWeight: '600' }}>Entropy_Level: </span>
                <span className="val">Maximum_Drift</span>
              </div>
              <div className="data-row" style={{ marginTop: '20px' }}>
                <span className="description">
                  The system is currently evaluating structural integrity metrics 
                  without semantic classification triggers.
                </span>
              </div>
            </section>

            <footer className="neutral-footer" style={{ marginTop: '50px', padding: '20px', backgroundColor: '#f9f9f9' }}>
              <div className="ref-id">TX_ID: 9501ADE5-738A</div>
              <div className="status-label">L1_SCORE_TARGET: MAX</div>
            </footer>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
