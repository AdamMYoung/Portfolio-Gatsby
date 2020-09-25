import React from 'react';
import { Button, Modal as BSModal } from 'react-bootstrap';
import styled from 'styled-components';

type Props = {
  title: string;
  customFooter?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
};

const StyledModal = styled(BSModal)`
  .modal-content,
  .btn {
    border-radius: 16px !important;
  }
`;

export const Modal = (props: Props) => {
  const { title, customFooter, onClose, children } = props;

  return (
    <StyledModal centered show onHide={onClose}>
      <BSModal.Header closeButton>
        <BSModal.Title>{title}</BSModal.Title>
      </BSModal.Header>

      <BSModal.Body>{children}</BSModal.Body>
      {!customFooter && (
        <BSModal.Footer>
          <Button onClick={onClose}>Close</Button>
        </BSModal.Footer>
      )}
    </StyledModal>
  );
};

Modal.Footer = BSModal.Footer;
