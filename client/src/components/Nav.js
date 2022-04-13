import React from 'react';

const styles = {
  heading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#bdc3c7',
    minHeight: '12vh',
    fontSize: '2rem',
    color: '#424141'
  }
};

function Nav({ currentPage, handlePageChange }) {
  return(
    <nav style={styles.heading} className="navbar navbar-expand-lg navbar-light bg-light">
    <a 
      className={currentPage === 'Home' ? 'nav-link active name' : 'nav-link name'}
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