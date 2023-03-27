import styled from "styled-components";

export const Platform = styled.div`
  margin: ${props => props.theme.spacing.platform.margin};
  padding: ${props => props.theme.spacing.platform.padding};
  background-color: ${props => props.theme.palette.white};
`;

export default Platform;
