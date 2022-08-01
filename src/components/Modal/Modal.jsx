import { useEffect } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { createPortal } from "react-dom";

const ModalBackdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.5);
`;
const ModalContent = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 370px;
width: 100%;
padding: ${p => p.theme.space[0]}px;
background-color: ${p => p.theme.colors.white};
border-radius: ${p => p.theme.radii.small};
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({children, onClose}) => {
useEffect(() => {
  window.addEventListener('keydown', closeModal);
  return () => window.removeEventListener('keydown', closeModal);
});

const closeModal = ({code, target, currentTarget}) => {
  if(code === 'Escape' || target === currentTarget){
    onClose();
  };
};

return createPortal(
  <ModalBackdrop onClick={closeModal}>
    <ModalContent>{children}</ModalContent>
  </ModalBackdrop>, modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
