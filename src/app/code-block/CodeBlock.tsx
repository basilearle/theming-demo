import {StyledCode} from "./CodeBlock.styled";
import {useTheme} from "styled-components";

const getStringifiedCode = (anything: unknown) => JSON.stringify(anything);

export interface CodeBlockProps {
  // TODO: Do we ack-chu-ally need you?
}

export const CodeBlock: React.FC<CodeBlockProps> = function () {
  const theme = useTheme();

  return (
    <StyledCode>
      {getStringifiedCode(theme)}
    </StyledCode>
  );
};

export default CodeBlock;
