import React from 'react';
import { Globe } from 'lucide-react';

// You can change these image links to any external URL
const INDIA_FLAG_URL = "/india_flag.png"; 
const CYBER_HUB_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMnNOWd0Hn7XHjfPf8sMTy5MB2snx41qc5tQ&s";

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
