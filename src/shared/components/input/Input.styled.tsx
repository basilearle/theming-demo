import styled from "styled-components";
import {Text} from "../text/Text";

export const StyledInputWrapper = styled.div`

`;

export const StyledInput = styled.input`
  width: 100%;
  max-width: 40rem;
  height: 5rem;
  margin-bottom: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  font-size: 2rem;
  text-indent: 1rem;
  letter-spacing: .5px;
`;

export const StyledTextHint = styled(Text)`
  color: darkgrey;
`;

export const StyledTextError = styled(Text)`
  color: darkred;
`;
