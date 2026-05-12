import React from 'react';

/**
 * MainContent - Layer 1 "Structural Annihilation" (Target: DEFACED Verdict > 0.7)
 * 
 * Strategy for Absolute Defacement:
 * 1. Node Count Bomb: 1,200 nodes (Forces L1 Raw Score to 1.0 / 100%).
 * 2. High-Priority Foreign Elements: Injecting <iframe> and <details> tags. 
 *    L1 detectors treat these as high-certainty malicious injections.
 * 3. Total Hierarchy Destruction: Removing all original semantic tags (H1, H2, Footer) 
 *    and replacing them with a deeply nested, non-semantic tree.
 * 4. Root Re-parenting: Using <aside> as the root to maximize the 'Container Shift' penalty.
 */
const MainContent = () => {
  return (
    // L1: TOTAL ROOT SHIFT - Using <aside> instead of <main>/<section>/<div>
    <aside className="anomaly-root-void" id="layer1-annihilation-target">
      
      {/* 
          L1: HIGH-CERTAINTY INJECTION (IFRAME) 
          Iframes are often weighted at 5x a normal tag in structural comparison.
      */}
      <div className="iframe-wrapper" style={{ border: '5px solid red', padding: '10px' }}>
        <iframe 
          title="anomaly-payload" 
          src="about:blank" 
          style={{ width: '100%', height: '400px', backgroundColor: '#000' }} 
        />
      </div>

      {/* 
          NODE COUNT BOMB: 1,200 NODES 
          This creates such a massive statistical skew that the "Node Count Drift" 
          reaches 100% certainty, bypassing all "Clean" filters.
      */}
      <div className="structural-noise-bomb" aria-hidden="true" style={{ opacity: 0, height: 0 }}>
        {Array.from({ length: 1200 }).map((_, i) => (
          <details key={i} open>
            <summary>Drift_Annihilation_Point_{i}</summary>
            <div className="nested-anomaly">
              <span>0x{i.toString(16)}</span>
              <span />
            </div>
          </details>
        ))}
      </div>

      <section className="content-purge" style={{ padding: '50px', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'red' }}>
          ZONE_REPLACEMENT_COMPLETE
        </div>
        <p style={{ fontSize: '1.2rem' }}>
          Original structural intelligence baseline has been 100% overwritten.
        </p>
      </section>

      {/* 
          L1: ATTRIBUTE ANARCHY
          Using completely randomized IDs to ensure zero similarity with the baseline attributes.
      */}
      <div id="attr-purge-999" className="class-annihilation-x">
        <canvas id="drift-canvas-payload" width="100" height="100" />
      </div>
    </aside>
  );
};

export default MainContent;
