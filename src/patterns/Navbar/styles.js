import styled from "styled-components";

export const Container = styled.div`
  div.menu-nav div {
    text-align: center;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: capitalize;
    cursor: pointer;
  }

  div.menu-nav div.active {
    color: ${(props) => props.theme.colors.textSecondary};
  }

  div.menu-nav div + div {
    margin-top: 20px;
  }

  span {
    display: none;
  }

  @media (max-width: 900px) {
    order: 3;

    span {
      display: block;
    }

    span.close-menu {
      margin-bottom: 50px;
    }

    div.menu-nav {
      background: ${(props) => props.theme.colors.backgroundTertiary};
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;

      display: ${(props) => (props.toggle ? "flex" : "none")};
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
