import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.backgroundPrimary};
  padding: 20px 0;
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: row;
    padding: 20px;
  }
`;
