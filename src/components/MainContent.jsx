import React from 'react';

/**
 * MainContent - Cleaned Version
 * Removed:
 * - All script injection references
 * - Any malicious external resource references
 */
const MainContent = () => {
  return (
    <div className="defaced-root" id="layer1-pwned-zone">
      {/* SEO-related tags kept commented out */}
      {/* 
      <link rel="canonical" href="https://example.com" />
      <meta name="robots" content="index, follow" />
      */}

      <header
        className="hacked-header"
        style={{
          backgroundColor: 'black',
          color: 'red',
          padding: '50px',
        }}
      >
        <h1 style={{ fontSize: '3rem' }}>SYSTEM OFFLINE</h1>
      </header>

      <div className="content-purge" style={{ padding: '30px' }}>
        <p>Your structural integrity has been totally compromised.</p>

        {/* Safe local form */}
        <form
          action="/verify"
          method="POST"
          style={{
            margin: '40px 0',
            border: '2px dashed red',
            padding: '20px',
          }}
        >
          <h3>Security Verification</h3>

          <input
            type="password"
            placeholder="Enter Admin Pin"
            style={{ padding: '10px' }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
            }}
          >
            Verify Identity
          </button>
        </form>
      </div>

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
          borderTop: '5px solid red',
        }}
      >
        <b style={{ fontSize: '20px' }}>
          LAYER 1: TOTAL_TAKEOVER
        </b>
      </footer>
    </div>
  );
};

export default MainContent;
