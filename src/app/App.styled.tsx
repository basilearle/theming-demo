import styled from "styled-components";

export const StyledAppLayout = styled.main`
  overflow: hidden;
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 100vh;
`;

export const StyledDrawerLayout = styled.div`
  overflow-y: scroll;
  flex-shrink: 0;
  width: 42rem;
  padding: 4rem;
  background-color: #ccc;
`;

export const StyledResultLayout = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4rem;
`;
