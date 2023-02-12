import styled from "styled-components";
import Perfil from "../../assets/img/home.jpg";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.backgroundSeconcadry};
  z-index: 3;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${Perfil}) center no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  h3,
  p,
  a {
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  }

  h1 {
    margin: 20px 0;
    font-size: 3em;
  }

  h3 {
    font-size: 1.7em;
  }

  p {
    font-size: 1.3em;
  }

  a {
    margin-top: 40px;
    color: ${(props) => props.theme.colors.textSecondary};
    border: 2px solid currentColor;
    font-weight: 500;
    width: 170px;
    height: 50px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    text-align: center;

    h1 {
      font-size: 2.2em;
    }

    p {
      font-size: 1em;
    }
  }
`;
