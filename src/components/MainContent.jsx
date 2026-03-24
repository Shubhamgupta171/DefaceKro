import React from 'react';
import { Globe } from 'lucide-react';

// You can change these image links to any external URL
const INDIA_FLAG_URL = "/india_flag.png"; 
const CYBER_HUB_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZTY94F4jqIuNIV-5EF0Za6zRDVA_1aPtQqsrAaSCveSoIUNXEY72ax9_VP7W3rJXerstnpR4wOLclvk0c-QISHH1VLOWeQqFPoVTzA&s=10";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="banner">
        <h1 className="banner-title">
          <img 
            src="https://i.pinimg.com/736x/f6/65/bf/f665bfb42f3ebae982c354225282d5f6.jpg" 
           
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
