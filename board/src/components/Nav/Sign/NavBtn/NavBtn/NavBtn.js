import React from 'react';
import styled from 'styled-components';

const NavBtn = props => {
  const btn = props;

  const btnName = btn.btnName;
  const width = btn.width;
  const height = btn.height;
  const fontSize = btn.fontSize;
  const borderColor = btn.borderColor;
  const hoverColor = btn.hoverColer;
  const onClick = btn.onClick;
  return (
    <Container
      width={width}
      height={height}
      fontSize={fontSize}
      borderColor={borderColor}
      hoverColor={hoverColor}
      onClick={onClick}
    >
      {btnName}
    </Container>
  );
};

export default NavBtn;

const Container = styled.button`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin: 5px;
  font-size: ${props => props.fontSize}px;
  background-color: transparent;
  border: 2px solid ${props => props.borderColor};
  border-radius: 5px;
  transition: 0.2s;
  &:hover {
    background-color: ${props => props.borderColor};
    transition: 0.2s;
  }
`;
