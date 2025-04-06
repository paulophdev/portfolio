import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.backgroundTertiary};
  z-index: 3;
`;

export const Content = styled.div`
  padding: 60px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  div.card {
    width: 45%;
    display: flex;
    margin-bottom: 40px;
  }

  div.card div.card-icon {
    padding: 10px;
  }

  div.card div.card-icon div {
    background-color: ${(props) => props.theme.colors.backgroundSeconcadry};
    width: 60px;
    height: 60px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.card div.card-icon div svg {
    color: ${(props) => props.theme.colors.textSecondary};
  }

  div.card h1 {
    font-size: 1.2em;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  div.card p {
    color: hsla(0, 0%, 100%, 0.5);
  }

  div.card-body {
    padding-left: 10px;
  }

  @media (max-width: 750px) {
    div.card {
      width: 100%;
    }
  }
`;
