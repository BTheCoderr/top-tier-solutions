import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
`;

const LogoContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

const LogoText = styled.span`
  color: #FF5722;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const LogoSubtext = styled.span`
  color: #FF5722;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  transition: color 0.3s ease;

  &:hover {
    color: #FF5722;
  }
`;

const ContactButton = styled(Link)`
  background-color: #FF5722;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #F4511E;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

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
  }
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Nav>
      <LogoContainer to="/">
        <LogoText>TTS</LogoText>
        <LogoSubtext>Fire Prevention & Clean Air</LogoSubtext>
      </LogoContainer>
      
      <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </MobileMenuButton>

      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <ContactButton to="/contact">Contact Us</ContactButton>
      </NavLinks>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <ContactButton to="/contact">Contact Us</ContactButton>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar; 