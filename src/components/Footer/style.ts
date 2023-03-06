import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  width: 100%;
  height: 140px;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey0);
  padding: 45px 60px;

  @media (max-width: 755px) {
    height: 310px;
    padding: 45px 0px;
  }

  position: relative;
  bottom: 0;

  @media (min-height: 916px) {
    position: fixed;
  }

  .footer-content {
    display: flex;
    width: 100%;
    max-width: 1600px;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      background-color: var(--color-grey1);
      border-radius: 4px;
    }

    @media (max-width: 755px) {
      flex-direction: column;
      gap: 60px;
    }
  }
`;
