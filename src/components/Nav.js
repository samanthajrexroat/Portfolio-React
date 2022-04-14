import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a 
      className={currentPage === 'Home' ? 'nav-link active name' : 'nav-link name'}
      href="#home"
      onClick={() => handlePageChange('Home')}
      >Samantha J. Rexroat
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
        
          <a 
            className={currentPage === 'About' ? 'nav-item nav-link active' : 'nav-item nav-link'}
            href="#about"
            onClick={() => handlePageChange('About')}
            >About
          </a>
        
        <li className="nav-item">
          <a 
            className={currentPage === 'Work' ? 'nav-item nav-link active' : 'nav-item nav-link'}
            href="#work"
            onClick={() => handlePageChange('Work')}
            >Work</a>
        </li>
        <li className="nav-item">
          <a 
            className={currentPage === 'Contact' ? 'nav-item nav-link active' : 'nav-item nav-link'} 
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            >Contact</a>
        </li>
      </div>
    </div>
  </nav>
  );
}

export default Nav;