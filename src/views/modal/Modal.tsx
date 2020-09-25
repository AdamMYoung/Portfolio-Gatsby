import React from 'react';
import { Button, Modal as BSModal } from 'react-bootstrap';
import styled from 'styled-components';

type Props = {
  title: string;
  onClose?: () => void;
};

const StyledModal = styled(BSModal)`
  .modal-content,
  .btn {
    border-radius: 16px !important;
  }
`;

export const Modal: React.FC<Props> = (props) => {
  const { title, onClose, children } = props;

  return (
    <StyledModal centered show onHide={onClose}>
      <BSModal.Header closeButton>
        {' '}
        <BSModal.Title>{title}</BSModal.Title>
      </BSModal.Header>

      <BSModal.Body>{children}</BSModal.Body>
      <BSModal.Footer>
        <Button onClick={onClose}>Close</Button>
      </BSModal.Footer>
    </StyledModal>
  );
};
