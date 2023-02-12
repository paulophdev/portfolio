import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.backgroundSeconcadry};
  z-index: 3;
`;

export const Content = styled.div`
  display: flex;
  padding: 20px;

  .firstContent {
    width: 70%;
    padding: 20px;
  }

  .secondContent {
    width: 30%;
    padding: 20px 0;
  }

  .secondContent div {
    margin-top: 15px;
  }

  .secondContent div + div {
    border-top: 1px solid hsla(0, 0%, 100%, 0.2);
    padding-top: 15px;
  }

  .firstTitle {
    font-size: 1.3em;
    font-weight: bold;
  }

  .firstTitle span {
    color: ${(props) => props.theme.colors.textSecondary};
  }

  p + p {
    color: hsla(0, 0%, 100%, 0.5);
    font-size: 1.1em;
  }

  button {
    color: ${(props) => props.theme.colors.textPrimary};
    background: ${(props) => props.theme.colors.textSecondary};
    border: 2px solid ${(props) => props.theme.colors.textSecondary};
    font-weight: 500;
    width: 170px;
    height: 50px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    .firstContent {
      width: 100%;
    }

    .secondContent {
      width: 100%;
    }
  }
`;

export const ContentBody = styled.div`
  display: flex;
  margin-top: 40px;
  padding-bottom: 40px;

  div {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div p {
    font-size: 2.5em;
    font-weight: bold;
    color: hsla(0, 0%, 100%, 0.5);
  }

  div span {
    color: hsla(0, 0%, 100%, 0.5);
    font-weight: bold;
  }

  div + div {
    border-left: 1px solid hsla(0, 0%, 100%, 0.2);
  }

  @media (max-width: 600px) {
    div p {
      font-size: 1em;
    }

    div span {
      text-align: center;
    }
  }
`;
