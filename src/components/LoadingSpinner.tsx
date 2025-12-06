import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #FF5722;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  color: #212121;
  margin-top: 1rem;
  font-size: 1.2rem;
  text-align: center;
`;

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <div>
        <Spinner />
        <LoadingText>Loading...</LoadingText>
      </div>
    </SpinnerContainer>
  );
};

export default LoadingSpinner; 