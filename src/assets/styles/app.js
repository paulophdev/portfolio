import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;

  grid-template-columns: 1fr 4fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 20vh 80vh;
  }
`;
