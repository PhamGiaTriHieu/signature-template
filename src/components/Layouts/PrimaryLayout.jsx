import {Box, Grid, Typography} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import MainPanel from '../mainPanel/MainPanel';

const PrimaryLayout = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={0.2}>
        <Grid item xs={3}>
          <TypographyStyled>xs</TypographyStyled>
        </Grid>
        <Grid item xs={9}>
          <TypographyStyled>xs=6</TypographyStyled>
          <MainPanel></MainPanel>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PrimaryLayout;

const TypographyStyled = styled(Typography)`
  border: 1px solid red;
`;
