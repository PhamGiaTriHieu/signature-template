import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {TData} from './TData';
import {Typography} from '@mui/material';
import useValuesStore from '../../stores/valuesStore';
import ClipboardJS from 'clipboard';

const Table = () => {
  const value = useValuesStore((state) => state.values);

  const logoDefault =
    'https://drive.google.com/uc?export=view&id=1w4oE6OIXLUhdzYN3sLxbi6yH15K0Ykp5';

  const [imageUlr, setImageUlr] = useState(logoDefault);

  useEffect(() => {
    const imageLogo = value.logoLink;
    if (imageLogo) {
      setImageUlr(imageLogo);
      console.log('re-render');
    } else {
      setImageUlr(logoDefault);
    }
  }, [value.logoLink]);

  const clipboard = new ClipboardJS('.copy');
  console.log('clipboard: ', clipboard);

  return (
    <div>
      <button
        class="copy"
        data-clipboard-target="table-template"
        data-copy-element="table-template"
      >
        Copy to clipboard
      </button>

      <TableStyled id="table-template">
        <tbody>
          <tr>
            <TData minwidth="210px" align="top" style={{verticalAlign: 'top'}}>
              <p
                style={{marginTop: '0px', marginBottom: '0px', padding: '0px'}}
              >
                <a
                  href="https://cherry-solutions.com/"
                  target="_blank"
                  style={{width: '150px', display: 'block'}}
                  rel="noreferrer"
                >
                  <img
                    style={{width: '100%'}}
                    id="image"
                    src={imageUlr}
                    alt="logo"
                  />
                </a>
              </p>
              <p
                style={{marginBottom: '5px', marginTop: '5px', padding: '0px'}}
              >
                <span
                  id="name"
                  style={{
                    fontSize: '16pt',
                    fontFamily: 'Arial, sans-serif',
                    color: '#333333',
                  }}
                >
                  {value?.name || 'Su Ha'}
                </span>
              </p>
              <p
                style={{marginBottom: '5px', marginTop: '0px', padding: '0px'}}
              >
                <span
                  style={{
                    fontSize: '10pt',
                    fontFamily: 'Arial, sans-serif',
                    color: '#333333',
                  }}
                >
                  {value?.jobTitle || 'Senior BackEnd Developer'}
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
            <TData width="40px" borderright="1px solid #dddd" />
            <TData width="10px" />
            <TData color="#444" fontSize="13px" align="top">
              <Typography component={'span'} sx={{lineHeight: '13px'}}>
                <Typography
                  component={'span'}
                  style={{display: 'block', marginBottom: '2px'}}
                >
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
                    +84 {`${value?.phoneNumber}` || '985054xxx'}
                  </a>
                </Typography>
                <Typography
                  component={'span'}
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
                    // href="mailTo:phamgiatrihieu@cherry-solutions.com"
                    href={`mailTo:${value?.email}@cherry-solutions.com`}
                  >
                    {value?.email || 'test'}@cherry-solutions.com
                  </a>
                </Typography>
              </Typography>
              <Typography
                component={'span'}
                style={{margin: '0'}}
                fontSize="small"
              >
                <span style={{fontSize: '12px', color: '#333333'}}>
                  VP4-04, 4th Floor, Bcons Tower I, 176/1-176/3 Nguyen Van
                  Thuong, ward 25, Binh Thanh district, HCM city, Vietnam
                </span>
              </Typography>
              <Typography
                component={'span'}
                fontSize="small"
                sx={{fontSize: '12px'}}
              >
                www.cherry-solutions.com
              </Typography>
              <Typography
                component={'span'}
                fontSize="small"
                sx={{fontSize: '12px'}}
              >
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
    </div>
  );
};

export default Table;

const TableStyled = styled.table`
  min-width: 660px;
`;
