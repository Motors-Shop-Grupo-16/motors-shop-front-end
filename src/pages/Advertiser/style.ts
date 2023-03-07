import styled from "styled-components";

export const ContainerListAdvertiser = styled.div`
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
  width: 100%;

  .footer {
    @media (min-height: 2000px) {
      position: fixed;
    }
  }

  .ContainerLists {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1600px;
    margin-top: 225px;
    margin-bottom: 120px;
    gap: 96px;

    @media (max-width: 1600px) {
      padding-left: 60px;
    }
    @media (max-width: 755px) {
      padding-left: 20px;
    }
  }
`;
