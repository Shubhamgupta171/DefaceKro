import React from 'react';

/**
 * MainContent - Text Change Stress Test Version
 *
 * Focus:
 * - Replacing headlines
 * - Changing body text
 * - Modifying labels/buttons
 * - Rewriting large content blocks
 */

const MainContent = () => {
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
        {/* HEADLINE CHANGE */}
        <h5 style={{ fontSize: '3rem', marginBottom: '10px' }}>
          PLATFORM MAINTENANCE ACTIVE
        </h5>

        <h2 style={{ fontWeight: 'normal' }}>
         Hacker 
        </h2>
      </header>

      <main className="content-purge" style={{ padding: '30px' }}>

        {/* BODY TEXT CHANGES */}
      
// Add 10 dummy divs to change the node count
<div>
   {[...Array(10)].map((_, i) => <div key={i}>Extra Node</div>)}
</div>


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

          <p>
            Several backend services are being redeployed as part of
            a scheduled modernization initiative. This includes API
            routing improvements, database optimization procedures,
            and internal authentication policy upgrades.
          </p>

          <p>
            Users may experience temporary interruptions while
            synchronization tasks complete across distributed regions.
            We appreciate your patience while these updates are finalized.
          </p>
        </section>

        {/* MODIFIED FORM LABELS + BUTTONS */}
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

          <label
            htmlFor="adminKey"
            style={{ display: 'block', marginBottom: '10px' }}
          >
            Secure Verification Credential
          </label>

          <input
            id="adminKey"
            type="password"
            placeholder="Enter authorized verification credential"
            style={{
              padding: '12px',
              width: '100%',
              marginBottom: '20px',
            }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: '#ff4444',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              cursor: 'pointer',
            }}
          >
            Validate Administrative Session
          </button>
        </form>
      </main>

      {/* Structural filler */}
      <div
        className="structural-noise"
        aria-hidden="true"
        style={{ opacity: 0, height: 0 }}
      >
        {Array.from({ length: 400 }).map((_, i) => (
          <section key={i} className={`anomaly-block-v4-${i}`}>
            <span id={`drift-id-${i}`}>
              STRUCTURAL_ENTROPY_ACTIVE
            </span>
          </section>
        ))}
      </div>

      <footer
        className="footer-void"
        style={{
          textAlign: 'center',
          padding: '20px',
          borderTop: '4px solid #ff4444',
        }}
      >
        <b style={{ fontSize: '20px' }}>
          SYSTEM STATUS: MAINTENANCE MODE
        </b>
      </footer>
    </div>
  );
};

export default MainContent;
