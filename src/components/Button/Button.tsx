import React, { ReactNode, MouseEvent } from "react";

import styled, { css } from "styled-components";

type Props = {
  children: ReactNode;
  color: string;
  hoverColor: string;
  primary: boolean;
  defaultCursor?: boolean;
  height: string;
  borderWidth?: number;
  onClick?: (e?: React.MouseEvent) => void;
};

const ButtonContainer = styled.button<Props>`
  background-color: transparent;
  border: ${(props) => props.borderWidth || 1}px solid
    ${(props) => props.color || "#FF4344"} !important;
  border-radius: 30px;
  cursor: ${(props) => (props.defaultCursor ? "auto" : "pointer")} !important;
  transition: 0.3s ease-in-out;
  height: ${(props) => props.height || "auto"};
  &:hover {
    background-color: ${(props) => props.hoverColor || "#FF4344"};
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: ${props.color || "#FF4344"};
    `}
`;

const Button = (props: Props) => {
  return (
    <ButtonContainer
      color={props.color}
      hoverColor={props.hoverColor}
      primary={props.primary}
      height={props.height}
      borderWidth={props.borderWidth}
      onClick={props.onClick}
      defaultCursor={props.defaultCursor}
    >
      {props.children}
    </ButtonContainer>
  );
};

export default Button;
