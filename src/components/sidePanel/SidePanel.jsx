import React, {useEffect, useState} from 'react';
import {Box, Stack, TextField, Typography} from '@mui/material';
import styled from 'styled-components';
import Input from '../input/Input';
import useValuesStore from '../../stores/valuesStore';

const SidePanel = () => {
  const [inputValues, setInputValue] = useState({
    name: '',
    jobTitle: '',
    phoneNumber: '',
    email: '',
    logoLink: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setInputValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    setName(inputValues);
  }, [inputValues]);

  //   console.log('inputValues: ', inputValues);

  //   const {values} = useValuesStore((state) => state.values);

  const setName = useValuesStore((state) => state.setName);

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
              name="name"
              fullWidth
              variant="standard"
              label="Name"
              placeholder="Enter Your Name"
              onChange={(e) => handleChange(e)}
            ></Input>
          </InputBox>

          <InputBox>
            <Input
              name="jobTitle"
              fullWidth
              variant="standard"
              label="Job title"
              placeholder="Enter Your Job Title"
              onChange={(e) => handleChange(e)}
            ></Input>
          </InputBox>

          <InputBox>
            <TextField
              name="phoneNumber"
              fullWidth
              variant="standard"
              label="Phone Number"
              placeholder="Enter Your Phone Number"
              onChange={(e) => handleChange(e)}
            ></TextField>
          </InputBox>
          <InputBox>
            <TextField
              name="email"
              fullWidth
              variant="standard"
              label="Email"
              placeholder="Enter Your Email"
              onChange={(e) => handleChange(e)}
            ></TextField>
          </InputBox>

          <InputBox>
            <TextField
              name="logoLink"
              fullWidth
              variant="standard"
              label="Logo Link"
              placeholder="https://example.com/images"
              onChange={(e) => handleChange(e)}
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
