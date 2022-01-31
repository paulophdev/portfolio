import styled from "styled-components";

export const Container = styled.header`
  background-color: #202024;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 30px;

  @media (max-width: 320px) {
    div img {
      width: 40px !important;
    }
  }

  @media (max-width: 370px) {
    div img {
      width: 80px !important;
    }
  }

  @media (max-width: 400px) {
    div img {
      width: 110px;
    }
  }

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

export const ContentNav = styled.nav`
  height: 100%;
  display: flex;

  a {
    display: flex;
    align-items: center;
    height: 100%;
    color: #737380;
    text-decoration: none;
    font-weight: 500;
    border-bottom: 4px solid transparent;
  }

  a + a {
    margin-left: 20px;
  }

  a.active {
    font-weight: 700;
    color: #fff;
  }

  a:nth-child(1).active {
    border-color: #3f82e2;
  }

  a:nth-child(2).active {
    border-color: #a3eb88;
  }

  a:nth-child(3).active {
    border-color: #d64933;
  }

  @media (max-width: 400px) {
    a + a {
      margin-left: 10px;
    }
  }

  @media (max-width: 600px) {
    a {
      font-size: 14px;
    }
  }
`;

export const ContentLinks = styled.div`
  svg {
    transition: 0.3s;
  }

  a + a {
    margin-left: 10px;
  }

  a svg:hover {
    color: #fff !important;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;
