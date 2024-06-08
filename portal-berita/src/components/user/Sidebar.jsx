import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href=""><div className="text-hover">Dashboard</div></a>
      <a href=""><div className="text-hover">All Unit</div></a>
      <a href=""><div className="text-hover">Transaction</div></a>
      <a href=""><div className="text-hover">Feedback</div></a>
      <a href=""><div className="text-hover">Others</div></a>
      <a href=""><div className="text-hover">Add Unit</div></a>
      <a href=""><div className="text-hover">Promo</div></a>
      <a href=""><div className="text-hover">Accounts</div></a>
    </div>
  );
};

export default Sidebar;