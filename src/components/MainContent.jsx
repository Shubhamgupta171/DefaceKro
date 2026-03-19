import React from 'react';
import { Globe } from 'lucide-react';

// You can change these image links to any external URL
const INDIA_FLAG_URL = "/india_flag.png"; 
const CYBER_HUB_URL = "https://imgs.search.brave.com/tHpcxSlbRUSDss35c0shaorFVQGOUJIEWmgMVo9Ay9I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY2LzJj/LzkyLzY2MmM5Mjc2/MWVhMGFjYzg3NGJh/NmU2OTYxYmJiMTE3/LmpwZw";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="banner">
        <h1 className="banner-title">
          <img src="https://imgs.search.brave.com/gstCiwpweKOyeH2uz0Z62ehcJv1tn5JGHso9yR3YpdE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmlt/Z3VyLmNvbS9tOUlF/ZU5GLnBuZw" alt="India Flag" />
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
