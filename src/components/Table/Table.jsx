import React from 'react';
import styled from 'styled-components';
import {TData} from './TData';
import {Typography} from '@mui/material';

const Table = () => {
  return (
    <TableStyled cellSpacing={0} cellPadding={0} border={0}>
      <tbody>
        <tr>
          <TData minWidth="210px" verticalAlign="top" align="top">
            <p style={{marginTop: '0px', marginBottom: '0px', padding: '0px'}}>
              <a
                href="https://cherry-solutions.com/"
                target="_blank"
                style={{width: '150px', display: 'block'}}
                rel="noreferrer"
              >
                <img
                  style={{width: '100%'}}
                  id="image"
                  src=" https://drive.google.com/uc?export=view&id=1w4oE6OIXLUhdzYN3sLxbi6yH15K0Ykp5"
                  alt="logo"
                />
              </a>
            </p>
            <p style={{marginBottom: '5px', marginTop: '5px', padding: '0px'}}>
              <span
                id="name"
                style={{
                  fontSize: '16pt',
                  fontFamily: 'Arial, sans-serif',
                  color: '#333333',
                }}
              >
                name
              </span>
            </p>
            <p style={{marginBottom: '5px', marginTop: '0px', padding: '0px'}}>
              <span
                style={{
                  fontSize: '10pt',
                  fontFamily: 'Arial, sans-serif',
                  color: '#333333',
                }}
              >
                Frontend Developer
              </span>
            </p>
            <p
              style={{
                whiteSpace: 'nowrap',
                marginBottom: '0px',
                marginTop: '5px',
                padding: '0px',
                fontFamily: 'Arial, sans-serif',
                fontSize: '10pt',
              }}
            >
              Cherry Solutions Vietnam Co.,Ltd.
            </p>
          </TData>
          <TData width="40px" border_right="1px solid #dddd" />
          <TData width="10px" />
          <TData color="#444" fontSize="13px" verticalAlign="top" align="top">
            <Typography sx={{lineHeight: '13px'}}>
              <Typography style={{display: 'block', marginBottom: '2px'}}>
                <span
                  style={{
                    fontSize: '13pt',
                    color: '#333333',
                    display: 'inline-block',
                    width: '60px',
                  }}
                >
                  mobile
                </span>
                <a
                  id="phoneNumber"
                  style={{
                    fontSize: '13pt',
                    color: '#333333',
                    textDecoration: 'none',
                  }}
                  href="tel:"
                >
                  +84 985054xxx
                </a>
              </Typography>
              <Typography
                style={{display: 'block'}}
                sx={{
                  lineHeight: '13px',
                  marginBottom: '10px',
                  marginTop: '4px',
                }}
              >
                <span
                  style={{
                    fontSize: '13pt',
                    color: '#333333',
                    display: 'inline-block',
                    width: '60px',
                  }}
                >
                  email
                </span>
                <a
                  id="email"
                  style={{
                    fontSize: '13pt',
                    color: '#333333',
                    textDecoration: 'none',
                  }}
                  href="mailTo:phamgiatrihieu@cherry-solutions.com"
                >
                  test@cherry-solutions.com
                </a>
              </Typography>
            </Typography>
            <Typography style={{margin: '0'}} fontSize="small">
              <span style={{fontSize: '12px', color: '#333333'}}>
                VP4-04, 4th Floor, Bcons Tower I, 176/1-176/3 Nguyen Van Thuong,
                ward 25, Binh Thanh district, HCM city, Vietnam
              </span>
            </Typography>
            <Typography fontSize="small" sx={{fontSize: '12px'}}>
              www.cherry-solutions.com
            </Typography>
            <Typography fontSize="small" sx={{fontSize: '12px'}}>
              <span style={{color: '#333333'}}>
                Make all Finance <span style={{color: '#ec1c24'}}>E</span>
                asier, Make all Works
                <span style={{color: '#ec1c24'}}>F</span>un
              </span>
            </Typography>
          </TData>
        </tr>
      </tbody>
    </TableStyled>
  );
};

export default Table;

const TableStyled = styled.table`
  min-width: 660px;
`;
