import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
  margin-right: 10px;
`;

const LogoSubtext = styled.span`
  color: #FF5722;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Logo = () => {
  return (
    <LogoContainer to="/">
      <LogoImage src="/images/tts-logo.png" alt="Top Tier Solutions Logo" />
      <LogoSubtext>Fire Prevention & Clean Air</LogoSubtext>
    </LogoContainer>
  );
};

export default Logo; 