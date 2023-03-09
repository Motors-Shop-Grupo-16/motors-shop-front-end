import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 277px;
  background: var(--color-brand1);
  padding: 0 16px;

  button {
    &:hover {
      background: var(--color-brand4);
    }
  }

  .userProfileContent {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1240px;
    min-height: 327px;
    border-radius: 4px;
    background: var(--color-grey10);
    gap: 24px;
    position: relative;
    top: 135px;

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
      align-items: center;
      gap: 9px;
      .userProfileContentUserNameAdvertiser {
        padding: 4px 8px;
        background: var(--color-brand4);
      }
    }

    .userProfileContentDescription {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;
