import React from 'react';
import {Box, Modal, Typography} from '@mui/material';
import styled from 'styled-components';

const MDModal = (props) => {
  const {isOpen, onClose, title, description, width, ...rest} = props;
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContentStyled>
        {/* <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography> */}
        <Typography
          sx={{textAlign: 'center', fontWeight: 'bold'}}
          id="modal-modal-description"
        >
          {description}
        </Typography>
      </ModalContentStyled>
    </Modal>
  );
};

export default MDModal;

const ModalContentStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props.width ? props.width + 'px' : '300px')};
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 20px;
  border: none;
  border-radius: 8px;
`;
