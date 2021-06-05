import styled, { css } from "styled-components";

type Button = {
  color: string;
  primary: boolean;
  onClick: MouseEvent;
};

export const ButtonContainer = styled.button<Button>`
  background-color: transparent;
  border: 1px solid ${(props) => props.color || "#FF4344"} !important;
  border-radius: 30px;

  &:hover {
    background-color: ${(props) => props.color || "#FF4344"};
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: ${props.color || "#FF4344"};
    `}
`;
