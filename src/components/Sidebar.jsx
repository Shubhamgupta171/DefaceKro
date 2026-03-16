import React from 'react';
import { User, Info, Folder, BarChart2, Play, AlertTriangle } from 'lucide-react';

// You can change these image links to any external URL
const LOGO_URL = "/logo.png";
const VIDEO_THUMB_URL = "/https://www.youtube.com/shorts/7j94LhdKTHk";

// Array of 8 distinct icon image URLs
const SIDEBAR_ICONS = [
  "/small_icon.png",
  "/small_icon.png",
  "/small_icon.png",
  "/small_icon.png",
  "/small_icon.png",
  "/small_icon.png", // Replace with distinct URL #6
  "/small_icon.png", // Replace with distinct URL #7
  "/small_icon.png", // Replace with distinct URL #8
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Gov Portal" />
        <span className="logo-text">GOV PORTAL</span>
      </div>
      
      <div className="sidebar-nav">
        <a className="sidebar-nav-item active">
          <User className="sidebar-nav-icon" size={18} color="#0f766e" />
          Hello
        </a>
        {/* <a className="sidebar-nav-item">
          <Info className="sidebar-nav-icon" size={18} color="#64748b" />
          Hello
        </a> */}
        <a className="sidebar-nav-item">
          <Folder className="sidebar-nav-icon" size={18} color="#f59e0b" />
          Hello
        </a>
        <a className="sidebar-nav-item">
          <BarChart2 className="sidebar-nav-icon" size={18} color="#10b981" />
          API Hello
        </a>
      </div>

      <div className="video-container" style={{ paddingBottom: '125%', height: 0, position: 'relative' }}>
        <iframe
          src="https://www.youtube.com/embed/7j94LhdKTHk?autoplay=1&mute=1&loop=1&playlist=7j94LhdKTHk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        ></iframe>
      </div>

      <div className="icon-grid">
        {SIDEBAR_ICONS.map((imgUrl, i) => (
          <img key={i} src={imgUrl} alt={`Icon ${i+1}`} />
        ))}
      </div>

      <div className="sidebar-bottom">
        <div className="alert-title">
          <AlertTriangle size={14} />
          ALERT
        </div>
        <p className="alert-message">Unprotected zone audit in progress.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
