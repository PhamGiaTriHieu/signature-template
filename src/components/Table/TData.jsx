import React from 'react';
import styled from 'styled-components';

const TData = (props) => {
  const {
    minWidth,
    verticalAlign,
    align,
    width,
    border_right,
    color,
    fontSize,
    children,
    ...rest
  } = props;
  return (
    <TbodyStyled
      verticalAlign={verticalAlign}
      minWidth={minWidth}
      align={align}
      width={width}
      border_right={border_right}
      color={color}
      fontSize={fontSize}
      {...rest}
    >
      {children}
    </TbodyStyled>
  );
};

export {TData};

const TbodyStyled = styled.td`
  /* min-width: ${(props) => props.minWidth}; */
  vertical-align: ${(props) => props.verticalAlign};
  /* width: ${(props) => props.width}; */
  width: ${(props) => console.log(props.width)};
  border-right: ${(props) => props.border_right};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;
