import React, {useEffect, useState} from 'react';
import useValuesStore from '../../stores/valuesStore';
import {Box, Button, Stack} from '@mui/material';
import styled from 'styled-components';
import ClipboardJS from 'clipboard';
import MDModal from '../Modal/MDModal';

const Table = () => {
  const value = useValuesStore((state) => state.values);
  const [showModal, setShowModal] = useState(false);

  const logoDefault = 'https://i.imgur.com/1nNiyqS.png';

  const [imageUlr, setImageUlr] = useState(logoDefault);

  useEffect(() => {
    const imageLogo = value.logoLink;
    if (imageLogo) {
      setImageUlr(imageLogo);
    } else {
      setImageUlr(logoDefault);
    }
  }, [value.logoLink]);

  const tableDom = document.querySelector('#table-template');
  const textNode = tableDom?.outerHTML;

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(textNode)
        .then(() => {
          // console.log(`Copied text to clipboard: ${textNode}`);
          // alert(`Copied text to clipboard: ${textNode}`);
        })
        .catch((error) => {
          console.error(`Could not copy text: ${error}`);
        });
    } else {
      window.prompt('Copy to clipboard: Ctrl+C, Enter', textNode);
    }
  };

  function copyText() {
    const clipboard = new ClipboardJS('.copyText');
    clipboard.on('success', function (e) {
      e.clearSelection();
    });
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Wrapper>
      <table
        id="table-template"
        style={{
          minWidth: 660,
          fontSize: '10pt',
          fontFamily: 'Arial, sans-serif',
        }}
        cellSpacing={0}
        cellPadding={0}
        border={0}
      >
        <tbody>
          <tr>
            <td
              style={{
                minWidth: 210,
                fontSize: '11pt',
                fontFamily: 'Arial, sans-serif',
                verticalAlign: 'top',
              }}
              valign="top"
            >
              <p style={{marginTop: 0, marginBottom: 0, padding: 0}}>
                <a
                  href="https://cherry-solutions.com/"
                  target="_blank"
                  style={{width: 150, display: 'block'}}
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
              <p style={{marginBottom: 5, marginTop: 5, padding: 0}}>
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
              <p style={{marginBottom: 6, marginTop: 0, padding: 0}}>
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
                  marginBottom: 0,
                  marginTop: 6,
                  padding: 0,
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '10pt',
                }}
              >
                Cherry Solutions Vietnam Co.,Ltd.
              </p>
            </td>
            <td style={{width: 20, borderRight: '1px solid #dddd'}} />
            <td style={{width: 10}} />
            <td
              style={{
                fontSize: '10pt',
                color: '#444444',
                fontFamily: 'Arial, sans-serif',
                verticalAlign: 'top',
              }}
              valign="top"
            >
              <table
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '9pt',
                  margin: 0,
                  borderSpacing: '0 4px',
                }}
                cellSpacing={0}
                cellPadding={0}
                border={0}
              >
                <tbody>
                  <tr
                    style={{
                      fontSize: '11.5pt',
                      color: '#333333',
                    }}
                  >
                    <td style={{margin: 0, padding: '0 6spx 0 0'}}>Mobile:</td>
                    <td>
                      <a
                        id="phoneNumber"
                        style={{
                          fontSize: '11.5pt',
                          color: '#333333',
                          textDecoration: 'none',
                          display: 'inline-block',
                        }}
                        href="tel:"
                      >
                        +84 {`${value?.phoneNumber}` || '985054xxx'}
                      </a>
                    </td>
                  </tr>

                  <tr style={{fontSize: '11.5pt', color: '#333333'}}>
                    <td style={{margin: 0, padding: '0 6spx 0 0'}}>Email:</td>
                    <td>
                      <a
                        id="email"
                        style={{
                          fontSize: '11.5pt',
                          color: '#333333',
                          textDecoration: 'none',
                          display: 'inline-block',
                        }}
                        href={`mailTo:${value?.email}@cherry-solutions.com`}
                      >
                        {value?.email || 'test'}@cherry-solutions.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p style={{margin: 0}}>
                <span style={{fontSize: '8.7pt', color: '#333333'}}>
                  VP4-04, 4th Floor, Bcons Tower I, 176/1-176/3 Nguyen Van
                  Thuong, ward 25, Binh Thanh district, HCM city, Vietnam.
                </span>
              </p>
              <p style={{fontSize: '8.7pt', marginTop: 5, marginBottom: 0}}>
                www.cherry-solutions.com
              </p>
              <p style={{marginTop: 5, marginBottom: 0}}>
                <span style={{fontSize: '8.7pt', color: '#333333'}}>
                  Make all Finance <span style={{color: '#ec1c24'}}>E</span>
                  asier, Make all Works
                  <span style={{color: '#ec1c24'}}>F</span>un
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <ButtonWrapper>
        <Stack
          direction="row"
          spacing={3}
          sx={{width: '100%'}}
          justifyContent="center"
        >
          <ButtonStyled
            className="copyText"
            data-clipboard-target="#table-template"
            data-copy-element="#table-template"
            onClick={() => {
              copyText();
              setShowModal(true);
            }}
          >
            Click to Copy
          </ButtonStyled>

          <ButtonStyled
            onClick={() => {
              copyToClipboard();
              setShowModal(true);
            }}
          >
            Click to copy source template
          </ButtonStyled>
        </Stack>
      </ButtonWrapper>

      <MDModal
        isOpen={showModal}
        onClose={handleCloseModal}
        description="Copy Successfully!"
      ></MDModal>
    </Wrapper>
  );
};

export default Table;

const Wrapper = styled.div`
  position: relative;
`;

const ButtonWrapper = styled(Box)`
  position: absolute;
  min-width: 600px;
  bottom: -50%;
  left: 50%;
  transform: translate(-50%);
  border-radius: 8px;
`;

const ButtonStyled = styled.button`
  background: rgb(51, 71, 91);
  height: 30px;
  padding: 4px 8px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background: rgba(51, 71, 91, 0.8);
  }
`;
