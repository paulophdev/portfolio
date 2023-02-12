import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.backgroundSeconcadry};
  z-index: 3;
  padding: 60px;
  position: relative;

  a {
    text-decoration: revert;
  }

  .backHome {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.backgroundPrimary};
    position: absolute;
    bottom: 10px;
    right: 10px;
    transition: 0.2s;
  }

  .backHome:hover {
    background: ${(props) => props.theme.colors.textSecondary};
  }
`;
