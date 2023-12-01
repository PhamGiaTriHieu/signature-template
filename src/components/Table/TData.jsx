import React from 'react';
import styled from 'styled-components';

const TData = (props) => {
  const {
    minwidth,
    verticalAlign,
    align,
    width,
    borderright,
    color,
    fontSize,
    children,
    ...rest
  } = props;
  return (
    <TbodyStyled
      verticalAlign={verticalAlign}
      minwidth={minwidth}
      align={align}
      width={width}
      borderright={borderright}
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
  min-width: ${(props) => props.minwidth};
  vertical-align: ${(props) => props.verticalAlign};
  width: ${(props) => props.width};
  border-right: ${(props) => props.borderright};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;
