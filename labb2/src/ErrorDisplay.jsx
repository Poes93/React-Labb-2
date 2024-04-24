import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.p`
  color: red;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10vh; // Full view height to ensure centering works over the full page
  width: 100%; // Full width
`;


function ErrorDisplay({ message }) {
  return <ErrorMessage>{message}</ErrorMessage>;
}

export default ErrorDisplay;
