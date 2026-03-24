import React from 'react';
import { Globe } from 'lucide-react';

// You can change these image links to any external URL
const INDIA_FLAG_URL = "/india_flag.png"; 
const CYBER_HUB_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAGQOrL9FkIoR8PJfkYd__rsq21tSRlGNrA&s";
const MainContent = () => {
  return (
    <main className="main-content">
      <div className="banner">
        <h1 className="banner-title">
          <img src="https://m.media-amazon.com/images/I/41SvgCwV5bL._AC_UF1000,1000_QL80_.jpg" />
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
