import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  margin-top: 50px;

  @media (max-width: 575.98px) {
    width: calc(100vw - 40px);
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    width: calc(100vw - 10%);
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: calc(100vw - 10%);
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: calc(100vw - 20%);
  }

  @media (min-width: 1200px) {
    width: calc(100vw - 20%);
  }
`;

export const Title = styled.h1`
  span {
    font-size: 16px;
    color: #737380;
  }

  @media (max-width: 575.98px) {
    span {
      font-size: 12px;
    }
  }
`;

export const Card = styled.div`
  background-color: #202024;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const BlockquoteGeral = styled.blockquote`
  border-left: 4px solid #737380;
  font-style: italic;
  color: #737380;
  margin: 10px 0;
  padding: 10px;

  cite {
    font-size: 12px;
  }
`;

export const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  margin: 20px 0 20px 0;
`;

export const Tag = styled.span`
  margin-right: 10px;
  padding: 5px 10px;
  background-color: #121214;
  border-radius: 3px;
  margin-bottom: 20px;
`;
