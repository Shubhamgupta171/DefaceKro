import React from 'react';

const Sidebar = () => {
  return (
    <div className="flat-sidebar-hacked"> 
      <center>
        <h1 style={{color: 'red'}}>SYSTEM UP</h1>
      </center>

      <table border="1" style={{width: '100%', color: 'white', background: 'black'}}>
        <tbody>
          <tr><td>ACCESS  Accepted</td></tr>
          <tr><td>ACCESS Rejected</td></tr>
          <tr><td>ACCESS Not avopdo</td></tr>
          <tr><td>ACCESS DENIED</td></tr>
        </tbody>
      </table>

      {/* ==================== LAYER 4 TEST CASES ==================== */}
      {/* Uncomment ONE of the below div blocks at a time to test L4   */}

      {/* 1. Trigger: defacement_manifesto_detected */}
      {/* 
      <div style={{ display: 'block', visibility: 'hidden', height: 0 }}>
        we have taken control this site has been seized your security means nothing message to the world we are legion we do not forgive government corruption operation liberated we have taken control this site has been seized
      </div> 
      */}

      {/* 2. Trigger: hacktivist_defacement */}
      {/* 
      <div style={{ display: 'block', visibility: 'hidden', height: 0 }}>
        hacked by you have been hacked 0wned by your security is a joke we are anonymous pwned by expect us
      </div> 
      */}

      {/* 3. Trigger: offensive_content */}
      {/* 
      <div style={{ display: 'block', visibility: 'hidden', height: 0 }}>
        death to kill all gas the nuke the infidel scum racial cleansing eat shit death to kill all
      </div> 
      */}

      {/* 4. Trigger: seo_spam_match (Tier 3) */}
      {/* 
      <div style={{ display: 'block', visibility: 'hidden', height: 0 }}>
        buy cialis cheap viagra pills online without prescription online casino betting bonus crypto trading double your bitcoin
      </div> 
      */}

      {/* 5. Trigger: Bot Score (Impacts classifier but no hard trigger by itself) */}
      {/* 
      <div style={{ display: 'block', visibility: 'hidden', height: 0 }}>
        under construction coming soon check back later site is temporarily unavailable
      </div> 
      */}

    </div>
  );
};

export default Sidebar;
