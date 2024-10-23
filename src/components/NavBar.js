import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaInfoCircle, FaSort, FaLinkedin, FaCode, FaTerminal } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>O-Vision</h1>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <a href="#about" className="nav-link">
            <FaInfoCircle /> About
          </a>
        </li>
        <li className="nav-item">
          <a href="#algorithms" className="nav-link">
            <FaSort /> Algorithms
          </a>
        </li>
        <li className="nav-item">
          <a href="https://github.com/ailynux" target="_blank" rel="noopener noreferrer" className="nav-link">
            <FaGithub /> GitHub
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/ailyndiaz01" target="_blank" rel="noopener noreferrer" className="nav-link">
            <FaLinkedin /> LinkedIn
          </a>
        </li>
        <li className="nav-item">
          <a href="https://leetcode.com/ailynux" target="_blank" rel="noopener noreferrer" className="nav-link">
            <FaCode /> LeetCode
          </a>
        </li>
        <li className="nav-item">
          <a href="https://exercism.org/profiles/ailynux" target="_blank" rel="noopener noreferrer" className="nav-link">
            <FaTerminal /> Exercism
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
