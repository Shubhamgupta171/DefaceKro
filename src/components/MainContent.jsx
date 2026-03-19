import React from 'react';
import { Globe } from 'lucide-react';

// You can change these image links to any external URL
const INDIA_FLAG_URL = "/india_flag.png"; 
const CYBER_HUB_URL = "https://www.shutterstock.com/image-vector/ashok-pillar-symbol-icon-black-260nw-2422191035.jpg";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="banner">
        <h1 className="banner-title">
          <img src="https://s3.dualstack.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/cyber-logos/logos-20251111T062751Z-1-001/logos/CIRCULAAR/Cyber%20Technology%20Circle.png" alt="India Flag" />
          Ministry of Defence
        </h1>
        <p className="banner-subtitle">
          Empowering the Nation through Excellence and Integrity.
        </p>
      </div>

      <div className="content-card-container">
        <div className="content-card">
          <div className="content-card-header">
            <Globe />
            <h2>Ministry of Defence Digital Hub</h2>
          </div>
          <p className="content-card-desc">
            Welcome to the <strong>WDDMAS Security Demonstration Environment</strong>. This highly structured portal serves as a target for vulnerability assessment and security training.
          </p>
          <img 
            src={CYBER_HUB_URL} 
            alt="Cyber Security Circuit Hub" 
            className="card-image"
          />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
