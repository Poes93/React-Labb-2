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
  z-index: 999;
`;

const ModalContent = styled.div`
  padding: 20px;
  background: white;
  border-radius: 5px;
  z-index: 1000;
`;

const CloseButton = styled.button`
  padding: 5px 10px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
`;

// Utilizing a more explicit event handling approach for clarity
function ErrorModal({ message, onClose }) {
  // Stop the event from propagating to the ModalBackdrop when ModalContent is clicked
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  // Close the modal only if the ModalBackdrop is clicked
  const handleCloseClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <ModalBackdrop onClick={handleCloseClick}>
      <ModalContent onClick={handleContentClick}>
        <p>{message}</p>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalBackdrop>
  );
}

export default ErrorModal;
