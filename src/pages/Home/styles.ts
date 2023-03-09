import styled from "styled-components";

export const ContainerHomePage = styled.main`
  animation: fadeIn 0.5s;
  min-height: 100vh;
  background: var(--color-whiteFixed);

  .footer {
    @media (min-height: 2000px) {
      position: fixed;
    }
  }
`;

export const ContainerListHome = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 1600px;
  gap: 60px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 60px;
  margin-bottom: 120px;
  gap: 200px;

  .home-auction {
    margin-top: 60px;
  }

  @media (max-width: 755px) {
    margin: auto;
    margin-left: 12px;
    gap: 67px;
    margin-bottom: 120px;
  }
`;
