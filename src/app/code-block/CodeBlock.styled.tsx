// TODO: The `code` block probably has some pretty cool style-ability
import styled from "styled-components";

export const StyledCode = styled.code`
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #ddd; // TODO: palette
  border-left: .5rem solid ${props => props.theme.palette.primary};
  background: #f4f4f4; // TODO: palette
  color: ${props => props.theme.palette.secondary};
  font-family: monospace;
  font-size: ${props => props.theme.typography.text.fontSize};
  line-height: 1.75;
  border-radius: .75rem;

  // I have no idea about these properties
  // but they were in stack overflow, so YEET.
  page-break-inside: avoid;
  word-wrap: break-word;
`;
