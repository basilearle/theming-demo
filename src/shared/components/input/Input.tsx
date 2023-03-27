import {StyledInput, StyledInputWrapper, StyledTextError, StyledTextHint} from "./Input.styled";
import {Text} from "../text/Text";
import {useAppThemeCustomStyles} from "../../theme/AppThemeCustoms";

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  hint?: string;
  error?: string;

  isTextArea?: boolean;
}

export const Input: React.FC<InputProps> = function ({
  label,
  hint,
  error,
  isTextArea = false,
  ...props
}) {
  const { customInputStyles } = useAppThemeCustomStyles();
  const overrideStyles = customInputStyles ? JSON.parse(customInputStyles) : {};

  return (
    <StyledInputWrapper>
      { label && <Text>{label}</Text> }
      <StyledInput {...props} as={isTextArea ? 'textarea' : 'input'} style={overrideStyles} />
      { error && <StyledTextError>{error}</StyledTextError> }
      { !error && hint && <StyledTextHint>{hint}</StyledTextHint>}
    </StyledInputWrapper>
  );
};

export default Input;
