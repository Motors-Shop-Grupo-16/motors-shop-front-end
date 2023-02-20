import styled from "styled-components";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 312px;
  gap: 16px;

  :hover {
    .productImageContainer {
      border-color: var(--color-brand1);
    }
  }

  .productImageContainer {
    background-color: var(--color-grey7);
    padding: 0 16px;
    border: 1px solid transparent;

    img {
      max-width: 100%;
    }
  }

  .productTitleContainer {
    overflow: hidden;
    width: 30ch;

    .productTitle {
      font-weight: bold;
      text-overflow: clip;
      white-space: nowrap;
    }
  }
`;

export default Container;
