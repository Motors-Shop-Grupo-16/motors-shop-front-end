import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 277px;
  background: var(--color-brand1);
  padding: 0 16px;

  .userProfileContent {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1240px;
    min-height: 327px;
    background: var(--color-grey10);
    gap: 24px;
    position: relative;
    top: 75px;

    padding: 44px 49px;
    @media (max-width: 755px) {
      padding: 40px 29px;
      top: 135px;
    }

    .productUserImage {
      width: 104px;
      height: 104px;
      font-size: 36px;
    }

    .userProfileContentUserName {
      display: flex;
      gap: 9px;
      .userProfileContentUserNameAdvertiser {
        padding: 4px 8px;
        background: var(--color-brand4);
      }
    }
  }
`;
