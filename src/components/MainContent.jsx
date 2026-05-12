import React from 'react';
import { ShieldAlert } from 'lucide-react'; // Changed the icon library

const CYBER_HUB_URL = "https://i.pinimg.com/474x/b0/c4/ec/b0c4ec8dc2f4830d6e14cbd411d5af61.jpg";

const MainContent = () => {
  return (
    <main className="defaced-layout"> {/* Changed class to trigger L1 drift */}
      <div className="hacked-banner" style={{background: 'black', color: 'red', padding: '50px', textAlign: 'center'}}>
        <ShieldAlert size={100} />
        <h1>SYSTEM COMPROMISED</h1>
        <p>This page has been structurally modified for security testing.</p>
      </div>

      <div className="banner">
        {/* Changed H1 to a DIV to trigger Tag Mismatch */}
        <div className="banner-title-modified">
          <img 
            src="https://w7.pngwing.com/pngs/818/770/png-transparent-us-department-of-the-army-hd-logo-thumbnail.png" 
            alt="modified"
          />
          EXCELLENCE REMOVED.
        </div>
      </div>

      <div className="content-card-container">
        <div className="content-card">
          {/* Removed the Globe icon and changed H2 to H3 */}
          <div className="content-card-header">
            <h3>HUB DISABLED</h3>
          </div>

          <p className="content-card-desc">
            SECURITY BREACH DEMONSTRATION. 
            The original structure has been shifted to verify the detector.
            {/* Added extra structural density */}
            <br />[ERROR_CODE_X091]
            <br />[NODE_FAIL_01]
          </p>

          <img 
            src={CYBER_HUB_URL} 
            alt="Compromised Hub" 
            className="card-image-distorted"
          />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
