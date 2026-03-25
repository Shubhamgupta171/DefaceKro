import React from 'react';
import { Globe } from 'lucide-react';

// You can change these image links to any external URL
const INDIA_FLAG_URL = "/india_flag.png"; 
const CYBER_HUB_URL = "https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="banner">
        <h1 className="banner-title">
          <img 
            src="https://www.shutterstock.com/shutterstock/photos/1400262758/display_1500/stock-vector-pakistan-written-in-urdu-language-made-in-pakistan-vector-sign-1400262758.jpg" 
           
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
