import React from 'react';
import { User, Info, Folder, BarChart2, Play, AlertTriangle } from 'lucide-react';

// You can change these image links to any external URL
const LOGO_URL = "/logo.png";
const VIDEO_THUMB_URL = "/https://www.youtube.com/shorts/7j94LhdKTHk";

// Array of 8 distinct icon image URLs
const SIDEBAR_ICONS = [
  "https://t4.ftcdn.net/jpg/17/32/25/51/360_F_1732255115_V9H5mDKLIgARIdDfMQh2htqUAZiimX2M.jpg",
  "https://imagesvs.oneindia.com/img/2014/09/14-hindi-600.jpg",
  "https://www.optilingo.com/wp-content/uploads/2020/09/690232_OptiLingoHindiAlphabet_v2_Opt2_041520-1-1002x1536-1.png",
  "https://i.pinimg.com/236x/7c/79/3b/7c793bbe17e05d18fae1fade80471d75.jpg",
  "https://www.shutterstock.com/image-vector/kala-kaushal-logo-indian-art-260nw-2229468481.jpg",
 "https://media.istockphoto.com/id/104499123/photo/page-from-old-arabic-book.jpg?s=612x612&w=0&k=20&c=-kTwytLSUw-sbtV0EuRNVTJ4HFtC6DMyF2C_j0_t_xg=", // Replace with distinct URL #6
  "https://blogs.transparent.com/arabic/wp-content/uploads/sites/12/2018/11/arabic-learning-350x213.jpg", // Replace with distinct URL #7
  "https://preview.redd.it/22ohmw79k8ig1.jpeg?width=140&height=140&crop=1%3A1%2Csmart&auto=webp&s=fd8d74414754a10dd1768e9a4c9fac80c515cf1f", // Replace with distinct URL #8

 

 
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
