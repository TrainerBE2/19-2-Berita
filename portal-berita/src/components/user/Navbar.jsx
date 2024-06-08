import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href=""><div className="navbar-hover">All Unit</div></a>
      <a href=""><div className="navbar-hover">ID Unit</div></a>
      <a href=""><div className="navbar-hover">Nama Unit</div></a>
      <a href=""><div className="navbar-hover">Category</div></a>
      <a href=""><div className="navbar-hover">Photo</div></a>
      <a href=""><div className="navbar-hover">Action</div></a>
    </div>
  );
};

export default Navbar;