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
          <a 
            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
            href="#work"
            onClick={() => handlePageChange('Work')}
            >Work</a>
        </li>
        <li className="nav-item">
          <a 
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            >Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Nav;