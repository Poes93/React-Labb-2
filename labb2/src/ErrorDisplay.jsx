import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.p`
  color: red;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10vh; 
  width: 100%;
`;


function ErrorDisplay({ message }) {
  return <ErrorMessage>{message}</ErrorMessage>;
}

export default ErrorDisplay;
