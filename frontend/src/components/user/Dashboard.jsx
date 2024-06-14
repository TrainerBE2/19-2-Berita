import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content">
          <h1>Welcome to the Admin Portal</h1>
          {/* Tambahkan konten dashboard lainnya di sini */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;