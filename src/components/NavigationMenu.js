import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import pdf from '../assets/Software_Engineer_Aarzoo_Chennan (2).pdf'
import './NavigationMenu.css';
import { useState } from 'react';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
};

function NavigationMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);
    // Handle the toggle of navbar
    const toggleNav = () => setIsNavOpen(!isNavOpen);

    // Handle link click and collapse the navbar
    const handleLinkClick = () => setIsNavOpen(false);
  

  return (
    <Navbar expand='md' style={{ backgroundColor: 'transparent'}} expanded={isNavOpen}>
      <Navbar.Toggle className='hamburger'aria-controls="basic-navbar-nav" onClick={toggleNav}/>
      <Container fluid>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
          <Nav>
          <Nav.Link className='nav-link' onClick={() => {handleLinkClick(); scrollToSection('home')}}>Home</Nav.Link>
          <Nav.Link className='nav-link' onClick={() => {handleLinkClick();scrollToSection('about-me')}}>About Me</Nav.Link>
          <Nav.Link className='nav-link' onClick={() => {handleLinkClick(); scrollToSection('experiences')}}>Experiences</Nav.Link>
          <Nav.Link className='nav-link' onClick={() => {handleLinkClick();scrollToSection('projects')}}>Projects</Nav.Link>
          <Nav.Link className='nav-link' onClick={() => {handleLinkClick();scrollToSection('contact')}}>Contact</Nav.Link>
          <Nav.Link className='nav-link' href={pdf} target='_blank'>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationMenu;