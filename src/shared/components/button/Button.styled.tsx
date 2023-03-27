import styled, {css, CSSProp} from "styled-components";

import {ButtonVariant} from "./Button";

export const StyledButtonDefault = css`
  background-color: inherit;
  color: ${props => props.theme.palette.primary}
`;

export const StyledButtonPrimary = css`
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.white};
`;

export const StyledButtonAccent = css`
  background-color: ${props => props.theme.palette.secondary};
  color: ${props => props.theme.palette.primary};
`;

const ButtonAppearanceStyles: Record<ButtonVariant, CSSProp> = {
  default: StyledButtonDefault,
  primary: StyledButtonPrimary,
  accent: StyledButtonAccent,
}

export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: 0;
  padding: 1.5rem 2.5rem;
  font-size: 2rem;
  letter-spacing: .5px;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;
  cursor: pointer;
  
  ${({ variant }) => ButtonAppearanceStyles[variant]};
`;
