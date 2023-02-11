import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div.img-cover {
    width: 15vw;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    border-radius: 50%;
    border: 8px solid ${(props) => props.theme.colors.backgroundTertiary};
    object-fit: contain;
  }

  @media (max-width: 900px) {
    flex-direction: row;

    div.img-cover {
      width: 70px;
      margin-bottom: 0;
      margin-right: 10px;
    }

    img {
      border: 5px solid ${(props) => props.theme.colors.backgroundTertiary};
    }
  }
`;
