import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.backgroundTertiary};
  z-index: 3;
`;

export const Content = styled.div`
  padding: 60px;
`;

export const Card = styled.div`
  background: ${(props) => props.theme.colors.backgroundSeconcadry};
  margin-bottom: 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
