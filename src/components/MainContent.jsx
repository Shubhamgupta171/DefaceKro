import React from 'react';
import { Globe } from 'lucide-react';

// You can change these image links to any external URL
const INDIA_FLAG_URL = "/india_flag.png"; 
const CYBER_HUB_URL = "https://tiimg.tistatic.com/fp/1/008/041/indian-national-flag-20-30-inch-836.jpg";
const MainContent = () => {
  return (
    <main className="main-content">
      <div className="banner">
        <h1 className="banner-title">
          <img src="https://media.licdn.com/dms/image/v2/D4D0BAQHeyIe7AmdogQ/company-logo_200_200/company-logo_200_200/0/1736493834696/aaizel_international_technologies_pvt_ltd_logo?e=2147483647&v=beta&t=UfGPx4irkMFvK5a9rD5OAZpelJQODcxaCMZsEVBEIBk";
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
