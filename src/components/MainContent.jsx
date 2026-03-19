import React from 'react';
import { Globe } from 'lucide-react';

// You can change these image links to any external URL
const INDIA_FLAG_URL = "/india_flag.png"; 
const CYBER_HUB_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24w4LCnPuq9jeaPXRxIaXq-DU2NpqPOkU9w&s";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="banner">
        <h1 className="banner-title">
          <img src="https://imgs.search.brave.com/pJu28hHflkCnA55qX1WYvmunmBwBUBa35cyTVJ2wIdM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/MDYxNzE4OC9waG90/by9mbGFnLW9mLWNo/aW5hLXdpdGgtYS1n/cnVuZ2UtdGV4dHVy/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9dGZicnRlNTVD/U1BfbFJNWm1xR2tU/QUx3UENIUlpHVkpE/NFJyUlQwUGVDST0" alt="India Flag" />
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
