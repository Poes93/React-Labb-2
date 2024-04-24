import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  padding: 20px;
  background: white;
  border-radius: 5px;
`;

const CloseButton = styled.button`
  padding: 5px 10px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
`;

function ErrorModal({ message, onClose }) {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalBackdrop>
  );
}

export default ErrorModal;
