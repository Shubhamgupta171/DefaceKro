import React from 'react';
import { Globe } from 'lucide-react';

// You can change these image links to any external URL
const INDIA_FLAG_URL = "/india_flag.png"; 
const CYBER_HUB_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/960px-Flag_of_Iran.svg.png";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="banner">
        <h1 className="banner-title">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0fgs9GDuLEU_Dc0zcI8KN88xgTkIfVPP6A&s" 
           
          />
          Empowering the Nation through Excellence and Integrity.
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
