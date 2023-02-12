import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.backgroundSeconcadry};
  z-index: 3;
  padding-bottom: 60px;
`;

export const Content = styled.div`
  padding: 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CardExt = styled.div`
  background: ${(props) => props.theme.colors.backgroundPrimary};
  width: 48%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  span {
    background: ${(props) => props.theme.colors.textSecondary};
    height: 25px;
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  h2 {
    letter-spacing: 1px;
  }

  p.ext-sub {
    color: ${(props) => props.theme.colors.textSecondary} !important;
    margin-bottom: 15px;
  }

  p {
    color: hsla(0, 0%, 100%, 0.5);
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const TitleSkill = styled.h2`
  margin-left: 60px;
`;

export const ContentSkils = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 60px 0 60px;
`;

export const CardSkils = styled.div`
  width: 48%;

  .skillsHead {
    display: flex;
    justify-content: space-between;
  }

  .skillsBody {
    height: 8px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: ${(props) => props.theme.colors.backgroundPrimary};
    border-radius: 5px;
  }

  .skillsBody div.skillsBarr {
    height: 8px;
    background: ${(props) => props.theme.colors.textSecondary};
  }
`;

export const ButtonCV = styled.a`
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
  margin: 60px auto 0 auto;
`;
