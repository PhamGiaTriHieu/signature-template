import React from 'react';
import Table from '../Table/Table';
import {Box, Button} from '@mui/material';
import styled from 'styled-components';

const MainPanel = () => {
  return (
    <TableWrapperStyled>
      <TableContentStyled>
        <Table></Table>
      </TableContentStyled>
      <ButtonWrapper>
        <Button>Click to copy signature template</Button>
      </ButtonWrapper>
    </TableWrapperStyled>
  );
};

export default MainPanel;

const TableWrapperStyled = styled(Box)`
  height: 100vh;
  position: relative;
  background: hsla(176, 78%, 57%, 0.6);

  background: linear-gradient(
    225deg,
    hsla(176, 78%, 57%, 1) 0%,
    hsla(236, 64%, 63%, 1) 100%
  );

  background: -moz-linear-gradient(
    225deg,
    hsla(176, 78%, 57%, 1) 0%,
    hsla(236, 64%, 63%, 1) 100%
  );

  background: -webkit-linear-gradient(
    225deg,
    hsla(176, 78%, 57%, 1) 0%,
    hsla(236, 64%, 63%, 1) 100%
  );

  /* filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#3AE7DC", endColorstr="#646CDD", GradientType=1 ); */
`;

const TableContentStyled = styled(Box)`
  position: absolute;
  padding: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const ButtonWrapper = styled(Box)`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -70%);
  background-color: white;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;
