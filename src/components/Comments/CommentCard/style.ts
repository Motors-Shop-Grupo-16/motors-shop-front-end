import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .userContainer {
    display: flex;
    align-items: center;
    gap: 8px;

    .userCommentHistory {
      font-family: var(--font-family2);
      font-size: 12px;
      line-height: 24px;
      font-weight: 400;
      color: var(--color-grey3);
    }
  }
`;
