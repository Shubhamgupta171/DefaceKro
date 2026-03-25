import React from 'react';
import { Globe } from 'lucide-react';

// You can change these image links to any external URL
const INDIA_FLAG_URL = "/india_flag.png"; 
const CYBER_HUB_URL = "https://i.pinimg.com/474x/b0/c4/ec/b0c4ec8dc2f4830d6e14cbd411d5af61.jpg";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="banner">
        <h1 className="banner-title">
          <img 
            src="https://w7.pngwing.com/pngs/818/770/png-transparent-us-department-of-the-army-hd-logo-thumbnail.png" 
           
          />
          Empowering Nation through Excellence.
        </h1>
      </div>

      <div className="content-card-container">
        <div className="content-card">
          <div className="content-card-header">
            <Globe />
            <h2>Ministry of Defence Digital Hub</h2>
          </div>

          <p className="content-card-desc">
            Welcome to the <strong>WDDMAS Security Demonstration Environment</strong>. 
            This highly structured portal serves as a target for vulnerability 
            assessment and security training.
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
