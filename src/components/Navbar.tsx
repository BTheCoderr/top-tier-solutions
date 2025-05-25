import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

const Nav = styled.nav`
  background-color: #212121;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #FF5722;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #FF5722;
    
    &:after {
      width: 100%;
    }
  }
`;

const ContactButton = styled(Link)`
  background-color: #FF5722;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid #FF5722;

  &:hover {
    background-color: transparent;
    color: #FF5722;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #FF5722;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #212121;
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    animation: slideDown 0.3s ease;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Nav>
      <Logo />
      
      <MobileMenuButton 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </MobileMenuButton>

      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/service-area">Service Area</NavLink>
        <NavLink to="/book">Book Now</NavLink>
        <ContactButton to="/contact">Contact Us</ContactButton>
      </NavLinks>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
        <NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
        <NavLink to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</NavLink>
        <NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink>
        <NavLink to="/service-area" onClick={() => setIsMobileMenuOpen(false)}>Service Area</NavLink>
        <NavLink to="/book" onClick={() => setIsMobileMenuOpen(false)}>Book Now</NavLink>
        <ContactButton to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</ContactButton>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar; 