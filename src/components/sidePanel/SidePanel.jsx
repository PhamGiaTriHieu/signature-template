import React from 'react';
import {Box, Stack, TextField, Typography} from '@mui/material';
import styled from 'styled-components';
import Input from '../input/Input';

const SidePanel = () => {
  return (
    <SidePanelWrapper>
      <SidePanelContent>
        <Box mt={2}>
          <Typography sx={{fontSize: 26, fontWeight: 600, textAlign: 'center'}}>
            Enter Your Signature Details
          </Typography>
        </Box>
        <InputWrapper
          direction="column"
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          <InputBox>
            <Input
              fullWidth
              variant="standard"
              label="Name"
              placeholder="Enter Your Name"
            ></Input>
          </InputBox>

          <InputBox>
            <Input
              fullWidth
              variant="standard"
              label="Job title"
              placeholder="Enter Your Job Title"
            ></Input>
          </InputBox>

          <InputBox>
            <TextField
              fullWidth
              variant="standard"
              label="Phone Number"
              placeholder="Enter Your Phone Number"
            ></TextField>
          </InputBox>
          <InputBox>
            <TextField
              fullWidth
              variant="standard"
              label="Email"
              placeholder="Enter Your Email"
            ></TextField>
          </InputBox>
        </InputWrapper>
      </SidePanelContent>
    </SidePanelWrapper>
  );
};

export default SidePanel;

const SidePanelWrapper = styled(Box)`
  width: 100%;
  height: 100vh;
  /* background-color: #2e475d; */
`;

const SidePanelContent = styled(Box)`
  /* box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 8px; */
  color: #000;
`;

const InputWrapper = styled(Stack)`
  padding: 12px 30px;
`;

const InputBox = styled(Box)`
  margin-top: 10px;
  width: 100%;
`;
