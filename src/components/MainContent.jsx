import React from 'react';
import { Globe } from 'lucide-react';

// You can change these image links to any external URL
const INDIA_FLAG_URL = "/india_flag.png"; 
const CYBER_HUB_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFr88dQYuZ3Luv-SWQrBZAd8VXeJVI4Re09g&s";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="banner">
        <h1 className="banner-title">
          <img src="data:image/png;base64,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" />
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
