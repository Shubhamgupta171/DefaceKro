import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import './index.css';

function App() {
  return (
    <>
      <Sidebar />
      <div className="main-layout">
        <Navbar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
