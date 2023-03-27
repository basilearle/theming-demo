import {PropsWithChildren} from "react";
import {StyledButton} from "./Button.styled";

export type ButtonVariant = 'default' | 'primary' | 'accent';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
  isLink?: boolean;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = function ({
  variant = 'default',
  isLink = false,
  children,
  ...props
}) {

  return (
    <StyledButton
      as={isLink ? 'a' : 'button'}
      variant={variant}
      {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
