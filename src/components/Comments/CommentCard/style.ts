import styled, { css } from "styled-components";

export const Container = styled.li<{ isOwner: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${({ isOwner }) =>
    isOwner
      ? css`
          cursor: pointer;

          :hover {
            .userContainer {
              .userCommentButton {
                opacity: 100;
                transition: 0.5s;
              }
            }
          }
        `
      : ""}

  .userContainer {
    display: flex;
    align-items: center;
    gap: 6px;

    .userCommentHistory {
      font-family: var(--font-family2);
      font-size: 10px;
      line-height: 24px;
      font-weight: 400;
      color: var(--color-grey3);
    }

    .userCommentButton {
      font-size: 18px;
      margin-left: 10px;
      color: var(--color-grey2);

      @media (min-width: 1262px) {
        opacity: 0;
        transition: 0.5s;
      }
    }
  }
`;
