import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a 
      className={currentPage === 'Home' ? 'nav-brand active' : 'nav-link'}
      href="#home"
      onClick={() => handlePageChange('Home')}
      >Samantha J. Rexroat</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item active">
          <a 
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            href="#about"
            onClick={() => handlePageChange('About')}
            >About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Nav;