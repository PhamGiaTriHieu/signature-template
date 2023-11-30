import {TextField} from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  return (
    <InputStyled
      fullWidth
      variant="standard"
      label="Name"
      placeholder="Enter Your Name"
      {...props}
    ></InputStyled>
  );
};

export default Input;

const InputStyled = styled(TextField)``;
