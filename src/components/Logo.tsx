import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/tts-logo.png';

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 70px;
  width: auto;
  object-fit: contain;
`;

const Logo = () => {
  return (
    <LogoContainer to="/">
      <LogoImage src={logo} alt="Top Tier Solutions - Fire Prevention & Clean Air" />
    </LogoContainer>
  );
};

export default Logo; 