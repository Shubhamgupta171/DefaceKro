import React from 'react';
import { Globe } from 'lucide-react';

// You can change these image links to any external URL
const INDIA_FLAG_URL = "/india_flag.png"; 
const CYBER_HUB_URL = "https://i.pinimg.com/736x/f6/65/bf/f665bfb42f3ebae982c354225282d5f6.jpg";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="banner">
        <h1 className="banner-title">
          <img src="https://m.media-amazon.com/images/I/41DB6D1myoL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_ZJPHNwYW4gZm9yZWdyb3VuZD0iIzBGMTExMSIgZm9udD0iQW1hem9uRW1iZXIgNjYiPjQuMzwvc3Bhbj4=,60,875,420,420,0,0_PIRIOFOURANDHALF-medium-V2,TopLeft,190,885_ZJPHNwYW4gZm9yZWdyb3VuZD0iIzU2NTk1OSIgZm9udD0iQW1hem9uRW1iZXIgNjYiPig3KTwvc3Bhbj4=,650,875,420,420,0,0_QL100_.jpg" />
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
