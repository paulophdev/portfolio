import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  a + a {
    margin-left: 10px;
  }

  @media (max-width: 900px) {
    order: 2;
    margin-left: auto;
    margin-right: 20px;
  }
`;
