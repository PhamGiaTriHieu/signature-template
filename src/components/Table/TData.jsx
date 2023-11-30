import React from 'react';
import styled from 'styled-components';

const TData = (props) => {
  const {
    minWidth,
    verticalAlign,
    align,
    width,
    borderRight,
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
      borderRight={borderRight}
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
  min-width: ${(props) => props.minWidth};
  vertical-align: ${(props) => props.verticalAlign};
  width: ${(props) => props.width};
  border-right: ${(props) => props.borderRight};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;
