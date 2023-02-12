import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr 4fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 20vh 80vh;
  }
`;

export const Content = styled.div``;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 110px;

  h1 {
    font-size: 7em;
    text-transform: uppercase;
    opacity: 0.05;
  }

  p {
    position: absolute;
    font-size: 2em;
    font-weight: bold;
    letter-spacing: 2px;
  }

  p:after {
    display: block;
    content: "";
    background: ${(props) => props.theme.colors.textSecondary};
    height: 4px;
    width: 130px;
    margin: 10px auto 0 auto;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 5em;
    }

    p {
      font-size: 1.3em;
    }
  }

  @media (max-width: 470px) {
    h1 {
      font-size: 4em;
    }

    p {
      font-size: 1em;
    }
  }
`;
