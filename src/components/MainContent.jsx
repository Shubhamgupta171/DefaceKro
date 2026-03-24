import React from 'react';
import { Globe } from 'lucide-react';

// You can change these image links to any external URL
const INDIA_FLAG_URL = "/india_flag.png"; 
const CYBER_HUB_URL = "https://i5.walmartimages.com/asr/d3a1dbd3-c4f8-4f95-9d8f-70df605bfe86.67ba3094cc27b211eb4d8e480af276b3.jpeg";
const MainContent = () => {
  return (
    <main className="main-content">
      <div className="banner">
        <h1 className="banner-title">
          <img src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" />
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
