import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.backgroundSeconcadry};
  z-index: 3;
  padding: 60px;

  a {
    text-decoration: revert;
  }
`;
